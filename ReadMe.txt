# <Work Motion Assessment> - Cypress Automation Testing

A comprehensive end-to-end (E2E) test automation project using [Cypress](https://www.cypress.io/) for UI testing. This project includes automatically generated **HTML test reports** using [Mochawesome](https://github.com/adamgruber/mochawesome).


## Project Overview

This Project is designed with POM to perform automated end-to-end testing for Login , New Talent On boarding , and search functionality. It uses Cypress for browser-based automation and Mochawesome.

---

## Tech Stack

- **Testing Framework**: [Cypress](https://docs.cypress.io/)
- **Reporting Tool**: [Mochawesome]
- **Programming Language**: JavaScript
- **Package Manager**: npm

---

## Project Structure

```bash
<	WORKMOTION>/
│
├── cypress/
│   ├── fixtures/         # Static test data
│   ├── e2e            # Test specifications                    
         ├── integration/      
              ├── TestCases/
                   ├── Login TCs/
                   ├── Search Functionality TCs/
                   ├── Talent OnbOarding TCs/     
│   ├── plugins/          # Plugin configurations
│   ├── Reports/          # json and HTML Reports generated Via Mochawesome
    ├── Screenshots/       # Screenshots for failures in any TC
│   └── support/          # Custom commands and helpers
├── Pages                 # Pages represents windows or Tabs In Web Application
├── cypress.config.js     # Cypress config file
├── package.json          # Scripts & dependencies
└── README.txt             # Project documentation


## Prerequisites

Ensure the following are installed on your machine:

Node.js (v14 or higher)

npm (comes with Node.js)



## Add project in your work space
Extract the project

If downloaded as a zip, extract the folder.

Open in Visual Studio Code (or your preferred IDE)


Install dependencies
npm install


## Running Tests
Run tests in headless mode with HTML report:
npm run test:report

Run tests with Cypress Test Runner (interactive mode):
npx cypress open

Run all tests in headless mode (without report):
npx cypress run



## Viewing Reports

After running npm run test:report, the test report is generated at:

   cypress/reports/mochawesome-report/mochawesome.html
you can find them in cypress->reports directory on your machine.


Open this file in a browser to view the interactive test report.

Failure screenshots (if any) can be found in:
cypress/screenshots/


## NPM Scripts (Defined in package.json)
"scripts": {
  "test": "cypress run",
  "test:report": "cypress run --reporter mochawesome --reporter-options reportDir=cypress/reports/mochawesome-report,overwrite=false,html=true,json=true",
  "clean:reports": "rimraf cypress/reports"
}


## Maintainer

<Menna Tarek> — Mennatallahtarek96@mail.com
