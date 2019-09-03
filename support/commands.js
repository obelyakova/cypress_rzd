// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('login_cs', function () {

//    return cy.request({
//        method:'POST',
//        url:'meeting',
        //form:true,
//        body:{
//            username_cs,
//            password_cs,
//        }
//    })
    cy.visit('');
    cy.get('.form_auth').invoke('attr', 'target', null);
    cy.get('input[name=USER_LOGIN]').type('_grigorevna');
    cy.get('input[name=USER_PASSWORD]').type('rzd123');
    cy.get('.login_btn').click();
});

Cypress.Commands.add('login_part', function() {
    cy.visit('');
    cy.get('.form_auth').invoke('attr', 'target', null);
    cy.get('input[name=USER_LOGIN]').type('ktorovich_5d42f8b0aecee0_484797');
    cy.get('input[name=USER_PASSWORD]').type('rzd123');
    cy.get('.login_btn').click();
});