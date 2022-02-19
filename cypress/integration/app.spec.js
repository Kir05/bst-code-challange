describe("homepage-view", () => {
  it("should load homepage and display table with movies", () => {
    cy.visit("http://localhost:3000/");
  });

  it("should delete a movie", () => {
    cy.contains("Delete").click();
  });

  it("should show notification of added movie", () => {
    cy.get("#Notification").should("be.visible");
  });

  it("should close notifcation", () => {
    cy.get("#Notification > .container > .body > button").click();
  });

  it("should delete a second movie", () => {
    cy.contains("Delete").click();
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
