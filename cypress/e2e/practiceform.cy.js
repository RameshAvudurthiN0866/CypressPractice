Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  describe('My Test suite', function () {
    it('site of the page', function () {
  
      cy.visit("https://demo.automationtesting.in/Register.html")//open urlnpx 
      cy.get("[ng-model ='FirstName']").type("Sowjanya")
      cy.get("[ng-model='LastName']").type("p").should('have.value', 'p')
      cy.get("[ng-model='Adress']").type("1/56,HYD")
      cy.get("[ng-model='EmailAdress']").type("sowji123@gmail.com")
      cy.get("[ng-model='Phone']").type(7894562456)
      // for radiobutton and checkbox we can use the check
      cy.get("[value='FeMale']").check().should('have.value', 'FeMale')
      cy.get("[value='Movies']").check().should('have.value', 'Movies')
      // for dropdowns
      cy.get("#msdd").click({ force: true })
      cy.get(".ui-corner-all").contains('English').click({ force: true })
      cy.get("#Skills").select('Android').should('have.value', 'Android')
  
  
    })
  
  })