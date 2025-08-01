# FoodieHub Restaurant Website

## Overview

FoodieHub is a modern, fully responsive restaurant website built as a full-stack application. The project showcases a premium dining experience with a sophisticated design, featuring a React frontend with TypeScript, Express.js backend, and PostgreSQL database integration. The application includes a comprehensive menu system, contact functionality, cart management with WhatsApp ordering, and a basic admin dashboard for menu management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: React hooks (useState, useEffect) with custom hooks for cart management
- **Build Tool**: Vite for fast development and optimized production builds
- **Animations**: CSS animations with support for Swiper.js carousels

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Server**: tsx for TypeScript execution
- **Production Build**: esbuild for fast bundling
- **Middleware**: JSON parsing, URL encoding, and custom logging middleware

### Data Storage
- **Database**: PostgreSQL using Neon serverless database
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Fallback Storage**: In-memory storage implementation for development

## Key Components

### Database Schema
The application defines four main entities:
- **Users**: Basic user authentication system
- **Menu Items**: Restaurant menu with categories, pricing, and availability
- **Orders**: Customer orders with status tracking
- **Contacts**: Contact form submissions

### Frontend Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Navigation**: Sticky navbar with scroll effects and mobile menu
- **Cart System**: LocalStorage-based cart with quantity management
- **WhatsApp Integration**: Order submission through WhatsApp pre-filled messages
- **Image Gallery**: Lightbox functionality for restaurant interiors
- **Form Handling**: Contact forms with validation using React Hook Form and Zod
- **Loading States**: Skeleton loaders and success modals

### Backend API Endpoints
- `GET /api/menu` - Retrieve all menu items
- `POST /api/menu` - Create new menu item (admin)
- `PUT /api/menu/:id` - Update menu item (admin)
- `POST /api/contact` - Submit contact form

## Data Flow

1. **Menu Display**: Frontend fetches menu data from backend API or falls back to static data
2. **Cart Management**: Items stored in localStorage with React context for state management
3. **Order Process**: Cart contents formatted into WhatsApp message for restaurant communication
4. **Contact Forms**: Form submissions sent to backend API with validation
5. **Admin Operations**: CRUD operations for menu items through dedicated admin interface

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI primitives for accessibility
- **shadcn/ui**: Pre-built component library
- **Swiper.js**: Touch slider for testimonials and featured dishes
- **Font Awesome**: Icon library for social media and UI icons
- **Google Fonts**: Playfair Display and Inter font families

### Development Tools
- **Vite**: Build tool with React plugin and runtime error overlay
- **TypeScript**: Type safety across frontend and backend
- **Drizzle**: Type-safe ORM with PostgreSQL dialect
- **Zod**: Schema validation for forms and API endpoints
- **React Query**: Data fetching and caching (TanStack Query)

### Production Services
- **Neon Database**: Serverless PostgreSQL database
- **WhatsApp Business API**: Order communication system
- **Replit**: Development and hosting platform integration

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with HMR and Replit integration
- **Database**: Uses DATABASE_URL environment variable for Neon connection
- **Asset Serving**: Vite handles static assets with optimization

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Environment**: NODE_ENV controls development vs production behavior
- **Static Serving**: Express serves built frontend files in production

### Database Management
- **Schema**: Managed through Drizzle migrations in `./migrations`
- **Deployment**: `db:push` command applies schema changes to database
- **Connection**: Uses connection pooling through Neon serverless adapter

The application is designed for seamless deployment on platforms like Replit, Netlify, or Vercel, with environment-based configuration for development and production environments.
