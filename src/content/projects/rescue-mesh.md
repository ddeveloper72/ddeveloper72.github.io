---
title: "RescueMesh Mission Platform"
description: "Astro front end Simulation-first mission dashboard for dangerous, GPS-denied, partially inaccessible environments with a Django REST API backend for managing mission parameters"
tags: ["Misson Control", "GPS-denied environments", "multi-hop relay networks", "Share mapped terrain", "NFC-readable black box", "Collapsed Building Search", "Cave Rescue", "Flooded Structure", "Industrial Inspection", "Archaeological Exploration"]
technologies: ["Astro", "Django", "Docker", "GutHub", "Heroku", "TypeScript", "Python", "PowerShell", "JavaScript", "SQLite3", "Tailwind CSS"]
repository: "https://github.com/ddeveloper72/rescuemesh-mission-platform"
status: "in-progress"
featured: true
publishDate: 2026-05-31
order: 3
---

# RescueMesh Mission Platform

**Simulation-first mission dashboard for dangerous, GPS-denied, partially inaccessible environments**

## Overview

RescueMesh is a simulation-first mission platform that demonstrates how autonomous agents (drones, ground robots, relay nodes, sensors, and AI services) cooperate to:

- Map unknown terrain in GPS-denied environments
- Search for survivors in collapsed buildings, caves, tunnels, and flooded structures
- Maintain communications through multi-hop relay networks
- Handle hardware failures gracefully
- Generate structured AI prompts for human-reviewed decision support

**This is a demonstration and training platform**, not a real-time drone control system. No physical drone hardware is required for the MVP.

## Safety and Purpose

RescueMesh is safety-focused and non-weaponised. It models autonomous mapping, sensing, communications and operator decision support for rescue, inspection, environmental and heritage exploration scenarios.

Beyond rescue and industrial inspection, RescueMesh can model archaeological and heritage exploration where fragile, inaccessible spaces must be mapped without unnecessary human entry or disturbance.

## Why Mesh Relay Communications?

In dangerous GPS-denied environments such as caves, collapsed buildings, or flooded structures, autonomous agents often lose direct contact with mission control. RescueMesh models a **mesh relay network** where agents can:

- **Relay data through nearby agents** when direct communication is blocked or degraded
- **Extend the mission reach** by deploying static relay nodes at strategic positions
- **Share mapped terrain** so one agent's discoveries help others navigate safely
- **Land and become relay nodes** when battery reserves are low or signal strength is weak
- **Continue as mission assets** even after primary failures (beacon mode, NFC-readable black box, last-known sensor data)

The platform visualises the **communication chain, agent status, map confidence, and relay network health** throughout the mission. This mesh-based approach is critical for operations where line-of-sight radio links are impossible and agents must cooperate to maintain connectivity.

## Use Cases

- **Collapsed Building Search** - Life safety operations in unstable structures
- **Cave Rescue** - Mapping and path discovery in underground systems
- **Flooded Structure** - Amphibious inspection and obstruction mapping
- **Industrial Inspection** - Confined space hazard assessment
- **Archaeological Exploration** - Non-destructive mapping of fragile heritage sites

## Key Features

### Agent-Based Architecture
Model diverse hardware types (drones, robots, sensors, relays, AI services) as cooperating agents rather than drone-only systems.

### Simulation-First
Deterministic, reproducible mission scenarios without requiring real hardware. Perfect for:
- Algorithm development
- Operator training
- Failure scenario exploration
- AI model testing

### Failure Modeling
Realistic simulation of:
- Battery degradation and drain
- Sensor failures (dust, water, impact)
- Communication loss and intermittency
- Tactical sacrifice decisions (land as relay)
- Black-box recovery scenarios

### AI Integration
Generate structured prompts for AI analysis with:
- Thermal detection analysis
- Audio pattern recognition
- WiFi/Bluetooth device scanning
- Confidence scoring
- Human review requirements

## Interoperability Philosophy

RescueMesh uses **structured, interoperable mission data** inspired by healthcare interoperability standards (HL7 FHIR, CDA), IoT standards (OGC SensorThings, W3C SOSA/SSN), and geospatial standards. Mission data is designed to be:

- **Exchangeable** - Standard formats enable data sharing across systems
- **Validated** - Schema validation ensures data consistency
- **Versioned** - API versioning supports backward compatibility
- **Explainable** - Provenance tracking shows data lineage and confidence

While RescueMesh is not a healthcare system, it applies proven interoperability principles from health data exchange to mission planning and autonomous agent coordination. This approach ensures that:

- **Sensor observations** align with semantic standards rather than ad-hoc formats
- **AI recommendations** include confidence scores, provenance metadata, and human-review flags
- **Mission reports** can integrate with emergency service workflows
- **Future emergency-to-healthcare handover** scenarios could map rescue findings into medical interoperability patterns when missions transition from search and rescue to patient care

The platform models 17 conceptual resource types (Mission, Agent, Device, Sensor, Observation, EnvironmentalReading, MediaFrame, MapArtifact, TerrainSector, RelayLink, CommunicationMode, Hazard, Detection, Alert, Recommendation, MissionEvent, Provenance) to ensure consistent data representation across the mission lifecycle.

## Generated Media vs Real Mission Media

RescueMesh uses a **simulation-first approach to mission media**. Instead of requiring S3/object storage during development and demos, the platform generates synthetic media on demand:

### Demo Mode (Current)
- **Generated locally** - Images, audio clips, and spectrograms created by Python code
- **Lazy generation** - Media files generated only when requested and cached in `media/generated/`
- **No external dependencies** - Uses Pillow for images and Python's wave module for audio
- **Docker-friendly** - Self-contained with writable media directory
- **Cheap and portable** - No cloud storage costs or configuration needed

### Real Operational Mode (Future)
- **S3/Object Storage** - Captured media from actual missions stored in scalable object storage
- **Database metadata** - Mission database stores references and metadata for all media
- **Same API shape** - Frontend continues to use the same endpoints regardless of source
- **Seamless transition** - Switch from generated to real media by changing backend configuration

### Supported Generated Media Types

**Images:**
- Low-light / night vision scenes
- Thermal camera frames with hotspot detection
- Underwater / murky water views
- Industrial inspection images (pipes, corrosion)
- Dusty rubble / collapsed structure scenes
- Last-good-frame with signal degradation effects

**Audio:**
- Knocking sounds (SOS patterns, regular intervals)
- Tapping audio (higher frequency, sharper)
- Voice-like placeholder audio (modulated frequencies simulating speech)
- Static / interference
- Ambient environmental sounds (cave drips, underwater, industrial hum)

**Spectrograms:**
- Visual frequency analysis of audio clips
- Time-domain representation
- Confidence and signal quality overlays

### API Endpoints

```
GET /api/v1/missions/{mission_id}/generated-media/
    Returns metadata for all generated media associated with a mission

GET /api/v1/generated-media/{media_id}/preview/
    Serves generated image preview (PNG)

GET /api/v1/generated-media/{media_id}/audio/
    Serves generated audio file (WAV)

GET /api/v1/generated-media/{media_id}/spectrogram/
    Serves spectrogram visualization (PNG)
```

### Why Generated Media?

1. **Development speed** - No S3 setup required for demos
2. **Reproducibility** - Same media generated for same mission scenarios
3. **Cost efficiency** - No storage costs during development
4. **Offline capability** - Works without internet or cloud dependencies
5. **Testing** - Consistent test data for frontend development
6. **Portability** - Easy to package and distribute

Generated media keeps the simulation-first philosophy intact while providing realistic-looking mission artifacts for demonstrations and development.

## Demo Routes

The platform provides two types of demo experiences:

### Static Mission Profiles (`/demo/{use-case}`)
Static overview pages showing mission objectives, agent configurations, sensor packages, risk assessments, and expected outputs using local TypeScript fallback data. These pages provide:
- Mission planning information
- Hardware and sensor specifications
- Environmental hazards and constraints
- Tactical approach recommendations
- Expected detection types

Example routes:
- `/demo/collapsed-building-search`
- `/demo/cave-rescue`
- `/demo/flooded-structure`
- `/demo/industrial-inspection`

### Live Django Simulations (`/demo/live/{use-case}`)
Interactive simulation pages connected to the Django API showing real-time mission state changes via HTTP polling. These pages provide:
- Live agent telemetry (battery, signal, location)
- Mission event timeline
- Map coverage and confidence updates
- Sensor detection events
- Hardware failure scenarios
- AI analyst summaries
- Simulation controls (start, pause, reset, speed)

Example routes:
- `/demo/live/collapsed-building-search`
- `/demo/live/cave-rescue`
- `/demo/live/flooded-structure`
- `/demo/live/industrial-inspection`

The live simulations use **deterministic state calculation** - each mission progresses the same way for a given elapsed time, making scenarios reproducible. No WebSockets or real-time infrastructure required yet.

## Technology Stack

### Frontend
- **Astro** - Static site generation with islands architecture
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Type-safe interactive components

### Backend
- **Django 5.x** - Domain models and business logic
- **Django REST Framework** - RESTful APIs
- **SQLite** - Development database (PostgreSQL for production)

### Future Extensions
- **Django Channels** - WebSocket real-time telemetry
- **Three.js / CesiumJS** - 3D visualization
- **ROS 2** - Real robotics integration
- **MCAP** - Robotics log replay

## Project Structure

```
rescuemesh/
├── .github/
│   ├── copilot-instructions.md
│   └── instructions/
├── frontend/              # Astro + Tailwind + TypeScript
│   ├── src/
│   │   ├── pages/        # Static pages and routes
│   │   ├── layouts/      # Page layouts
│   │   ├── components/   # Reusable components
│   │   ├── styles/       # Global styles
│   │   └── data/         # JSON fixtures
│   └── package.json
├── backend/              # Django + DRF
│   ├── apps/
│   │   ├── missions/     # Mission management
│   │   ├── agents/       # Agent models
│   │   ├── telemetry/    # Telemetry data
│   │   ├── ai_prompts/   # AI prompt generation
│   │   └── reports/      # Mission reports
│   ├── config/           # Django settings
│   ├── manage.py
│   └── requirements.txt
├── docs/                 # Architecture docs and ADRs
├── data/                 # Sample fixtures and scenarios
└── README.md
```

## Digital Twin Seed Data

RescueMesh supports pre-populating the database with simplified digital twin map data derived from public/open cave survey and archaeological/heritage datasets. This provides realistic mission terrain without requiring access to physical environments.

**Live tactical maps now render terrain from Django Digital Twin data where available, with automatic fallback to local layouts for use cases without seeded terrain.**

### What are Digital Twins?

Digital twins are simplified 3D representations of real-world environments stored as:
- **Terrain sectors** - Chambers, passages, junctions, shafts (with bounding boxes and metadata)
- **Paths** - Connections between sectors with distance, bearing, vertical change, and traversal risk
- **Waypoints** - Navigation points along mission routes

**Why not full point clouds?**  
Full LiDAR/photogrammetry point clouds are multi-gigabyte files unsuitable for SQL storage. Instead, we store simplified structure with references to external point cloud files when needed.

### Source Datasets

Demo data is inspired by:

1. **Migovec Resurvey Project** - Cave survey data from Slovenia (Therion/Survex formats)
   - https://github.com/tr1813/migresurvey
   - Collected by ICCC and JSPDT, 1974-2019

2. **CAVERS Dataset** - Cave SLAM data with RGB-D, LiDAR, thermal sensors (MIT License)
   - https://github.com/spaceuma/cavers/
   - DOI: https://doi.org/10.5281/zenodo.19367714

3. **Open Heritage 3D** - Cultural heritage 3D documentation
   - https://openheritage3d.org/
   - Founded by CyArk, Historic Environment Scotland, USF Libraries

4. **Maritime/Vessel Datasets** - For flooded structure scenarios
   - **NOAA Wrecks and Obstructions Database** - Shipwreck locations and vessel data (Public domain)
     - https://nauticalcharts.noaa.gov/data/wrecks-and-obstructions.html
   - **Integrated Marine Observing System (IMOS)** - ~30TB ocean measurements (Open access)
     - https://imos.aodn.org.au/
   - **BODC - British Oceanographic Data Centre** - ~22K marine data variables
     - https://www.bodc.ac.uk/data/
   - **Oil and Gas Authority Open Data (UK)** - 12,500 offshore wellbores (Open Government License)
     - https://data-ogauthority.opendata.arcgis.com/
   - **Liberty Ship Specifications** - Historical WWII cargo vessel class (Public domain)
     - https://en.wikipedia.org/wiki/Liberty_ship

5. **Industrial Facility Datasets** - For confined space and hazardous environment scenarios
   - **Swiss Apartment Models** - 42,207 apartments with 242,257 rooms (Open access)
     - https://zenodo.org/record/7070952
   - **3D Semantic City Models** - Building and facility 3D models (Varies by dataset)
     - https://github.com/OloOcki/awesome-citygml
   - **Homeland Infrastructure Foundation-Level Data (HIFLD)** - Critical infrastructure (Public domain)
     - https://hifld-geoplatform.opendata.arcgis.com/
   - **BuildData - Canadian Construction Data API** - Building and construction data (API terms)
     - https://builddata.ca/
   - **OSHA Confined Space Standards** - Safety and access standards (Public domain)
     - https://www.osha.gov/confined-spaces


## Technology Reference Pack

RescueMesh is informed by established robotics, geospatial, sensor, rescue, and communications technologies while remaining a lightweight simulation-first demonstrator. The platform draws inspiration from industry standards and proven approaches including ROS 2 (Robot Operating System), OGC SensorThings API, Cesium 3D Tiles, underwater acoustic/optical communications, thermal imaging, and mesh networking protocols.

The **Technology Reference Pack** documents:
- What technologies influence RescueMesh design
- Which are currently implemented vs simulated vs future candidates
- How RescueMesh relates to robotics, sensor standards, and geospatial systems
- Safety boundaries and ethical considerations
- Future integration paths for real hardware and standards-based interoperability

This reference helps contributors understand the broader context of mission platform development and shows how RescueMesh could integrate with real autonomous systems when proper governance, safety testing, and operational protocols are in place.


---

**RescueMesh Mission Platform** - Simulation-first dashboard for GPS-denied environments
