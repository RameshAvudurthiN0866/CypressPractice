Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  import 'cypress-file-upload';
  describe('File upload', function()
   {
      it('single file upload', function()
      {
  
        cy.visit("https://the-internet.herokuapp.com/upload")//open url
        cy.get('#file-upload').attachFile('MicrosoftTeams-image.png')//it will take the file from fixture
        cy.get('#file-submit').click()
        // cy.wait(3000)
       // cy.get("div[class='example']").should('have.text','File Uploaded!')//validation of file uploaded
      })

      it('file upload -Rename',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")//open url
        cy.get('#file-upload').attachFile({filePath:'MicrosoftTeams-image.png',fileName:'myfile.png'})
        cy.get('#file-submit').click()


      })

      it('File upload - Drag and drop',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")//open url
        cy.get('#drag-drop-upload').attachFile("MicrosoftTeams-image.png",{subjectType:'drag-n-drop'})
      })
    
  })