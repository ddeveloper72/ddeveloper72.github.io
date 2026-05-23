📄 Image & Logo Usage Instructions for GitHub Copilot
Purpose: Ensure that all logos, technology badges, and project images added to this portfolio site follow consistent formatting, accessibility, and brand‑safe usage.

1. ✔️ General Rules for Adding Images
Always use Astro’s built‑in <Image /> component when possible.

Store all images in:

Code
/src/assets/images/
Use descriptive, lowercase filenames with hyphens:

Code
hl7-fhir-logo.png
openehr-logo.svg
muhealth-eu-badge.png
xtehr-logo.svg
Never modify logos (no recolouring, cropping, stretching).

2. ✔️ Markdown Pattern for Images (for README or content pages)
Use this pattern when inserting images in Markdown:

md
<!-- Technology / Standard Logo -->
<p align="left">
  <img src="/src/assets/images/hl7-fhir-logo.png" alt="HL7 FHIR Logo" width="120" />
</p>
For multiple logos in a row:

md
<p align="left">
  <img src="/src/assets/images/hl7-fhir-logo.png" alt="HL7 FHIR Logo" width="110" />
  <img src="/src/assets/images/openehr-logo.svg" alt="openEHR Logo" width="110" />
  <img src="/src/assets/images/muhealth-eu-badge.png" alt="MuHealth@EU Logo" width="110" />
  <img src="/src/assets/images/xtehr-logo.svg" alt="Xt-EHR Logo" width="110" />
</p>
3. ✔️ Astro Component Pattern for Logos
When adding logos inside Astro components, Copilot should follow this structure:

astro
---
import Image from "astro:assets";
import hl7Logo from "../assets/images/hl7-fhir-logo.png";
import openehrLogo from "../assets/images/openehr-logo.svg";
---

<div class="tech-logo-grid">
  <Image src={hl7Logo} alt="HL7 FHIR Logo" width={120} />
  <Image src={openehrLogo} alt="openEHR Logo" width={120} />
</div>
CSS utility class (Copilot should reuse this):

css
.tech-logo-grid {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
}
4. ✔️ Accessibility Requirements
Copilot must always:

Provide meaningful alt="" text

Avoid decorative-only images unless explicitly marked

Use width attributes to maintain consistent sizing

Never embed text inside images unless unavoidable

5. ✔️ Brand‑Safe Usage Rules
Copilot must follow these rules when inserting logos:

Allowed
Display logos in a “Technologies I Use” or “Projects I Contribute To” section

Use logos for:

HL7 FHIR

openEHR

MuHealth@EU

Xt‑EHR

Use logos only for descriptive purposes

Not Allowed
Do not imply endorsement

Do not place logos in the site header or as part of personal branding

Do not recolour or distort logos

Do not use commercial vendor logos without permission

Required Disclaimer (Copilot should insert when logos appear)
md
> **Trademark Notice:**  
> Logos are trademarks of their respective owners and are used here for descriptive purposes only.  
> This site is not affiliated with or endorsed by HL7®, openEHR, the European Commission, or any related programme.
6. ✔️ Copilot Behaviour Instructions
When Copilot generates new sections or components involving images:

Prefer SVG when available

Use consistent widths (100–140px for logos)

Place new images in /src/assets/images/

Auto‑generate import statements for Astro components

Use semantic grouping (<section>, <figure>, <figcaption>) where appropriate

Suggest alt text based on the organisation or standard name

7. ✔️ Example: “Technologies & Standards” Section
Copilot should follow this pattern when generating a new section:

astro
---
import Image from "astro:assets";
import hl7Logo from "../assets/images/hl7-fhir-logo.png";
import openehrLogo from "../assets/images/openehr-logo.svg";
import muhealthLogo from "../assets/images/muhealth-eu-badge.png";
import xtehrLogo from "../assets/images/xtehr-logo.svg";
---

<section class="tech-section">
  <h2>Technologies & Standards</h2>
  <p>I work extensively with open standards for health interoperability.</p>

  <div class="tech-logo-grid">
    <Image src={hl7Logo} alt="HL7 FHIR" width={120} />
    <Image src={openehrLogo} alt="openEHR" width={120} />
    <Image src={muhealthLogo} alt="MuHealth@EU" width={120} />
    <Image src={xtehrLogo} alt="Xt-EHR" width={120} />
  </div>
</section>