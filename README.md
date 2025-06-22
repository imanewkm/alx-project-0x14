# CineSeek - Movie Discovery Application

A modern movie discovery application built with Next.js, TypeScript, and Tailwind CSS that allows users to browse movies from the MoviesDatabase API.

## 🎬 Project Description

CineSeek is a responsive web application that enables users to:
- Browse movies from the MoviesDatabase API
- View detailed movie information
- Search films by year or genre
- Experience smooth navigation with proper loading states

## 🎯 Learning Objectives

- API documentation and integration
- TypeScript interfaces for API responses
- Reusable React component creation
- Responsive layouts with Tailwind CSS
- Application state management for filtering and pagination
- Error handling and loading states implementation
- Next.js API routes for server-side data fetching
- Environment variable management

## 🛠 Technical Stack

- **Next.js 14** (Pages Router)
- **TypeScript**
- **Tailwind CSS**
- **Font Awesome** icons
- **MoviesDatabase API**

## 📋 Requirements

### Development Environment
- Node.js (v16 or higher)
- npm or yarn
- Git for version control

## API Overview

The MoviesDatabase API provides comprehensive access to a vast collection of movie and TV show data. It offers endpoints for searching titles, retrieving detailed information about specific movies, and filtering content by various criteria including genre, year, and ratings. The API is designed to support modern web applications with structured JSON responses and RESTful endpoints.

## Version

The MoviesDatabase API uses version 1 (v1) as documented in their official API documentation.

## Available Endpoints

- **GET /titles** - Retrieve a list of movies and TV shows with optional filtering
- **GET /titles/{id}** - Get detailed information about a specific title
- **GET /titles/search/{query}** - Search for titles by name or keyword
- **GET /titles/random** - Get random movie/TV show recommendations
- **GET /genres** - Retrieve available genres for filtering

## Request and Response Format

### Request Structure
```
GET https://moviesDatabase.com/api/v1/titles?page=1&limit=10&year=2023
Headers:
    X-RapidAPI-Key: YOUR_API_KEY
    X-RapidAPI-Host: moviesDatabase.com
```

### Response Structure
```json
{
    "page": 1,
    "next": "/titles?page=2",
    "entries": 10,
    "results": [
        {
            "id": "tt1234567",
            "primaryTitle": "Movie Title",
            "originalTitle": "Original Title",
            "year": 2023,
            "runtimeMinutes": 120,
            "genres": ["Action", "Drama"],
            "averageRating": 7.5,
            "numVotes": 50000
        }
    ]
}
```

## Authentication

The MoviesDatabase API requires authentication via API key:
- **Header Required**: `X-RapidAPI-Key`
- **Additional Header**: `X-RapidAPI-Host: moviesDatabase.com`
- Store your API key securely in environment variables
- Never expose API keys in client-side code

## Error Handling

Common error responses include:
- **400 Bad Request**: Invalid parameters or malformed request
- **401 Unauthorized**: Missing or invalid API key
- **403 Forbidden**: Exceeded rate limits or access denied
- **404 Not Found**: Requested resource does not exist
- **500 Internal Server Error**: Server-side issues

Handle errors with proper try/catch blocks and provide user-friendly error messages.

## Usage Limits and Best Practices

- **Rate Limits**: Typically 100-1000 requests per day depending on subscription
- **Pagination**: Use page and limit parameters to manage large datasets
- **Caching**: Implement client-side caching to reduce API calls
- **Error Handling**: Always handle potential API failures gracefully
- **Security**: Keep API keys secure and use server-side routes when possible

## 📁 File Structure

```
alx-movie-app/
├── components/
│   ├── commons/
│   │   ├── Button.tsx
│   │   ├── Loading.tsx
│   │   └── MovieCard.tsx
│   └── layouts/
│       ├── Footer.tsx
│       ├── Header.tsx
│       └── Layout.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── api/
│   │   └── fetch-movies.ts
│   ├── movies/
│   │   └── index.tsx
│   ├── _app.tsx
│   └── index.tsx
├── public/
├── styles/
│   └── globals.css
├── .env.local
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env.local`
4. Run development server: `npm run dev`

## 🔑 API Integration

### Endpoints
- `/titles` - Main endpoint for fetching movie data
- Supports filtering by year and genre
- Implements pagination for browsing results

### Authentication
- API key authentication via headers
- Environment variable storage for API security
- Server-side API routes to protect client exposure

## ⚡ Best Practices

### Code Quality
- TypeScript interfaces for all props and API responses
- Component-based architecture
- Proper error handling and loading states
- Environment variables for sensitive data

### Performance
- Client-side navigation with Next.js router
- Efficient API calls with pagination
- Responsive design with Tailwind CSS
- Image optimization with Next.js Image component

### Maintainability
- Consistent code formatting
- Clear folder structure
- Reusable components
- Comprehensive prop typing

## 🔧 Error Handling

- Loading components for pending states
- Try/catch blocks in API routes
- Status code checking for API responses
- Type guards for API data validation
- Error boundaries for graceful failure

## 📊 Usage Limits

- API rate limiting considerations
- Pagination to limit request size
- Client-side caching where appropriate