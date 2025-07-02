# Portfolio Website

## Overview

This is a modern personal portfolio website built as a full-stack web application. The project showcases a developer's skills, projects, education, and provides a contact form for potential clients or employers. The application features a responsive design with dark/light theme support, smooth animations, and a professional user interface.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React-based SPA with TypeScript, using Vite as the build tool
- **Backend**: Express.js REST API with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for data management
- **UI Framework**: shadcn/ui components built on top of Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth UI animations

## Key Components

### Frontend Architecture
- **Component Structure**: Modular React components following the atomic design pattern
- **Routing**: Wouter for lightweight client-side routing
- **Form Management**: React Hook Form with Zod validation
- **Theme System**: Custom theme context with localStorage persistence
- **Animation System**: Centralized animation variants using Framer Motion
- **UI Components**: Complete shadcn/ui component library implementation

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **API Structure**: RESTful API design with centralized route registration
- **Database Layer**: Drizzle ORM with PostgreSQL for data persistence
- **Storage Interface**: Abstracted storage layer with in-memory fallback
- **Error Handling**: Global error middleware with proper HTTP status codes
- **Development Tools**: Hot reloading with Vite integration in development

### Database Schema
- **Users Table**: Basic user management with username/password
- **Contact Messages Table**: Stores contact form submissions with timestamps
- **Schema Validation**: Drizzle-Zod integration for type-safe database operations

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form validation using Zod schema
   - API request to `/api/contact` endpoint
   - Backend validation and logging
   - Success/error response to user

2. **Theme Management**:
   - Theme state managed in React context
   - Persistence in localStorage
   - CSS custom properties updated dynamically

3. **Navigation**:
   - Smooth scroll navigation between sections
   - Responsive mobile menu with animations
   - Active section highlighting

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18 with TypeScript support
- **UI Components**: Extensive Radix UI primitive collection
- **Animation**: Framer Motion for complex animations
- **HTTP Client**: TanStack Query for API state management
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS with custom configuration
- **Icons**: Lucide React icon library

### Backend Dependencies
- **Server**: Express.js with TypeScript
- **Database**: Neon Database (PostgreSQL) with Drizzle ORM
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type checking
- **Development**: tsx for TypeScript execution

### Build Tools
- **Bundler**: Vite for fast development and optimized production builds
- **TypeScript**: Full TypeScript support across the stack
- **ESBuild**: Backend bundling for production deployment

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR
- tsx for backend development with auto-reload
- Development-specific error overlays and debugging tools

### Production Build
- Frontend: Vite production build with optimizations
- Backend: ESBuild bundling with external package management
- Static file serving integrated with Express server

### Environment Configuration
- Database URL configuration via environment variables
- Development/production environment detection
- Replit-specific integrations for cloud deployment

## Changelog
- July 02, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.