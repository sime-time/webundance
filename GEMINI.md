# Webundance Overview

This document provides context for the Gemini AI assistant to understand and effectively assist with this project.

## About This Project

This project is a Nuxt.js application for "Webundance," which is an web development agency. It's a modern, server-side rendered web application that includes a page for booking calls via Calendly.

## Tech Stack

- **Framework:** Nuxt.js (v3+)
- **Language:** TypeScript
- **UI:** Vue.js with the @nuxt/ui component library.
- **Styling:** Tailwind CSS.
- **Linting:** ESLint with @antfu/eslint-config.
- **Package Manager:** pnpm
- **Key Modules:**
  - `@nuxt/ui`: For UI components.
  - `nuxt-calendly`: For embedding Calendly.
  - `motion-v/nuxt`: For animations.

## Project Structure

The project follows a standard Nuxt.js directory structure:

- `components/`: Reusable Vue components.
- `pages/`: Top-level pages and routes.
- `layouts/`: Layout templates for pages.
- `server/api/`: Server-side API endpoints.
- `assets/`: Static assets like CSS.
- `public/`: Publicly served files like `favicon.ico`.
- `nuxt.config.ts`: Main Nuxt configuration file.
- `package.json`: Project dependencies and scripts.

## Key Commands

The following commands are defined in `package.json` and should be run with `pnpm`:

- **Run development server:** `pnpm dev`
- **Build for production:** `pnpm build`
- **Lint files:** `pnpm lint`
- **Fix linting errors:** `pnpm lint:fix`
- **Preview production build:** `pnpm preview`
- **Generate static site:** `pnpm generate`

## Coding Style & Conventions

- **TypeScript:** The project uses TypeScript. Please maintain type safety and add types where appropriate.
- **ESLint:** Code is linted with ESLint using `@antfu/eslint-config`. Please ensure any new code passes the linter (`pnpm lint`).
- **Vue SFC:** Components are written as Single File Components (`.vue`).
- **UI Components:** Prefer using components from the `@nuxt/ui` library where possible to maintain a consistent look and feel.
