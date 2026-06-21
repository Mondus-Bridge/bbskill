# bbskill Project

This repository bundles a collection of **Opencode skills** that help you work with Playwright and Opencode configuration.

## Available Skills

- **customize-opencode** – Edit or create Opencode configuration files (`opencode.json`, `.opencode/…`) and manage Opencode agents, plugins, or permission rules.
- **find-skills** – Discover and install additional Opencode skills based on natural‑language requests.
- **playwright-ci** – Ready‑to‑use CI/CD configurations for Playwright (GitHub Actions, GitLab CI, CircleCI, Azure DevOps, Jenkins, Docker, parallel sharding, reporting, coverage, global setup/teardown).
- **playwright-cli** – Automate browser interactions via the Playwright CLI – navigation, form filling, screenshots, tracing, bound sessions, debugging, and test generation.
- **playwright-core** – Core Playwright patterns for reliable E2E, API, component, visual, accessibility, and security tests (locators, assertions, fixtures, network mocking, auth flows, trace debugging, framework recipes).
- **playwright-migration** – Step‑by‑step migration guides from Cypress or Selenium/WebDriver to Playwright (command mappings, architecture changes, incremental adoption).
- **playwright-pom** – Guidance on using the Page Object Model with Playwright – when to use it, how to structure objects, and alternatives.
- **playwright-skill** – Comprehensive Playwright best practices for writing, debugging, and scaling test suites, covering all test types and CI/CD integration.

---

*Generated automatically by Opencode.*

## Playwright Test Commands

Run any of the 27 test configurations using the pattern:

```bash
npx playwright test --project=<app>-<type>-<stage> tests/<type>/<app>
```

| App     | Type       | Stage   | Command                                                                               |
| ------- | ---------- | ------- | ------------------------------------------------------------------------------------- |
| app     | e2e        | dev     | `npx playwright test --project=app-e2e-dev tests/e2e/app`                           |
| app     | e2e        | preprod | `npx playwright test --project=app-e2e-preprod tests/e2e/app`                       |
| app     | e2e        | prod    | `npx playwright test --project=app-e2e-prod tests/e2e/app`                          |
| app     | api        | dev     | `npx playwright test --project=app-api-dev tests/api/app`                           |
| app     | api        | preprod | `npx playwright test --project=app-api-preprod tests/api/app`                       |
| app     | api        | prod    | `npx playwright test --project=app-api-prod tests/api/app`                          |
| app     | screenshot | dev     | `npx playwright test --project=app-screenshot-dev tests/screenshot/app`             |
| app     | screenshot | preprod | `npx playwright test --project=app-screenshot-preprod tests/screenshot/app`         |
| app     | screenshot | prod    | `npx playwright test --project=app-screenshot-prod tests/screenshot/app`            |
| admin   | e2e        | dev     | `npx playwright test --project=admin-e2e-dev tests/e2e/admin`                       |
| admin   | e2e        | preprod | `npx playwright test --project=admin-e2e-preprod tests/e2e/admin`                   |
| admin   | e2e        | prod    | `npx playwright test --project=admin-e2e-prod tests/e2e/admin`                      |
| admin   | api        | dev     | `npx playwright test --project=admin-api-dev tests/api/admin`                       |
| admin   | api        | preprod | `npx playwright test --project=admin-api-preprod tests/api/admin`                   |
| admin   | api        | prod    | `npx playwright test --project=admin-api-prod tests/api/admin`                      |
| admin   | screenshot | dev     | `npx playwright test --project=admin-screenshot-dev tests/screenshot/admin`         |
| admin   | screenshot | preprod | `npx playwright test --project=admin-screenshot-preprod tests/screenshot/admin`     |
| admin   | screenshot | prod    | `npx playwright test --project=admin-screenshot-prod tests/screenshot/admin`        |
| lending | e2e        | dev     | `npx playwright test --project=lending-e2e-dev tests/e2e/lending`                   |
| lending | e2e        | preprod | `npx playwright test --project=lending-e2e-preprod tests/e2e/lending`               |
| lending | e2e        | prod    | `npx playwright test --project=lending-e2e-prod tests/e2e/lending`                  |
| lending | api        | dev     | `npx playwright test --project=lending-api-dev tests/api/lending`                   |
| lending | api        | preprod | `npx playwright test --project=lending-api-preprod tests/api/lending`               |
| lending | api        | prod    | `npx playwright test --project=lending-api-prod tests/api/lending`                  |
| lending | screenshot | dev     | `npx playwright test --project=lending-screenshot-dev tests/screenshot/lending`     |
| lending | screenshot | preprod | `npx playwright test --project=lending-screenshot-preprod tests/screenshot/lending` |
| lending | screenshot | prod    | `npx playwright test --project=lending-screenshot-prod tests/screenshot/lending`    |
