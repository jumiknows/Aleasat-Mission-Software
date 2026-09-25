describe("public outreach routes", () => {
  const routes = ["/", "/about", "/spaceship", "/team", "/sponsor", "/join-us"];

  for (const route of routes) {
    it(`loads ${route}`, () => {
      cy.visit(route);
      cy.location("pathname").should("eq", route);
      cy.get("body").should("be.visible");
      cy.contains("Application error").should("not.exist");
    });
  }
});
