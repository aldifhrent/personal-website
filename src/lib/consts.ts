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
- Page Object Model for modular and reusable tests  
- Fixtures for login state management  
- GitHub Actions CI/CD integration  
- HTML & Allure test reports  
- 80%+ test coverage

**Result**:
- Reduced manual regression testing time by ~60%  
- Improved reliability of the test suite
    `,
    status: "progress",
    planning: false,
    date: "2025-08-15",
  },
  {
    id: "qa-pwdk-selenium",
    title: "QA-PWDK-Selenium",
    description:
      "Automation testing suite for the Simple POS PWDK web application using Selenium and Pytest. Implemented Page Object Model (POM), fixtures, and regression coverage for login, product search, cart, and checkout workflows.",
    link: "https://github.com/aldifhrent/simple-pwdk-selenium",
    techStack: ["Selenium", "Python", "Pytest", "Allure"],
    details: `
Automation testing project for the *Simple POS PWDK* web application.  
Built with Selenium WebDriver and Pytest using Page Object Model (POM).  
Covers login, product search, cart, and checkout flows.

**Highlights**:
- Page Object Model for modular and maintainable tests  
- Pytest fixtures for setup and reusable test state  
- Allure reports for better test visibility  
- 20+ positive & negative test cases automated  

**Result**:
- Reduced manual regression testing time by ~50%  
- Improved stability of core workflows across browsers
    `,
    status: "finished",
    planning: false,
    date: "2025-08-10",
  },
//   {
//     id: "api-testing-fakestoreapi",
//     title: "API Testing - FakeStoreAPI",
//     description:
//       "Automated API testing project for FakeStoreAPI using Playwright and TypeScript.",
//     link: "https://github.com/aldifhrent/api-testing-fakestoreapi",
//     techStack: ["Playwright", "TypeScript", "GitHub Actions"],
//     details: `
// Automated API testing project for [FakeStoreAPI](https://fakestoreapi.com/) built with Playwright and TypeScript.  
// Focused on validating core e-commerce endpoints such as products, carts, and users with reusable API wrapper classes.

// **Highlights**:
// - Modular API wrapper classes for cleaner and maintainable code  
// - Test lifecycle management with Playwright fixtures  
// - Continuous Integration with GitHub Actions  
// - HTML & Allure reports for better test visibility  
// - 80%+ test coverage across endpoints

// **Result**:
// - Verified reliability and consistency of 15+ endpoints  
// - Improved developer feedback loop with automated CI/CD pipeline
//     `,
//     status: "finished",
//     planning: false,
//     date: "2025-09-01",
//   },
];
