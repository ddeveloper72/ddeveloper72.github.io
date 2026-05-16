---
title: "Gazelle HL7 v2 Validator"
description: "Web application for validating HL7 v2 Healthlink XML files using the Gazelle EVS API with auto-correction and PDF reporting"
tags: ["HL7 v2", "Healthcare", "Validation", "Integration", "Gazelle"]
technologies: ["Python", "Flask", "Bootstrap", "Playwright", "Gazelle EVS API"]
demo: "https://hl7-v2-message-validator-a1efcbc737cd.herokuapp.com/"
status: "active"
featured: true
publishDate: 2025-11-15
order: 5
---

A professional web application for validating HL7 v2 Healthlink XML files using the Gazelle EVS (External Validation Service) API, featuring intelligent auto-correction and comprehensive PDF reporting.

## Purpose

HL7 v2 remains the backbone of healthcare integration worldwide. This validator helps developers and integration engineers quickly validate message conformance, identify issues, and automatically correct common errors during development and troubleshooting.

## Key Features

**Core Validation**
- Upload HL7 v2 XML files via drag-and-drop or file browser
- Integration with Gazelle EVS API for standards-compliant validation
- Real-time validation feedback with detailed error analysis
- Support for multiple HL7 v2 versions and profiles

**Intelligent Auto-Correction**
- Automatic BOM (Byte Order Mark) removal
- XML declaration insertion and correction
- HL7 table code fixes for common errors
- Required field population for empty elements
- One-click correction application

**Professional Reporting**
- Comprehensive validation reports with error categorization
- PDF export using Playwright (headless browser rendering)
- Emoji support in PDF reports for visual clarity
- Detailed error messages with context
- Pass/fail summary statistics

**Security & Privacy**
- User-provided API keys (session-only storage)
- No credentials persisted to database
- Encrypted Flask sessions
- SSL verification enabled
- Secure Gazelle API integration

## Technical Implementation

**Backend Architecture**
- **Flask**: Python web framework (Python 3.12)
- **Gazelle EVS API**: Industry-standard HL7 validation service
- **Playwright**: Headless browser for PDF generation
- **Session Management**: Encrypted user sessions for API key storage

**Frontend Design**
- **Bootstrap 5.3**: Modern, responsive UI framework
- **JavaScript**: Interactive file upload and validation flows
- **Drag-and-Drop**: User-friendly file upload interface
- **Real-time Feedback**: Immediate validation status updates

**Auto-Correction Module**
Custom Python module (`hl7_corrector.py`) implementing intelligent error correction:
- XML structure validation and repair
- HL7 code table conformance fixes
- Field insertion for required empty elements
- BOM and encoding issue resolution

## Use Cases

**Development & Testing**
- Validate HL7 v2 interfaces during development
- Test message conformance before deployment
- Identify integration issues early in development cycle

**Integration Support**
- Troubleshoot live interface issues
- Validate vendor-generated messages
- Support implementation projects

**Training & Education**
- Learn HL7 v2 message structure
- Understand validation requirements
- Explore Gazelle validation capabilities

## Deployment Architecture

- **Hosting**: Heroku cloud platform
- **Buildpacks**: Custom Playwright + Python buildpacks
- **Stack**: heroku-22 for compatibility
- **Runtime**: Python 3.12
- **Scalability**: Stateless design for horizontal scaling

## Value Proposition

Reduces time spent troubleshooting HL7 v2 integration issues by:
- Providing immediate validation feedback
- Automatically correcting common errors
- Generating professional documentation (PDF reports)
- Eliminating need for local Gazelle installation
- Supporting distributed teams with web access

## Technical Highlights

- **API Integration**: Seamless Gazelle EVS REST API integration
- **Error Handling**: Comprehensive validation error analysis
- **PDF Generation**: Playwright-based browser rendering
- **Session Security**: Encrypted session-based API key storage
- **Modern UX**: Bootstrap 5.3 with drag-and-drop uploads
- **Auto-Correction**: Intelligent HL7 v2 error fixing

*Note: Internal development tool for HL7 v2 validation. Repository is private.*
