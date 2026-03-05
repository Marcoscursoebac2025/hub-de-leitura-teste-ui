///<reference types= "cypress"/>
import { faker } from '@faker-js/faker';
import cadastroPage from '../support/cadastro-page';

describe('funcionalidade: cadastro no hud de leitura', () => {

beforeEach(() => {
    cadastroPage.visitarPaginaCadastro()
    
});

afterEach(() => {
cy.screenshot()
    


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


    it('deve fazer cadastro com sucesso- usando comando customizado', () => {
    let email = `teste${Date.now()}@teste.com` 
    let nome = faker.person.fullName({sex:'female'})
     cy.preencherCadastro(
    nome,email,'119573528362', 'Teste@3214', 'Teste@3214')

    cy.url().should('include', 'dashboard')
        
    });


    it('deve fazer cadastro com sucesso- usando page objects ', () => {
    let email = `teste${Date.now()}@teste.com`    
    cadastroPage.preencherCadastro('Jose Perez', email, '1196043749364', 'senha86047', 'senha86047')
    cy.url().should('include', 'dashboard')
      
    });

    it('deve validar mensagem ao tentar fazer cadastro sem preencher nome', () => {
    cadastroPage.preencherCadastro('', 'Marcos@teste.com', '112967462923', 'senha043283', 'senha043283',)
    cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
        
    });

    it('deve validar mensagem ao tentar fazer cadastro sem prencher email', () => {
    cadastroPage.preencherCadastro('Marcos Perez', '', '119277292708', 'senha739388','senha739388')
    cy.get('#register-form > :nth-child(2) > .invalid-feedback').should('contain', 'Email válido é obrigatório')
        
    });

    it.only('deve validar mensagem ao tentar fazer cadastro sem preencher senha', () => {
    let email = `teste${Date.now()}@teste.com`  
    cadastroPage.preencherCadastro('Marcos Perez', email, '118474363845', '', 'senha93838')
    cy.get('#password-feedback').should('contain','Mínimo 6 caracteres')
        
    });
    
})
