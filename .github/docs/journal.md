# Development Journal

## 2026-05-09 - Initial Project Setup

**Status**: Complete - Core site structure and styling established

### What Was Done

#### 1. Project Initialization
- Created Astro project with TypeScript support
- Configured package.json with necessary dependencies (Astro, MDX, Sass, TypeScript)
- Set up astro.config.mjs with MDX integration
- Configured tsconfig.json for strict type checking
- Created proper .gitignore for Node.js/Astro project
- Added comprehensive README.md

#### 2. Sass/SCSS Styling System
Established a complete mobile-first, accessible styling system:
- `_variables.scss` - Design tokens, colors, spacing, typography, breakpoints, mixins
- `_typography.scss` - Heading styles, paragraph styles, links, code, blockquotes
- `_layout.scss` - Container utilities, grid system, flexbox utilities, spacing helpers
- `_cards.scss` - Card component styles, tags, status indicators
- `_buttons.scss` - Button variants and sizes
- `global.scss` - CSS reset, base styles, print styles, imports all partials

Design approach:
- Professional healthcare-appropriate color palette (blue primary, teal accent)
- Mobile-first responsive breakpoints (640px, 768px, 1024px, 1280px)
- CSS custom properties for easy theming
- Focus on accessibility (focus rings, semantic HTML, keyboard navigation)
- Calm, professional aesthetic

#### 3. Base Layout Components
Created reusable Astro components:
- `Header.astro` - Sticky navigation with mobile menu toggle
- `Footer.astro` - Footer with quick links, social links, copyright
- `BaseLayout.astro` - Main layout wrapper with HTML head, metadata, and global structure

Features:
- Responsive mobile navigation
- Skip to main content link for accessibility
- Proper semantic HTML structure
- Active page indication in navigation

#### 4. Content Collections
Configured three Astro content collections with TypeScript schemas:
- **Projects** - title, description, tags, technologies, repository, demo, status, featured flag
- **Case Studies** - problem, context, technologies, standards, repository
- **Timeline** - organization, role, dates, responsibilities, achievements, type

Created sample content:
- 2 example projects (FHIR Patient Summary API, MyHealth@EU Lab)
- 1 detailed case study (MyHealth@EU Learning Environment)
- 2 timeline entries (HSE Senior Architect, HSE Technical Lead)

#### 5. Main Pages
Created complete page structure:

**Home Page (`index.astro`)**
- Hero section with name, tagline, description, CTAs
- Featured projects grid
- Expertise cards
- Featured case studies

**About Page (`about.astro`)**
- Professional background
- Expertise sections (Standards, Architecture, Development)
- Approach and philosophy
- Current focus areas
- CTAs to other pages

**Projects Pages**
- `projects/index.astro` - List all projects grouped by status
- `projects/[slug].astro` - Individual project detail page with full content

**Case Studies Pages**
- `case-studies/index.astro` - List all case studies
- `case-studies/[slug].astro` - Detailed case study with problem, context, solution

**Timeline Page (`timeline.astro`)**
- Visual timeline with dots and connecting lines
- Date ranges and locations
- Responsibilities and achievements
- Current position indicator with animation

**Contact Page (`contact.astro`)**
- GitHub and LinkedIn contact cards with icons
- Topics of interest
- Collaboration opportunities

### Key Technical Decisions

1. **Astro for SSG** - Static-first approach for maximum performance and simplicity
2. **Sass/SCSS** - Modular stylesheets with variables and mixins for maintainability
3. **Content Collections** - Type-safe content management for projects, case studies, timeline
4. **Mobile-First** - All styles start with mobile and enhance for larger screens
5. **Accessibility-First** - Semantic HTML, focus states, skip links, ARIA labels
6. **No Client-Side Frameworks** - Minimal JavaScript, only for mobile menu toggle
7. **Professional Design** - Healthcare-appropriate colors, calm aesthetic, clear hierarchy

### File Structure Created

```
personal_profile_2026/
├── .github/
│   ├── copilot-instructions.md
│   ├── docs/
│   │   ├── coding-notes.md
│   │   ├── journal.md (this file)
│   │   └── project-brief.md
│   └── instructions/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── projects/
│   │   │   ├── fhir-patient-summary-api.md
│   │   │   └── myhealthateu-lab.md
│   │   ├── case-studies/
│   │   │   └── myhealthateu-lab.md
│   │   └── timeline/
│   │       ├── hse-senior-architect.md
│   │       └── hse-technical-lead.md
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── timeline.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── case-studies/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _typography.scss
│   │   ├── _layout.scss
│   │   ├── _cards.scss
│   │   ├── _buttons.scss
│   │   └── global.scss
│   └── env.d.ts
├── .gitignore
├── astro.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```

### Next Steps

1. **Install dependencies**: Run `npm install`
2. **Test locally**: Run `npm run dev` and test all pages
3. **Add more content**:
   - Additional projects
   - More case studies
   - Complete timeline with education and certifications
4. **Add assets**:
   - Favicon (SVG)
   - Optional: Project screenshots
   - Optional: Profile photo
5. **Deployment preparation**:
   - GitHub Actions workflow for deployment
   - Configure for GitHub Pages
6. **Optional enhancements**:
   - Dark mode support
   - Search functionality
   - RSS feed
   - Blog section
   - Downloadable CV

### Git Commit Message Suggestion

```
feat: initial Astro portfolio setup with complete site structure

- Initialize Astro project with TypeScript and Sass
- Create mobile-first, accessible styling system
- Build layout components (Header, Footer, BaseLayout)
- Configure content collections (projects, case studies, timeline)
- Create all main pages (Home, About, Projects, Case Studies, Timeline, Contact)
- Add sample content and project structure
- Set up professional healthcare-themed design system
```

### Testing Checklist

Before first deployment:
- [x] Install dependencies (`npm install`)
- [x] Run dev server (`npm run dev`)
- [ ] Test all navigation links
- [ ] Test mobile menu toggle
- [ ] Verify responsive design on mobile, tablet, desktop
- [ ] Check keyboard navigation and focus states
- [ ] Verify content collection pages generate correctly
- [ ] Test external links (GitHub, LinkedIn)
- [ ] Validate HTML and accessibility
- [ ] Build for production (`npm run build`)
- [ ] Preview production build (`npm run preview`)

---

## 2026-05-09 - Bug Fixes and Real Content Integration

**Status**: Complete - Fixed path issues and added real projects

### Issues Fixed

1. **Import Path Errors** - Fixed incorrect relative paths in subdirectory pages:
   - `projects/index.astro` - Changed BaseLayout import from `../layouts` to `../../layouts`
   - `case-studies/index.astro` - Changed BaseLayout import from `../layouts` to `../../layouts`
   - `projects/index.astro` - Changed Sass import from `../styles` to `../../styles`

2. **Content Collection Date Parsing** - Fixed 500 error on projects page:
   - Changed all date schemas from `z.date()` to `z.coerce.date()` in `config.ts`
   - Allows Astro to properly convert YAML date strings to Date objects

### Real Content Added

**GitHub Integration**
- Updated all GitHub URLs to real username: `ddeveloper72`
- Updated LinkedIn URL: `https://www.linkedin.com/in/duncanfalconer`
- Updated location: Clane, Ireland

**New Real Projects Created** (5 new projects from actual GitHub repos):
1. **fhir-patient-summary** - Updated with real repo details
2. **MyHealth-EU** - Updated with real repo details  
3. **ps-cda-builder** - Patient Summary CDA Builder (Sept 2024)
4. **phoss-smp-ehealth** - phoss SMP for eHealth NCP (Sept 2025)
5. **movie-rater** - Angular & Django REST API (Oct 2025)
6. **json-xml-intro** - JSON/XML intro for FHIR training (Jan 2025)
7. **django-mongodb** - Django with MongoDB integration (July 2023)

**Updated Content**
- About page - Added "full-stack web developer" and Ireland location
- About page - Added Java to technology skills
- Case study - Updated MyHealth@EU case study to reflect actual documentation project
- All social links throughout site updated to real URLs

**Project Portfolio Stats**
- Now showing 7 real projects from actual GitHub repositories
- Mix of healthcare interoperability and full-stack development work
- Accurate dates from actual repository commits
- Real GitHub repository links

### Next Steps

1. Add more projects from the 94 repositories available
2. Add education and certification entries to timeline
3. Consider adding:
   - REST_Client-Demo
   - synthea (Irish patient data generator)
   - Django_NCP
   - pdf-base64-xml
   - Webpage-Monitor
4. Create additional case studies from key projects
5. Test deployment to GitHub Pages

### Git Commit Message Suggestion

```
fix: correct import paths and add real project content

- Fix relative import paths in subdirectory pages (projects, case-studies)
- Update date schema to use z.coerce.date() for proper YAML parsing
- Add 7 real projects from GitHub (ddeveloper72)
- Update all social media URLs to actual profiles
- Enhance About page with accurate bio information
- Update MyHealth@EU case study with real project details
```

---

## 2026-05-09 - Private Heroku Projects and Detailed Technical Updates

**Status**: Complete - Added private projects with live demos and enhanced technical descriptions

### Schema Enhancement

**Made Repository Field Optional**
- Modified `config.ts` projects schema: `repository: z.string().url().optional()`
- Enables showcasing private projects with live demos but no public code
- Maintains flexibility for both open-source and proprietary work

### Private Heroku Projects Added (5 Projects)

1. **HL7 v2 Message Validator** (Gazelle-based validation tool)
   - Live demo: https://hl7-v2-message-validator-a1efcbc737cd.herokuapp.com/
   - Flask-based web application
   - **UPDATED WITH FULL CONTEXT** - See detailed update below

2. **Django NCP Simulator** (National Contact Point eHealth simulator)
   - Live demo: https://django-ncp-a6f073d2d0f1.herokuapp.com/
   - Django-based MyHealth@EU simulator
   - Cross-border healthcare data exchange testing

3. **Imaging Reports Viewer** (HL7 FHIR DiagnosticReport viewer)
   - Live demo: https://imaging-reports-c6f3c2fc4c87.herokuapp.com/
   - FHIR DiagnosticReport rendering
   - Medical imaging report display

4. **Ultrasonic Sweep Generator** (Frequency sweep utility)
   - Live demo: https://ultrasonic-sweep-8a4e3a8ac49e.herokuapp.com/
   - Audio frequency sweep tool
   - Demonstrating audio processing with Python/Flask

5. **Island System** (Azure AD educational platform)
   - Live demo: https://island-system-b1e0b66bd58e.herokuapp.com/
   - **UPDATED WITH FULL CONTEXT** - See detailed update below

### Major Technical Updates

#### 1. Gazelle HL7 v2 Validator - Comprehensive Rewrite

**Original Description**: Generic "validation tool" with basic features
**Updated Description**: Detailed technical showcase highlighting:

**Core Features Added:**
- Gazelle EVS API integration architecture
- Intelligent auto-correction module (`hl7_corrector.py`)
- Playwright-based PDF generation with emoji support
- Bootstrap 5.3 drag-and-drop interface
- Session-based API key security

**Technical Details Added:**
- Python 3.12 backend architecture
- Custom error correction algorithms:
  - BOM (Byte Order Mark) removal
  - XML declaration insertion
  - HL7 table code corrections
  - Required field population
- Playwright headless browser rendering for PDF export
- Encrypted Flask session management
- Heroku deployment with custom buildpacks

**Security Implementation:**
- User-provided API keys (no persistence)
- Encrypted session storage
- SSL verification enabled
- No credential commits

**Use Cases Documented:**
- Development and testing workflows
- Integration support and troubleshooting
- Training and education applications

**Value Proposition:**
- Reduces HL7 v2 troubleshooting time
- Eliminates local Gazelle installation needs
- Supports distributed healthcare teams
- Professional PDF documentation generation

#### 2. Island System - Technical Architecture Showcase

**Original Description**: Generic "data management" placeholder
**Updated Description**: Detailed cloud architecture achievement

**Technical Implementation Added:**
- **Azure AD OAuth2 Integration**: Enterprise authentication with role-based access
- **Azure SQL Database**: Cloud database with multi-device sync
- **Progressive Web App**: Manifest, service worker, offline-first design
- **PDF Export**: Student progress reporting functionality
- **Mobile-First Design**: Responsive layout for physics education

**Architecture Details:**
- Heroku deployment with Gunicorn
- SQLAlchemy ORM
- Bootstrap responsive framework
- Physics content copyright considerations noted

**Security & Privacy:**
- Private family educational project (noted)
- Authorized access only via Azure AD
- Copyright-sensitive educational content
- Technical showcase with appropriate discretion

### Technical Writing Improvements

**Structure Enhancements:**
- Added "Purpose" sections for context
- Separated "Key Features" into logical categories
- Included "Technical Implementation" subsections
- Added "Use Cases" for practical application context
- Created "Value Proposition" sections
- Documented "Deployment Architecture"
- Listed "Technical Highlights" as bullet summaries

**Content Quality:**
- Replaced generic descriptions with specific technologies
- Added concrete feature examples
- Documented security implementations
- Included architecture patterns
- Highlighted technical achievements
- Balanced detail with readability

### Project Portfolio Impact

**Portfolio Now Includes:**
- **7 Public GitHub Projects**: Open-source healthcare and full-stack work
- **5 Private Heroku Projects**: Live demos showcasing production deployments
- **Total: 12 Projects** demonstrating breadth and depth

**Technology Showcase:**
- Backend: Python, Flask, Django, Django REST Framework
- Frontend: Angular, TypeScript, Bootstrap, JavaScript
- Cloud: Azure AD, Azure SQL, Heroku
- Healthcare: HL7 v2, FHIR, Gazelle EVS, MyHealth@EU
- Standards: CDA, XML, JSON
- Modern: PWA, OAuth2, REST APIs, PDF generation

**Professional Positioning:**
- Technical Architect capabilities via cloud architecture
- Healthcare Interoperability via HL7/FHIR projects
- Full-Stack Developer via Angular/Django projects
- Production Experience via live Heroku deployments

### Next Steps

1. Consider adding more GitHub projects from remaining 87 repositories
2. Develop additional detailed case studies (candidates: ps-cda-builder, phoss-smp-ehealth)
3. Complete timeline with education and certifications
4. Set up GitHub Pages deployment workflow
5. Add project screenshots or architecture diagrams where appropriate

### Git Commit Message Suggestion

```
feat: add private Heroku projects with detailed technical descriptions

- Make repository field optional in projects schema
- Add 5 private Heroku projects with live demo URLs
- Rewrite Gazelle HL7 v2 Validator with comprehensive technical details
  - Add Gazelle EVS API integration architecture
  - Document auto-correction module and algorithms
  - Highlight Playwright PDF generation and Bootstrap 5.3 UI
  - Detail security implementation (session-based API keys)
- Update Island System with Azure cloud architecture details
  - Add Azure AD OAuth2 authentication implementation
  - Document Azure SQL Database integration
  - Highlight PWA features and mobile-first design
  - Note educational purpose with privacy considerations
- Enhance all project descriptions with structured sections
- Improve technical writing quality across portfolio
- Expand portfolio to 12 projects (7 public + 5 private demos)
```

---

## 2026-05-09 - Django NCP Comprehensive Update

**Status**: Complete - Added full technical details from GitHub README

### What Changed

**Django NCP Project - Complete Rewrite**

Transformed from placeholder description to comprehensive technical showcase based on actual GitHub repository README.

**Original Description**: Generic "experimental NCP implementation" with basic components
**Updated Description**: Detailed Django 5.2 demonstration application documentation

### Technical Details Added

**System Architecture (7 Modules)**:
1. **eHealth Portal**: Patient-facing UI with search and document viewing
2. **NCP Gateway**: Cross-border API for NCP-to-NCP communication
3. **Patient Data**: Clinical data services with CDA/FHIR parsing
4. **FHIR Services**: FHIR R4 admin interfaces with Azure Healthcare APIs
5. **Authentication**: HSE-themed healthcare professional authentication
6. **SMP Client**: X.509 certificate validation and service metadata
7. **Translation Manager**: Master Value Catalogue terminology management

**Demonstration Capabilities**:
- ✅ Patient Summary (PS) - IPS-compliant cross-border summaries
- ✅ Laboratory Results - Clinical lab data integration
- ✅ Hospital Discharge Reports - Care continuity docs
- ✅ Medical Imaging Reports - Radiology report exchange
- 🔄 Future: ePrescription (eP) and eDispensation (eD)

**Clinical Document Processing**:
- CDA R2 Level 1 (PDF) and Level 3 (structured XML)
- FHIR R4 Azure Healthcare APIs integration
- Master Value Catalogue for terminology translation
- English/Irish clinical terminology support

**Security Implementation**:
- TLS 1.2+ transport security
- Azure AD integration for healthcare professionals
- Encrypted patient sessions with automatic cleanup
- GDPR-compliant audit trails
- X.509 certificate validation for SMP

**Technology Stack Documented**:
- Django 5.2.7 web framework
- PostgreSQL 13+ production database
- Azure Healthcare APIs (FHIR R4)
- Azure AD authentication
- SCSS (7-1 pattern) frontend architecture
- pytest unit and integration testing
- Heroku deployment with Gunicorn
- WhiteNoise static file serving

**EU Member State Demo**:
- 🇮🇪 Ireland (2.16.372.1.100.1.1)
- 🇧🇪 Belgium (2.16.840.1.113883.1.1)
- 🇵🇹 Portugal (2.16.620.1.101.10.1)

**Standards Implementation**:
- epSOS/eHDSI Patient Summary specification
- HL7 FHIR R4 RESTful API
- HL7 CDA R2 Clinical Document Architecture
- SNOMED CT, LOINC, ICD-10 terminology
- GDPR compliance patterns
- EU AI Act compliance (minimal risk, transparency)

**Development Standards**:
- Service Layer Pattern for business logic
- Mandatory unit testing (pytest)
- SCSS architecture (no inline styles)
- Master Value Catalogue (no hard-coded clinical data)
- WCAG 2.2 accessibility compliance

### Content Structure Improvements

Added comprehensive sections:
- **Purpose**: MyHealth@EU context and NCP role
- **System Architecture**: 7-module breakdown
- **Demonstration Capabilities**: Document types and features
- **Key Features**: Cross-border, clinical, security, UX
- **Technical Implementation**: Backend, frontend, testing, deployment
- **EU Member State Integration**: Demo countries table
- **Healthcare Standards**: epSOS/eHDSI, HL7, EU regulations
- **Development Standards**: Code quality requirements
- **Use Cases**: Development, education, proof of concept
- **Value Proposition**: Why this project matters
- **Technical Highlights**: Key achievements summary
- **Related Projects**: DomiSMP, OpenNCP links

### Repository Information

- **GitHub**: https://github.com/ddeveloper72/Django_NCP
- **Live Demo**: https://django-ncp-794688432a7f.herokuapp.com/
- **Status**: Changed from "in-progress" to "active"
- **Repository**: Now public (GitHub URL added)

### Professional Impact

This update positions the Django NCP project as:
- **Production-Quality Architecture**: 7-module separation of concerns
- **Standards Compliance**: Full epSOS/eHDSI implementation
- **Modern Healthcare Stack**: Django 5.2 + Azure FHIR + PostgreSQL
- **Security-First Design**: GDPR, TLS 1.2+, encrypted sessions
- **Professional Testing**: pytest framework, service layer pattern
- **EU Healthcare Expertise**: MyHealth@EU, cross-border exchange
- **Cloud Integration**: Azure AD OAuth2, Azure Healthcare APIs

### Next Steps

1. Consider similar detailed updates for remaining Heroku projects:
   - Imaging Reports Viewer
   - Ultrasonic Sweep Generator
2. Add project screenshots or architecture diagrams
3. Create detailed case study from Django NCP implementation
4. Continue adding GitHub projects from remaining repositories

### Git Commit Message Suggestion

```
feat: add comprehensive Django NCP technical documentation

- Transform Django NCP from placeholder to detailed showcase
- Document 7-module architecture (eHealth Portal, NCP Gateway, etc.)
- Add clinical document capabilities (PS, Lab Results, Imaging)
- Detail security implementation (Azure AD, TLS 1.2+, encrypted sessions)
- List technology stack (Django 5.2, PostgreSQL, Azure FHIR, SCSS)
- Include EU member state demo integration (Ireland, Belgium, Portugal)
- Document healthcare standards (epSOS/eHDSI, FHIR R4, CDA R2)
- Add development standards and testing requirements
- Link to GitHub repository and related projects
- Highlight GDPR and EU AI Act compliance
- Position as production-quality healthcare architecture demo
```

---

## 2026-05-10 - Major Portfolio Reorganization & GitHub Focus

**Status**: Complete - Portfolio restructured around user's GitHub project focus

### Portfolio Cleanup & Reorganization

User requested to **"review and scrub the GitHub projects and focus on these that I've put on GitHub"** with a specific list of 15 repositories to feature.

**Objective**: Streamline portfolio to showcase only active GitHub projects, removing outdated or non-priority items.

### Projects Removed (4 items)

Removed projects not in the focus list:
1. `django-mongodb.md` - Not in priority list
2. `myhealthateu-lab.md` - Consolidated into other projects
3. `phoss-smp-ehealth.md` - Not in priority list
4. `ps-cda-builder.md` - Not in priority list

**Rationale**: Focus on projects with live demos and comprehensive GitHub documentation.

### Projects Updated (1 major update)

**Imaging Report Model → Xt-EHR T7.2 Imaging Reports Model Analysis**

Completely rewrote `imaging-report-model.md` with comprehensive details from GitHub README:

**Key Updates**:
- **Full Project Title**: "Xt-EHR T7.2 Imaging Reports Model Analysis"
- **Dataset Scale**: 2,738 real-world imaging reports from PARROT v1.0
- **Analysis Scope**: Evidence-based comparison of Xt-EHR FHIR models
- **EU AI Act Compliance**: Full transparency documentation for Claude Sonnet 4.5 usage
- **Classification System**: Basic (11 elements), Intermediate (6 elements), Beyond Basic (31+ elements)
- **Data Sources**: Xt-EHR v0.2.1 FHIR Implementation Guide + PARROT dataset
- **Technology Stack**: Python 3.12, Flask, pandas, PARROT dataset analysis
- **Live Demo**: Interactive dashboard at https://sub-team-imaging-report-model-984bf6c1ddb8.herokuapp.com/
- **GitHub Repository**: https://github.com/ddeveloper72/sub-team-imaging-report-model

**New Content Sections**:
- Purpose and original project request
- Key findings with usage statistics
- Evidence-based classification table
- Data sources (Xt-EHR and PARROT)
- Analysis methodology with process flow
- Model traceability table
- Implementation strategy (3-phase approach)
- EU AI Act regulatory compliance
- Use cases and value proposition
- Technical highlights and acknowledgments

**Impact**: Transformed generic placeholder into comprehensive showcase of healthcare standards analysis with AI transparency.

### Projects Added (7 new projects)

#### 1. Find Me a Home - Ireland
**File**: `find-me-a-home.md`  
**Repository**: https://github.com/ddeveloper72/find-me-a-home  
**Status**: in-progress | **Featured**: Yes

**Description**: Comprehensive property search platform integrating:
- Property listings from multiple Irish sources
- Secondary school information (Dept of Education ArcGIS API)
- Real-time transport data (Irish Rail API, GTFS-R)
- Interactive Leaflet.js mapping
- Azure AD B2C authentication
- Smart alerts and favorites system

**Technology Stack**: Python, Flask, PostgreSQL, Azure AD B2C, Bootstrap 5, Leaflet.js

**Key Features Documented**:
- 🏠 Multi-source property aggregation
- 🎓 School data integration with distance calculations
- 🚆 Real-time Irish Rail and bus/LUAS schedules
- 🗺️ Interactive maps with multiple data layers
- 🔐 Enterprise authentication via Azure AD B2C

**Use Cases**: Family relocation, commuter focus, investment analysis

#### 2. Movie Rater API - Django REST Framework
**File**: `movieratings.md`  
**Repository**: https://github.com/ddeveloper72/movieratings  
**Demo**: https://ddeveloper72-movie-rater-api.herokuapp.com/  
**Status**: active | **Featured**: Yes

**Description**: Production-ready Django REST API backend for movie rating platforms.

**Key Technical Achievements**:
- **8-Layer Security System**: Authentication, rate limiting, file validation, MIME verification
- **AWS S3 Presigned URLs**: Direct frontend-to-S3 uploads, no backend file handling
- **Zero-Cost Deduplication**: Content-based hashing prevents duplicate storage
- **Azure SQL Database**: Production cloud database integration
- **Token Authentication**: DRF token-based security

**Technology Stack**: Django 5.1, DRF 3.15, AWS S3 (boto3), Azure SQL, WhiteNoise, Heroku

**API Endpoints**: Complete CRUD for movies, users, ratings + presigned URL generation

**Documentation Links**: S3_UPLOAD_GUIDE.md, SECURITY.md

#### 3. Webpage Monitor with Slack Alerts
**File**: `webpage-monitor.md`  
**Repository**: https://github.com/ddeveloper72/Webpage-Monitor  
**Status**: active

**Description**: Lightweight Python utility for website uptime monitoring with Slack notifications.

**Features**:
- HTTP status code checking
- Slack Block Kit integration for professional alerts
- Environment-based configuration (dev/prod URLs)
- Status transition tracking (down/recovery)

**Technology**: Python 3.6+, requests, python-dotenv, Slack webhooks

**Use Cases**: DevOps monitoring, scheduled health checks, team communication

**Deployment Options**: Cron jobs, Windows Task Scheduler, Docker, AWS Lambda

#### 4. Custom Drone Systems - Bug Tracking Platform
**File**: `milestone-5-project.md`  
**Repository**: https://github.com/ddeveloper72/milestone-5-project  
**Demo**: https://custom-drone-ddeveloper72-6e5549276368.herokuapp.com/  
**Status**: completed | **Featured**: Yes

**Description**: Full-stack Django capstone project for Code Institute (2019) - Bug tracking and feature request marketplace.

**Fictional Scenario**: Custom Drone deBug platform for programmable drone navigation systems.

**Key Features**:
- Bug & feature tracking with CRUD operations
- Voting system (community prioritization)
- Stripe payment integration for paid features
- Blog platform with Markdown support
- Shopping cart and checkout flow
- Admin/Staff dashboard with statistics

**Technology Stack**: Python 3.7, Django, MySQL/PostgreSQL, AWS S3, Stripe, jQuery, Bootstrap (Darkly theme)

**Educational Value**: Code Institute Milestone 5 demonstrating full-stack proficiency

**Database Design**: Comprehensive EER diagrams (MySQL Workbench)

#### 5. PDF/XML Base64 Encoder
**File**: `pdf-base64-xml.md`  
**Repository**: https://github.com/ddeveloper72/pdf-base64-xml  
**Demo**: https://ddeveloper72-base64-topdf-1b37f4832a97.herokuapp.com/  
**Status**: in-progress

**Description**: Flask utility for encoding PDF/XML files to Base64.

**Features**: File upload, Base64 encoding, preview, download

**Use Cases**: 
- Healthcare: Encode PDFs for HL7 CDA Level 1
- API Development: Test Base64 payloads
- Data Integration: Embed files in JSON/XML

**Technology**: Python, Flask, base64 (standard library), Heroku

**Status**: ⚒️ Work in progress 🚧

#### 6. OMC Financial Dashboard (Placeholder)
**File**: `omc-financial-dashboard.md`  
**Repository**: https://github.com/ddeveloper72/omc-financial-dasboard  
**Status**: in-progress

**Note**: No README available (404 error). Created placeholder entry.

**Planned Content**: Financial data visualization and analysis dashboard

#### 7. Synthea - Irish Patient Data Generator (Placeholder)
**File**: `synthea.md`  
**Repository**: https://github.com/ddeveloper72/synthea  
**Status**: in-progress

**Note**: No README available (404 error). Created placeholder entry.

**Description**: Customized Synthea synthetic patient generator for Irish healthcare scenarios

**Planned Content**: FHIR-compliant test data generation

### Technical Changes

**Schema Validation Fix**:
- Fixed `milestone-5-project.md`: Changed `status: "complete"` → `status: "completed"`
- Resolved Astro content collection schema error

**File Organization**:
- Removed 4 markdown files from `src/content/projects/`
- Added 7 new markdown files
- Updated 1 existing file (imaging-report-model.md)
- Total: 15 projects now in portfolio (focused on GitHub list)

### Portfolio Statistics (Before → After)

**Project Count**: 12 → 15 projects  
**Featured Projects**: 5 → 8 projects  
**Live Demos**: 10 → 10 Heroku deployments  
**GitHub Repositories**: 7 public → 13 public repos  
**Placeholder Projects**: 0 → 2 (awaiting README documentation)

### Content Quality Improvements

**Comprehensive Documentation Added**:
1. **Purpose Sections**: Clear problem statements
2. **Key Features**: Detailed feature breakdowns with emojis
3. **Technical Implementation**: Backend, frontend, cloud services
4. **API Endpoints**: Complete endpoint listings (where applicable)
5. **Use Cases**: Practical application scenarios
6. **Value Proposition**: Why the project matters
7. **Technical Highlights**: Key technical achievements
8. **Future Enhancements**: Roadmap for in-progress projects

**Healthcare Project Emphasis**:
- Xt-EHR T7.2 Imaging Reports Analysis (EU AI Act compliant)
- Django NCP (7-module architecture)
- HL7 v2 Validator (Gazelle EVS integration)
- Find Me a Home (Irish healthcare context - schools/transport)
- PDF/XML Base64 Encoder (CDA use cases)

**Full-Stack Demonstrations**:
- Movie Rater API (Django REST + AWS + Azure)
- Custom Drone (Django full-stack + Stripe)
- Find Me a Home (Flask + Azure AD B2C + PostgreSQL)

### Next Steps

1. **Add Screenshots**: Capture UI screenshots for visual demonstration
2. **Create Case Studies**: Detailed implementation stories for key projects
3. **Update Placeholders**: Add README details for OMC Financial Dashboard and Synthea when available
4. **Testing**: Verify all project pages load correctly in Astro dev server
5. **Deployment**: Push changes to production (GitHub Pages)

### Git Commit Message Suggestion

```
feat: major portfolio reorganization - focus on GitHub projects

BREAKING: Remove 4 non-priority projects, add 7 new GitHub projects

Removed:
- django-mongodb
- myhealthateu-lab
- phoss-smp-ehealth
- ps-cda-builder

Added:
- find-me-a-home: Property search with schools & transport (Flask, Azure AD B2C)
- movieratings: Django REST API with AWS S3 & 8-layer security
- webpage-monitor: Slack alerting for uptime monitoring
- milestone-5-project: Custom Drone bug tracking (Code Institute)
- pdf-base64-xml: Base64 encoder for healthcare documents
- omc-financial-dashboard: Placeholder (README pending)
- synthea: Placeholder (README pending)

Updated:
- imaging-report-model → Xt-EHR T7.2 Analysis: Full documentation with:
  - 2,738 PARROT report analysis
  - EU AI Act compliance
  - Evidence-based classification system
  - Interactive Flask dashboard

Schema Fixes:
- Fix milestone-5-project status: "complete" → "completed"

Portfolio Impact:
- 12 → 15 total projects
- 5 → 8 featured projects
- 7 → 13 public GitHub repositories
- All projects now aligned with user's GitHub focus list
```

---

## 2026-05-10 (Evening) - Local Project Addition & Synthea Removal

**Status**: Complete - Replaced placeholder with privacy/security project

### Portfolio Refinement

User requested to remove Synthea placeholder and explore local projects not yet on GitHub.

**Action**: Remove `synthea.md` placeholder (GitHub README returned 404)

**Reason**: Project not ready for portfolio inclusion - no documentation available.

### New Project: CellSeeU - Privacy Awareness Dashboard

**Source**: Local project (not yet on GitHub)

**File Created**: `cell-see-u.md` (featured project)

**Status**: in-progress

### Project Overview

**CellSeeU** is a comprehensive cellular and WiFi tracking detection system that reveals which services can track your mobile device in real-time.

**Key Innovation**: WiFi triangulation using GPS + compass heading + signal strength to estimate router positions with 10-30m accuracy (10+ scans).

### Technical Architecture

**Full-Stack System**:
1. **Android App** (Java)
   - CellTowerScanner.java - IMEI tracking detection
   - WiFiScanner.java - MAC address probe request detection
   - OrientationSensor.java - Compass + accelerometer
   - ApiClient.java - Data upload to Flask backend

2. **Backend** (Python/Flask)
   - `/api/towers` - Cell tower detection
   - `/api/wifi` - WiFi network scanning
   - `/api/wifi/positions` - Triangulated AP positions
   - OpenCelliD API integration
   - WiFi triangulation algorithm

3. **Frontend** (JavaScript/Leaflet.js)
   - Interactive dashboard
   - Real-time map visualization
   - Detection radius circles
   - Confidence indicators

### Key Features Documented

**Privacy Detection**:
- 📡 IMEI detection radius (which towers can track you)
- 📶 WiFi MAC tracking (which networks detect you)
- 🧭 WiFi router location estimation
- 🗺️ Real-time tracking visualization

**Technical Highlights**:
- Custom triangulation algorithm (compass-based)
- Android sensor integration
- OpenCelliD integration for tower geolocation
- Security features (Flask-Talisman, CORS, rate limiting)
- Testing suite (pytest, bandit, safety)

### Technologies Added to Portfolio

**New Technology Tags**:
- Android development (Java)
- Mobile sensor integration (GPS, compass, accelerometer)
- WiFi triangulation algorithms
- Privacy/security research
- OpenCelliD API
- Leaflet.js mapping

### Portfolio Context

**Why This Project Matters**:
1. **Privacy Awareness**: Educational tool showing invisible tracking
2. **Full-Stack**: Android + Flask + Interactive web dashboard
3. **Algorithm Innovation**: Custom directional WiFi positioning
4. **Security Focus**: Aligns with healthcare privacy themes (Django NCP, GDPR)
5. **Cross-Platform**: Mobile app + backend + frontend integration

**Related Projects**:
- Find Me a Home - Similar GPS/mapping/Flask architecture
- Django NCP - Privacy and GDPR compliance in healthcare
- Webpage Monitor - Flask backend patterns

### Documentation Quality

**Comprehensive Content**:
- Purpose and problem statement
- Privacy tracking detection features
- WiFi triangulation algorithm explanation (with examples)
- System architecture diagram
- API endpoints documentation
- Technical implementation details
- Security & privacy features
- Development workflow
- Use cases (education, research, analysis)
- Current status & future enhancements
- Educational value section

**Visual Elements**:
- Architecture diagram (ASCII)
- Algorithm walkthrough (step-by-step example)
- Triangulation accuracy table

### Portfolio Statistics (Updated)

**Before**: 15 projects (including Synthea placeholder)  
**After**: 15 projects (Synthea removed, CellSeeU added)

**Featured Projects**: 8 → 9 featured  
**Local Projects**: 0 → 1 (CellSeeU)  
**GitHub Projects**: 13 public repos  
**Technology Diversity**: Added Android, mobile sensors, privacy/security

**Project Types**:
- Healthcare Interoperability: 5 projects
- Privacy/Security: 2 projects (Django NCP, CellSeeU)
- Full-Stack Web: 6 projects
- Mobile Development: 1 project (CellSeeU)
- API/Backend: 4 projects

### Next Steps

1. **Additional Local Projects**: User mentioned other local projects not on GitHub
2. **Screenshots**: Capture UI/UX from live demos
3. **Case Studies**: Create detailed implementation stories
4. **GitHub Publication**: Consider hosting CellSeeU privately on GitHub if desired

### Git Commit Message Suggestion

```
feat: add CellSeeU privacy dashboard, remove Synthea placeholder

Added:
- cell-see-u.md: Comprehensive privacy tracking detection system
  - Android app with cell tower & WiFi scanning
  - Flask backend with triangulation algorithm
  - Interactive Leaflet.js dashboard
  - WiFi AP positioning using GPS + compass + RSSI
  - OpenCelliD integration for tower geolocation
  - Security features (Flask-Talisman, CORS, rate limiting)
  - Testing suite (pytest, bandit, safety)

Removed:
- synthea.md: Placeholder with no README available

Technical Highlights:
- Custom WiFi triangulation algorithm (10-30m accuracy)
- Android sensor integration (GPS, compass, accelerometer)
- Privacy awareness education tool
- Full-stack: Android + Flask + Frontend

Portfolio Impact:
- 15 projects maintained
- 8 → 9 featured projects
- Added Android development to technology stack
- Added privacy/security research domain
- First mobile development project in portfolio
```

## 2026-05-23 - GitHub Pages Deployment Setup

**Status**: Complete - Automated deployment configured

### What Was Done

#### 1. GitHub Actions Workflow
Created .github/workflows/deploy.yml for automated deployment:
- Triggers on push to main branch
- Manual workflow dispatch option
- Two-job workflow (build + deploy)
- Uses official GitHub Actions (checkout@v4, setup-node@v4, upload-pages-artifact@v3, deploy-pages@v4)
- Node.js 20 runtime
- Builds Astro site and deploys to GitHub Pages

#### 2. Configuration Updates
- Updated stro.config.mjs site URL from duncanfalconer.github.io to ddeveloper72.github.io (correct repository name)
- Verified build scripts in package.json
- Created comprehensive deployment guide documentation

#### 3. Documentation
Created .github/docs/deployment-guide.md covering:
- GitHub Pages settings configuration
- Commit and push workflow
- Deployment monitoring
- Troubleshooting common issues
- Custom domain setup (optional)
- Security considerations

### Technical Decisions

1. **GitHub Actions for Deployment** - Free, built-in CI/CD with official Astro support
2. **Artifact-Based Deployment** - Build artifact uploaded, then deployed separately for reliability
3. **Permissions Scoping** - Minimal required permissions (contents:read, pages:write, id-token:write)
4. **Node.js 20** - Latest LTS version for stability and performance

### Deployment Process

When code is pushed to main:
1. GitHub Actions checks out repository
2. Installs Node.js 20 and dependencies
3. Runs 
pm run build (includes Astro check for TypeScript validation)
4. Uploads dist folder as artifact
5. Deploys artifact to GitHub Pages
6. Site available at https://ddeveloper72.github.io

### Next Steps for User

1. Configure GitHub Pages settings (Settings ? Pages ? Source: GitHub Actions)
2. Commit all changes including workflow file
3. Push to main branch
4. Monitor deployment in Actions tab
5. Site will be live at https://ddeveloper72.github.io

### Suggested Commit Message

``
feat: add GitHub Pages deployment workflow

- Add GitHub Actions workflow for automated deployment
- Update site URL to match repository (ddeveloper72.github.io)
- Create comprehensive deployment guide
- Configure artifact-based deployment with permissions
``

## 2026-06-16 - Timeline Component Refactor

**Status**: Complete - First stage timeline refactor implemented

### What Was Done

- Refactored `src/pages/timeline.astro` so it only fetches and sorts timeline entries before handing rendering to components.
- Added `src/components/timeline/ScrollTimeline.astro` for the semantic timeline list wrapper.
- Added `src/components/timeline/TimelineItem.astro` for individual milestone rendering.
- Added `src/styles/_timeline.scss` and imported it from `src/styles/global.scss`.
- Preserved the existing `timeline` content collection, existing fields, and `startDate` descending sort order.
- Kept this stage JavaScript-free; the green scroll-progress indicator remains a future enhancement.

### Technical Decisions

1. **Static-first component structure** - Timeline entries remain fully server-rendered from Astro content collections.
2. **Semantic timeline list** - The timeline uses an ordered list with each milestone rendered as a list item and article.
3. **Mobile-first layout** - Mobile keeps the rail on the left with stacked content; tablet and desktop introduce a date column, central rail, and content column.
4. **Global Sass partial** - Timeline styles now live in a dedicated partial instead of page-local SCSS.

### Verification

- Ran `npm run build`.
- Astro check completed with 0 errors, 0 warnings, and 0 hints.
- Astro build completed successfully and generated `/timeline/index.html`.
- Existing Sass `@import` deprecation warnings and Shiki language fallback warnings remain unrelated to this change.

### Suggested Commit Message

```
refactor: split timeline page into reusable components

- Add ScrollTimeline and TimelineItem components
- Move timeline styles into a dedicated Sass partial
- Preserve timeline collection data and startDate sorting
- Keep timeline enhancement static-first with no JavaScript
```

## 2026-06-16 - Timeline Scroll Progress Indicator

**Status**: Complete - Green scroll progress enhancement added

### What Was Done

- Added a muted background rail and green progress rail to `src/components/timeline/ScrollTimeline.astro`.
- Added `data-scroll-timeline` to the timeline wrapper.
- Created `src/scripts/timeline-progress.ts` for lightweight scroll-progress behaviour.
- Updated `src/styles/_timeline.scss` so the green rail height is controlled by `--timeline-progress`.
- Kept timeline content static-first; the page remains complete if JavaScript fails.

### Technical Decisions

1. **CSS custom property bridge** - JavaScript only writes `--timeline-progress`; CSS handles presentation.
2. **RequestAnimationFrame batching** - Scroll and resize listeners schedule one update per animation frame.
3. **Safe progress bounds** - Progress is clamped between 0 and 100 before being applied.
4. **Reduced motion support** - `prefers-reduced-motion: reduce` removes the rail height transition.
5. **No new dependencies** - The enhancement uses plain TypeScript and Astro's existing script bundling.

### Verification

- Ran `npm run build`.
- Astro check completed with 0 errors, 0 warnings, and 0 hints.
- Astro build completed successfully and generated `/timeline/index.html`.
- Confirmed the generated timeline HTML contains `data-scroll-timeline`, `.scroll-timeline__progress`, and a bundled module script.
- Reviewed the responsive SCSS for mobile left-rail layout and desktop date/rail/content layout.
- Browser automation is not installed in this repo, so no screenshot-based viewport test was run.
- Existing Sass `@import` deprecation warnings and Shiki language fallback warnings remain unrelated to this change.

### Suggested Commit Message

```
feat: add timeline scroll progress indicator

- Add green progress rail controlled by a CSS custom property
- Add lightweight requestAnimationFrame scroll script
- Preserve static timeline content when JavaScript is unavailable
- Respect reduced-motion preferences
```

## 2026-06-16 - Timeline Visual Polish and Accessibility Pass

**Status**: Complete - Timeline visual hierarchy and responsive polish improved

### What Was Done

- Added a dedicated timeline page header treatment with an eyebrow label and improved spacing.
- Refined date typography for stronger scanability on mobile, tablet, and desktop.
- Improved milestone card hierarchy with a structured header, subtler borders, hover shadow, and clearer content grouping.
- Polished the timeline rail and dots with improved contrast, rounded rail styling, and a calmer current-state dot.
- Reworked timeline type/current labels into visible badge-style text so state is not communicated by colour alone.
- Improved technology tag treatment within timeline cards so badges wrap cleanly and remain readable.
- Added reduced-motion handling for decorative card movement as well as the progress rail transition.

### Technical Decisions

1. **No new dependencies** - The polish uses existing Astro, SCSS, and CSS custom properties.
2. **Accessible state labels** - Type and current state remain text labels, with colour used only as supporting treatment.
3. **Static-first resilience** - Timeline content, dates, dots, and the muted rail remain usable without JavaScript.
4. **Motion restraint** - Hover movement is subtle and disabled for users who prefer reduced motion.

### Verification

- Ran `npm run build`.
- Astro check completed with 0 errors, 0 warnings, and 0 hints.
- Astro build completed successfully and generated `/timeline/index.html`.
- Existing Sass `@import` deprecation warnings and Shiki language fallback warnings remain unrelated to this change.

### Suggested Commit Message

```
style: polish timeline visual hierarchy and accessibility

- Improve timeline header, date, card, rail, dot, and tag styling
- Keep current/type state visible with text labels
- Preserve static-first timeline behaviour
- Respect reduced-motion preferences for decorative effects
```

## 2026-06-16 - Timeline Optional Schema Enhancements

**Status**: Complete - Optional richer timeline fields added

### What Was Done

- Reviewed the existing `timeline` content collection schema.
- Added optional `dateLabel`, `highlight`, and `featured` fields to `src/content/config.ts`.
- Updated `TimelineItem.astro` to display `dateLabel` when present while keeping the underlying date metadata for sorting and machine-readable dates.
- Added an optional highlight callout to timeline cards.
- Marked the current HSE Technical Architect role as featured and added a concise highlight based on existing content.
- Added a broad `May 2026` date label and highlight to the openEHR/FHIR certification entry.
- Left other timeline entries unchanged because they did not need richer display fields.

### Technical Decisions

1. **Optional-only fields** - Existing timeline markdown files continue to build without new frontmatter.
2. **No invented facts** - New highlight text is derived from existing descriptions and achievements.
3. **Date safety** - `dateLabel` changes the visible label only; `startDate` and `endDate` remain the source for sorting and `datetime` values.
4. **Focused schema scope** - Image fields were not added because there are no timeline-specific images ready to use.

### Verification

- Ran `npm run build`.
- Astro check completed with 0 errors, 0 warnings, and 0 hints.
- Astro build completed successfully and generated `/timeline/index.html`.
- Existing Sass `@import` deprecation warnings and Shiki language fallback warnings remain unrelated to this change.

### Suggested Commit Message

```
feat: add optional richer timeline fields

- Add dateLabel, highlight, and featured to timeline schema
- Display optional timeline highlights in milestone cards
- Add broad certification date label without changing sort dates
- Preserve compatibility with existing timeline entries
```

## 2026-06-16 - Duncan-Specific Timeline Content Expansion

**Status**: Complete - Additional professional story milestones added

### What Was Done

- Added seven concise timeline milestones under `src/content/timeline/`.
- Expanded the timeline story to include early technical learning, Python/Flask foundations, healthcare standards learning, FHIR Patient Summary prototype work, Django/API/Angular experiments, medical imaging/report interoperability, and the Astro evidence portfolio rebuild.
- Used broad visible `dateLabel` values for learning and portfolio milestones where exact dates are not the point of the entry.
- Kept content separate from layout by adding Markdown collection entries rather than hardcoding new timeline content in components.
- Adjusted `TimelineItem.astro` so only open-ended work roles are labelled as current; project milestones without an end date no longer show the current badge.

### New Timeline Entries

- `early-technical-learning-full-stack.md`
- `python-flask-portfolio-foundations.md`
- `healthcare-standards-learning.md`
- `fhir-patient-summary-prototype.md`
- `django-rest-angular-api-experiments.md`
- `medical-imaging-reports-interoperability.md`
- `ai-assisted-astro-evidence-portfolio.md`

### Technical Decisions

1. **Broad date labels** - Visible labels use years for portfolio learning milestones to avoid presenting invented exact dates.
2. **Factual tone** - New content is concise and grounded in existing portfolio themes and project work.
3. **Current-state accuracy** - The current badge is now limited to open-ended work roles, not every entry without an end date.
4. **Static content model** - All new story content lives in the timeline content collection.

### Verification

- Ran `npm run build`.
- Astro check completed with 0 errors, 0 warnings, and 0 hints.
- Astro build completed successfully and generated `/timeline/index.html`.
- Confirmed the generated timeline output includes the new milestones.
- Confirmed only the HSE Technical Architect work role renders the current-state badge.
- Reviewed the existing responsive timeline SCSS for mobile single-column behaviour and desktop date/rail/content layout.
- Browser automation is not installed in this repo, so no screenshot-based viewport test was run.
- Existing Sass `@import` deprecation warnings and Shiki language fallback warnings remain unrelated to this change.

### Suggested Commit Message

```
content: expand timeline with portfolio and standards milestones

- Add Duncan-specific technical learning and portfolio milestones
- Cover Flask, Django, FHIR, CDA, XML, JSON, imaging reports, and AI-assisted Astro work
- Use broad date labels for non-exact learning milestones
- Limit current badge to open-ended work roles
```

## 2026-06-16 - Timeline Grid Correction

**Status**: Complete - Timeline cards restored to a proper adjacent content column

### Problem

The timeline cards could appear squeezed around the centre rail because the rail position used rough percentage offsets while each timeline row used a separate fractional grid. That made the rail, marker, and card columns visually fragile, especially at wider viewport sizes.

### What Was Done

- Audited `timeline.astro`, `ScrollTimeline.astro`, `TimelineItem.astro`, and `_timeline.scss`.
- Confirmed the DOM structure was sound: date, marker, and content are sibling elements.
- Reworked `_timeline.scss` so timeline rows use explicit shared CSS variables for date, marker, and content columns.
- Kept the mobile layout as a left rail plus content column.
- Set tablet and desktop layouts to a clear date column, narrow marker/rail column, and flexible content card column.
- Kept the green progress rail, but aligned it from the same column variables instead of approximate layout percentages.
- Ensured cards use `width: 100%` in the content column with a readable desktop max width.

### Technical Decisions

1. **Shared grid variables** - The rail and row grid now derive from the same date/marker/content column values.
2. **Rail independence** - The progress rail is absolutely positioned over the marker column and does not influence card width.
3. **Readable content column** - Cards remain in column 3 on tablet/desktop and use the available content space.
4. **Mobile-first fallback** - Small screens keep the simpler two-column rail/content layout.

### Verification

- Ran `npm run build`.
- Astro check completed with 0 errors, 0 warnings, and 0 hints.
- Astro build completed successfully and generated `/timeline/index.html`.
- Existing Sass `@import` deprecation warnings and Shiki language fallback warnings remain unrelated to this change.

### Suggested Commit Message

```
fix: correct timeline grid and card width

- Align rail position with shared timeline grid columns
- Keep cards in a wide adjacent content column
- Preserve mobile left-rail layout and green progress indicator
- Document the corrected grid pattern
```

## 2026-06-16 - Timeline Editorial Layout Adjustment

**Status**: Complete - Desktop layout moved closer to the intended reference structure

### What Was Done

- Increased the desktop date column and made date labels significantly more prominent.
- Kept the centre rail in a fixed marker column so the progress indicator stays separate from content.
- Changed large-desktop timeline content from boxed cards to broad editorial panels beside the rail.
- Removed desktop hover lift/shadow for timeline content so the layout feels more like a professional history section than a narrow card feed.
- Preserved the mobile left-rail layout and tablet three-column structure.

### Verification

- Ran `npm run build`.
- Astro check completed with 0 errors, 0 warnings, and 0 hints.
- Astro build completed successfully and generated `/timeline/index.html`.
- Existing Sass `@import` deprecation warnings and Shiki language fallback warnings remain unrelated to this change.

### Suggested Commit Message

```
style: widen timeline into editorial desktop layout

- Enlarge desktop date column and content panel
- Keep progress rail isolated in the marker column
- Remove narrow boxed-card feel on large screens
- Preserve responsive mobile timeline layout
```

## 2026-06-16 - Timeline Breakpoint Sizing Fix

**Status**: Complete - Prevented card squeeze at DevTools and medium desktop widths

### What Was Done

- Reviewed screenshots showing the timeline entering the wide desktop layout too early.
- Moved the full editorial three-column layout from the `md`/`lg` range to the `xl` breakpoint.
- Kept the `md` and `lg` viewport range on the readable left-rail/content layout.
- Preserved the large date, centre rail, and broad content treatment for genuinely wide screens.
- Kept the green progress rail aligned to the left rail on smaller widths and the centre marker column on `xl`.

### Verification

- Ran `npm run build`.
- Astro check completed with 0 errors, 0 warnings, and 0 hints.
- Astro build completed successfully and generated `/timeline/index.html`.
- Existing Sass `@import` deprecation warnings and Shiki language fallback warnings remain unrelated to this change.

### Suggested Commit Message

```
fix: delay editorial timeline layout until wide screens

- Keep medium widths on readable left-rail layout
- Move date/rail/content editorial grid to xl breakpoint
- Prevent timeline cards squeezing when viewport is narrowed
```

## 2026-06-16 - Timeline Content Track Width Fix

**Status**: Complete - Large-screen text column given a readable minimum width

### What Was Done

- Investigated a large-screen layout where timeline text still wrapped one word per line.
- Reduced the large-screen date column from `23rem` to `18rem`.
- Changed the large-screen content column to `minmax(38rem, 1fr)` so it cannot collapse into a narrow strip.
- Ensured timeline items and content panels stretch to the available grid width.
- Kept the rail in the centre marker column and preserved the scroll progress indicator.

### Verification

- Ran `npm run build`.
- Astro check completed with 0 errors, 0 warnings, and 0 hints.
- Astro build completed successfully and generated `/timeline/index.html`.
- Existing Sass `@import` deprecation warnings and Shiki language fallback warnings remain unrelated to this change.

### Suggested Commit Message

```
fix: enforce readable timeline content width

- Give xl timeline content a minimum readable track width
- Reduce oversized date column to protect text space
- Keep rail and progress indicator aligned to marker column
```

## 2026-06-16 - Timeline Final QA Pass

**Status**: Complete - Timeline QA checks passed with noted manual-review limitation

### Checks Completed

- Ran `npm run build`; Astro check completed with 0 errors, 0 warnings, and 0 hints.
- Confirmed all static routes still generate, including `/timeline/index.html`.
- Confirmed generated timeline HTML includes the timeline section, entries, badges, rail markup, and progress element.
- Confirmed timeline-specific files do not add inline `style` attributes.
- Confirmed no new dependencies were added to `package.json`.
- Confirmed the progress script uses `requestAnimationFrame`, scroll/resize listeners, and clamps progress between 0 and 100.
- Confirmed reduced-motion CSS disables decorative timeline transitions.
- Confirmed timeline content remains server-rendered and readable without JavaScript.
- Confirmed GitHub Pages assumptions remain unchanged: `astro.config.mjs` still uses `https://ddeveloper72.github.io`, and the deploy workflow still builds with `npm run build` and uploads `dist`.

### Responsive QA Notes

- Mobile and tablet layouts use a left rail plus content column to protect readable card width.
- Large desktop uses the editorial date/rail/content grid only at the `xl` breakpoint.
- Large desktop content track now has a minimum readable width to avoid word-per-line wrapping.
- Technology tags use wrapping styles and do not require horizontal scrolling.

### Known Limitations

- No screenshot-based mobile/tablet/desktop automated test was run because the project does not include Playwright or another browser automation tool.
- Existing Sass `@import` deprecation warnings and Shiki language fallback warnings remain unrelated to the timeline work.
- Pre-existing inline styles still exist elsewhere in older site files, but no inline styles were added to the timeline implementation.

### Suggested Commit Message

```
test: complete timeline qa pass

- Verify build, static output, timeline script, and responsive CSS assumptions
- Document final QA checks and known limitations
- Confirm deployment assumptions remain unchanged
```

## 2026-06-16 - Sitewide Design Consistency Audit

**Status**: Complete - Audit and staged implementation plan prepared

### Audit Findings

The enhanced timeline now has a stronger design language than several older pages. The biggest consistency gap is not colour; it is hierarchy, spacing, and reusable structure.

Pages that now feel visually weaker than the timeline:

- **Home page** - Strong content, but the hero and section transitions feel plainer than the timeline header. It also uses inline styles for CTA alignment and an alternate-background section.
- **Projects page** - Useful grouping, but section headings and cards are still generic. Archived projects use inline styling on `summary` and grid spacing.
- **Case Studies page** - Cards are functional but visually flatter, with inline spacing on muted text and tags.
- **About page** - Content is strong but reads as a long document. It needs page intro, section rhythm, and CTA styling consistency.
- **Contact page and Blog/Notes page** - Need review in the next implementation stage for intro/header alignment and card/list styling.

Reusable components or patterns to update:

- Shared cards in `src/styles/_cards.scss`
- Shared buttons in `src/styles/_buttons.scss`
- Badge/tag/status patterns in `src/styles/_cards.scss` or a new badge partial
- Section/page headers in `src/styles/_layout.scss` or a new `_sections.scss`
- CTA row utilities to replace one-off inline styles
- Optional small Astro components later, such as `PageIntro.astro`, if repetition grows

SCSS partials to update or create:

- Update `_cards.scss` for premium card hierarchy and tag consistency.
- Update `_buttons.scss` only if CTA spacing/focus states need alignment.
- Update `_layout.scss` for section/page intro utilities.
- Consider creating `_sections.scss` for page intro, eyebrow labels, alternate bands, and CTA rows.
- Keep `_timeline.scss` scoped to the timeline implementation.

Design tokens to reuse from timeline work:

- `--color-accent` and `--color-accent-dark` for subtle emphasis.
- `--color-border-light`, `--color-background-alt`, and `--shadow-sm`/`--shadow-lg` for restrained depth.
- Existing spacing tokens, especially `--space-xl`, `--space-2xl`, and `--space-3xl`.
- Existing typography scale, with careful use of larger display text only for page headers and timeline dates.

### Prioritised Changes

1. **Remove inline styles from listing and CTA areas** - Replace with reusable classes for CTA rows, muted text spacing, alternate sections, archived summaries, and grid spacing.
2. **Create consistent page intro treatment** - Bring Home, Projects, Case Studies, About, Blog, and Contact closer to the timeline header style without making every page identical.
3. **Improve shared cards and badges** - Make project/case-study cards feel closer to the refined timeline cards while preserving their scan-friendly grid layout.
4. **Apply to listing pages first** - Projects and Case Studies will benefit most quickly because they depend heavily on cards and tags.
5. **Then update Home and About** - Home needs a refined hero/section rhythm; About needs better content grouping and CTA presentation.

### Staged Implementation Plan

**Stage 1: Shared style foundations**

- Add or update shared classes for page intros, eyebrow labels, CTA rows, alternate sections, archived/details blocks, and utility spacing.
- Remove obvious inline styles from Home, Projects, Case Studies, About, and detail page CTA areas where safe.
- Update docs and run `npm run build`.

**Stage 2: Cards and badges**

- Refine `.card`, `.card-header`, `.card-title`, `.tags`, `.tag`, and `.status` patterns.
- Ensure tag wrapping remains robust and focus states remain visible.
- Keep changes compatible with existing card usage across Home, Projects, Case Studies, Blog, and detail pages.
- Update docs and run `npm run build`.

**Stage 3: Page-specific alignment**

- Apply shared intro/section/card patterns to Projects, Case Studies, Blog/Notes, Contact, Home, and About.
- Avoid large redesigns; improve rhythm, hierarchy, and consistency.
- Update docs and run `npm run build`.

**Stage 4: QA pass**

- Run production build.
- Review generated pages for layout regressions.
- Manually inspect mobile/tablet/desktop in browser where possible.
- Confirm GitHub Pages assumptions remain unchanged.

### Suggested Commit Message

```
docs: audit sitewide design consistency after timeline refresh

- Identify pages and shared patterns needing timeline-aligned polish
- Prioritise shared SCSS foundations, cards, badges, and page intros
- Document staged implementation plan for lightweight Astro-first updates
```

## 2026-06-16 - Sitewide Design Priority Refinement

**Status**: Complete - Next design implementation priorities clarified

### Revised Priorities

1. **Homepage first**

The homepage should inherit the same premium feel as the timeline. It should become the front door to the refreshed design system, with a stronger hero, more intentional featured projects, improved expertise cards, a better case study preview, and cleaner calls to action. A future visual panel could use an abstract interoperability network, FHIR/CDA code motif, or standards-to-systems diagram.

2. **Case Studies second**

Case studies should feel like polished technical articles, not ordinary cards. The target pattern is a large intro block, challenge/approach/outcome summary, standards and technologies strip, key decisions, diagrams or screenshots where useful, and a clear "what this demonstrates" section.

3. **Projects page**

Projects should shift from a generic repo list to a curated evidence wall. Suggested groupings: Healthcare Interoperability, Architecture & API Prototypes, Learning / Teaching Projects, and AI-Assisted Development. Cards should highlight the title, outcome-focused summary, technology badges, status, why it matters, and links to GitHub or case studies.

4. **About page**

The About page should become the human companion to the timeline. It should explain why healthcare interoperability matters, how standards/software/delivery connect, why prototypes are useful, and how documentation, governance, and stakeholder work fit together. Avoid turning it into a long CV.

5. **Blog / Notes page**

Only prioritise this if it will be actively used. If the section remains practical and documentation-led, rename it to Notes, Technical Notes, Interoperability Notes, or Field Notes to better match the site voice.

6. **Contact page**

Keep Contact simple but finished. Add a concise positioning statement around healthcare interoperability, FHIR/CDA implementation, technical architecture, patient access, and practical standards-based delivery. Keep links clean, primarily GitHub and LinkedIn.

### Shared Design System Work

Extract the timeline improvements into shared patterns:

- Premium section spacing
- Large page headings
- Reusable intro panels
- Consistent card styling
- Consistent badge styling
- Green accent treatment
- Muted border and rail details
- Responsive grid behaviour
- Visible focus and restrained hover states

### Suggested Commit Message

```
docs: refine sitewide design rollout priorities

- Prioritise homepage, case studies, projects, about, notes, and contact
- Capture evidence-wall and editorial case-study direction
- Define shared design system patterns to extract from timeline work
```

## 2026-06-16 - Homepage Design System Alignment

**Status**: Complete - Homepage brought closer to the refreshed timeline design language

### What Was Done

- Added shared section and card utilities in `src/styles/_layout.scss` and `src/styles/_cards.scss`.
- Created reusable patterns for alternate sections, page eyebrows, split section headers, CTA rows, evidence grids, evidence cards, card kickers, and improved badges/status labels.
- Reworked the homepage hero into a stronger two-column layout with a standards-to-systems interoperability visual panel.
- Updated featured projects into evidence-style cards with clearer status, tags, and a short "why it matters" line.
- Updated the expertise section to use the same card hierarchy and green accent treatment.
- Updated featured case studies to feel more editorial and better aligned with the timeline's story-driven presentation.
- Removed homepage inline styles for CTA alignment and alternate section background.

### Technical Decisions

1. **Shared first** - The homepage changes use reusable classes so projects, case studies, about, notes, and contact can adopt the same design language later.
2. **CSS-native visual** - The hero visual uses semantic HTML and scoped CSS rather than adding an image dependency.
3. **Evidence framing** - Project and case-study cards now present work as proof of architecture decisions, not just a generic listing.
4. **Responsive protection** - Evidence grids use `minmax(0, 1fr)` and wrapping badges to reduce the risk of narrow text columns and horizontal overflow.
5. **Motion restraint** - Card hover lift respects `prefers-reduced-motion`.

### Verification

- Ran `npm run build`.
- Astro check completed with 0 errors, 0 warnings, and 0 hints.
- Astro build completed successfully and generated 24 pages, including `/index.html`.
- Existing Sass `@import` deprecation warnings and Shiki language fallback warnings remain unrelated to this change.

### Suggested Commit Message

```
style: align homepage with refreshed timeline design

- Add shared page intro, section, evidence grid, and card utilities
- Rework homepage hero with an interoperability visual panel
- Present featured projects and case studies as evidence cards
- Remove homepage inline layout styles
```

## 2026-06-16 - Projects Evidence Wall

**Status**: Complete - Projects listing reorganised around technical evidence themes

### What Was Done

- Reworked `src/pages/projects/index.astro` from status-driven sections into a curated evidence wall.
- Added primary project grouping by:
  - Healthcare Interoperability
  - Architecture & API Prototypes
  - Learning & Teaching Projects
  - Applied Systems & Experiments
- Kept status visible inside each project card rather than using it as the page's organising principle.
- Reused the shared page intro, eyebrow, split section header, evidence grid, evidence card, card kicker, tag, and status patterns.
- Removed inline styles from archived project controls and grid spacing.
- Added a simple categorisation helper so projects land in one primary section, with teaching projects prioritised when metadata includes training or introductory content.

### Technical Decisions

1. **Evidence over repository list** - The page now tells a technical architecture story rather than listing projects by lifecycle state.
2. **One primary bucket** - Projects are assigned to one section to avoid duplicated cards and confusing scan paths.
3. **Status still visible** - Active, in-progress, completed, and archived states remain available on the cards.
4. **Shared styling** - No new visual system was invented for Projects; it reuses the homepage/timeline-aligned primitives.

### Verification

- Ran `npm run build`.
- Astro check completed with 0 errors, 0 warnings, and 0 hints.
- Astro build completed successfully and generated 24 pages, including `/projects/index.html`.
- Existing Sass `@import` deprecation warnings and Shiki language fallback warnings remain unrelated to this change.

### Suggested Commit Message

```
style: turn projects page into curated evidence wall

- Group projects by technical evidence themes instead of status
- Reuse shared page intro, section, grid, and evidence-card patterns
- Keep project status and case-study labels visible inside cards
- Remove inline archived-project layout styles
```

## 2026-06-16 - NMPC And HSE CTS Project Entries

**Status**: Complete - Two terminology and medicines catalogue project experiences added

### What Was Done

- Reviewed local repositories for `ddeveloper72/nmpc-testing-app` and `ddeveloper72/hse-cts-flask-client`.
- Added `src/content/projects/nmpc-testing-app.md`.
- Added `src/content/projects/hse-cts-flask-client.md`.
- Grounded descriptions, technologies, dates, and feature summaries in the local README and project documentation from each repository.
- Positioned both entries as healthcare interoperability and terminology-service evidence.

### Project Summary

**NMPC Testing Application**

- Flask testing and integration platform for the Irish National Medicinal Product Catalogue API.
- Covers read-only FHIR terminology operations, OAuth2, six-concept NMPC product model support, external mappings, hierarchy browsing, product comparison, API exploration, pytest, and Docker deployment readiness.

**HSE CTS Flask Explorer**

- Local Flask client for securely exploring the HSE Central Terminology Service FHIR API.
- Covers SNOMED CT, LOINC, UCUM, CodeSystem browsing, ValueSet expansion, exact code lookup, UCUM search, and LOINC-backed observation-to-unit discovery.

### Verification

- Ran `npm run build`.
- Astro check completed with 0 errors, 0 warnings, and 0 hints.
- Astro build completed successfully and generated 26 pages.
- Confirmed generated routes for `/projects/nmpc-testing-app/` and `/projects/hse-cts-flask-client/`.
- Existing Sass `@import` deprecation warnings and Shiki language fallback warnings remain unrelated to this change.

### Suggested Commit Message

```
content: add NMPC and HSE CTS project experiences

- Add NMPC Testing Application project entry
- Add HSE CTS Flask Explorer project entry
- Document terminology, OAuth2, FHIR, Docker, and read-only API exploration work
```
