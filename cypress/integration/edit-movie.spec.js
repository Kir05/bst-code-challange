describe("create-page-view", () => {
  it("should load homepage and display table with movies", () => {
    cy.visit("http://localhost:3000/");
  });

  it("should click on first button edit and go to edit-movie page", () => {
    cy.contains("Edit").click();
    cy.go("forward");
  });

  it("should go back to homepage", () => {
    cy.get("#EditMovie > .container > form > .buttons > .btn-back").click();
    cy.go("forward");
  });

  it("should go to create-movie page agian", () => {
    cy.contains("Edit").click();
    cy.go("forward");
  });

  it("should submit form with current movie data", () => {
    cy.get("#EditMovie > .container > form > .buttons > .btn-submit").click();
    cy.go("forward");
  });

  it("should show notification of edited movie", () => {
    cy.get("#Notification").should("be.visible");
  });

  it("should close notifcation", () => {
    cy.get("#Notification > .container > .body > button").click();
  });

  it("should click on first button edit and go to edit-movie page", () => {
    cy.contains("Edit").click();
    cy.go("forward");
  });

  //   Test movies validation
  it("should clear movie title input", () => {
    cy.get("#EditMovie > .container > form > .form-group > #title").clear();
  });

  it("should try to submit form and show movie title error", () => {
    cy.get("#EditMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#EditMovie > #InputError").should("be.visible");
  });

  it("error message must be for movie title", () => {
    cy.get("#EditMovie > #InputError").contains("Movie title");
  });

  it("should clear movie title input", () => {
    cy.get("#EditMovie > .container > form > .form-group > #title").type(
      "New Movie Name"
    );
  });

  //   Test director vaildation
  it("should clear movie director input", () => {
    cy.get("#EditMovie > .container > form > .form-group > #director").clear();
  });

  it("should try to submit form and show movie director error", () => {
    cy.get("#EditMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#EditMovie > #InputError").should("be.visible");
  });

  it("error message must be for movie director", () => {
    cy.get("#EditMovie > #InputError").contains("Director's name");
  });

  it("should clear movie director input", () => {
    cy.get("#EditMovie > .container > form > .form-group > #director").type(
      "Original Director Name here"
    );
  });

  //   Test distributor vaildation
  it("should clear movie distributor input", () => {
    cy.get(
      "#EditMovie > .container > form > .form-group > #distributor"
    ).clear();
  });

  it("should try to submit form and show movie distributor error", () => {
    cy.get("#EditMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#EditMovie > #InputError").should("be.visible");
  });

  it("error message must be for movie distributor", () => {
    cy.get("#EditMovie > #InputError").contains("Distributor's name");
  });

  it("should clear movie distributor input", () => {
    cy.get("#EditMovie > .container > form > .form-group > #distributor").type(
      "WB"
    );
  });

  //   Test rating vaildation
  it("should clear movie rating input and type letters", () => {
    cy.get("#EditMovie > .container > form > .form-group > #rating")
      .clear()
      .type("Why");
  });

  it("should try to submit form and show movie rating error", () => {
    cy.get("#EditMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#EditMovie > #InputError").should("be.visible");
  });

  it("error message must be for movie votes", () => {
    cy.get("#EditMovie > #InputError").contains("Rating");
  });

  it("should clear movie rating input", () => {
    cy.get("#EditMovie > .container > form > .form-group > #rating").clear();
  });

  //   Test votes vaildation
  it("should clear movie votes input and type letters", () => {
    cy.get("#EditMovie > .container > form > .form-group > #votes")
      .clear()
      .type("a number");
  });

  it("should try to submit form and show movie votes error", () => {
    cy.get("#EditMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#EditMovie > #InputError").should("be.visible");
  });

  it("error message must be for movie votes", () => {
    cy.get("#EditMovie > #InputError").contains("Votes");
  });

  it("should clear movie rating input", () => {
    cy.get("#EditMovie > .container > form > .form-group > #votes")
      .clear()
      .type("404");
  });

  //   Sumbit form and update movie information
  it("should submit form with current movie data", () => {
    cy.get("#EditMovie > .container > form > .buttons > .btn-submit").click();
    cy.go("forward");
  });

  it("should show notification of edited movie", () => {
    cy.get("#Notification").should("be.visible");
  });

  it("should close notification after 7 seconds", () => {
    cy.clock();
    cy.tick(7000);
    cy.get("#Notification").not("visible");
  });
});
