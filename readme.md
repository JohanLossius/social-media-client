Getting started with the development:
Clone the repo from GitHub via GitHub Desktop:
clone https://github.com/JohanLossius/social-media-client.git

And then install it:
If you are using GitHub Desktop and Visual Studio Code editor, simply launch and install it via GitHub Desktop by pulling it from the GitHub repo and follow the instructions of the program until you're setup in Visual Studio Code.

run: npm i

Live server:
run
npm run start
to watch the sass changes and start the live-server.
Please note that the live server installed dependency, I have not been able to work properly.
There I reccommend using the VS Code plugin for live server.
And Cypress is configured to work for this purpose, with cy.visit("/");

The project should now be configured properly.

To run the Jest Unit tests, simply run:
npm run test-unit

To run the Cypress tests, simply run:
npm run test-e2e

Status badges:

[![Automated Unit Testing](https://github.com/JohanLossius/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=workflow)](https://github.com/JohanLossius/social-media-client/actions/workflows/unit-test.yml)