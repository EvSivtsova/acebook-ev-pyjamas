describe("new user registration", () => {
  beforeEach(() => {
    cy.visit('/users/new');
  })

  it("A user can submit a valid form and is redirected to sign in", () => {
    cy.get('form').within(($form) => {
      cy.get("#firstName")
        .type("Paris")
        .should('have.attr', 'required');
      cy.get("#lastName")
        .type("Monson")
        .should('have.attr', 'required');
      cy.get("#username")
        .type("testusername32")
        .should('have.attr', 'required');
      cy.get("#email")
        .type("pmonson32@example.com")
        .should('have.attr', 'required');
      cy.get("#phoneNumber")
        .type("07337048223")
      cy.get("#password")
        .type("myPassword1!")
        .should('have.attr', 'required');
      cy.get("#confirmPassword")
        .type("myPassword1!")
        .should('have.attr', 'required');
      cy.get("#submit").click();
      cy.url().should("include", "/sessions/new");
    })
  });

  it("raises errors if input format is incorrect", () => {
    cy.get('form').within(($form) => {
      cy.get("#firstName").type("1")
      cy.get("#lastName").type("M&") 
      cy.get("#username").type("tes!")
      cy.get("#email").type("pmonson32@example.com")
      cy.get("#phoneNumber").type("MA37048223")
      cy.get("#password").type("n%Saa")
      cy.get("#confirmPassword").type("myPassword1!")
      cy.get("#submit").click();
    })
    cy.contains('Your first name must contain letters only.').should('be.visible')   
    cy.contains('Your last name must contain letters only.').should('be.visible')   
    cy.contains('Your username must contain letters and digits only.').should('be.visible')   
    cy.contains('Please enter valid mobile phone number or leave blank').should('be.visible')   
    cy.contains('Your password must contain at least 1 uppercase letter, 1 symbol and 1 digit, and must longer than 8 characters.').should('be.visible')   
    cy.contains('Passwords do not match').should('be.visible')   
  });

  it("raises errors if first and last names and username are too short", () => {
    cy.get('form').within(($form) => {
      cy.get("#firstName").type("A")
      cy.get("#lastName").type("M") 
      cy.get("#username").type("tes1")
      cy.get("#email").type("pmonson32@example.com")
      cy.get("#phoneNumber").type("MA37048223")
      cy.get("#password").type("n%Saa")
      cy.get("#confirmPassword").type("myPassword1!")
      cy.get("#submit").click();
    })
    cy.contains('Your first name be 2 to 20 characters long.').should('be.visible')   
    cy.contains('Your last name must be 2 to 20 characters long.').should('be.visible')   
    cy.contains('Your username must be 5 to 20 characters long.').should('be.visible')   
  });

  it("raises error if the username already exists in the database", () => {
    cy.get('form').within(($form) => {
      cy.get("#firstName").type("Paris");
      cy.get("#lastName").type("Monson");
      cy.get("#username").type("testusername32");
      cy.get("#email").type("pmonson32@example.com");
      cy.get("#phoneNumber").type("07337048223");
      cy.get("#password").type("myPassword1!");
      cy.get("#confirmPassword").type("myPassword1!");
      cy.get("#submit").click();
    })
    cy.contains('Username already in use').should('be.visible')   
  });

  it("raises errors if the email already exists in the database", () => {
    cy.get('form').within(($form) => {
      cy.get("#firstName").type("Paris");
      cy.get("#lastName").type("Monson");
      cy.get("#username").type("newusername32");
      cy.get("#email").type("pmonson32@example.com");
      cy.get("#phoneNumber").type("07337048223");
      cy.get("#password").type("myPassword1!");
      cy.get("#confirmPassword").type("myPassword1!");
      cy.get("#submit").click();
    })
    cy.contains('Email already in use').should('be.visible')   
  });
});
