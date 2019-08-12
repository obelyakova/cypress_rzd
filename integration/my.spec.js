Cypress.Screenshot.defaults({
    screenshotOnRunFailure: false
})

describe('rzd_auth', function() {
    it('failed_auth', function () {
        cy.visit('http://rzhd.2.korusdev.ru');
        cy.get('input[name=USER_LOGIN]').type('radzhana_abdullaeva_grigorevna');
        cy.get('input[name=USER_PASSWORD]').type('rzd123');
        cy.get('.login_btn').click();
        cy.get('.recovery-box').should('contain', 'Неправильный логин или пароль.')
    });
});