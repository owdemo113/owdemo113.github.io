describe('test suite', () => {
  it('test case #1', () => {
    
    cy.visit('https://owdemo113.github.io/')
    cy.get('h1').should('have.text', 'Hello World!')
  
  })
})