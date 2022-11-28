Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  describe('My Test suite', function()
   {
      it('site of the page', function()
      {
  
        cy.visit("https://demo.automationtesting.in/Static.html")
        cy.get('.col-xs-2 >.col-xs-10 > #angular').trigger('dragstart')
        cy.get("[id='droparea']").trigger('drop').trigger('dragend')

        cy.get('div >.col-xs-10 > #mongo').trigger('dragstart')
        cy.get("[id='droparea']").trigger('drop').trigger('dragend')
        
        cy.get("[id='node']").trigger('dragstart')
        cy.get("[id='droparea']").trigger('drop').trigger('dragend')
    })
  
  
  })