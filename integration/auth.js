describe('rzd_auth', function() {
    const username = 'radzhana_abdullaeva_grigorevna';
    const password = 'rzd123';

    context('auth', function () {
        beforeEach(function () {
            cy.visit('http://rzhd.2.korusdev.ru')
            cy.get('form_auth').invoke('attr', 'target', null);
        });

        it('failed_auth', function () {
            cy.get('input[name=USER_LOGIN]').type('radzhana_abdullaeva_grigorevn');
            cy.get('input[name=USER_PASSWORD]').type(password);
            cy.get('.recovery-box').should('contain', 'Неправильный логин или пароль.')
        });

        it('success_auth', function () {
            cy.get('input[name=USER_LOGIN]').type(username);
            cy.get('input[name=USER_PASSWORD]').type(password);
            cy.get('.login_btn').click();
            cy.get('.name-surname').should('contain', 'Абдуллаева Раджана');
            cy.get('.patronymic').should('contain', 'Григорьевна')
        })
    })
});