describe("Pruebas Yapp Web", () => {
  const { beforeEach } = require("mocha");

  beforeEach("ingresa pagina", () => {
    cy.visit("https://yapp.cl/");
  });

  describe("pruebas pagina principal", () => {
    it("passes", () => {
      cy.url().should("include", "yapp");
    });
  });

  describe('validar texto "proposito"', () => {
    it("passes", () => {});
  });
});
