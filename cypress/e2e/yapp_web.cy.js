describe("Pruebas Yapp Web", () => {
  // const { beforeEach } = require("mocha");

  // beforeEach("ingresa pagina", () => {

  // });

  describe("pruebas pagina principal", () => {
    it("passes", () => {
      cy.visit("https://yapp.cl/");
      cy.wait(3000);
      cy.url().should("include", "yapp");
      cy.scrollTo(0, 700);
      cy.wait(2000);
      cy.get("h2.svelte-4y21zu").should("be.visible");
      cy.wait(2000);
      cy.get('[class= "svelte-4y21zu"]').should("be.visible");
      cy.scrollTo(0, 500);
      cy.wait(1000);
      cy.get('img[src="/icons/laboratories.svg"]').click();
      cy.wait(2000);
      cy.get("#laboratories > .container-xl > .image > .svelte-1ssj8q8").should(
        "be.visible"
      );
      cy.scrollTo(1000, 500);
      cy.wait(2000);
      cy.get('img[src="/icons/pharmacies.svg"]').click();
      cy.wait(2000);
      cy.get("#pharmacies > .container-xl > .info").should("be.visible");
      cy.scrollTo(2000, 500);
      cy.wait(2000);
      cy.get('[href="#patiences"]').click();
      cy.wait(2000);
      cy.get("#patiences > .container-xl > .info").should("be.visible");
      cy.scrollTo(3000, 500);
      cy.wait(2000);
      cy.get('[href="#professionals"]').click();
      cy.scrollTo(8000, 500);
      cy.wait(2000);
      cy.get("#professionals > .container-xl > .info").should("be.visible");
      cy.scrollTo(8000, 500);
      cy.wait(2000);
      cy.get('[href="#insurances"]').click();
      cy.scrollTo(8000, 500);
      cy.wait(2000);
      cy.get("#insurances > .container-xl > .info").should("be.visible");
      cy.scrollTo(8000, 500);
      cy.wait(2000);
      cy.get('[href="#providers"]').click();

      cy.wait(2000);
      cy.get("#providers > .container-xl > .info").should("be.visible");
      cy.wait(2000);
      cy.scrollTo(1000, 500);
      cy.get(".downloads").should("be.visible");
      cy.wait(2000);
      cy.scrollTo(9000, 500);
      cy.scrollTo("bottom");
      cy.get(".address").should("be.visible");
      cy.wait(2000);
      cy.get('[name="name"]').type("prueba test");
      cy.get('[type="email"]').type("test@tes.cl");
      cy.get('[name="subject"]').type("*/-*/**/");
      cy.get("textarea.svelte-gncfpm").type("TEST NICOLE");

      cy.get("textarea.svelte-gncfpm").clear();
      cy.get('[name="subject"]').clear();
      cy.get('[type="email"]').clear();
      cy.get('[name="name"]').clear();

      //cy.get('form.svelte-gncfpm > .btn').click();
      //cy.get(".button > .svelte-1h3ixwf").click(); botón no realiza acciòn en prod.
      cy.get("p.svelte-1b5xanw > .svelte-1b5xanw").click();
    });
  });
});
