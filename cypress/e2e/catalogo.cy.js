///<reference types= "cypress"/>

describe('funcionalidade catalogo de livros', () => {

beforeEach(() => {cy.visit('catalog.html')
});

it('deve clicar no botao adicionar a cesta', () => {
cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
cy.get('#cart-count').should('contain', 1)
    
});

it('deve clicar em tudos os botoes adicionar a cesta', () => {
cy.get('.btn-primary').click({ multiple: true })
    
});

it('deve clicar no primeiro botao adicionar a cesta', () => {
cy.get('.btn-primary').first().click()
    
});

it('deve clicar no ultimo botao adicionar a cesta', () => {
cy.get('.btn-primary').last().click()
    
});    

it('deve clicar no terceiro bota adicioar a cesta', () => {
cy.get('.btn-primary').eq(2).click()
    
});

it('deve clicar no quinto bota adicioar a cesta', () => {
cy.get('.btn-primary').eq(4).click()
cy.get('#global-alert-container').should('contain', 'A Metamorfose')
    
});

it.only('deve clicar no nome do livro e direccionar para a tela do livro', () => {
cy.contains('Dom Casmurro').click()
cy.url().should('include', 'book-details')
cy.get('#add-to-cart-btn').click()
cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')

    
});


});