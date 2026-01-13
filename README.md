# jes.ph

[![Build](https://github.com/iammary/jes.ph/actions/workflows/ci.yml/badge.svg)](https://github.com/iammary/jes.ph/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-App-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Utility--first-38bdf8)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Tests-Vitest-yellow)](https://vitest.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Personal portfolio and frontend architecture playground.  
Live at **https://jes.ph**

Built with **Next.js**, this project focuses on modern frontend patterns, scalable UI architecture, and performance-conscious design.

<p align="center">
  <img src="/public/jes-code.png" alt="jes.ph-code" width="200" />
</p>

## Overview

This repository serves two purposes:

- A **personal portfolio** showcasing work, experience, and ideas
- A **frontend architecture playground** for exploring patterns, composition, and maintainability

The codebase prioritizes clarity, explicit structure, and modern tooling over unnecessary abstraction.

## Tech Stack

- Framework: [Next.js](https://nextjs.org/) (App Router)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Testing: [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/)
- Fonts: [Cal Sans](https://github.com/calcom/font) and Inter
- Package Manager: npm

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

    npm install

### Development

Start the local development server:

    npm run dev

Open the site locally at:

    http://localhost:3000

## Production Build

Create an optimized production build:

    npm run build

## Project Structure

    app/        Next.js App Router pages, layouts, and metadata
    layout/     Shared UI layout components
    utils/      Utility functions and helpers
    public/     Static assets (images, fonts)
    styles/     Global styles and Tailwind configuration

## Testing

This project uses **Vitest** with **React Testing Library** for functional unit testing.

Run all tests:

    npm test:watch

Run tests once (CI-style):

    npm test

Lint the codebase:

    npm run lint

### Test Conventions

- Test files are colocated with the files they test
- Example: Component.tsx → Component.test.tsx
- Tests favor functional and unit-level coverage over heavy integration tests

## Deployment

The site is deployed to production at:

https://jes.ph

Deployment details are intentionally minimal and may evolve over time.

## License

This project is licensed under the MIT License.  
See the LICENSE file for details.
