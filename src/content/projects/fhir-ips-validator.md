---
title: "FHIR IPS Bundle Validator"
description: "Production-ready Streamlit web application validating FHIR IPS bundles and CDA documents with Docker deployment for enterprise healthcare organizations"
tags: ["FHIR", "IPS", "Validation", "Healthcare", "Interoperability", "CDA", "Streamlit", "Docker"]
technologies: ["Python 3.12", "Streamlit", "Docker", "Docker Compose", "Kubernetes", "FHIR R4", "Azure FHIR", "EHDS Matchbox", "Gazelle EVS", "CDA R2"]
repository: "https://github.com/ddeveloper72/fhir-ips-validator"
demo: "https://ddeveloper72-fhir-ips-validator-streamlit-app-ocgntm.streamlit.app/"
status: "active"
featured: true
publishDate: 2026-05-16
order: 2
---

A comprehensive, production-ready web application for validating FHIR International Patient Summary (IPS) bundles and CDA documents. Deployed as a public demo on Streamlit Cloud and available as a Docker container for private enterprise deployment with full HIPAA/GDPR compliance.

## Purpose

Healthcare developers and implementers need reliable validation before deploying IPS bundles or CDA documents for cross-border exchange. This tool provides instant feedback using three specialized validators, catching compliance issues early and ensuring successful MyHealth@EU and EHDS implementations.

## Three Validation Services

### 1. Azure FHIR Service (JSON)
- REST API-based FHIR R4 validation via Azure Health Data Services
- Generic bundle validation
- Enterprise-grade Azure integration

### 2. EHDS Matchbox FHIR IPS Validator (JSON)
- **21 specialized IPS profiles** including Bundle (IPS) 1.1.0 and 2.0.0
- Validates all IPS sections: Medication Summary, Allergies, Problem List, Immunizations, Procedures, Medical Devices, Diagnostic Results, Vital Signs, Pregnancy, Social History, Plan of Care, Advance Directives
- Fast validation (~10 seconds) with human-readable diagnostics
- FHIR expression paths for precise error location

### 3. Gazelle EVS (XML)
- **Two platforms**: eHDSI Gazelle (49 validators), EHDS Gazelle (32 validators)
- **Strict vs Permissive modes**: Full compliance or basic CDA R2 structure
- **Intelligent auto-detection**: Analyzes templateId elements to recommend validator
- Supports Patient Summary, ePrescription, eDispensation, Hospital Discharge Reports, Laboratory Reports, Imaging Reports, and more

## Key Features

### Smart Validation
- **Drag-and-drop file upload** with 10MB limit
- **Auto-format detection** - JSON routes to FHIR validators, XML to CDA validators
- **Pre-validation checks** - File size, JSON/XML format with line-specific errors
- **API timeout handling** - 60-second timeout prevents hanging

### Detailed Error Reports
- **Tabbed interface** with Errors, Warnings, and Information
- **Rich diagnostics**: Line numbers, FHIR expression paths, context-specific help
- **Multiple formats**: XSD errors, Schematron results, FHIR OperationOutcome parsing
- **Persistent reports**: Links to Gazelle web UI for full CDA validation results

### Production-Ready
- **Live demo on Streamlit** - No installation required
- **Example files included** - Try validation immediately
- **Network error recovery** - User-friendly error messages
- **Rate limit handling** - Graceful API throttling

## Technical Implementation

Built with Python 3.12 and Streamlit, integrating three REST/SOAP APIs with intelligent error parsing and tabbed result display. Validates against official HL7 IPS profiles and eHDSI/EHDS CDA specifications.

### Docker Deployment

**Production-ready containerized deployment** for healthcare organizations requiring:
- **Data Privacy**: On-premise or private cloud deployment (HIPAA/GDPR compliant)
- **No Rate Limits**: Use your own API credentials without sharing
- **Enterprise Ready**: Docker Compose, Kubernetes, and cloud deployment options
- **Cost Control**: Only pay for your own API usage

**Deployment Options:**
1. **Docker Compose** - Quick deployment for development and testing
2. **Docker Run** - Simple single-container deployment
3. **Kubernetes** - Production-scale with high availability and load balancing

Includes comprehensive security best practices, secrets management with environment variables, health checks, resource limits, and automated API key expiry monitoring.

## Standards & Compliance

- **HL7 FHIR R4** - International Patient Summary profiles
- **IPS Implementation Guide** - Version 1.1.0 and 2.0.0
- **CDA R2** - Clinical Document Architecture
- **eHDSI Wave 7-10** - Cross-border eHealth standards
- **EHDS** - European Health Data Space requirements
- **MyHealth@EU** - Patient Summary exchange specifications

## Use Cases

- Pre-deployment validation for MyHealth@EU National Contact Points
- Development and testing of Xt-EHR Project implementations (WP6.1, WP6.2)
- Quality assurance for cross-border patient summaries
- Educational tool for understanding IPS structure and CDA specifications
- Conformance testing for EHDS implementations
- ePrescription and eDispensation document validation

## Live Demo

**[Try it now](https://ddeveloper72-fhir-ips-validator-streamlit-app-ocgntm.streamlit.app/)** - No installation required!
