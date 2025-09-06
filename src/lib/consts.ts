// lib/consts.ts atau lib/projects.ts (sesuai struktur kamu)
import { Project } from "./interface";

export const projectsData: Project[] = [
  {
    id: "qa-pwdk-playwright",
    title: "QA-PWDK-Playwright",
    description:
      "Automation testing suite for the Simple POS PWDK web application using Playwright. Implemented Page Object Model (POM), fixtures, CI/CD pipelines, and comprehensive test coverage for login, product search, cart, and checkout workflows.",
    link: "https://github.com/aldifhrent/qa-pwdk-playwright",
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
    `,
  },
  
];
