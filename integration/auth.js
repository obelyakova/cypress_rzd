describe('rzd_auth', function() {
    const username = '_grigorevna';
    const password = 'rzd123';


    context('auth', function () {
        beforeEach(function () {
            cy.clearCookies();
            cy.visit('meeting');
            cy.get('[name=form_auth]').invoke('attr', 'target', null);
        });

        it('incorrect_login', function () {
            cy.get('input[name=USER_LOGIN]').type('radzhana_abdullaeva_grigorevn');
            cy.get('input[name=USER_PASSWORD]').type(password);
            cy.get('[type=submit]').click();
            cy.contains('Неправильный логин или пароль.').should('be.visible')
        });

        it('incorrect_pass', function () {
            cy.get('input[name=USER_LOGIN]').type(username);
            cy.get('input[name=USER_PASSWORD]').type('1234');
            cy.get('[type=submit]').click();
            cy.contains('Неправильный логин или пароль.').should('be.visible')
        });

        it('success_auth', function () {
            cy.get('input[name=USER_LOGIN]').type(username);
            cy.get('input[name=USER_PASSWORD]').type(password);
            cy.get('[type=submit]').click();
            //cy.get('.name-surname').should('contain', 'Раджана');
            //cy.get('.patronymic').should('contain', 'Григорьевна');
            cy.contains('Раджана').should('be.visible');
        })
    })

});