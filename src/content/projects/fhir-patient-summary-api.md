---
title: "FHIR Patient Summary Application"
description: "Flask web application for creating, managing, and converting FHIR Patient Summary bundles with CRUD operations on HAPI FHIR server"
tags: ["FHIR", "Healthcare", "Interoperability", "IPS", "Flask", "Python"]
technologies: ["Python", "Flask", "FHIR R4", "HTML", "JavaScript", "HAPI FHIR"]
repository: "https://github.com/ddeveloper72/fhir-patient-summary"
demo: "https://ddeveloper72-fhir-app-2d30b05e8d2c.herokuapp.com/"
status: "active"
featured: true
publishDate: 2025-03-03
order: 1
---

A full-stack Flask web application for creating FHIR Patient Summary document bundles and managing patient data on the HAPI FHIR test server. The application demonstrates practical implementation of FHIR IPS specifications with complete CRUD operations.

## Key Features

- **Generate Patient Document Bundles** - Create FHIR IPS-compliant JSON bundles
- **Search & Retrieve** - Find patient records from HAPI FHIR test server with dropdown selection
- **View Patient Information** - Display FHIR patient data as JSON and rendered HTML
- **Edit Patient Records** - Update patient information through web forms
- **Create New Patients** - Add synthetic patient data to HAPI FHIR server
- **FHIR to CDA Conversion** (🚧 Work in Progress) - Convert FHIR JSON bundles to HL7 CDA-3 documents

## Technical Implementation

Built with Python Flask backend integrating with the public HAPI FHIR test server. Features form-based editing, JSON data handling, and server-side FHIR resource management. Deployed on Heroku for live demonstration.

The application uses `fhir.resources` Python library and `SyncFHIRClient` for FHIR operations, with a responsive HTML/JavaScript frontend.

## Standards & Specifications

- **HL7 FHIR R4** - Core FHIR specification
- **International Patient Summary (IPS)** - Patient summary structure and profiles
- **HAPI FHIR** - Open-source Java FHIR server integration
- **HL7 CDA Level 3** (in development) - Clinical Document Architecture conversion

## Live Demo

Deployed on Heroku: [FHIR Patient Summary App](https://ddeveloper72-fhir-app-2d30b05e8d2c.herokuapp.com/)

## Learning & Development

This project demonstrates practical FHIR API integration, patient summary bundle creation, and the complexities of converting between FHIR and CDA formats—essential skills for MyHealth@EU and cross-border healthcare interoperability implementations.
