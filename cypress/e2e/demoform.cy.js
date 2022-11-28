Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  describe('My Test suite', function()
   {
      it('site of the page', function()
      {
  
        cy.visit("https://demoqa.com/automation-practice-form")//open url
        cy.title().should('eq','ToolsQA')//verify the title of url
           cy.get("#firstName").type("Sowjanya")
           cy.get("#lastName").type("P")
           cy.get("#userEmail").type("sowji123@gmail.com")
          //  for radiobutton and checkbox we can use the check
          cy.get("[value='Female']").check().should('have.value','Female')
           cy.get("#userNumber").type("9234568790")
          //  Date picker
              cy.get('#dateOfBirthInput').click()
              cy.get('.react-datepicker__day--011').click()
              cy.get('#dateOfBirthInput').should('have.value', '11 Nov 2022')
          //  cy.get("#dateOfBirthInput").type("16 nov 2022")
           cy.get(".subjects-auto-complete__value-container").type('english{enter}')
           cy.get("#hobbies-checkbox-2").click()
           cy.get("#currentAddress").type("1/168,hyd")
          //  dropdowns
          cy.get("#state").click()
          cy.contains("div","NCR").click()
          cy.get("#city").click()
          cy.contains('uttarpradesh').click()
  
  
    })
  
  
  })
  
  // LOCATORS
  // There is a method called cy.get(selectors) identify the element
  // CSS Selectors
  // if we want to use class attribute the syntax is .class
  // example:cy.get(.mr-sm-2)
  // if we want to use ID attribute the syntax is #ID
  // example: cy.get(#firstName)
  // [attribute='value']
  // .class[attribute='value']