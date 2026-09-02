import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line, Environment, Lightformer } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function UAV({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const dt = Math.min(delta, 0.05);
    if (!reduced) {
      g.rotation.y += dt * 0.35;
      g.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.12;
      g.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.06;
    }
  });

  const body = <meshStandardMaterial color="#cfd8e3" metalness={0.55} roughness={0.32} />;
  const dark = <meshStandardMaterial color="#1b2433" metalness={0.4} roughness={0.5} />;
  const accent = <meshStandardMaterial color="#38c8e0" emissive="#38c8e0" emissiveIntensity={1.6} />;

  return (
    <group ref={group} rotation={[0.15, 0.6, 0]} scale={0.95}>
      {/* fuselage */}
      <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.22, 1.5, 6, 16]} />
        {body}
      </mesh>
      {/* nose cone */}
      <mesh position={[1.05, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.22, 0.45, 16]} />
        {dark}
      </mesh>
      {/* main wing */}
      <mesh position={[-0.05, 0.02, 0]} castShadow>
        <boxGeometry args={[0.52, 0.05, 3.6]} />
        {body}
      </mesh>
      {/* wing tips */}
      {[-1.8, 1.8].map((z) => (
        <mesh key={z} position={[-0.05, 0.16, z]}>
          <boxGeometry args={[0.4, 0.28, 0.05]} />
          {dark}
        </mesh>
      ))}
      {/* tail boom + stabilisers */}
      <mesh position={[-1.15, 0, 0]}>
        <boxGeometry args={[0.7, 0.06, 0.06]} />
        {dark}
      </mesh>
      <mesh position={[-1.45, 0, 0]}>
        <boxGeometry args={[0.32, 0.04, 1.1]} />
        {body}
      </mesh>
      <mesh position={[-1.45, 0.26, 0]}>
        <boxGeometry args={[0.32, 0.5, 0.04]} />
        {body}
      </mesh>
      {/* rotor booms */}
      {([
        [0.55, 1.0],
        [0.55, -1.0],
        [-0.55, 1.0],
        [-0.55, -1.0],
      ] as [number, number][]).map(([x, z]) => (
        <group key={`${x}${z}`} position={[x, 0.08, z]}>
          <mesh>
            <cylinderGeometry args={[0.05, 0.05, 0.22, 10]} />
            {dark}
          </mesh>
          <mesh position={[0, 0.14, 0]}>
            <cylinderGeometry args={[0.42, 0.42, 0.012, 20]} />
            <meshStandardMaterial
              color="#38c8e0"
              transparent
              opacity={0.28}
              emissive="#38c8e0"
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>
      ))}
      {/* nav lights */}
      <mesh position={[-0.05, 0.1, 1.85]}>
        <sphereGeometry args={[0.055, 10, 10]} />
        {accent}
      </mesh>
      <mesh position={[-0.05, 0.1, -1.85]}>
        <sphereGeometry args={[0.055, 10, 10]} />
        <meshStandardMaterial color="#e8b45a" emissive="#e8b45a" emissiveIntensity={1.6} />
      </mesh>
    </group>
  );
}

function Trajectory({ reduced }: { reduced: boolean }) {
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(-6, -1.6, 2.5),
          new THREE.Vector3(-2.6, 0.6, -1.5),
          new THREE.Vector3(1.4, 1.6, 1.8),
          new THREE.Vector3(5.4, -0.4, -2.2),
        ],
        false,
        "catmullrom",
        0.5,
      ),
    [],
  );
  const points = useMemo(() => curve.getPoints(160), [curve]);
  const marker = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!marker.current || reduced) return;
    const t = (state.clock.elapsedTime * 0.08) % 1;
    marker.current.position.copy(curve.getPointAt(t));
  });

  return (
    <group>
      <Line points={points} color="#38c8e0" lineWidth={1} transparent opacity={0.35} dashed={false} />
      <mesh ref={marker}>
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshBasicMaterial color="#e8b45a" />
      </mesh>
    </group>
  );
}

function Particles({ count = 320, reduced }: { count?: number; reduced: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 26;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18 - 4;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current || reduced) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.012;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} color="#9fd8e8" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function Markers() {
  return (
    <group>
      {([
        [-3.2, 1.3, -1],
        [3.4, -1.2, -1.6],
        [2.4, 1.8, -2.4],
      ] as [number, number, number][]).map(([x, y, z]) => (
        <mesh key={`${x}${y}`} position={[x, y, z]} rotation={[0, 0, Math.PI / 4]}>
          <ringGeometry args={[0.16, 0.19, 4]} />
          <meshBasicMaterial color="#38c8e0" transparent opacity={0.45} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}

function CameraRig({ reduced }: { reduced: boolean }) {
  const { camera, pointer } = useThree();
  useFrame((_, delta) => {
    if (reduced) return;
    const k = 1 - Math.exp(-2.5 * Math.min(delta, 0.05));
    camera.position.x += (pointer.x * 1.6 - camera.position.x) * k;
    camera.position.y += (1.1 + pointer.y * -0.8 - camera.position.y) * k;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function AerospaceScene({ reduced = false }: { reduced?: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 1.1, 7.4], fov: 48 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} color="#dceaf5" />
      <pointLight position={[-5, -2, 3]} intensity={22} color="#38c8e0" distance={14} />
      <Environment>
        <Lightformer intensity={1.6} position={[0, 5, 2]} scale={[10, 6, 1]} color="#9ec9e8" />
        <Lightformer
          intensity={1}
          color="#4aa8c4"
          position={[-5, 1, -1]}
          rotation-y={Math.PI / 2}
          scale={[16, 2, 1]}
        />
      </Environment>

      <UAV reduced={reduced} />
      <Trajectory reduced={reduced} />
      <Particles reduced={reduced} />
      <Markers />

      <gridHelper args={[40, 40, "#2f6d80", "#22485a"]} position={[0, -2.6, 0]} />
      <CameraRig reduced={reduced} />
    </Canvas>
  );
}
