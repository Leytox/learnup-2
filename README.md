# LearnUp - Comprehensive Learning Platform
![localhost_3000_ (1)](https://github.com/user-attachments/assets/89401d37-7dab-4726-b233-8df301ede347)

LearnUp is a modern learning platform designed to help students access educational content, enroll in courses, and track their learning progress. Built with Next.js, TypeScript, Tailwind CSS, and Prisma, it offers a responsive and intuitive user experience.

## Features

### Authentication
- Multiple authentication methods:
  - Email/password (credentials)
  - OAuth with Google
  - OAuth with GitHub
- User registration and login
- Secure session management

### User Interface
- Responsive design for all device sizes
- Dark/light theme toggle
- Modern UI components with shadcn-ui

### Content
- Blog system with individual post pages
- FAQ section
- Legal pages (Terms of Service, Privacy Policy)

### User Experience
- Loading states and error handling
- Toast notifications
- Navigation and header components
- Cookie consent alert
- "Go to top" button for long pages

## Technology Stack

- **Frontend**: Next.js 14+, TypeScript, React, Tailwind CSS
- **Authentication**: NextAuth.js (Auth.js)
- **Database**: PostgreSQL with Prisma ORM
- **UI Components**: Shadcn UI (built on Radix UI)
- **Forms**: React Hook Form with Zod validation
- **Payment Processing**: Stripe (integration prepared)

## Getting Started

First, set up your environment variables:

```
DATABASE_URL="postgresql://user:password@localhost:5432/learnup"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-here"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
STRIPE_SECRET_KEY="your-stripe-secret-key"
```

Then, run the development server:

```bash
# Install dependencies
npm install

# Set up the database
npx prisma migrate dev

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Application Flow

1. **Landing Page**: New users see a landing page with a call-to-action to join
2. **Authentication**: Users can register or log in using credentials or OAuth providers
3. **Main Application**: After authentication, users access the main application with:
   - Profile management
   - Course browsing and enrollment
   - Learning dashboard
   - Shopping cart functionality

## Key Components

- **Header**: Navigation bar with authentication status and theme toggle
- **Auth Forms**: Login and registration forms with validation
- **Blog System**: Article listing and individual post display
- **Profile Page**: User information display
- **Theme Provider**: Context for managing light/dark theme

## Database Schema

The database includes models for:
- User accounts and authentication
- Courses and lessons
- Enrollments
- Shopping cart
- Blog posts

## Future Development Areas

- Course content creation and management
- Advanced user profiles and progress tracking
- Payment processing with Stripe
- Course recommendations
- Search functionality
- Social features (comments, reviews)
