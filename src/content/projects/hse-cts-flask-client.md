---
title: "HSE CTS Flask Explorer"
description: "Local Flask client for securely exploring the HSE Central Terminology Service FHIR API, including SNOMED CT, LOINC, UCUM, CodeSystems, and ValueSets"
tags: ["HSE CTS", "FHIR", "Terminology", "SNOMED CT", "LOINC", "UCUM", "Flask", "OAuth2"]
technologies: ["Python", "Flask 3", "FHIR R4", "OAuth2", "Requests", "Jinja2", "Bootstrap 5", "Gunicorn", "HSE CTS API"]
repository: "https://github.com/ddeveloper72/hse-cts-flask-client"
status: "active"
featured: false
publishDate: 2026-06-11
order: 7
---

A local Flask web application for exploring the HSE Central Terminology Service (CTS) FHIR API. The project provides a secure, practical interface for searching terminology content, validating codes, expanding ValueSets, and inspecting FHIR responses without exposing CTS credentials in the browser.

## Purpose

Healthcare developers and informatics users often need a safe way to inspect terminology services before wiring them into applications. This project wraps the HSE CTS API with a server-side Flask application so users can explore SNOMED CT, LOINC, UCUM, CodeSystems, and ValueSets while keeping OAuth2 credentials local and server-side.

## Core Workflows

- Search SNOMED CT concepts by clinical term
- Look up exact SNOMED CT, LOINC, and UCUM codes
- Browse available CodeSystems and ValueSets
- Expand ValueSets through CTS
- Search UCUM units directly by unit text, such as `mercury` or `kg/m2`
- Find likely UCUM units for clinical observations using LOINC `EXAMPLE_UCUM_UNITS`

## Technical Implementation

The application follows a server-side proxy pattern:

- Browser requests go to Flask
- Flask handles OAuth2 client-credentials authentication
- Authenticated FHIR requests are sent from the server to CTS
- Jinja templates render searchable, readable terminology results
- Raw FHIR JSON remains available for debugging and implementation reference

The local structure separates API authentication, FHIR client logic, operation helpers, route handlers, templates, static assets, and documentation.

## Terminology Features

The project supports practical terminology exploration workflows including exact code lookup, direct UCUM search, CodeSystem browsing, ValueSet browsing, and LOINC-backed observation-to-unit discovery.

For example, a search for a clinical observation such as "body mass index" can locate the relevant LOINC observation, inspect its `EXAMPLE_UCUM_UNITS`, and show likely UCUM units such as `kg/m2`.

## Security And Use Constraints

The project is designed for local development and terminology exploration:

- CTS credentials stay in `.env`
- Client secrets are never sent to the browser
- OAuth2 access tokens are cached and refreshed server-side
- The expected CTS account is read-only
- The repository should not contain live credentials, tokens, or exported terminology datasets
- The application is not a clinical system

## What This Demonstrates

This project demonstrates secure terminology-service access, FHIR operation design, OAuth2 proxy architecture, practical developer tooling, and the ability to turn standards infrastructure into something easier to inspect, test, and explain.
