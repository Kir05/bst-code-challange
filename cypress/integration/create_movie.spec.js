describe("create-page-view", () => {
  it("should load homepage and display table with movies", () => {
    cy.visit("http://localhost:3000/");
  });

  it("should go to create-movie page", () => {
    cy.get("#Homepage > .container > header > a").click();
    cy.go("forward");
  });

  it("should go back to homepage", () => {
    cy.get("#CreateMovie > .container > form > .buttons > .btn-back").click();
    cy.go("forward");
  });

  it("should go to create-movie page agian", () => {
    cy.get("#Homepage > .container > header > a").click();
    cy.go("forward");
  });

  //   Test movie title validation
  it("should try to submit empty form and an error to show under buttons", () => {
    cy.get("#CreateMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#CreateMovie > #InputError").should("be.visible");
  });

  it("error message must be for movie name", () => {
    cy.get("#CreateMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#CreateMovie > #InputError").contains("Movie name");
  });

  it("should add a movie name", () => {
    cy.get("#CreateMovie > .container > form > .form-group > #title").type(
      "Sample Movie"
    );
  });

  it("should try to submit form with movie name and an error to show under buttons", () => {
    cy.get("#CreateMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#CreateMovie > #InputError").should("be.visible");
  });

  //   Test director validation
  it("error message must be for director's name", () => {
    cy.get("#CreateMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#CreateMovie > #InputError").contains("Director's name");
  });

  it("should add a director's name with one character", () => {
    cy.get("#CreateMovie > .container > form > .form-group > #director").type(
      "M"
    );
  });

  it("should try to submit form with director's name with one character and an error to show under buttons", () => {
    cy.get("#CreateMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#CreateMovie > #InputError").should("be.visible");
  });

  it("error message must be for director's name agian", () => {
    cy.get("#CreateMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#CreateMovie > #InputError").contains("Director's name");
  });

  it("should add the full name of the director", () => {
    cy.get("#CreateMovie > .container > form > .form-group > #director").type(
      "ichael Anderson"
    );
  });

  //   Test distributor validation
  it("should try to submit form with distributor's name with one character and an error to show under buttons", () => {
    cy.get("#CreateMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#CreateMovie > #InputError").should("be.visible");
  });

  it("error message must be for distributor's name", () => {
    cy.get("#CreateMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#CreateMovie > #InputError").contains("Distributor's name");
  });

  it("should add a distributor's name with one character", () => {
    cy.get(
      "#CreateMovie > .container > form > .form-group > #distributor"
    ).type("D");
  });

  it("should try to submit form with distributor's name with one character and an error to show under buttons", () => {
    cy.get("#CreateMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#CreateMovie > #InputError").should("be.visible");
  });

  it("error message must be for distributor's name", () => {
    cy.get("#CreateMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#CreateMovie > #InputError").contains("Distributor's name");
  });

  it("should add a distributor's name with one character", () => {
    cy.get(
      "#CreateMovie > .container > form > .form-group > #distributor"
    ).type("isney");
  });

  //   Test submit valid form
  it("should submit a valid form and create a movie", () => {
    cy.get("#CreateMovie > .container > form > .buttons > .btn-submit").click();
    cy.go("forward");
  });

  it("should have total movies number updated", () => {
    cy.get("#Homepage > .container > header > h1").contains("46");
  });

  it("should scroll to bottom to show new movie", () => {
    cy.scrollTo("bottom");
  });

  it("should show notification of added movie", () => {
    cy.get("#Notification").should("be.visible");
  });

  it("should close notifcation", () => {
    cy.get("#Notification > .container > .body > button").click();
  });

  //   Add anthoer movie with full data
  it("should go to create-movie page", () => {
    cy.get("#Homepage > .container > header > a").click();
    cy.go("forward");
  });

  it("should add a movie name", () => {
    cy.get("#CreateMovie > .container > form > .form-group > #title").type(
      "Sample Movie with rating/votes"
    );
  });

  it("should add name of the director", () => {
    cy.get("#CreateMovie > .container > form > .form-group > #director").type(
      "Bruce Wayne"
    );
  });

  it("should add a distributor's name", () => {
    cy.get(
      "#CreateMovie > .container > form > .form-group > #distributor"
    ).type("Disney 2");
  });

  //   Test rating validation
  it("should add a string to rating input", () => {
    cy.get("#CreateMovie > .container > form > .form-group > #rating").type(
      "nine poiint five"
    );
  });

  it("should try to submit form and show rating error", () => {
    cy.get("#CreateMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#CreateMovie > #InputError").should("be.visible");
  });
  it("error message must be for movie rating", () => {
    cy.get("#CreateMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#CreateMovie > #InputError").contains("Rating");
  });

  it("should add a number to rating input", () => {
    cy.get("#CreateMovie > .container > form > .form-group > #rating")
      .clear()
      .type("8");
  });

  //   Test vote validation
  it("should add a string to vote input", () => {
    cy.get("#CreateMovie > .container > form > .form-group > #votes").type(
      "it's over nine thousand"
    );
  });

  it("should try to submit form and show votes error", () => {
    cy.get("#CreateMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#CreateMovie > #InputError").should("be.visible");
  });
  it("error message must be for movie votes", () => {
    cy.get("#CreateMovie > .container > form > .buttons > .btn-submit").click();
    cy.get("#CreateMovie > #InputError").contains("Vote");
  });

  it("should add a number to votes input", () => {
    cy.get("#CreateMovie > .container > form > .form-group > #votes")
      .clear()
      .type("9001");
  });

  //   Submit second movie with rating/votes
  it("should submit a valid form and create a movie", () => {
    cy.get("#CreateMovie > .container > form > .buttons > .btn-submit").click();
    cy.go("forward");
  });

  it("should have total movies number updated", () => {
    cy.get("#Homepage > .container > header > h1").contains("47");
  });

  it("should scroll to bottom to show new movie", () => {
    cy.scrollTo("bottom");
  });

  it("should show notification of added movie", () => {
    cy.get("#Notification").should("be.visible");
  });

  it("should close notification after 7 seconds", () => {
    cy.clock();
    cy.tick(7000);
    cy.get("#Notification").not("visible");
  });
});
