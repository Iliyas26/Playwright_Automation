# Playwright TypeScript Automation Framework

A robust, maintainable, and scalable test automation framework built with Playwright and TypeScript, demonstrating best practices and design patterns.

## 🎯 Features

- Page Object Model (POM) architecture
- Custom fixtures and helpers
- Cross-browser testing support
- Shadow DOM handling
- Custom step decorators for better reporting
- Utility functions for common operations
- Type-safe implementation

## 🏗️ Architecture
playwright-automation/
├── fixtures/
│ └── base.fixture.ts # Custom fixtures and step decorator
├── pages/
│ ├── login.page.ts # Login page objects
│ └── product.page.ts # Product page objects
├── utils/
│ └── common.helper.ts # Reusable helper functions
├── tests/
│ └── e2e.spec.ts # E2E test scenarios
└── playwright.config.ts # Playwright configuration

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
bash
Clone the repository
git clone <repository-url>
Install dependencies
npm install

### Running Tests
bash
Run all tests
npx playwright test
Run specific test file
npx playwright test e2e.spec.ts
Run in headed mode
npx playwright test --headed

## 🎨 Framework Features

### Page Object Model
typescript:pages/login.page.ts

### Custom Fixtures
typescript:fixtures/base.fixture.ts

### Helper Functions
typescript:utils/common.helper.ts

## 🔧 Key Components

### 1. Base Fixture
- Custom test fixtures
- Page initialization
- Step decorator for reporting

### 2. Page Objects
- Encapsulated page elements
- Type-safe locators
- Action methods with step decorators

### 3. Common Helper
- Dropdown handling
- File upload utilities
- Shadow DOM interaction
- Element stability checks
- Date formatting
- Drag and drop operations

## 📝 Example Test Case
typescript:tests/e2e.spec.ts


## 🌐 Demo Website
The framework uses [LambdaTest E-commerce Playground](https://ecommerce-playground.lambdatest.io/) to demonstrate:
- Login functionality
- Product navigation
- Filters application
- Wishlist operations

## 🛠️ Cross-Browser Testing
Configured browsers:
- Chromium
- Firefox
- WebKit

## 📊 Reporting
- HTML reporter enabled by default
- Screenshot capture on failure
- Step-by-step test execution logs

## 🔍 Best Practices Demonstrated
1. Type Safety
2. Code Reusability
3. Separation of Concerns
4. Error Handling
5. Clean Code Principles
6. Maintainable Test Structure

## 🤝 Contributing
Feel free to submit issues, fork the repository, and create pull requests for any improvements.

## 📄 License
This project is licensed under the ISC License.
