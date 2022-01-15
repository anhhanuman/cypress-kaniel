describe('Browser actions', () => {
    it('loads the correct url', () => {
        cy.visit('http://example.com', {timeout: 10000})
    })
})
