# Logo Integration Plan for Portfolio

## Available Logos & Resources

### 1. **MyHealth@EU** ✅ (Ready to use)
**Location:** `C:\Users\Duncan\Downloads\MyHealth\MyHealth\`

**Available formats:**
- SVG: `Horizontal/Web/SVG/MyHealth-logo-horizontal.svg` (color version - RECOMMENDED)
- PNG: `Horizontal/Web/PNG/MyHealth-logo-horizontal.png` (backup)
- White/Black versions also available

**Usage:**
- ✅ Allowed for descriptive purposes (showing involvement in MyHealth@EU project)
- Copy to: `src/assets/images/myhealth-eu-logo.svg`

---

### 2. **HL7 FHIR** 📋 (Requires download)
**Source:** https://brandguide.hl7.org/2025/07/08/hl7-fhir/

**Usage Guidelines:**
- ✅ Allowed for showing "I work with FHIR" on personal portfolio
- ⚠️ Must display: "HL7® and FHIR® are registered trademarks of Health Level Seven International"
- ❌ Cannot imply official endorsement
- Request logo via: https://www.hl7.org/community-use/index.cfm

**Recommended filename:** `hl7-fhir-logo.svg` or `hl7-fhir-logo.png`

---

### 3. **HL7 CDA** 📋 (Requires download)
**Source:** https://brandguide.hl7.org/2025/07/11/hl7-cda/

**Usage:** Same guidelines as HL7 FHIR above

**Recommended filename:** `hl7-cda-logo.svg` or `hl7-cda-logo.png`

---

### 4. **openEHR** ⚠️ (Strict requirements)
**Source:** https://openehr.org/logos/

**Logo specs:**
- Orange: #FF861C (RGB 255, 134, 28)
- Blue: #258BB0 (RGB 37, 139, 176)
- Available: PNG files (various sizes)

**⚠️ CRITICAL Requirements:**
- MUST include ® symbol: "openEHR®" 
- MUST display: "openEHR® is the registered trademark of the openEHR Foundation and is used with the permission of openEHR International. Use of the trademark does not constitute endorsement of this product by openEHR International or openEHR Foundation."
- Consider if complexity is worth it for portfolio use

**Recommended approach:** Reference openEHR in text only without logo (simpler compliance)

---

### 5. **Xt-EHR** ✅ (Available)
**Source:** https://avatars.githubusercontent.com/u/172025011?s=200&v=4

**Usage:**
- ✅ GitHub organization logo (public)
- ✅ Descriptive use showing project involvement
- Download as: `xt-ehr-logo.png`

**Alternative:** Use text reference with link to https://www.xt-ehr.eu/

---

### 6. **European Union Flag** 🇪🇺
**Note:** Available on Xt-EHR site

**Usage:**
- ✅ Can use to indicate EU-funded projects (MyHealth@EU, Xt-EHR)
- Must include disclaimer: "Co-funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or HaDEA."

---

## Implementation Steps

### Step 1: Create Directory Structure
```bash
mkdir src/assets/images
```

### Step 2: Copy MyHealth@EU Logo
```bash
copy "C:\Users\Duncan\Downloads\MyHealth\MyHealth\Horizontal\Web\SVG\MyHealth-logo-horizontal.svg" "src\assets\images\myhealth-eu-logo.svg"
```

### Step 3: Download Additional Logos

**Download these manually:**

1. **HL7 FHIR logo:**
   - Visit: https://brandguide.hl7.org/2025/07/08/hl7-fhir/
   - Request via: https://www.hl7.org/community-use/index.cfm
   - Save as: `src/assets/images/hl7-fhir-logo.svg`

2. **Xt-EHR logo:**
   - Download: https://avatars.githubusercontent.com/u/172025011?s=200&v=4
   - Save as: `src/assets/images/xt-ehr-logo.png`

3. **Optional - openEHR logo:**
   - Visit: https://openehr.org/logos/
   - Download PNG
   - Save as: `src/assets/images/openehr-logo.png`
   - ⚠️ Remember strict trademark requirements

### Step 4: Create Logo Component

Create `src/components/TechnologyLogos.astro`:

```astro
---
import { Image } from 'astro:assets';
import myhealthLogo from '../assets/images/myhealth-eu-logo.svg';
import xtehrLogo from '../assets/images/xt-ehr-logo.png';
// Add other logos as they become available
---

<section class="tech-logos-section">
  <h2>Healthcare Standards & Projects</h2>
  <p>I work extensively with open standards and European healthcare initiatives</p>
  
  <div class="tech-logo-grid">
    <div class="logo-item">
      <Image 
        src={myhealthLogo} 
        alt="MyHealth@EU - Cross-border healthcare data exchange" 
        width={140} 
      />
    </div>
    
    <div class="logo-item">
      <Image 
        src={xtehrLogo} 
        alt="Xt-EHR - Extended EHR for EU Data Space" 
        width={140} 
      />
    </div>
    
    <!-- Add HL7 FHIR logo when available -->
    <!-- Add HL7 CDA logo when available -->
  </div>
  
  <div class="trademark-notice">
    <p><small>
      <strong>Trademark Notice:</strong> Logos are trademarks of their respective owners 
      and are used here for descriptive purposes only. This site is not affiliated with 
      or endorsed by HL7®, the European Commission, or any related programme.
    </small></p>
  </div>
</section>

<style>
  .tech-logos-section {
    margin: var(--space-2xl) 0;
  }
  
  .tech-logo-grid {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: var(--space-xl) 0;
  }
  
  .logo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-md);
  }
  
  .trademark-notice {
    margin-top: var(--space-xl);
    padding: var(--space-md);
    background-color: var(--color-background-alt);
    border-left: 3px solid var(--color-primary);
    font-size: var(--font-size-sm);
    color: var(--color-text-light);
  }
</style>
```

### Step 5: Add to About Page

In `src/pages/about.astro`, import and use:

```astro
---
import TechnologyLogos from '../components/TechnologyLogos.astro';
---

<!-- Add after expertise section -->
<TechnologyLogos />
```

---

## Recommended Approach

### Option A: **Full Logo Display** (More visual, more complex)
- Obtain all logos with proper permissions
- Display with trademark notices
- Keep updated on trademark requirements

### Option B: **Selective Logos** (Balanced approach) ✅ RECOMMENDED
- **Use logos:** MyHealth@EU, Xt-EHR (clear involvement, fewer restrictions)
- **Use text + links:** HL7 FHIR, CDA (mention in text, link to official sites)
- **Skip:** openEHR logo (complex trademark requirements)

### Option C: **Text-Based References** (Simplest)
- No logos, just text with proper links
- No trademark compliance complexity
- Still professional and clear

---

## Next Steps

1. ✅ Copy MyHealth@EU logo from downloads folder
2. 📥 Download Xt-EHR GitHub avatar logo
3. 📧 Request HL7 FHIR logo (if using Option A or B)
4. 🎨 Create TechnologyLogos component
5. 🔗 Add to About page
6. ✅ Add trademark disclaimer

---

## Where to Add Logos

### High-Impact Locations:
1. **About page** - "Standards & Projects" section
2. **Homepage** - Visual interest near expertise section
3. **Project cards** - Small logo badges for relevant projects (FHIR IPS Validator, Django NCP, etc.)

### Lower Priority:
- Footer (keep clean, text-only)
- Header/nav (avoid, too commercial)
- Timeline entries (text references sufficient)

---

## Important Reminders

⚠️ **Always:**
- Use descriptive alt text
- Include trademark disclaimers
- Link logos to official websites
- Maintain aspect ratios (no stretching)
- Use SVG when available
- Keep file sizes optimized

❌ **Never:**
- Imply endorsement
- Modify logo colors or designs
- Use logos in site header/branding
- Commercial use without permission

---

## Files to Create

```
src/
  assets/
    images/
      myhealth-eu-logo.svg         ✅ Copy from downloads
      xt-ehr-logo.png              📥 Download from GitHub
      hl7-fhir-logo.svg            📥 Request from HL7
      hl7-cda-logo.svg             📥 Request from HL7 (optional)
      openehr-logo.png             📥 Download (optional, complex)
  components/
    TechnologyLogos.astro          📝 Create new component
```

Ready to proceed?
