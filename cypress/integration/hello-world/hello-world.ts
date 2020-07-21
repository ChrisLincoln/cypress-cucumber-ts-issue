/// <reference types="cypress" />

import { When, Then } from "cypress-cucumber-preprocessor/steps";
When('I visit the app', () => {
  cy.visit('http://localhost:3001')
})
Then(/it says hello world./, () => {
  
})

