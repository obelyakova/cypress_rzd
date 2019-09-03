describe('vote_cs', function () {
    //beforeEach(function () {
    //});

    it('event_card_before_voting', function () {
        cy.login_cs();
        cy.visit('meeting/list');

        cy.on('uncaught:exception', (err, runnable) => {
            // эта штука, вставленная перед действием, вызывающим ошибку, позволяет её заигнорить и гнать дальше
            expect(err.message).to.include('Cannot read property \'ajax\'');
            done();
            return false
        });

        cy.contains('Голосование не начато').parent('.status-task')
            .parent('.task-row ').children('.desc-task').find('a')
            .should('have.attr','href').and('include','/meeting/')
            .then(href => {
                cy.visit(href)
                });

      //  cy.contains('Открыть голосование').click({force: true});
      //  cy.get('body > div.modal-window.open-voting_modal')
      //      .should('have.attr','style','display: block;');
      //  cy.contains('Да').click();
    });

    it('voting_restriction', function () {
        cy.contains('Ограничить').click({force: true});
        cy.get('[type="checkbox"]').first().check({force: true})
            .parent('.checkbox-container').parent('.column');
        cy.get('textarea[placeholder="Комментарий*"]').first().should('have.attr','style','display: inline-block;')
            .type('Автотест ограничил голосование для первого участника по первому проекту решения');
        cy.contains('Сохранить').click();
        cy.get('.voting-restriction_hide').should('have.attr','style','display: none;');

        //cy.reload(false);
        //cy.login_cs();
        //cy.contains('Ограничить').click({force: true});
        //cy.get('textarea[placeholder="Комментарий*"]').first().should('have.attr','style','display: inline-block;')
        //    .and('contain','Автотест ограничил голосование для первого участника по первому проекту решения');

    });
});