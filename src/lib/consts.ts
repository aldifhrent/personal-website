// lib/projects.ts
import { Project } from "./interface";

export const projectsData: Project[] = [
  {
    id: "qa-pwdk-playwright",
    title: "QA-PWDK-Playwright",
    description:
      "Automation testing suite for the Simple POS PWDK web application using Playwright. Implemented Page Object Model (POM), fixtures, CI/CD pipelines, and comprehensive test coverage for login, product search, cart, and checkout workflows.",
    link: "https://github.com/aldifhrent/pos-pwdk-playwright",
    techStack: ["Playwright", "TypeScript", "Jest", "GitHub Actions"],
    details: `
Automation testing project for the *Simple POS PWDK* web application.
Built with Playwright using Page Object Model (POM).
Covers login, product search, cart, checkout, and reports.

**Highlights**:
- Page Object Model for modular tests  
- Fixtures for login state  
- GitHub Actions CI/CD integration  
- HTML & Allure reports  
- 80%+ test coverage

**Result**:
- Reduced manual testing time by ~60%  
- Improved reliability of regression suite
    `,
    status: "progress",
    planning: false,
    date: "2025-08-15",
  },
  {
    id: "api-testing-fakestoreapi",
    title: "API Testing - FakeStoreAPI",
    description:
      "Automated API testing project for FakeStoreAPI using Playwright and TypeScript.",
    link: "https://github.com/aldifhrent/api-testing-fakestoreapi",
    techStack: ["Playwright", "TypeScript", "Jest", "GitHub Actions"],
    details: `
API automation testing project built with Playwright (TypeScript) and Jest.
Designed with Page Object Model (POM) for maintainability and scalability.
Covers multiple endpoints including authentication, products, cart, checkout, and reporting.

**Highlights**:
- Page Object Model for modular and reusable tests  
- Fixtures for handling login/authentication state  
- Continuous Integration with GitHub Actions  
- HTML & Allure reports for better visibility  
- Achieved 80%+ test coverage

**Result**:
- Ensured API reliability for 20+ endpoints  
- Faster feedback cycle in CI/CD pipeline
  `,
    status: "progress",
    planning: false,
    date: "2025-09-01",
  },
];
