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


# Install dependencies

- npm run install

# To run specific user in dev, which is belong to specific part of application with a tag

- TEST_ENV=dev method=browser SINGLE_LOGIN_ACCOUNT=OwnerBB npx playwright test tests/e2e --project=chromium --grep @companies
- TEST_ENV=dev method=browser SINGLE_LOGIN_ACCOUNT=SuperAdmin npx playwright test tests/e2e --project=chromium --grep @global
- TEST_ENV=dev method=browser SINGLE_LOGIN_ACCOUNT=Admin npx playwright test tests/e2e --project=chromium --grep @admin
- TEST_ENV=dev method=browser SINGLE_LOGIN_ACCOUNT=User1 npx playwright test tests/e2e --project=chromium --grep @app
- TEST_ENV=dev method=browser SINGLE_LOGIN_ACCOUNT=CorpIP npx playwright test tests/e2e/app/otc.spec.js --project=chromium --grep @app

# API tesing of admin app

- TEST_ENV=dev method=api SINGLE_LOGIN_ACCOUNT=ApiSuperAdmin npx playwright test tests/api --project=api-tests --grep @super
- TEST_ENV=dev method=api SINGLE_LOGIN_ACCOUNT=ApiAdmin npx playwright test tests/api --project=api-tests --grep @fulladmin
- TEST_ENV=dev method=api SINGLE_LOGIN_ACCOUNT=ApiReadAdmin npx playwright test tests/api --project=api-tests --grep @readadmin
- TEST_ENV=dev method=api SINGLE_LOGIN_ACCOUNT=ApiAdmin npx playwright test tests/api --project=api-tests --grep @pokoadmin
- TEST_ENV=pokemon method=api SINGLE_LOGIN_ACCOUNT=ApiAdmin npx playwright test tests/api --project=api-tests --grep @fulladmin
- TEST_ENV=pokemon method=api SINGLE_LOGIN_ACCOUNT=ApiAdmin npx playwright test tests/api --project=api-tests --grep @pokoadmin
- TEST_ENV=pokemon method=api SINGLE_LOGIN_ACCOUNT=ApiSuperAdmin npx playwright test tests/api --project=api-tests --grep @pokosuper

# API tesing of app on .dev

- TEST_ENV=dev method=api SINGLE_LOGIN_ACCOUNT=Partner1 npx playwright test tests/api --project=api-tests --grep @partner1
- TEST_ENV=dev method=api SINGLE_LOGIN_ACCOUNT=ApiUser1 npx playwright test tests/api --project=api-tests --grep @user1 --workers=10
- TEST_ENV=dev method=api SINGLE_LOGIN_ACCOUNT=AdminApp npx playwright test tests/api --project=api-tests --grep @adminapp --workers=10
- TEST_ENV=dev method=api SINGLE_LOGIN_ACCOUNT=OverdraftUser npx playwright test tests/api --project=api-tests --grep @overdraft
- TEST_ENV=dev method=api npx playwright test tests/api --project=api-public --grep @other
- TEST_ENV=dev method=api npx playwright test tests/api --project=api-public --grep @public
- TEST_ENV=dev method=api npx playwright test tests/api --project=api-public --grep @bbpro

API tesing of app on prod

- TEST_ENV=prod method=api SINGLE_LOGIN_ACCOUNT=Partner1 npx playwright test tests/api --project=api-tests --grep @partner1

API tesing of app on .team1

- TEST_ENV=pokemon method=api SINGLE_LOGIN_ACCOUNT=Partner1 npx playwright test tests/api --project=api-tests --grep @partner1
- TEST_ENV=pokemon method=api npx playwright test tests/api --project=api-public --grep @public

# To run specific user in prod, which is belong to specific part of application with a tag

- TEST_ENV=prod SINGLE_LOGIN_ACCOUNT=User1 npx playwright test tests/e2e/app --project=chromium --grep @prod --retries=1

# Screenshot testing for mobile devices:

- TEST_ENV=dev SINGLE_LOGIN_ACCOUNT=User1 npx playwright test tests/visual/app --project=android-app --workers=2
- TEST_ENV=dev SINGLE_LOGIN_ACCOUNT=User1 npx playwright test tests/visual/app --project=ios-app --workers=2
- TEST_ENV=dev npx playwright test tests/visual/lending --project=android-lending --workers=2
- TEST_ENV=dev npx playwright test tests/visual/lending --project=ios-lending --workers=2

UI mode:

- TEST_ENV=dev SINGLE_LOGIN_ACCOUNT=User1 npx playwright test --ui --grep @app

# Stage control command

- TEST_ENV=dev //command to run tests in developer stage
- TEST_ENV=prod //command to run tests in production stage

# Best practice to run test runner for lending

- TEST_ENV=dev npx playwright test tests/e2e/lending --project=lending-chromium --grep @lending
- TEST_ENV=prod npx playwright test tests/e2e/lending --project=lending-chromium --grep @lending

# Extra command for flacky tests

- --retries=1 //allowing to rerunt test n times
- @grep{tagName} //allowing to use tageted part of application
- --debug //debbugin mode

# To run specific browser

- --project=firefox
- --project=chromium
- --project=webkit

# To run e2e specific folder

- tests/e2e/app //all user applications tests
- tests/e2e/admin //all admin application tests
- tests/e2e/lending //all lending tests

# Common tags:

- @app //for run test in user application
- @admin //for run test in admin application
- @lending //for run lending page

# To run codegen

- npx playwright codegen https://dev.bitbanker.org/
- npx playwright codegen --device="iPhone 15 Pro" https://dev.bitbanker.org/

# Updating screenshots

- TEST_ENV=prod npx playwright test tests/visual --project=ios-lending --update-snapshots
- TEST_ENV=dev npx playwright test tests/visual --project=ios-lending --update-snapshots
