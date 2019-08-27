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
        //cy.get('.description').trigger('mouseover');
        cy.contains('Заседание совета директоров').trigger('mouseover');
            //.should('have.attr','style','display:block');
    });



});




