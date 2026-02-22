
describe('funcionalidade: contato', () => {

   beforeEach(() => {
   cy.visit('index.html')});

    it('Deve preencher formulario com sucesso', () => {
    cy.get('[name="name"]').type('Marcos Bello')
    cy.get('[name="email"]').type('Marcos@teste.com.br')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('mensagem de teste')
    cy.get('#btn-submit').click()
    //resultado esperado
    cy.contains('Contato enviado com sucesso!').should('exist')

    });

    it('deve validar mensagem de erro ao enviar mensagem sem preencher nome', () => {
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type('Marcos@teste.com.br')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('mensagem de teste')
    cy.get('#btn-submit').click()
    //resultado esperado
    cy.get('#alert-container').should('contain','Por favor, preencha o campo Nome')

    });

    it('deve validar mensagem de erro ao enviar mensagem sem preencher email', () => {
    cy.get('[name="name"]').type('Marcos Bello')
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type('mensagem de teste')
    cy.get('#btn-submit').click()
    //resultado esperado
    cy.get('#alert-container').should('contain','Por favor, preencha o campo E-mail')


    });

    it('deve validar mensagem de erro ao enviar mensagem sem selecionar o assunto', () => { 
    cy.get('[name="name"]').type('Marcos Bello')
    cy.get('[name="email"]').type('Marcos@ebac.com.br')
    //cy.get('[name="subject"]').select('parcerias')
    cy.get('[name="message"]').type('mensagem de teste')
    cy.get('#btn-submit').click()
    //resultado esperado
    cy.get('#alert-container').should('contain','Por favor, selecione o Assunto')

    });

    it('deve validar mensagem de erro ao enviar mensagem sem preecher a mensagem', () => {
    cy.get('[name="name"]').type('Marcos Bello')
    cy.get('[name="email"]').type('Marcos@ebac.com.br')
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').clear()
    cy.get('#btn-submit').click()
    //resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem')

    });

});