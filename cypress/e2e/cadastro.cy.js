///<reference types= "cypress"/>
import { faker } from '@faker-js/faker';

describe('funcionalidade: cadastro no hud de leitura', () => {

beforeEach(() => {
    cy.visit('register.html')
    
});

    it('deve fazer o cadastro com sucesso, usando JS', () => {
    let email = `teste${Date.now()}@teste.com`    
    cy.get('#name').type('Marcos Perez')
    cy.get('#email').type(email)
    cy.get('#phone').type('119573528363')
    cy.get('#password').type('Marcos12345')
    cy.get('#confirm-password').type('Marcos12345')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    //resultado esperado
    cy.url().should('include', 'dashboard')
    });

    it('deve fazer cadastro com sucesso, usando faker', () => {
    let nome = faker.person.fullName()
    let email = faker.internet.email ()
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type('119573528363')
    cy.get('#password').type('Marcos12345')
    cy.get('#confirm-password').type('Marcos12345')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    //resultado esperado
    cy.url().should('include', 'dashboard')
    cy.get('#user-name').should('contain', nome)
    
});

    
});