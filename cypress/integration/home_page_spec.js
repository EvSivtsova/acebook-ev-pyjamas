describe("Home page", () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it("has a title", () => {
    cy.get(".title").should("contain", "Acebook");
  });

  it("has a sign up button", () => {
    cy.get('form').within(($form) => {
      cy.intercept('get', '/users/new')
      cy.contains('Sign up!').click()
      cy.url().should("include", "/users/new");
    })
  });
  
  it("has a log in button", () => {
    cy.get('form').within(($form) => {
      cy.intercept('get', '/sessions/new')
      cy.contains('Log in!').click()
      cy.url().should("include", "/sessions/new");
    })
  });
});
