# Status badges:

## Deploy static content to pages:
(https://johanlossius.github.io/social-media-client/)

[![Deploy Static Content to Pages] (https://github.com/JohanLossius/social-media-client/blob/master/.github/workflows/pages.yml)](https://github.com/JohanLossius/social-media-client/blob/master/.github/workflows/pages.yml)
[![Automated Unit Testing](https://github.com/JohanLossius/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=workflow)](https://github.com/JohanLossius/social-media-client/actions/workflows/unit-test.yml)

# Project Requirements:
1. Project is configured to run Prettier on commit
2. Project is configured to run ESLint on commit
3. Code is versioned and branching conventions have been followed.
4. Project readme file is updated to include new configuration information and workflow status badges
5. All known bugs have been communicated in the Issues tab
6. The login function stores a token when provided with valid credentials
7. The logout function clears the token from browser storage
8. The user can log in with the login form with valid credentials
9. The user cannot submit the login form with invalid credentials and is shown a message.
10. The user can log out with the logout button

# Getting started with the development:
- Clone the repo from GitHub via GitHub Desktop:
clone https://github.com/JohanLossius/social-media-client.git
- And then install it:
If you are using GitHub Desktop and Visual Studio Code editor, simply launch and install it via GitHub Desktop by pulling it from the GitHub repo and follow the instructions of the program until you're setup in Visual Studio Code.
- run:
npm i
- To build the SASS changes, run:
npm run build
- Live server, run:
npm run start
to watch the SASS changes and start the live-server.
Please note that the live server installed dependency, I have not been able to work properly.
There I reccommend using the VS Code plugin for live server.
And Cypress is configured to work for this purpose, with cy.visit("/");
If you see what the error is for making the live server dependency work with my code, please notify.
Or if it an error with my local environment, then I'd be happy to know.
Thanks in advance.

The project should now be configured properly.

# To run the Jest Unit tests, run:
npm run test-unit

# To launch the Cypress app to run the Cypress tests, run:
npm run test-e2e
