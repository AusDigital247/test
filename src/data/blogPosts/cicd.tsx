import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';

export const cicdPost: BlogPost = {
  title: "CI/CD Best Practices for Modern Web Applications",
  slug: "cicd-best-practices-web-applications",
  excerpt: "Learn how to implement effective CI/CD pipelines for web applications to improve development efficiency and code quality.",
  date: "2024-03-06",
  author: "A Shareef",
  tags: ["DevOps", "CI/CD", "Web Development"],
  image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80",
  readTime: 12,
  content: (
    <>
      <p>
        Continuous Integration and Continuous Deployment (CI/CD) are essential practices for modern web development teams. In this comprehensive guide, we'll explore how to set up robust CI/CD pipelines that ensure code quality and streamline deployments.
      </p>

      <img 
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80" 
        alt="CI/CD Pipeline Visualization"
        className="w-full rounded-xl my-8"
      />

      <h2>Setting Up Automated Testing</h2>
      <p>
        A comprehensive testing strategy should include unit tests, integration tests, and end-to-end tests. Here's an example of a Jest configuration for React applications:
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
}`}</pre>

      <h2>GitHub Actions Workflow</h2>
      <p>
        Here's an example of a GitHub Actions workflow that implements CI/CD:
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm test
      - run: npm run lint
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Production
        env:
          DEPLOY_TOKEN: \${{ secrets.DEPLOY_TOKEN }}
        run: |
          # Add deployment commands here`}</pre>

      <h2>Docker Configuration</h2>
      <p>
        Containerization is crucial for consistent environments. Here's a sample Dockerfile for a Node.js application:
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

EXPOSE 3000
CMD ["npm", "start"]`}</pre>

      <img 
        src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80" 
        alt="Continuous Deployment"
        className="w-full rounded-xl my-8"
      />

      <h2>Monitoring and Rollback Strategy</h2>
      <p>
        Implement comprehensive monitoring using tools like Prometheus and Grafana. Here's an example of a basic Prometheus configuration:
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'web-app'
    static_configs:
      - targets: ['localhost:3000']
    metrics_path: '/metrics'`}</pre>

      <h2>Automated Rollback Script</h2>
      <p>
        Implement automated rollbacks for failed deployments:
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg my-4">
{`#!/bin/bash
# rollback.sh

# Check deployment health
health_check() {
  response=$(curl -s http://localhost:3000/health)
  if [[ $response == *"healthy"* ]]; then
    return 0
  else
    return 1
  fi
}

# Perform rollback if health check fails
if ! health_check; then
  echo "Deployment failed, initiating rollback..."
  docker-compose up -d --rollback
  if health_check; then
    echo "Rollback successful"
    exit 0
  else
    echo "Rollback failed"
    exit 1
  fi
fi`}</pre>

      <p>
        Our <Link to="/services/web-development" className="text-[#3DD2F0] hover:underline">web development team</Link> implements 
        these CI/CD best practices in all projects. Visit our <Link to="/" className="text-[#3DD2F0] hover:underline">homepage</Link> to learn more.
      </p>
    </>
  )
};