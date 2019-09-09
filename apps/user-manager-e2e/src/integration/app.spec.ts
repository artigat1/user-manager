import { getGreeting } from '../support/app.po';

describe('user-manager', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to user-manager!');
  });
});
