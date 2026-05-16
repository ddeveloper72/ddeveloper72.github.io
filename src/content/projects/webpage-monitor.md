---
title: "Webpage Monitor with Slack Alerts"
description: "Simple Python utility for monitoring website status and sending real-time alerts to Slack channels"
tags: ["Python", "Monitoring", "Slack", "DevOps", "Alerting"]
technologies: ["Python 3.6+", "requests", "python-dotenv", "Slack Block Kit"]
repository: "https://github.com/ddeveloper72/Webpage-Monitor"
status: "active"
featured: false
publishDate: 2024-06-15
order: 10
---

A lightweight Python script for monitoring website availability and sending structured alerts to Slack channels when sites go down or come back online. Perfect for DevOps teams needing simple, reliable uptime monitoring.

## Purpose

Maintaining website availability is critical for any online service. This utility provides immediate notification when a site becomes unavailable, enabling rapid response to outages.

## Key Features

- **Real-Time Monitoring**: HTTP status code checking for configured URLs
- **Slack Integration**: Structured notifications using Slack Block Kit
- **Environment-Based Configuration**: Separate development and production URLs
- **Clean UI**: Professional Slack message formatting with Block Kit
- **Lightweight**: Minimal dependencies, easy to deploy
- **Status Transitions**: Alerts for both down and recovery events

## Technical Implementation

**Python Script**
- **requests library**: HTTP status checking
- **python-dotenv**: Environment variable management
- **Slack Block Kit**: Professional message formatting

**Configuration**
Environment variables in `.env` file:
- `DEVELOPMENT`: Boolean flag for environment selection
- `URL_DEVELOPMENT`: Development website URL to monitor
- `URL_PRODUCTION`: Production website URL to monitor
- `SLACK_WEBHOOK_URL`: Slack incoming webhook for notifications

## How It Works

1. **Status Check**: Script performs HTTP request to configured URL
2. **Status Evaluation**: Checks HTTP response code (200 = OK, others = down)
3. **Slack Notification**: Sends formatted message to Slack channel if status changes
4. **Message Formatting**: Uses Slack Block Kit for clean, consistent alerts

## Slack Block Kit Integration

The utility leverages [Slack's Block Kit](https://api.slack.com/block-kit) framework for professional, structured notifications:

**Benefits**:
- Consistent visual formatting
- Rich content blocks
- Clear status indicators
- Easy-to-read alert messages
- Action buttons (future enhancement)

## Installation

1. **Clone repository**:
```bash
git clone https://github.com/ddeveloper72/Webpage-Monitor.git
cd Webpage-Monitor
```

2. **Create virtual environment**:
```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

3. **Install dependencies**:
```bash
pip install -r requirements.txt
```

4. **Configure environment** (create `.env` file):
```
DEVELOPMENT=True
URL_DEVELOPMENT=https://your-development-url.com
URL_PRODUCTION=https://your-production-url.com
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your/slack/webhook/url
```

## Usage

Run the monitoring script:
```bash
python monitor.py
```

The script will:
- Check the configured URL (dev or prod based on DEVELOPMENT flag)
- Send Slack alert if site is down
- Send recovery alert when site comes back online

## Use Cases

**DevOps Monitoring**
- Quick uptime checks for critical services
- Immediate Slack notifications for team awareness
- Development and production environment monitoring

**Scheduled Monitoring**
- Run via cron job for continuous monitoring
- Integrate with CI/CD pipelines
- Scheduled health checks

**Team Communication**
- Centralized alerting to Slack channels
- Visible status changes for entire team
- Rapid incident response initiation

## Deployment Options

**Cron Job** (Linux/Mac):
```bash
*/5 * * * * /path/to/venv/bin/python /path/to/monitor.py
```

**Windows Task Scheduler**:
- Create scheduled task to run script every 5 minutes

**Docker Container**:
- Package as Docker container for cloud deployment
- Run on AWS ECS, Azure Container Instances, or Heroku

**Cloud Functions**:
- Deploy as AWS Lambda or Azure Function
- Schedule with CloudWatch or Azure Logic Apps

## Future Enhancements

- [ ] Multiple URL monitoring in single run
- [ ] Configurable check intervals
- [ ] Response time measurement and trending
- [ ] Email notifications in addition to Slack
- [ ] Database logging of uptime history
- [ ] Web dashboard for status visualization
- [ ] SMS alerts for critical failures
- [ ] Custom alert thresholds

## Value Proposition

Simple, effective uptime monitoring that:
- **Immediate Alerts**: Know about outages within minutes
- **Team Visibility**: Slack integration keeps everyone informed
- **Easy Setup**: Minimal configuration required
- **Flexible Deployment**: Run anywhere Python works
- **Professional Formatting**: Slack Block Kit for clean alerts
- **Environment-Aware**: Separate dev and prod monitoring

## Technical Highlights

- **Python 3.6+ Compatible**: Modern Python features
- **Slack Block Kit**: Professional message formatting
- **Environment Variables**: Secure configuration management
- **Minimal Dependencies**: requests + python-dotenv only
- **Easy Integration**: Works with existing Slack workspaces
- **Lightweight**: Small footprint, fast execution

*Simple monitoring for peace of mind.*
