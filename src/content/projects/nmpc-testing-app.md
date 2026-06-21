---
title: "NMPC Testing Application"
description: "Flask testing and integration platform for exploring the Irish National Medicinal Product Catalogue API with read-only FHIR terminology operations"
tags: ["NMPC", "FHIR", "Terminology", "Healthcare", "Flask", "OAuth2", "Docker", "Medicinal Products"]
technologies: ["Python 3.11", "Flask 3", "FHIR R4", "OAuth2", "Bootstrap 5", "Docker", "Gunicorn", "pytest", "HSE NMPC API"]
repository: "https://github.com/ddeveloper72/nmpc-testing-app"
status: "active"
featured: true
publishDate: 2026-06-12
order: 3
---

A comprehensive testing and integration application for the Irish National Medicinal Product Catalogue (NMPC) API. The project provides a professional Flask interface for exploring NMPC terminology content, validating API behaviour, and understanding medicinal product concepts through safe, read-only FHIR operations.

## Purpose

The NMPC provides an authoritative medicinal product catalogue for Ireland, with FHIR terminology operations and mappings to external systems such as HPRA, PCRS, ATC, and GTIN. This project was built to make the API easier to explore, test, and explain without exposing credentials in the browser or performing invasive operations against the service.

## Key Features

- Product search with pagination and product detail pages
- FHIR terminology operations including `$lookup`, `$expand`, `$translate`, `$subsumes`, and `$validate-code`
- Six-concept NMPC data model support: VTM, VMP, VMPP, ATM, AMP, and AMPP
- External mapping views for HPRA, PCRS, ATC, and GTIN
- Hierarchy browser for navigating medicinal product relationships
- Product comparison workflow for side-by-side review
- Interactive API explorer for implementation testing
- Dashboard interface with quick access to testing tools and data model guidance

## Technical Implementation

The application uses Flask as a secure server-side proxy between the browser and the NMPC API. OAuth2 client credentials are handled on the server, access tokens are cached and refreshed, and browser clients interact only with the local Flask application.

The codebase includes API client modules, service-layer helpers, route blueprints, Jinja templates, Bootstrap styling, and a pytest-based test suite covering unit, integration, performance, data-model, authentication, and file-format scenarios.

## Deployment And Quality

The repository includes Docker deployment assets for repeatable local or team use:

- Multi-stage Dockerfile
- Docker Compose configuration
- Non-root runtime user
- Health checks
- Resource limits
- GitHub Actions workflow for Docker build and security scanning
- Environment templates for credential configuration

The project also includes installation scripts and documentation to support developers working in enterprise Windows environments.

## Read-Only Safety Model

The application is deliberately non-invasive:

- Uses read-only API operations for exploration and testing
- Avoids creating, modifying, or deleting NMPC resources
- Provides disclaimers and licensing reminders
- Encourages rate-limit awareness and response caching
- Keeps API credentials in local environment variables

## What This Demonstrates

This project demonstrates healthcare terminology integration, FHIR API testing, secure OAuth2 proxy design, practical documentation, Docker deployment readiness, and careful handling of licensed health data access.
