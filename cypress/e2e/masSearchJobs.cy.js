/// <reference types = "cypress"/>
/*im comfortable with running my test suites through xml in selenium so I did some research to run my test through the script function in my package.JSON file */



//explicit wait
const { TIMEOUT } = require("dns")
//navigate to website
it('Searches for job', () =>{
cy.visit('https://www.masmedicalstaffing.com/')


//use xpath
cy.xpath("//*[@name='keywords']").eq(0).type('Nurse', {timeout:2000})

cy.xpath("//*[text()='Search Jobs']").eq(0).click({timeout: 2000})


})

it('Login to MAS website', () =>{
    cy.visit('https://www.masmedicalstaffing.com/')
    
    
    //use xpath
    cy.xpath("//*[@title='Login']").click({timeout:2000})
    
    cy.xpath("//*[@title='Finish an Existing Application']").click({timeout:2000})
    
    
    })
