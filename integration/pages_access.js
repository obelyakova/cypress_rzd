describe('pages_access', function () {
    beforeEach(function (){
    cy.login_cs();
    });

it('calendar_calendar', function () {

    cy.visit('meeting');
    cy.get('h2').should('contain', 'Календарь')
});

it('calendar_list', function () {
    cy.visit('meeting/list');
    cy.get('h2').should('contain', 'Список мероприятий')
});

    it('calendar_event_card', function () {
        cy.visit('meeting');
        cy.get('.description__p cl-red').trigger('mouseover');
        cy.get('.detail-info_modal').should('be.visible');
    })



});




