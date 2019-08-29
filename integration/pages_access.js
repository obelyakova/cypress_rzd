describe('pages_access', function () {
    beforeEach(function (){
    cy.login_cs();
    });

it('calendar_calendar', function () {

    cy.visit('meeting');
    cy.get('h2').should('contain', 'Календарь')
});

it('plan', function () {

    cy.contains('План').click();
    cy.get('h2').should('contain','План')
});

it('calendar_list', function () {
    cy.visit('meeting/list');
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




