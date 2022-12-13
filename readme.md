# cypress framework

To test the login and logout flow in the Bynder website

The details of the test scenarios you will find in 2 files in  **Testcases/**

## Prerequisites:
- Install the latest version of Node and Npm
- Install cypress

To Open Cypress run `npm run cypress:open` from the terminal

**To run the project in a docker container** 
- You should have the docker installed in your device then run,
- a container with cypress included is spin up and tests are executed inside it.

`docker run -it -v $PWD:/e2e -w /e2e cypress/included:12.0.2 $@
`
**To run tests from the Dockerfile run**
`docker build -t cypress:bynder .` then
`docker run -t --name cypressContainer cypress:bynder /bin/bash
`

The project is running in Ci/CD on circleci you can access it from here
[https://app.circleci.com/pipelines/github/MariamElbarbary/cypress-bynder-login?branch=main]()