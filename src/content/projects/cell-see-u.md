---
title: "CellSeeU - Privacy Awareness Dashboard"
description: "Comprehensive cellular, WiFi, and wireless tracking detection system with Android app, Flask backend, and real-time WiFi triangulation"
featured: true
status: "in-progress"
tags: ["Privacy", "Security", "Android", "Python", "Flask", "WiFi", "Mapping"]
technologies: ["Android", "Java", "Python 3", "Flask", "Leaflet.js", "OpenCelliD API", "GPS", "Compass Sensors"]
publishDate: 2024-11-15
---

## What Does This Do?

**CellSeeU** is a privacy awareness platform that reveals which services can track your mobile device in real-time by detecting:

- 📡 **Cell towers** that can see your IMEI number
- 📶 **WiFi networks** that detect your MAC address and probe requests
- 🧭 **WiFi router locations** estimated using directional triangulation
- 🗺️ **Detection radius** visualization showing tracking coverage

---

## The Problem

Most smartphone users don't realize how many services track their devices continuously through:
- Cell tower registration (IMEI tracking)
- WiFi probe requests (MAC address broadcasting)
- Network triangulation (position estimation)

**CellSeeU makes the invisible visible** by showing you exactly which towers and networks are tracking your movements in real-time.

---

## Key Features

### 🔍 Privacy Tracking Detection
- **IMEI Detection Radius**: Visual circle showing which cell towers can track you
- **WiFi MAC Tracking**: Shows which networks detect your WiFi probe requests
- **Real-time Dashboard**: Live updates as you move around
- **Tracking Panel**: Lists all services currently detecting your device

### 🧭 WiFi Triangulation System
Advanced algorithm that estimates WiFi router positions using:
1. **Your GPS position** (latitude, longitude)
2. **Signal strength** (RSSI in dBm)
3. **Compass heading** (direction you're facing)
4. **Multiple scan points** (walking triangulation)

**Accuracy**: 
- 2 scans: ±50-100m
- 3-5 scans: ±20-50m
- 10+ scans: ±10-30m

### 📱 Android App Integration
Custom scanner app that collects:
- Cell tower data (IMEI, signal strength, carrier, network type)
- WiFi networks (SSID, BSSID, signal, security)
- Orientation sensors (compass heading, pitch, roll)
- GPS location tracking
- Uploads combined data to Flask backend

---

## Technical Implementation

### System Architecture

```
Android App (Scanner)        Backend (Flask)         Frontend (Dashboard)
├─ CellTowerScanner.java  →  /api/towers/upload  →  Dashboard Tab
├─ WiFiScanner.java       →  /api/wifi           →  WiFi Networks Tab
├─ OrientationSensor.java →  /api/wifi/positions →  Triangulated Map
└─ GPS Location              (Processing)           (Visualization)
```

### Backend Services (Python/Flask)

**Core APIs**:
- `/api/towers` - Get detected cell towers
- `/api/towers/upload` - Upload scan data from Android
- `/api/towers/nearby` - Get OpenCelliD towers in viewport
- `/api/wifi` - Get WiFi networks from last scan
- `/api/wifi/positions` - Get triangulated WiFi AP positions

**Processing Services**:
- `tower_location.py` - OpenCelliD integration for tower geolocation
- `carrier_lookup.py` - MCC/MNC to carrier name mapping
- `wifi_triangulation.py` - Directional positioning algorithm

### WiFi Triangulation Algorithm

**Physics**: WiFi signals are directional - if you know your position, direction facing, and signal strength, you can estimate router location.

**Process**:
```
Scan #1: Position (53.2919, -6.6860), facing NE (45°), signal -42 dBm
         → Router ~25m away in NE direction
         → Estimated position: (53.2921, -6.6858)

Scan #2: Position (53.2925, -6.6865), facing E (90°), signal -38 dBm
         → Router ~20m away in E direction
         → Estimated position: (53.2925, -6.6863)

Scan #3: Position (53.2930, -6.6870), facing SE (135°), signal -45 dBm
         → Router ~30m away in SE direction
         → Estimated position: (53.2928, -6.6868)

Triangulation: Average all positions → (53.2925, -6.6863) ±15m
```

**Factors Affecting Accuracy**:
- Compass calibration
- WiFi reflections (multipath)
- Walls and obstacles
- Device orientation changes

### Frontend (Interactive Dashboard)

**Technologies**: HTML, JavaScript, Leaflet.js (maps)

**Pages**:
1. **Dashboard** - Statistics, tower list, tracking panel
2. **Map** - Interactive map with:
   - Cell tower markers
   - IMEI detection radius circles
   - WiFi AP position markers (color-coded by confidence)
   - Device location tracking
3. **WiFi** - Network list with security info, signal strength, estimated positions

**Features**:
- Real-time auto-refresh (configurable interval)
- Confidence indicators (high/medium/low)
- OpenCelliD integration for tower verification
- Responsive design for mobile/desktop

---

## Security & Privacy Features

### Built-in Security:
- 🔒 **Flask-Talisman**: HTTPS enforcement, security headers
- 🛡️ **CORS Configuration**: Restricted API origins
- 🔐 **Input Validation**: All API endpoints validate data
- 🚨 **Rate Limiting**: Prevent API abuse
- 📝 **Environment Variables**: Secure configuration management
- ✅ **Security Testing**: Bandit + Safety in test suite

### Privacy by Design:
- No data stored permanently (in-memory only)
- 100-scan history limit (rolling buffer)
- No user accounts or tracking
- Local network deployment (no cloud)
- Educational purpose only

---

## Technology Stack

### Android App:
- **Language**: Java
- **Components**: CellTowerScanner, WiFiScanner, OrientationSensor, ApiClient
- **Build**: Gradle, Android SDK
- **Sensors**: GPS, Compass, Accelerometer, TelephonyManager, WiFiManager

### Backend:
- **Framework**: Flask 3.0.0
- **Libraries**: 
  - flask-cors (API access)
  - flask-talisman (security headers)
  - requests (OpenCelliD API)
  - python-dateutil (timestamp handling)
- **External APIs**: OpenCelliD (cell tower geolocation)

### Frontend:
- **Mapping**: Leaflet.js
- **UI**: Bootstrap 5
- **Data**: Real-time AJAX updates
- **Visualization**: OpenStreetMap tiles

### Testing & Quality:
- **Testing**: pytest, pytest-flask, pytest-cov, pytest-mock
- **Security**: bandit (static analysis), safety (dependency scanning)
- **Code Coverage**: pytest-cov with .coverage tracking

---

## Use Cases

### 1. Privacy Education
Demonstrate to users how cell towers and WiFi networks track devices continuously, even when not connected.

### 2. Security Research
Analyze tracking capabilities of cellular and WiFi infrastructure for security audits.

### 3. Network Analysis
Map WiFi access point locations using crowdsourced triangulation data.

### 4. Geolocation Research
Study accuracy of WiFi-based positioning systems compared to GPS.

---

## Development Workflow

### Setup Backend:
```powershell
cd path/to/cell_see_u
.\.venv\Scripts\Activate.ps1
python app.py
```

### Build Android App:
```powershell
cd android_scanner
.\gradlew assembleDebug
# APK: android_scanner\app\build\outputs\apk\debug\app-debug.apk
```

### Configure:
- **Backend**: Edit `.env` (SERVER_IP, OPENCELLID_API_KEY)
- **Android**: Edit `ServerConfig.java` (SERVER_URL)

---

## Current Status & Future Enhancements

### ✅ Implemented:
- Cell tower scanning and detection radius
- WiFi network scanning with security info
- Orientation sensor integration (compass, pitch, roll)
- WiFi triangulation service with confidence scoring
- Interactive map with multiple layers
- Real-time dashboard with auto-refresh
- OpenCelliD integration for tower verification
- Security headers and CORS configuration

### 🚧 In Progress:
- Improve triangulation accuracy with Kalman filtering
- Add historical tracking visualization (movement path)
- Export data to CSV/JSON for analysis

### 💡 Future Ideas:
- Bluetooth beacon detection
- Cell tower handover tracking
- Signal strength heatmaps
- Multi-device comparison mode
- Privacy score calculation

---

## Technical Highlights

### Algorithm Innovation:
Custom WiFi triangulation using compass heading + GPS + RSSI - unique approach combining orientation sensors with traditional positioning.

### Full-Stack Integration:
Seamless data flow from Android sensors → Flask API → Interactive web dashboard with real-time updates.

### Privacy-First Design:
Educational tool that raises awareness without storing sensitive data permanently.

### Cross-Platform:
Android app + Python backend + Web frontend = comprehensive privacy tracking solution.

---

## Educational Value

This project demonstrates:
- **Mobile Development**: Android app with sensor integration
- **Backend Development**: Flask API with external service integration
- **Algorithm Implementation**: WiFi triangulation mathematics
- **Security Best Practices**: HTTPS, CORS, input validation, security headers
- **Privacy Awareness**: Understanding device tracking mechanisms
- **Testing**: Comprehensive test suite with security analysis
- **Documentation**: Clear README, API docs, setup guides

---

## Notes

- **Local Development**: Runs on private network (e.g., `http://192.168.x.x:5000`)
- **Educational Purpose**: Designed to raise privacy awareness, not for malicious tracking
- **No GitHub Repository**: Private project not yet published
- **Android App**: Requires manual APK installation (not on Play Store)
- **OpenCelliD API**: Free tier has rate limits (requires API key)

---

## Related Projects

- [Find Me a Home](./find-me-a-home) - Another project using GPS + external APIs
- [Webpage Monitor](./webpage-monitor) - Similar Flask architecture
- [Django NCP](./django-ncp) - Healthcare privacy and GDPR compliance
