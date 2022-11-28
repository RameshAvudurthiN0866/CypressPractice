
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  describe('Handle Table',()=>{

    beforeEach('Login',()=>{

        cy.visit("https://demoqa.com/webtables");

    })
    it.skip('check number rows and columns',()=>{
        cy.get(".web-tables-wrapper .rt-tbody .rt-tr-group").should('have.length','10');//have.length it is used to find out the length
        cy.get(".web-tables-wrapper .rt-tr .rt-th").should('have.length','7');
    })

    it.skip('check cell data from specific and column',()=>{

      cy.get(".rt-tr-group:nth-child(3) .rt-td:nth-child(1)").contains("Kierra");
      //cy.get(".web-tables-wrapper .rt-tbody .rt-tr-group:nth-child(2) .rt-th:nth-child(2)").contains("Cantrell");

    })

    it.skip('Read all the rows and columns data in the first page',()=>{

      cy.get(".web-tables-wrapper .rt-tbody .rt-tr-group")//capture all the rows
      .each(($row,index,$rows)=>{  //read each row from table for that each block
        cy.wrap($row).within(()=>{  //wraping this current row and within that row getting all columns
          cy.get("[role='row']").each(($col,index,$cols)=>{ //read each column from table for that each block
            cy.log($col.text());
          })
        })

      })    
    })

    it.only('check value',()=>{
      
      //check value presence anywhere in the Table 

      cy.get("[class='rt-tbody'] .rt-tr").contains('Cierra').should('be.visible')

    })


    

})
  