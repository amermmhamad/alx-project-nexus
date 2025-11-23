# ProDev Frontend Engineering – Program Summary

Welcome to the alx-project-nexus repository.
This repository documents my journey, learnings, and key takeaways from the ALX ProDev Frontend Engineering Program, where I built practical, industry-aligned skills in full-stack frontend development using modern technologies.

# Program Overview

The ProDev Frontend Engineering Program is an intensive, project-based track that focuses on real-world frontend engineering, covering fundamental and advanced concepts required to build scalable, production-ready web and mobile applications.

Throughout the program, I worked with industry-standard technologies, modern frameworks, API integrations, and system design principles—gaining hands-on experience through assignments, debugging, and building complete applications.

# Key Technologies Covered

## Frontend & Full-Stack Technologies

- Next.js (App Router, API Routes, Rendering Patterns, Image Optimization)

- React & React Native

- TailwindCSS v4

- TypeScript

- GraphQL (Queries, Mutations, Apollo Client)

- REST APIs & API Integration

- Progressive Web Apps (PWA)

- Expo & Mobile App Development

- State Management (Zustand, React Context, useReducer)

- Authentication systems (Google OAuth, Appwrite deep integration)

- CI/CD & GitHub Workflow fundamentals

# Software Engineering & System Concepts

- System Design & Analysis

- Reusable Component Design

- Error Handling & Debugging

- Caching & Performance Optimization

- Frontend Architecture

- Clean Code & Folder Structure Organization

# Major Learnings

1. Next.js Deep Dive

- Understanding server vs client components

- Dynamic routing, layouts, metadata

- Server actions and data fetching patterns

- Image component configuration and domain restrictions

- Handling API routes and errors properly

2. TailwindCSS v4 Modern Workflow

- Replacing @apply and @theme with utility-first classes

- Styling strategies using the new config-less Tailwind

- Responsive layout techniques and componentizing UI

3. TypeScript for Frontend

- Interfaces, types, and generics

- Enforcing typed API responses

- Reducing runtime bugs through static type safety

4. GraphQL Essentials

- Building queries, mutations, and fragments

- Apollo Client integration

- Caching strategies for performant applications

5. Mobile Development with Expo

- Appwrite authentication (Google OAuth Flow)

- Linking, environment variables in Expo, and debugging

- Rendering lists, images, and optimizing UX for mobile

6. System Design Thinking

- Designing scalable frontend systems

- Component communication models

- State management strategy selection

- User flows, data flow diagrams, and feature planning

# Challenges Faced & Solutions Implemented

1. Environment Variables in Expo

- Challenge: Expo Go not reading .env values for Appwrite auth.
- Solution:

Correctly used expo-constants and app.config.js to inject variables.

Implemented proper redirect/ping mechanism for OAuth.

2. Next.js Image Domain Errors

- Challenge: Invalid image host errors (next/image).
- Solution:

Updated next.config.js → added m.media-amazon.com and other required domains.

Rebuilt app after config change.

3. Tailwind v4 Migration

- Challenge: @apply no longer supported.
- Solution:

Converted all styles to utility classes.

Adopted the new "design-tokens via CSS variables" approach where needed.

4. CORS & API Integration Errors

- Challenge: Failing requests using fetch/axios due to incorrect endpoints or method definitions.
- Solution:

Implemented proper API route handling.

Added unified error handling with clear messages to debug.

5. GitHub Workflow Issues

- Challenge: 404 errors for local API routes in Next.js.
- Solution:

Ensured correct folder structure under /src/app/api/...

Verified method signatures and route handlers.

# Best Practices Learned

## Coding Best Practices

- Write predictable, reusable components

- Prefer TypeScript for safety and maintainability

- Keep folder structure clean and consistent

- Avoid deeply nested components

- Use environment variables properly (.env.local, app.config.js)

## API Best Practices

- Centralize all API calls

- Use React Query or Apollo caching for performance

- Graceful error handling with fallback UIs

## UI/UX Best Practices

- Optimize images

- Maintain accessibility (ARIA labels, alt text)

- Prioritize mobile-first design

## Version Control

- Use meaningful commit messages

- Follow branch workflows

- Keep PRs small and reviewable

## Running Locally

1. **Clone & install**
   ```bash
   git clone https://github.com/YOUR_USERNAME/alx-project-nexus.git
   cd alx-project-nexus
   npm install          # or yarn / pnpm install
   ```
2. **Environment variables**
   Create a `.env` file (or `app.config.js` / `app.config.ts`) and set the Expo public RapidAPI keys used by `lib/jobsApi.ts`:

   ```
   EXPO_PUBLIC_RAPIDAPI_BASE_URL=https://example-api.com
   EXPO_PUBLIC_RAPIDAPI_KEY=your_key_here
   EXPO_PUBLIC_RAPIDAPI_HOST=example-api.com
   ```

   When cloning this repo for local development without real credentials, the mock dataset in `constants/jobs.json` will still load, but remote API calls will fail unless valid keys are provided.

3. **Start the Expo dev server**

   ```bash
   npx expo start
   ```

   - Scan the QR code with Expo Go (iOS/Android) or press `w` for web.

4. **Useful scripts**
   - `npm run lint` – run TypeScript/Nx lint rules
   - `npm run test` – if you wire up tests

5. **Troubleshooting**
   - If Metro bundler fails, clear the cache: `npx expo start --clear`
   - Ensure you’re on an LTS Node version (see `.nvmrc` if present)

Happy hacking!
