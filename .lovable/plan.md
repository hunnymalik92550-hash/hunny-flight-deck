# Replace resume and align internship details

## Changes
- Upload the attached PDF as the portfolio’s new downloadable resume and replace the current DOCX asset reference.
- Keep the existing Resume buttons in the Hero, navigation, and Contact sections, but have all three download the new PDF through the shared resume URL.
- Update the experience entry to match the new resume exactly:
  - Role: Intern
  - Company: S O Infotech (P) Ltd.
  - Dates: 01 Jun – 30 Jun
  - Location: Noida, Uttar Pradesh
  - Guidance: Mr. Kunal, Senior Python Developer
  - Replace the current bullets with the three statements from the updated resume, preserving their meaning without adding unsupported work claims.
- Display the mentor guidance clearly in the experience timeline.

## Validation
- Confirm the new PDF link responds correctly from each Resume button.
- Confirm the experience timeline shows the updated role, company, dates, mentor, and bullets.
- Check the page at desktop and mobile sizes for layout issues.

## Technical details
- Store the PDF through the existing project asset flow and update the central `RESUME_URL`, so every download link remains consistent.
- Remove the obsolete DOCX pointer from the current source after the PDF is connected; the previously uploaded file itself will not be deleted from storage, preserving older deployments.
