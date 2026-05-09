---
title: "FHIR Patient Summary API"
description: "RESTful API implementation for generating and validating HL7 FHIR International Patient Summary (IPS) documents"
tags: ["FHIR", "Healthcare", "Interoperability", "API"]
technologies: ["Python", "Django REST Framework", "FHIR", "PostgreSQL"]
repository: "https://github.com/duncanfalconer/fhir-patient-summary-api"
status: "completed"
featured: true
publishDate: 2025-03-15
order: 1
---

A Django REST Framework implementation providing endpoints for creating, validating, and querying HL7 FHIR International Patient Summary (IPS) documents.

## Key Features

- RESTful API endpoints for FHIR IPS resources
- Validation against FHIR R4 specifications
- Support for multiple FHIR profiles
- OpenAPI/Swagger documentation
- Comprehensive test coverage

## Technical Implementation

Built using Django REST Framework with custom serializers for FHIR resources. Implements validation logic to ensure compliance with the IPS implementation guide.

## Standards & Specifications

- HL7 FHIR R4
- International Patient Summary (IPS)
- RESTful API design principles

## Impact

Provides a reference implementation for healthcare systems implementing cross-border patient data exchange using the IPS specification.
