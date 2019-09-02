describe('pages_access', function () {
    beforeEach(function (){
    cy.login_cs();
    });

    it('main', function () {
    cy.visit('');
    cy.get('h2').should('contain', 'Календарь')
    });

    it('profile, organization_card', function () {
        cy.get('.user-name').first().click();
        cy.get('h2').should('contain', 'Организация');
        cy.get('.user-organization').find('a')
            .should('have.attr','href')
            .and('include','/organization/')
            .then(href => {
            cy.visit(href)
        });

        cy.get('h2').should('contain','Полное название')
            .and('contain','Фактический адрес')
            .and('contain','Юридический адрес');
    });

    it('plan', function () {
    cy.contains('План').click();
    cy.get('h2').should('contain','План')
    });

    it('tasks', function () {
        cy.contains('Задачи').click();
        cy.get('h2').should('contain','Задачи')
    });

    it('calendar_calendar', function () {
        cy.contains('Календарь').click();
        cy.get('h2').should('contain', 'Календарь')
    });

    it('calendar_list', function () {
    cy.get('.view-list').click();
    cy.get('h2').should('contain', 'Список мероприятий')
    });

    it('calendar_event_card', function () {
        cy.visit('meeting');
        cy.contains('Заседание совета директоров').trigger('mouseover')
            .parent().find('.detail-info_modal').should('have.attr','style','display: block;')
            .find('.description__p').first().click({force:true});
        cy.get('h2').should('contain','Заседание совета директоров');
    });

});




