/// <reference types="cypress" />

describe('Home Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display header', () => {
    cy.get('header').should('be.visible');
  });

  it('should display exam information section', () => {
    cy.get('[data-testid="information"]').should('be.visible');
  });

  it('should display form fields', () => {
    cy.get('[data-testid="name-input"]').should('be.visible');
    cy.get('[data-testid="exam-select"]').should('be.visible');
    cy.get('[data-testid="date-input"]').should('be.visible');
    cy.get('[data-testid="description-input"]').should('be.visible');
    cy.get('[data-testid="file-input"]').should('be.visible');
  });

  it('should display loading message when submitting form', () => {
    cy.get('form').submit();
    cy.get('[data-testid="loading"]').should('be.visible');
  });

  it('should display error messages for invalid form submission', () => {
    cy.get('form').submit();

    cy.get('[data-testid="name-error"]').should('be.visible').and('contain.text', 'Nome obrigatório');
    cy.get('[data-testid="exam-error"]').should('be.visible').and('contain.text', 'Selecione um exame');
    cy.get('[data-testid="file-error"]').should('be.visible').and('contain.text', 'Imagem do exame obrigatória');
    cy.get('[data-testid="date-error"]').should('be.visible').and('contain.text', 'Informe uma data');
  });
});
