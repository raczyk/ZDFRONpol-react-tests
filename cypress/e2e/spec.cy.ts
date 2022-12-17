describe('example test', () => {
    it('goes to contact and submit', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Not much here yet!')
        cy.get('.employeeLink').click()
        cy.get('.contactLink').click()
        cy.get('[for="surname"]').type('test')
        cy.get('[type="submit"]').click()
    })
})
