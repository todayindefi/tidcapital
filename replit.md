# TID Capital - DeFi Yield Farming Platform

## Overview

TID Capital is a research-driven DeFi yield farming platform that provides institutional-grade investment products for sophisticated investors. The platform combines comprehensive market research from Today in DeFi with systematic vault curation strategies, focusing on risk-adjusted returns through disciplined asset selection and portfolio management.

## System Architecture

### Full-Stack TypeScript Application
- **Frontend**: React 18 with TypeScript, built using Vite
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state
- **Routing**: Wouter for client-side routing

### Architectural Decisions
- **Monorepo Structure**: Shared schema and types between client/server for type safety
- **Modern Build Tools**: Vite for fast development and optimized production builds
- **Component-First Design**: shadcn/ui provides consistent, accessible UI components
- **Type-Safe Database**: Drizzle ORM with Zod validation for schema enforcement

## Key Components

### Frontend Architecture (`/client`)
- **Component Library**: Full shadcn/ui implementation with custom TID Capital branding
- **Landing Page Design**: Professional marketing site with sections for capabilities, methodology, products, research, and contact
- **Theme System**: Light/dark mode support with CSS custom properties
- **Form Handling**: React Hook Form with Zod validation for contact inquiries
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Backend Architecture (`/server`)
- **API Routes**: RESTful endpoints for contact form submission and inquiry management
- **Storage Layer**: Abstracted storage interface supporting both in-memory and database implementations
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development Tools**: Hot reload with Vite integration and request logging

### Shared Infrastructure (`/shared`)
- **Database Schema**: Drizzle schema definitions for users and contact inquiries
- **Type Definitions**: Shared TypeScript types between frontend and backend
- **Validation**: Zod schemas for runtime type checking and form validation

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation
2. Frontend validates data using Zod schema
3. API request sent to `/api/contact` endpoint
4. Backend validates and stores inquiry in database
5. Success/error response returned to user with toast notification

### Database Operations
- **Contact Inquiries**: Storage and retrieval of potential client inquiries
- **User Management**: Foundation for future authentication system
- **Type Safety**: All database operations use TypeScript types derived from Drizzle schema

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Database**: Drizzle ORM, Neon Database serverless PostgreSQL
- **UI Framework**: Radix UI primitives, Tailwind CSS, Lucide React icons
- **Development**: Vite, TypeScript, ESBuild for production builds

### Styling and UI
- **Design System**: shadcn/ui components for consistent design language
- **Icons**: Lucide React for general icons, react-icons for social media
- **Animations**: CSS-based animations and transitions
- **Responsive**: Mobile-first design with Tailwind breakpoints

## Deployment Strategy

### Production Build Process
1. **Frontend**: Vite builds optimized React application
2. **Backend**: ESBuild bundles Express server for Node.js runtime
3. **Static Assets**: Frontend build output served by Express in production
4. **Database**: Drizzle migrations handle schema updates

### Environment Configuration
- **Development**: Hot reload with Vite middleware integration
- **Production**: Optimized builds with static file serving
- **Database**: Environment-based connection strings for different stages

## Changelog
- July 02, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.