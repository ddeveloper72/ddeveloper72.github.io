---
title: "Django NCP - European eHealth National Contact Point"
description: "Django 5.2 demonstration application for EU cross-border healthcare data exchange implementing epSOS/eHDSI standards"
tags: ["Django", "Healthcare", "MyHealth@EU", "FHIR", "epSOS", "eHDSI", "CDA", "Cross-border"]
technologies: ["Python 3.12", "Django 5.2", "PostgreSQL", "Azure FHIR", "Azure AD", "SCSS", "Heroku"]
repository: "https://github.com/ddeveloper72/Django_NCP"
demo: "https://django-ncp-794688432a7f.herokuapp.com/"
status: "active"
featured: true
publishDate: 2025-09-01
order: 6
---

Comprehensive Django 5.2 demonstration application for European cross-border healthcare data exchange, implementing epSOS/eHDSI standards for Patient Summary and clinical document exchange using CDA R2 and FHIR R4.

> **DEMONSTRATION APPLICATION**: This project demonstrates EU healthcare interoperability concepts. Not intended for production clinical use.

## Purpose

MyHealth@EU enables EU citizens to access their health data across borders when traveling or relocating within the European Union. This application demonstrates how National Contact Points (NCPs) serve as secure gateways for cross-border health data exchange between member states, implementing official EU eHealth specifications.

## System Architecture

**Multi-Module Django Application** with specialized healthcare components:
- **eHealth Portal**: Patient-facing UI for document viewing and search
- **NCP Gateway**: Cross-border API for NCP-to-NCP communication (demo)
- **Patient Data**: Clinical data services with CDA/FHIR parsing
- **FHIR Services**: FHIR R4 admin interfaces with Azure Healthcare APIs
- **Authentication**: HSE-themed healthcare professional authentication
- **SMP Client**: Certificate validation and service metadata integration
- **Translation Manager**: Master Value Catalogue terminology management

## Demonstration Capabilities

**Supported Clinical Documents** (Demo):
- **Patient Summary (PS)**: IPS-compliant cross-border patient summaries
- **Laboratory Results**: Clinical lab data integration and display
- **Hospital Discharge Reports**: Care continuity documentation
- **Medical Imaging Reports**: Radiology report exchange

**Future Roadmap**:
- ePrescription (eP) - Electronic prescription cross-border exchange
- eDispensation (eD) - Pharmacy dispensation records

**Clinical Document Processing**:
- **CDA R2**: Level 1 (PDF) and Level 3 (structured XML) parsing
- **FHIR R4**: Azure Healthcare APIs integration for modern interoperability
- **Terminology**: Master Value Catalogue (MVC) for code system translation
- **Multi-language**: English/Irish clinical terminology support

## Key Features

**Cross-Border Exchange**
- NCP endpoint simulation for EU member states (Ireland, Belgium, Portugal demo)
- Patient lookup and identification across borders
- Secure clinical document exchange using epSOS/eHDSI protocols
- X.509 certificate validation for SMP integration
- Country-specific OID (Object Identifier) management

**Clinical Data Management**
- CDA R2 document parsing and validation
- FHIR R4 Patient Summary management
- Azure FHIR Service connectivity
- Demographics and patient matching
- Clinical terminology translation

**Security & Compliance**
- **Transport Security**: TLS 1.2+ for all communications
- **Authentication**: Azure AD integration for healthcare professionals
- **Session Management**: Encrypted patient sessions with automatic cleanup
- **Audit Trail**: GDPR-compliant logging of all clinical data access
- **Data Protection**: Encrypted storage, consent-based exchange
- **Certificate Management**: X.509 certificate validation

**User Experience**
- HSE-themed professional interface
- Patient search and document retrieval
- Multi-document type support
- Responsive SCSS-based design (7-1 pattern)
- Role-based access control (RBAC)

## Technical Implementation

**Backend Architecture**
- **Django 5.2.7**: Modern Python web framework
- **PostgreSQL 13+**: Production-grade relational database
- **Azure Healthcare APIs**: FHIR R4 clinical data storage
- **Azure AD**: Enterprise authentication for FHIR services
- **Service Layer Pattern**: Business logic separation for testability

**Frontend Design**
- **SCSS (7-1 Pattern)**: Modular, maintainable styling architecture
- **WhiteNoise**: Static file serving for production
- **WCAG 2.2 Compliant**: Accessible to healthcare professionals
- **Responsive Design**: Mobile-first healthcare portal

**Testing & Quality**
- **pytest**: Comprehensive unit and integration testing
- **Coverage Reports**: Code quality monitoring
- **Service Layer Testing**: Business logic validation
- **Standards Compliance**: Healthcare development patterns

**Deployment**
- **Heroku**: Cloud platform deployment
- **Gunicorn**: WSGI HTTP server
- **PostgreSQL Add-on**: Managed database
- **Automated Migrations**: Django ORM database management
- **Environment Variables**: Secure configuration management

## EU Member State Demo Integration

| Country | Status | Root OID | Supported Documents |
|---------|--------|----------|---------------------|
| 🇮🇪 Ireland | Demo | 2.16.372.1.100.1.1 | Patient Summary (PS) |
| 🇧🇪 Belgium | Demo | 2.16.840.1.113883.1.1 | Patient Summary (PS) |
| 🇵🇹 Portugal | Demo | 2.16.620.1.101.10.1 | Patient Summary (PS) |

*Note: Demonstrates cross-border exchange concepts. Not connected to actual national healthcare systems.*

## Healthcare Standards Implementation

**epSOS/eHDSI Standards**
- Patient Summary specification
- Cross-border identification and authentication
- Clinical document exchange protocols
- Service metadata publishing (SMP integration)

**HL7 Standards**
- **FHIR R4**: Modern RESTful healthcare API
- **CDA R2**: Clinical Document Architecture for structured documents
- **Terminology Services**: SNOMED CT, LOINC, ICD-10

**EU Regulations**
- **GDPR**: General Data Protection Regulation compliance patterns
- **EU AI Act**: Minimal risk classification, transparency documentation

## Development Standards

**Code Quality Requirements**:
1. **Service Layer Pattern**: Extract business logic to testable service classes
2. **Unit Testing**: Mandatory tests for all views and services
3. **SCSS Architecture**: No inline styles, modular components only
4. **No Hard-coded Clinical Data**: All terminology from Master Value Catalogue
5. **WCAG 2.2 Compliance**: Full accessibility for healthcare professionals

## Use Cases

**Healthcare Integration Development**
- Learn epSOS/eHDSI implementation patterns
- Understand NCP architecture and workflows
- Explore CDA R2 and FHIR R4 integration
- Practice Azure FHIR Service connectivity

**Education & Training**
- Demonstrate MyHealth@EU cross-border exchange
- Teach EU healthcare interoperability standards
- Explore Patient Summary specifications
- Understand healthcare terminology translation

**Proof of Concept**
- Prototype NCP functionality
- Test cross-border document exchange
- Validate clinical data workflows
- Demonstrate Azure FHIR integration

## Value Proposition

Comprehensive demonstration of EU healthcare interoperability that:
- **Showcases epSOS/eHDSI Standards**: Real implementation of official EU specifications
- **Multi-Module Architecture**: Production-quality modular design patterns
- **Azure Integration**: Modern cloud healthcare API connectivity
- **Security Best Practices**: GDPR compliance, encrypted sessions, audit trails
- **Professional Testing**: pytest-based quality assurance
- **Accessible Design**: WCAG 2.2 compliant healthcare professional interface

## Technical Highlights

- **Django 5.2 Modern Framework**: Latest Python web development stack
- **7-Module Architecture**: Specialized healthcare components
- **CDA & FHIR Dual Support**: Legacy and modern standards integration
- **Azure Healthcare APIs**: Enterprise cloud FHIR services
- **PostgreSQL Database**: Production-grade data persistence
- **SCSS 7-1 Pattern**: Professional frontend architecture
- **pytest Testing Framework**: Comprehensive quality assurance
- **Heroku Deployment**: Cloud-native healthcare application
- **EU AI Act Compliant**: Transparent AI-assisted development documentation

## Related Projects

- **[DomiSMP](https://github.com/ddeveloper72/IESMP)**: Service Metadata Publisher (Java-based SMP implementation)
- **[OpenNCP](https://github.com/openncp/openncp)**: Reference NCP implementation (Java)
- **[MyHealth@EU](https://www.ehealthireland.ie/technology-and-transformation-functions/standards-and-shared-care-records-sscr/myhealth-eu/)**: Official EU eHealth portal

*Built with ❤️ for European Healthcare Interoperability*
