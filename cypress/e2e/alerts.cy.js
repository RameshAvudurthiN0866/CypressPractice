/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  describe('alerts', function()
   {
      it('window alerts', function()
      {
  
        cy.visit("https://demo.automationtesting.in/Alerts.html")//open url
        cy.get("[onclick='alertbox()']").click()
        cy.on('window:alert', (alertmessage)=>{ //window:confirm is a catalog event in cypress
        expect(alertmessage).to.contains('I am an alert box!');

        })
    })

    it('window confirm',()=>{

        cy.get("#CancelTab").click()
        cy.get("[onclick='alertbox()']").click()
        cy.on('window:confirm', (alertmessage)=>{ //window:confirm is a catalog event in cypress
        expect(alertmessage).to.contains('Press a Button !');
        })
    })

    it('alert with TextBox',()=>{
        cy.contains('a','Alert with Textbox ').click()
        cy.window().then(($win) =>
        {
          cy.stub($win, 'prompt').returns('Hello')
          cy.get("[onclick='promptbox()']").click()
      })
    })
  
  
  })