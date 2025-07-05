# LearnUp - Comprehensive Learning Platform

![LearnUp Banner](https://github.com/user-attachments/assets/89401d37-7dab-4726-b233-8df301ede347)

LearnUp is a modern, interactive learning platform designed to make education engaging and accessible. Built with a robust tech stack including Next.js, TypeScript, and Prisma, it provides a seamless experience for students to explore courses, track progress, and interact with AI-powered learning tools.

## Key Features

### User Authentication

- **Multiple Providers**: Secure login with email/password, Google, or GitHub.
- **Session Management**: Robust session handling with NextAuth.js.

### Engaging User Interface

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Theming**: Switch between dark and light modes for comfortable viewing.
- **Modern Components**: Built with shadcn-ui for a polished and consistent look.

### Core Platform

- **Interactive Landing Page**: A captivating entry point with animations and 3D models.
- **Features Section**: Highlights the unique selling points of the platform.
- **Dashboard**: A personalized space for authenticated users.

### Content & Learning

- **Blog**: Informative articles with dedicated pages for each post.
- **Courses**: (Coming Soon) Structured learning paths.
- **AI Tutors**: (Coming Soon) 24/7 assistance for learners.

## Technology Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js (Auth.js)
- **ORM**: Prisma with PostgreSQL
- **UI**: shadcn-ui, Radix UI, Lucide Icons
- **3D**: React Three Fiber, Drei
- **Forms**: React Hook Form with Zod for validation

## Getting Started

To get started with LearnUp, first set up your environment variables by creating a `.env.local` file:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/learnup"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key"

# GitHub OAuth
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

Next, install the dependencies and set up the database:

```bash
# Install dependencies
npm install

# Run database migrations
npx prisma migrate dev

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Application Flow

1. **Landing Page**: Unauthenticated users are greeted with an engaging landing page that showcases the platform's features.
2. **Authentication**: Users can sign up or log in through various authentication methods.
3. **Dashboard**: Once authenticated, users are redirected to their personal dashboard, which will serve as the hub for their learning activities.

## Project Structure

The project is organized into several key directories:

- `app/(landing)`: Contains the public-facing landing page.
- `app/(main)`: Holds the core application for authenticated users.
- `components/`: Shared UI components, organized by feature.
- `lib/`: Utility functions and libraries.
- `prisma/`: Database schema and migration files.
- `public/`: Static assets like images and fonts.

## Future Enhancements

- **Course Creation**: Tools for instructors to create and manage course content.
- **Payment Integration**: Full Stripe integration for course purchases.
- **Advanced Analytics**: Detailed progress tracking and performance insights.
- **Community Features**: Forums, reviews, and social sharing.
