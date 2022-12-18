describe('example test', () => {
    it('goes to contact and submit', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Not much here yet!')
        cy.get('.employeeLink').click()
        cy.get('.contactLink').click()
        cy.get('[for="surname"]').type('test')
        cy.get('[type="submit"]').click()
    })
    it('goes to contact2 fill inputs then reset, fill again and submit', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Not much here yet!')
        cy.get('.employeeLink').click()
        cy.findByRole('link', {
            name: new RegExp('contact2', 'i'),
        }).click()
        cy.get('[for="name"]').type('test')
        cy.get('[for="surname"]').type('test')
        cy.get('[data-testid="reset"]').click()
        cy.get('[for="name"]').type('test')
        cy.get('[for="surname"]').type('test')
        cy.get('[type="submit"]').click()
    })
})
