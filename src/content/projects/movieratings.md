---
title: "Movie Rater API - Django REST Framework"
description: "Production-ready Django REST API for movie rating platforms with AWS S3 image storage, Azure SQL, and 8-layer security"
tags: ["Django", "REST API", "AWS S3", "Azure SQL", "DRF", "Backend API"]
technologies: ["Python 3.11", "Django 5.1", "Django REST Framework 3.15", "AWS S3", "Azure SQL", "PostgreSQL", "Heroku"]
repository: "https://github.com/ddeveloper72/movieratings"
demo: "https://ddeveloper72-movie-rater-api.herokuapp.com/"
status: "active"
featured: true
publishDate: 2025-10-20
order: 4
---

Production-ready Django REST Framework application providing a complete backend service for movie rating and review platforms. Built with modern cloud infrastructure, it serves as the backend API for an Angular 10 frontend, handling user authentication, movie data management, rating systems, and cloud-based image storage.

## Purpose

Modern movie rating applications require robust backend APIs that handle authentication, data management, file uploads, and real-time rating calculations. This API provides a complete, production-tested solution with enterprise-grade cloud integration.

## Key Features

### 1. Secure Image Upload to AWS S3
- **Direct Frontend-to-S3 Uploads**: Using presigned URLs for efficient uploads
- **8-Layer Security System**: Authentication, rate limiting, file validation, MIME type verification
- **Zero-Cost Deduplication**: Content-based hashing prevents duplicate storage
- **Format Support**: JPEG, PNG, WebP, and GIF with 5 MB size limit
- **Automatic Enforcement**: Backend validation and sanitization

### 2. RESTful API Design
- **Complete CRUD Operations**: Movies, users, and ratings
- **Token-Based Authentication**: Secure API access for all protected endpoints
- **Comprehensive Error Handling**: Detailed validation and error responses
- **API Browsable Interface**: Development-friendly browsable API

### 3. Intelligent Rating System
- **Per-User Movie Ratings**: 1-5 star rating scale
- **Automatic Average Calculation**: Real-time rating aggregation
- **Unique Constraint**: One rating per user per movie
- **Real-Time Updates**: Instant rating recalculation on vote changes

### 4. Production-Ready Infrastructure
- **Azure SQL Database**: Scalable cloud data storage
- **AWS S3**: Distributed image storage with presigned URLs
- **WhiteNoise**: Efficient static file serving
- **Environment-Based Configuration**: Separate dev/prod settings
- **Comprehensive Security Measures**: Multi-layer protection

## API Endpoints

### Authentication
- `POST /auth/` - Obtain authentication token

### Users
- `GET /api/users/` - List all users
- `POST /api/users/` - Create new user
- `GET /api/users/{id}/` - Get user details
- `PUT /api/users/{id}/` - Update user
- `DELETE /api/users/{id}/` - Delete user

### Movies
- `GET /api/movies/` - List all movies
- `POST /api/movies/` - Create new movie (admin only)
- `GET /api/movies/{id}/` - Get movie details
- `PUT /api/movies/{id}/` - Update movie (admin only)
- `DELETE /api/movies/{id}/` - Delete movie (admin only)
- `POST /api/movies/{id}/rate_movie/` - Rate a movie (1-5 stars)
- `POST /api/movies/get_upload_url/` - Get presigned S3 URL for image upload

### Ratings
- `GET /api/ratings/` - List all ratings
- `GET /api/ratings/{id}/` - Get rating details

## Data Models

**Movie Model**:
```json
{
    "id": 1,
    "title": "The Shawshank Redemption",
    "description": "Two imprisoned men bond over years...",
    "imagePath": "https://movie-rater.s3.eu-west-1.amazonaws.com/media/movies/movie-abc123.jpg",
    "no_of_ratings": 3,
    "ave_ratings": 4.67
}
```

**Rating Model**:
```json
{
    "id": 1,
    "stars": 5,
    "user": 1,
    "movie": 1
}
```

## Image Upload Workflow

The API provides a secure, efficient workflow for uploading movie poster images:

1. **Frontend requests presigned URL**: `POST /api/movies/get_upload_url/`
2. **Backend returns presigned URL** with upload instructions and public URL
3. **Frontend uploads directly to S3**: `PUT <upload_url>` with file binary
4. **Frontend updates movie record**: `PATCH /api/movies/{id}/` with public URL

**Benefits**:
- No backend file handling overhead
- Reduced server load
- Faster uploads (direct to S3)
- Automatic content-based deduplication
- 1-hour presigned URL expiration

## 🛡️ 8-Layer Security System

1. ✅ **Authentication Required**: Token-based authentication
2. ✅ **Rate Limiting**: 10 uploads per user per hour
3. ✅ **File Size Limit**: 5 MB maximum
4. ✅ **File Type Validation**: Images only (JPEG, PNG, WebP, GIF)
5. ✅ **Extension-MIME Validation**: Prevents disguised files
6. ✅ **Unique Filename Generation**: UUID or hash-based naming
7. ✅ **Presigned URL Expiration**: 1-hour automatic expiration
8. ✅ **Public-Read ACL**: Controlled access permissions

See [SECURITY.md](https://github.com/ddeveloper72/movieratings/blob/main/SECURITY.md) for detailed security documentation.

## Technical Implementation

**Backend Framework**
- **Django 5.1.13**: Modern Python web framework
- **Django REST Framework 3.15.2**: Powerful API toolkit
- **WhiteNoise 6.8.2**: Static file serving middleware

**Database**
- **Azure SQL Database**: Production cloud database
- **SQLite3**: Local development database
- **pyodbc 5.2.0**: Azure SQL driver

**Cloud Services**
- **AWS S3**: Image storage with presigned URL upload
- **boto3 1.35.77**: AWS SDK for Python
- **botocore 1.35.77**: Low-level AWS interface

**Deployment**
- **Heroku**: Platform as a Service hosting
- **gunicorn 23.0.0**: WSGI HTTP Server
- **dj-database-url 2.3.0**: Database URL parsing

**Development Tools**
- **python-dotenv 1.0.1**: Environment variable management
- **requests 2.32.3**: HTTP library for testing

## Authentication

Token-based authentication workflow:

1. **Obtain Token**:
```bash
curl -X POST https://ddeveloper72-movie-rater-api.herokuapp.com/auth/ \
  -H "Content-Type: application/json" \
  -d '{"username": "youruser", "password": "yourpass"}'
```

2. **Use Token in Requests**:
```bash
curl -X GET https://ddeveloper72-movie-rater-api.herokuapp.com/api/movies/ \
  -H "Authorization: Token your-token-here"
```

Tokens are automatically created when new users are registered.

## Deployment

**Heroku Deployment** with automatic GitHub integration:

1. Create Heroku app
2. Add Azure SQL database or PostgreSQL add-on
3. Set environment variables (SECRET_KEY, AWS credentials, Azure SQL credentials)
4. Connect GitHub repository for automatic deployments
5. Deploy from `main` branch

The project includes:
- `Procfile` for Heroku process configuration
- `runtime.txt` for Python version specification
- Automatic static file collection with WhiteNoise

## Use Cases

**Movie Rating Platforms**
- Build modern movie review websites
- Create community-driven rating applications
- Develop film recommendation systems

**Educational Projects**
- Learn Django REST Framework patterns
- Practice cloud service integration (AWS S3, Azure SQL)
- Understand token authentication implementation

**API Integration Learning**
- Study presigned URL workflows
- Explore file upload best practices
- Understand RESTful API design

## Value Proposition

Provides a production-ready backend that:
- **Eliminates Backend File Handling**: Direct-to-S3 uploads reduce server load
- **Enterprise Security**: 8-layer security system for file uploads
- **Cloud Integration**: AWS S3 + Azure SQL production architecture
- **Zero Duplicate Storage**: Content-based hashing saves storage costs
- **Scalable Architecture**: Cloud-native design ready for growth
- **Developer-Friendly**: Browsable API interface and comprehensive documentation

## Learning Journey

This project evolved from a tutorial by Senior Full Stack Engineer Krystian Czekalski, with significant enhancements including:
- AWS S3 integration for cloud image storage
- Azure SQL Database for production data
- Advanced security implementation (8-layer system)
- Zero-cost deduplication for image uploads
- Custom admin portal integration
- Comprehensive API documentation

## Technical Highlights

- **Django REST Framework 3.15**: Modern API development
- **AWS S3 Presigned URLs**: Secure, efficient file uploads
- **Azure SQL Integration**: Cloud database with pyodbc
- **Token Authentication**: DRF authentication system
- **8-Layer Security**: Comprehensive upload protection
- **Content-Based Hashing**: Automatic deduplication
- **WhiteNoise**: Static file serving for production
- **Heroku Deployment**: Cloud-native hosting
- **Automatic GitHub Deployment**: CI/CD workflow

## Additional Documentation

- [S3 Upload Integration Guide](https://github.com/ddeveloper72/movieratings/blob/main/S3_UPLOAD_GUIDE.md) - Complete frontend integration guide
- [Security Documentation](https://github.com/ddeveloper72/movieratings/blob/main/SECURITY.md) - Detailed security measures

*Built with ❤️ using Django REST Framework*
