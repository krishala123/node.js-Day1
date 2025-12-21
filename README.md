# Node.js Workshop

> A hands-on workshop to learn modern Node.js development — from basics to building and deploying full-stack applications.

Badges: ![Node.js](https://img.shields.io/badge/node-%3E%3D18-green) ![License](https://img.shields.io/badge/license-MIT-blue

## Description

This repository contains materials, example code, and exercises for a Node.js workshop aimed at developers who want practical experience building server-side applications with Node.js and Express, connecting to databases, writing tests, and deploying to a cloud provider.

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm (comes with Node) or yarn
- Git
- Optional: Docker (for database or deployment exercises)
- Basic JavaScript knowledge (ES6+)

Recommended: Use nvm to manage Node versions:

```bash
nvm install 18
nvm use 18
```

## Getting Started

1. Clone the repo
```bash
git clone https://github.com/krishala123/node.js-workshop.git
cd node.js-workshop
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the example application
```bash
npm run start
# or for development with auto-reload:
npm run dev
```

4. Open http://localhost:3000 (or the port printed in logs)

Environment variables
- Copy `.env.example` to `.env` and set required variables:
```bash
cp .env.example .env
```

## Workshop Structure

Each module contains slides, lecture notes, and practical exercises.

- Module 0 — Introduction & Environment setup
- Module 1 — Node.js fundamentals (modules, event loop, streams)
- Module 2 — Asynchronous JavaScript (callbacks, promises, async/await)
- Module 3 — Building APIs with Express
- Module 4 — Persistence (Postgres / MongoDB)
- Module 5 — Authentication & Authorization
- Module 6 — Testing (unit, integration)
- Module 7 — Error handling & logging
- Module 8 — Deployment and CI/CD (Heroku / Vercel / Docker)
- Module 9 — Performance & Security best practices

Folders:
- /examples — working example projects
- /exercises — exercise descriptions and starter code
- /solutions — reference solutions (optional / hidden during workshop)
- /slides — slide decks and lecture materials

## Exercises and Solutions

Each exercise folder contains:
- README.md — instructions
- starter/ — starter code
- tests/ — automated tests (if applicable)
- solution/ — reference implementation (keep hidden until after exercises)

To run an exercise's tests:
```bash
cd exercises/<exercise-name>
npm install
npm test
```

## Testing

We use Jest + Supertest for automated tests.

Run the test suite:
```bash
npm test
```

Run tests in watch mode during development:
```bash
npm run test:watch
```

## Deploying

Example deployment steps included in `/deploy` or in each example project's README. Typical flow:

- Build production bundle: `npm run build`
- Push to container registry or platform:
  - Heroku: `git push heroku main`
  - Vercel / Netlify: connect repo and set build commands
- Configure environment variables on the platform

## Contributing

Contributions are welcome. To contribute:
1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-change`
3. Make changes and add tests
4. Open a pull request describing your changes

Please follow the code style in the repository and add tests for new features.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.




