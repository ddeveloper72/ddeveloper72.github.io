---
title: "Custom Drone Systems - Bug Tracking Platform"
description: "Full-stack Django bug tracking and feature request platform with payment processing and blog system (Code Institute Milestone 5)"
tags: ["Django", "Bug Tracking", "E-commerce", "Stripe", "AWS S3", "Educational"]
technologies: ["Python 3.7", "Django", "PostgreSQL", "MySQL", "AWS S3", "Stripe", "jQuery", "Bootstrap"]
repository: "https://github.com/ddeveloper72/milestone-5-project"
demo: "https://custom-drone-ddeveloper72-6e5549276368.herokuapp.com/"
status: "completed"
featured: true
publishDate: 2019-05-01
order: 11
---

Comprehensive full-stack web application built for Code Institute Milestone 5 project, featuring a bug tracking system, feature request marketplace, blog platform, and integrated payment processing for a fictional drone navigation systems company.

> 🎓 **Educational Project**: This was a capstone project for Code Institute Full Stack Developer course demonstrating proficiency in Django, database design, payment integration, and full-stack development.

## Purpose

Custom Drone deBug is a fictitious organization specializing in high-tech drone navigation systems. This platform provides customers with:
- Bug reporting and tracking facility
- Feature request marketplace with paid development
- Blog for service updates and community engagement
- Voting system to prioritize development work

## Project Context

**Fictional Scenario**:
Custom Drone manufactures programmable drone navigation systems for search & rescue, inspection, and industrial applications. The drones operate in challenging environments (underground, aquatic, satellite communication) with swarm management capabilities.

**Platform Purpose**:
- **Free Bug Fixes**: Report and track software issues, fixed free for all users
- **Paid Features**: Request custom features with transparent hourly development costs
- **Community Voting**: Upvote bugs and features to influence priority
- **Development Transparency**: Track status from "To Do" → "In Progress" → "Complete"

## Key Features

### Bug & Feature Tracking System
- **CRUD Operations**: Create, read, update, delete issues
- **Status Management**: Admin workflow from submission to completion
- **Voting System**: Users upvote issues (one vote per user per issue)
- **Comment System**: Discussion threads with admin approval
- **Category Classification**: Auto-pilot, Navigation, Flight Controls
- **Statistics Dashboard**: Real-time counts and visualizations

### Payment Integration
- **Stripe Integration**: Secure payment processing for feature requests
- **Shopping Cart**: Add multiple features before checkout
- **Hourly Rate Model**: Different development costs per category
- **Order Processing**: Complete checkout flow with user details

### Blog Platform
- **Markdown Support**: Rich text editing with Markdown syntax
- **Comment System**: User engagement with approval workflow
- **Admin Controls**: Create, edit, delete blog posts
- **Preview Functionality**: Markdown preview before publishing

### User Management
- **User Registration**: Secure account creation
- **Authentication**: Login/logout functionality
- **Profile System**: User bio and activity tracking (for future development)
- **Admin/Staff Dashboard**: Development statistics and management tools

### Database Architecture
Comprehensive EER diagrams designed in MySQL Workbench:
- **Blog Models**: Posts, comments, users relationships
- **Issues Models**: Bugs, features, votes, comments, status tracking
- **User Profiles**: Extended Django user model

## Technical Implementation

**Backend Framework**
- **Django**: Python web framework for rapid development
- **Django Apps**: Modular app architecture (accounts, blog, issues, cart, checkout, profile)
- **MySQL/PostgreSQL**: Dual database support (MySQL development, PostgreSQL production)

**Frontend Design**
- **Bootstrap (Darkly Theme)**: Professional dark theme from Bootswatch
- **jQuery**: Client-side interactivity
- **Custom CSS**: Mobile-responsive media queries
- **Markdown Rendering**: Real-time Markdown preview

**Cloud Services**
- **AWS S3**: Static and media file storage
- **Heroku**: Platform deployment with PostgreSQL add-on
- **Stripe**: Payment processing integration
- **Gmail**: Password reset email delivery

**Security Features**
- **Environment Variables**: Secure credential management
- **CSRF Protection**: Django built-in security
- **Authentication Required**: Protected routes for logged-in users
- **Admin Authorization**: Staff-only management functions

## Project Structure

```
drone_debug/
├── accounts/           # User authentication and profiles
├── blog/               # Blog posts and comments
├── issues/             # Bug and feature tracking
├── cart/               # Shopping cart for features
├── checkout/           # Stripe payment processing
├── profile/            # User profile management (future dev)
├── templates/          # HTML templates
├── static/             # CSS, JavaScript, images
├── manage.py           # Django management
└── requirements.txt    # Python dependencies
```

## Development Methodology

**UX Design Process**:
1. **Strategy**: User needs analysis and business goals
2. **Scope**: Feature prioritization and app boundaries
3. **Structure**: Navigation schemas and information architecture
4. **Skeleton**: Wireframes for all major pages
5. **Surface**: Visual design with Bootswatch Darkly theme

**Testing Approach**:
- Manual testing checklist for all user workflows
- Cross-browser compatibility verification
- Responsive design testing (mobile, tablet, desktop)
- User acceptance testing with beta testers
- Admin and non-admin user path testing

## Use Cases

**Educational Demonstration**
- Full-stack development capstone project
- Django framework proficiency
- Payment integration implementation
- Database design and modeling

**Bug Tracking Workflow**
- Report software issues with detailed descriptions
- Community voting to prioritize fixes
- Admin status updates throughout resolution
- Transparent development process

**Feature Marketplace**
- Request custom drone navigation features
- Transparent hourly development costs
- Shopping cart for multiple features
- Stripe payment processing

## Lessons Learned

**Project Goals Achievement**:
- ✅ Multiple app integration in Django framework
- ✅ CRUD operations across all data models
- ✅ Seamless MySQL to PostgreSQL migration
- ✅ AWS S3 for static/media file hosting
- ✅ Stripe checkout integration
- ✅ Gmail email service integration

**Future Improvements**:
- [ ] Slug implementation in URL patterns
- [ ] Boolean flags for comment visibility
- [ ] Refined mobile-to-desktop media queries
- [ ] Chart.js statistics visualization
- [ ] Enhanced jQuery interactivity
- [ ] Improved front-end imagery

## Value Proposition

This project demonstrates:
- **Full-Stack Competency**: Django backend, frontend integration, database design
- **Payment Processing**: Real-world Stripe implementation
- **Cloud Services**: AWS S3, Heroku deployment
- **UX Design Process**: Comprehensive five-stage design methodology
- **Testing Rigor**: Extensive manual testing protocols
- **Problem-Solving**: Debugging and troubleshooting throughout development

## Technical Highlights

- **Django Framework**: Multi-app modular architecture
- **Dual Database**: MySQL (dev) to PostgreSQL (prod) migration
- **AWS S3 Integration**: Cloud-based file storage
- **Stripe API**: Secure payment processing
- **Markdown Support**: Rich text editing with third-party add-in
- **Bootstrap Darkly**: Professional dark theme customization
- **MySQL Workbench**: Database schema design and EER diagrams
- **VSCode Development**: Modern IDE with debugging tools
- **Git Version Control**: Branch management and version tracking
- **Heroku Deployment**: Automatic GitHub deployment

## Acknowledgments

**Code Institute Full Stack Developer Program** - Milestone 5 Project (2019)

Special thanks to:
- Code Institute tutors and mentors
- Slack community members (@robinz_alumni, @JoWings, @Eventret_Mentor, @Miro_lead, @JohnL3_Alumni, @Sonya)
- Mentor Nishant for guidance
- Family for their support

*by Duncan Falconer for the Code Institute, 2019*
