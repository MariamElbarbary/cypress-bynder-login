**A cypress framework**

To test the login and logout flow in the Bynder website

The details of the test scenarios you will find in 2 files in  Testcases/


## Prerequisites:
- Install the latest version of Node and Npm
- Install cypress

To Open Cypress run `npm run cypress:open` from the terminal

To run the project in a docker container 
- You should have the docker installed in your device then run,
- a container with cypress included is spin up and tests are executed inside it.

`docker run -it -v $PWD:/e2e -w /e2e cypress/included:12.0.2 $@
`

To run tests from the docker-compose file run
`docker-compose up --exit-code-from cypress

note the docker-compose file doesn't work properly as since the latest changes in cypress they changed the config file to js file instead of config.json 
I do think inside the docker image somehow it still search for a json, it needs abit more investigation
`