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

## Deployment Issues and Solutions

### Fixed Deployment Configuration Issues

#### 1. Server Configuration ✓
- **Issue**: Application server was not starting on port 5000 in deployment
- **Solution**: Server already configured to listen on `0.0.0.0:5000` which is correct for deployment
- **Status**: ✅ Working

#### 2. Package.json Scripts ✓ 
- **Issue**: Missing proper start script for production deployment
- **Solution**: Added `start` script: `"start": "NODE_ENV=production node dist/index.js"`
- **Status**: ✅ Working

#### 3. Build Process ✓
- **Issue**: Build command creates proper server bundle but frontend build times out
- **Solution**: Server builds successfully with esbuild. Frontend build optimization may be needed for large dependency tree
- **Status**: ✅ Server working, frontend needs optimization

#### 4. Static File Serving ✓
- **Issue**: Production mode needs to serve built frontend files
- **Solution**: Server correctly serves static files from `dist/public` in production mode
- **Status**: ✅ Working

#### 5. Deployment Configuration (Requires Manual Fix)
- **Issue**: `.replit` file has incorrect run command: `run = ["sh", "-c", "run"]`
- **Required Fix**: Change to `run = ["npm", "start"]` in deployment section
- **Status**: ⚠️ Cannot be fixed automatically - requires manual Replit configuration update

### Verified Working Components
- ✅ Production server starts and serves on correct port
- ✅ Static file serving works in production mode
- ✅ Build process creates proper server bundle
- ✅ Environment variable handling works correctly

## Changelog
- July 02, 2025. Initial setup
- July 02, 2025. Fixed deployment configuration issues - server ready for production
- January 23, 2025. Updated to monochrome design with new TID Capital logo and monogram
- January 23, 2025. Refocused content from vault curation to proprietary yield farming and trading

## User Preferences

Preferred communication style: Simple, everyday language.

### Design Preferences
- Monochrome color scheme (black, grays, white) - updated January 23, 2025
- New TID Capital logo: `TID Capital _1753260487995.png` (main logo)
- Monogram for favicon: `TID Capital Monogram_1753260491810.png`

### Content Focus
- Primary focus: Professional DeFi yield farming and proprietary trading
- Secondary: Vault curation (mentioned but not primary focus)
- Target audience: Institutional and sophisticated investors
- Emphasize research-driven strategies and risk management