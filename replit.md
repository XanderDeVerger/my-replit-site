# Overview

XWarranties is a modern web application for auto warranty services built with a full-stack TypeScript architecture. The application serves as a landing page and quote request system for customers seeking vehicle protection coverage. It features a professional marketing interface with coverage plan displays, trust indicators, and a comprehensive quote request form. The system is designed to collect customer vehicle information and contact details for generating auto warranty quotes.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript as the core UI framework
- **Vite** as the build tool and development server for fast hot-reloading
- **Tailwind CSS** for utility-first styling with custom design tokens
- **shadcn/ui** component library built on Radix UI primitives for accessible, reusable components
- **React Hook Form** with Zod validation for robust form handling
- **TanStack Query** for server state management and API calls
- **Wouter** as a lightweight client-side router
- Component-based architecture with shared UI components in `/client/src/components/ui/`

## Backend Architecture
- **Express.js** server with TypeScript for the REST API
- **In-memory storage** using Maps for development/testing (easily replaceable with database)
- Clean separation of concerns with dedicated storage interface (`IStorage`)
- Centralized route handling in `/server/routes.ts`
- Request logging middleware for API monitoring
- Error handling middleware for consistent error responses

## Data Layer
- **Drizzle ORM** configured for PostgreSQL with schema definitions in `/shared/schema.ts`
- **Zod schemas** for runtime validation and type safety
- Shared types between client and server via `/shared/` directory
- Database migrations managed through Drizzle Kit

## Styling System
- Custom CSS variables for theming with light/dark mode support
- Comprehensive design system with consistent spacing, colors, and typography
- Responsive design patterns using Tailwind's mobile-first approach
- Custom component variants using class-variance-authority

## Development Workflow
- **TypeScript** strict mode for type safety across the entire stack
- **Hot module replacement** in development with Vite
- Build process that bundles frontend and backend separately
- Path aliases for clean imports (`@/` for client, `@shared/` for shared code)

# External Dependencies

## Core Framework Dependencies
- **React 18** with React DOM for the frontend UI framework
- **Express.js** for the Node.js web server framework
- **TypeScript** for static type checking across the entire codebase
- **Vite** for development server and frontend build tooling

## Database & ORM
- **@neondatabase/serverless** for PostgreSQL database connectivity
- **Drizzle ORM** for type-safe database operations and schema management
- **Drizzle Kit** for database migrations and schema generation

## UI & Styling
- **Tailwind CSS** for utility-first CSS framework
- **Radix UI** components for accessible, unstyled UI primitives
- **Lucide React** for consistent iconography
- **class-variance-authority** for component variant management

## Form Handling & Validation
- **React Hook Form** for performant form state management
- **Zod** for schema validation and type inference
- **@hookform/resolvers** for Zod integration with React Hook Form

## State Management & Data Fetching
- **TanStack React Query** for server state management and caching
- **Wouter** for lightweight client-side routing

## Development Tools
- **@replit/vite-plugin-runtime-error-modal** for enhanced development experience
- **PostCSS** with Autoprefixer for CSS processing
- **esbuild** for fast JavaScript/TypeScript bundling in production

## Production Services
- **Neon Database** (PostgreSQL-compatible serverless database)
- Static asset hosting for images and fonts
- Google Fonts integration for typography (DM Sans, Fira Code, Geist Mono)