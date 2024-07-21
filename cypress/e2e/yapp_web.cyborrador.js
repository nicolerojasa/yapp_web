describe("Pruebas Yapp Web", () => {
  const { beforeEach } = require("mocha");

  beforeEach("ingresa pagina", () => {});

  // describe("pruebas pagina principal", () => {
  //   it("por secciones", () => {
  //     cy.visit("https://yapp.cl/");
  //     cy.wait(3000);
  //     cy.url().should("include", "yapp");
  //     cy.scrollTo(0, 700);
  //     cy.wait(2000);
  //     cy.get("h2.svelte-4y21zu").should("be.visible");
  //     cy.wait(2000);
  //     cy.get('[class= "svelte-4y21zu"]').should("be.visible");
  //     cy.scrollTo(0, 500);
  //     cy.wait(1000);
  //     cy.get('img[src="/icons/laboratories.svg"]').click();
  //     cy.wait(2000);
  //     cy.get("#laboratories > .container-xl > .image > .svelte-1ssj8q8").should(
  //       "be.visible"
  //     );
  //     cy.scrollTo(1000, 500);
  //     cy.wait(2000);
  //     cy.get('img[src="/icons/pharmacies.svg"]').click();
  //     cy.wait(2000);
  //     cy.get("#pharmacies > .container-xl > .info").should("be.visible");
  //     cy.scrollTo(2000, 500);
  //     cy.wait(2000);
  //     cy.get('[href="#patiences"]').click();
  //     cy.wait(2000);
  //     cy.get("#patiences > .container-xl > .info").should("be.visible");
  //     cy.scrollTo(3000, 500);
  //     cy.wait(2000);
  //     cy.get('[href="#professionals"]').click();
  //     cy.scrollTo(8000, 500);
  //     cy.wait(2000);
  //     cy.get("#professionals > .container-xl > .info").should("be.visible");
  //     cy.scrollTo(8000, 500);
  //     cy.wait(2000);
  //     cy.get('[href="#insurances"]').click();
  //     cy.scrollTo(8000, 500);
  //     cy.wait(2000);
  //     cy.get("#insurances > .container-xl > .info").should("be.visible");
  //     cy.scrollTo(8000, 500);
  //     cy.wait(2000);
  //     cy.get('[href="#providers"]').click();

  //     cy.wait(2000);
  //     cy.get("#providers > .container-xl > .info").should("be.visible");
  //     cy.wait(2000);
  //     cy.scrollTo(1000, 500);
  //     cy.get(".downloads").should("be.visible");
  //     cy.wait(2000);
  //     cy.scrollTo(9000, 500);
  //     cy.scrollTo("bottom");
  //     cy.get(".address").should("be.visible");
  //     cy.wait(2000);
  //     cy.get('[name="name"]').type("prueba test");
  //     cy.get('[type="email"]').type("test@tes.cl");
  //     cy.get('[name="subject"]').type("*/-*/**/");
  //     cy.get("textarea.svelte-gncfpm").type("TEST NICOLE");

  //     cy.get("textarea.svelte-gncfpm").clear();
  //     cy.get('[name="subject"]').clear();
  //     cy.get('[type="email"]').clear();
  //     cy.get('[name="name"]').clear();

  //     //cy.get('form.svelte-gncfpm > .btn').click(); //no se puede realizar acción ya que es prod.
  //     //cy.get(".button > .svelte-1h3ixwf").click(); botón "Más Información"no realiza acciòn en prod.
  //     cy.get("p.svelte-1b5xanw > .svelte-1b5xanw").click();
  //     cy.go("back");
  //     cy.wait(2000);
  //     cy.get(".rrss > :nth-child(1) > .svelte-1b5xanw > img").click();
  //     cy.wait(2000);

  //     cy.visit("http://yapp.cl");

  //     cy.get(":nth-child(2) > .svelte-1b5xanw > img").click();
  //     cy.visit("http://yapp.cl");
  //     cy.wait(2000);

  //     cy.visit("http://yapp.cl");

  //     cy.get('img[src="/images/Instagram.png"]').click();
  //     cy.visit("http://yapp.cl");
  //     cy.wait(2000);
  //     cy.get(".logo-yapp > .svelte-ntpktm").click();
  //     cy.wait(2000);
  //     cy.scrollTo(0, 700);
  //     cy.get(".swiper-button-prev").click();
  //     cy.wait(1000);
  //     cy.get(".swiper-button-next").click();
  //     cy.wait(1000);
  //     cy.get(".swiper-button-next").click();
  //     cy.wait(1000);
  //   });
  // });
  // describe("pruebas menú principal", () => {
  //   it("pruebas por categorias/ LABORATORIOS", () => {
  //     cy.visit("https://yapp.cl/");
  //     cy.get('nav.svelte-1xibl9f > [href="/laboratorios"]').click();
  //     cy.get('[name="fullname"]').click();
  //     cy.get('[name="fullname"]').type("Prueba Test");
  //     cy.get('[name="company-name"]').click();
  //     cy.get('[name="company-name"]').type("Empresa Test");
  //     //cy.get("select.svelte-qkojwd").click(); //
  //     cy.get('[type="email"]').click();
  //     cy.get('[type="email"]').type("TEST@TEST.COM");
  //     cy.get('[type="tel"]').click();
  //     cy.get('[type="tel"]').type("+4165433554");
  //     cy.get("textarea.svelte-qkojwd").type("khsdksdjkhdzlfughdgfd*-/-*/-*/-");
  //     //cy.get('button.svelte-qkojwd').click()

  //     cy.get('[name="fullname"]').clear();
  //     cy.get('[name="company-name"]').clear();
  //     cy.get('[type="email"]').clear();
  //     cy.get('[type="tel"]').clear();
  //     cy.get("textarea.svelte-qkojwd").clear();

  //     cy.get(".solutions > .svelte-pgz2si").should("be.visible");
  //     cy.wait(1000);
  //     cy.scrollTo(9000, 2000);
  //     cy.get(".solution-card").should("be.visible");
  //     cy.get(".testimony > .svelte-pgz2si").should("be.visible");
  //     cy.get(".benefits > .container-xl > :nth-child(1)").should("be.visible");
  //     cy.get(
  //       ".benefits > .container-xl > :nth-child(2) > :nth-child(1)"
  //     ).should("be.visible");
  //     cy.get(".container-xl > :nth-child(2) > :nth-child(2)").should(
  //       "be.visible"
  //     );
  //     cy.get(".container-xl > :nth-child(2) > :nth-child(3)").should(
  //       "be.visible"
  //     );
  //     cy.get(".sub-benefit").should("be.visible");
  //     cy.get(".container-xl > :nth-child(4) > :nth-child(1)").should(
  //       "be.visible"
  //     );
  //     cy.get(".container-xl > :nth-child(4) > :nth-child(2)").should(
  //       "be.visible"
  //     );
  //     cy.get(".btn").click();
  //   });
  // // });
  // describe("pruebas menú principal", () => {
  //   it("pruebas por categorias/FARMACIAS", () => {
  //     cy.visit("https://yapp.cl/");
  //     cy.get('nav.svelte-1xibl9f > [href="/farmacias"]').click();
  //     cy.get('[placeholder="Nombre y apellido"]').click();
  //     cy.get('[placeholder="Nombre y apellido"]').type("Prueba Test");
  //     cy.get('[placeholder="Nombre [empresa]"]').click();
  //     cy.get('[placeholder="Nombre [empresa]"]').type("Empresa Test");
  //     //cy.get('select.svelte-qkojwd').click();//
  //     cy.get('[placeholder="Correo"]').click();
  //     cy.get('[placeholder="Correo"]').type("TEST@TEST.COM");
  //     cy.get('[name="phone-number"]').click();
  //     cy.get('[name="phone-number"]').type("+4165433554");
  //     cy.get('[placeholder="Mensaje"]').click();
  //     cy.get('[placeholder="Mensaje"]').type("khsdksdjkhdzlfughdgfd*-/-*/-*/-");
  //     //cy.get("button.svelte-qkojwd").click();//NO SE PUEDE REALIZAR ESTÁ ACCI{ON PORQUE ES PROD
  //     cy.scrollTo(400, 100);
  //     cy.wait(2000);
  //     cy.get('[placeholder="Nombre y apellido"]').clear();
  //     cy.get('[placeholder="Nombre [empresa]"]').clear();
  //     cy.get('[placeholder="Correo"]').clear();
  //     cy.get('[name="phone-number"]').clear();
  //     cy.get('[placeholder="Mensaje"]').clear();

  //     cy.get(".solutions > h2.svelte-16tn7sr").should("be.visible");
  //     cy.wait(1000);
  //     cy.scrollTo(400, 800);
  //     cy.get(".solutions > div.svelte-16tn7sr > :nth-child(1)").should(
  //       "be.visible"
  //     );
  //     cy.get(".solutions > div.svelte-16tn7sr > :nth-child(2)").should(
  //       "be.visible"
  //     );
  //     cy.get(".text-center").should("be.visible");
  //     cy.wait(1000);
  //     cy.scrollTo(400, 1000);
  //     cy.get("#buy > .svelte-6gx55k").should("be.visible");
  //     cy.get(".tab-content > .active").should("be.visible");
  //     cy.get("#map-tab > .svelte-6gx55k").should("be.visible");
  //     cy.get("#map-tab > .svelte-6gx55k").click();
  //     cy.get(".filters > .svelte-6l1bvx").select("Caldera");
  //     cy.get('[aria-label="Acercar"]').click();
  //     cy.get('[aria-label="Alejar"]').click();
  //     cy.wait(1000);
  //     cy.scrollTo(400, 2000);
  //     cy.get(".testimony > .svelte-16tn7sr").should("be.visible");
  //     cy.scrollTo(400, 2500);
  //     cy.get(".benefits > .container-xl > :nth-child(1)").should("be.visible");
  //     cy.scrollTo(400, 2800);
  //     cy.get(
  //       ".benefits > .container-xl > :nth-child(2) > :nth-child(1)"
  //     ).should("be.visible");
  //     cy.get(".container-xl > :nth-child(2) > :nth-child(2)").should(
  //       "be.visible"
  //     );
  //     cy.get(".container-xl > :nth-child(2) > :nth-child(3)").should(
  //       "be.visible"
  //     );
  //     cy.get(".container-xl > :nth-child(4) > :nth-child(1)").should(
  //       "be.visible"
  //     );
  //     cy.get(".container-xl > :nth-child(4) > :nth-child(2)").should(
  //       "be.visible"
  //     );
  //     cy.get(".btn").click();
  //   });
  // });
  // describe("pruebas menú principal", () => {
  //   it("pruebas por categorias/MEDICOS", () => {
  //     cy.visit("https://yapp.cl/");

  //     cy.get('nav.svelte-1xibl9f > [href="/medicos"]').click();
  //     cy.get(".caption-background").should("be.visible");
  //     cy.get("h3.svelte-qkojwd").should("be.visible");
  //     cy.get('[name="fullname"]').click();
  //     cy.get('[name="fullname"]').type("Prueba Test");
  //     cy.get('[name="company-name"]').click();
  //     cy.get('[name="company-name"]').type("Empresa Test");
  //     //cy.get("select.svelte-qkojwd").click();//BOTÓN NO EJECUTA ACCIÓN
  //     cy.get('[type="email"]').click();
  //     cy.get('[type="email"]').type("TEST@TEST.COM");
  //     cy.get('[type="tel"]').click();
  //     cy.get('[type="tel"]').type("+4165433554");
  //     cy.get("textarea.svelte-qkojwd").click();
  //     cy.get("textarea.svelte-qkojwd").type("khsdksdjkhdzlfughdgfd*-/-*/-*/-");
  //     //cy.get("button.svelte-qkojwd").click(); //NO SE PUEDE REALIZAR ESTÁ ACCION PORQUE ES PROD
  //     cy.scrollTo(400, 100);
  //     cy.wait(2000);

  //     cy.get('[placeholder="Nombre y apellido"]').clear();
  //     cy.get('[name="fullname"]').clear();
  //     cy.get('[type="email"]').clear();
  //     cy.get('[type="tel"]').clear();
  //     cy.get("textarea.svelte-qkojwd").clear();

  //     cy.get(".downloads").should("be.visible");
  //     cy.wait(2000);
  //     cy.scrollTo(100, 900);
  //     cy.wait(2000);
  //     cy.scrollTo(100, 3000);
  //     cy.get(".solutions > .svelte-pgz2si").should("be.visible");
  //     cy.get(".solution-card").should("be.visible");
  //     cy.get(".testimony > .svelte-pgz2si").should("be.visible");
  //     cy.get(".benefits > .container-xl > :nth-child(1)").should("be.visible");
  //     cy.get(".sub-benefit").should("be.visible");
  //     cy.get(".container-xl > :nth-child(4) > :nth-child(1)").should(
  //       "be.visible"
  //     );
  //     cy.get(".container-xl > :nth-child(4) > :nth-child(2)").should(
  //       "be.visible"
  //     );
  //     cy.get(":nth-child(4) > :nth-child(3)").should("be.visible");
  //     cy.get(".btn").click();
  //   });
  // });
  // describe("pruebas menú principal", () => {
  //   it("pruebas por categorias/ASEGURADORAS", () => {
  //     cy.visit("https://yapp.cl/");

  //     cy.get('nav.svelte-1xibl9f > [href="/aseguradoras"]').click();
  //     cy.get(".image").should("be.visible");
  //     cy.get("h3.svelte-qkojwd").should("be.visible");

  //     cy.get('[name="fullname"]').click();
  //     cy.get('[name="fullname"]').type("Prueba Test");
  //     cy.get('[name="company-name"]').click();
  //     cy.get('[name="company-name"]').type("Empresa Test");
  //     cy.get("select.svelte-qkojwd").select("Sura");
  //     cy.get('[type="email"]').click();
  //     cy.get('[type="email"]').type("TEST@TEST.COM");
  //     cy.get('[type="tel"]').click();
  //     cy.get('[type="tel"]').type("+4165433554");
  //     cy.get("textarea.svelte-qkojwd").click();
  //     cy.get("textarea.svelte-qkojwd").type("khsdksdjkhdzlfughdgfd*-/-*/-*/-");
  //     // cy.get("button.svelte-qkojwd").click(); //NO SE PUEDE REALIZAR ESTÁ ACCION PORQUE ES PROD
  //     cy.scrollTo(400, 100);
  //     cy.wait(2000);

  //     cy.get('[name="fullname"]').clear();
  //     cy.get('[name="company-name"]').clear();
  //     cy.get('[type="email"]').clear();
  //     cy.get('[type="tel"]').clear();
  //     cy.get("textarea.svelte-qkojwd").clear();
  //     cy.get(".solutions > .svelte-godlbg").should("be.visible");
  //     cy.wait(2000);
  //     cy.scrollTo(100, 900);

  //     cy.get(".solution-card").should("be.visible");
  //     cy.get(".testimony > .svelte-godlbg").should("be.visible");
  //     cy.scrollTo(100, 1500);
  //     cy.get(".benefits > .container-xl > :nth-child(1)").should("be.visible");
  //     cy.get(
  //       ".benefits > .container-xl > :nth-child(2) > :nth-child(1)"
  //     ).should("be.visible");
  //     cy.get(".container-xl > :nth-child(2) > :nth-child(2)").should(
  //       "be.visible"
  //     );
  //     cy.get(".container-xl > :nth-child(2) > :nth-child(3)").should(
  //       "be.visible"
  //     );
  //     cy.get(".container-xl > :nth-child(2) > :nth-child(4)").should(
  //       "be.visible"
  //     );
  //     cy.get(".sub-benefit").should("be.visible");
  //     cy.scrollTo(100, 2000);

  //     cy.get(".container-xl > :nth-child(4) > :nth-child(1)").should(
  //       "be.visible"
  //     );
  //     cy.get(".container-xl > :nth-child(4) > :nth-child(2)").should(
  //       "be.visible"
  //     );
  //     cy.get(".container-xl > :nth-child(4) > :nth-child(3)").should(
  //       "be.visible"
  //     );
  //     cy.get(".btn").click();
  //   });
  // });
  describe("pruebas menú principal", () => {
    it("pruebas por categorias/PRESTADORES", () => {
      cy.visit("https://yapp.cl/");

      cy.get('nav.svelte-1xibl9f > [href="/prestadores"]').click();
      cy.get(".image").should("be.visible");
      cy.get("h3.svelte-qkojwd").should("be.visible");
      cy.wait(3000);

      cy.get('[name="fullname"]').click();
      cy.get('[name="fullname"]').type("Prueba Test");
      cy.get('[name="company-name"]').click();
      cy.get('[name="company-name"]').type("Empresa Test");
      //cy.get("select.svelte-qkojwd").click();// botón no realiza acción ya que está en blanco.
      cy.get('[type="email"]').click();
      cy.get('[type="email"]').type("TEST@TEST.COM");
      cy.get('[type="tel"]').click();
      cy.get('[type="tel"]').type("+4165433554");
      cy.get("textarea.svelte-qkojwd").click();
      cy.get("textarea.svelte-qkojwd").type("khsdksdjkhdzlfughdgfd*-/-*/-*/-");
      //cy.get('button.svelte-qkojwd').click ////NO SE PUEDE REALIZAR ESTÁ ACCION PORQUE ES PROD.
      cy.scrollTo(400, 100);

      cy.get('[name="fullname"]').clear();
      cy.get('[name="company-name"]').clear();
      cy.get('[type="email"]').clear();
      cy.get('[type="tel"]').clear();
      cy.get("textarea.svelte-qkojwd").clear();
      scrollTo(100, 900);

      cy.get(".solutions > .svelte-pgz2si").should("be.visible");
      cy.get(".solution-card").should("be.visible");
      scrollTo(100, 1500);

      cy.get(".testimony > .svelte-pgz2si").should("be.visible");
      cy.get(".benefits > .container-xl > :nth-child(1)").should("be.visible");
      cy.get(
        ".benefits > .container-xl > :nth-child(2) > :nth-child(1)"
      ).should("be.visible");
      cy.get(".container-xl > :nth-child(2) > :nth-child(2)").should(
        "be.visible"
      );
      cy.get(".container-xl > :nth-child(2) > :nth-child(3)").should(
        "be.visible"
      );
      cy.get(".sub-benefit");
      cy.scrollTo(100, 2000);
      cy.get(".container-xl > :nth-child(4) > :nth-child(1)").should(
        "be.visible"
      );
      cy.get(".container-xl > :nth-child(4) > :nth-child(2)").should(
        "be.visible"
      );
      cy.get(":nth-child(4) > :nth-child(3)").should("be.visible");
      cy.get(".btn").click();
    });
  });

  describe("Pruebas menú principal", () => {
    it("Pruebas por categorias/PACIENTES", () => {
      cy.visit("https://yapp.cl/");

      cy.xpath("/html/body/div/div[1]/div/header/div/nav/a[3]").click();
      cy.get("a.svelte-6kp7um > .svelte-6kp7um").should("be.visible");
      cy.get(".downloads").should("be.visible");
      cy.get("h2.svelte-6kp7um").should("be.visible");
      cy.get("div.svelte-6kp7um").should("be.visible");
      cy.get(".testimony > .svelte-6kp7um").should("be.visible");
      cy.get(".title").should("be.visible");
      cy.get(".subtitle").should("be.visible");
      cy.get(".insurance-cards").should("be.visible");
    });
  });
  describe("Pruebas menú principal", () => {
    it("Pruebas por categorias/CONTACTO", () => {
      cy.visit("https://yapp.cl/");

      cy.xpath("/html/body/div/div[1]/div/header/div/nav/a[7]").click();
      cy.get('[name="name"]').type("prueba test");
      cy.get('[type="email"]').type("test@tes.cl");
      cy.get('[name="subject"]').type("*/-*/**/");
      cy.get("textarea.svelte-gncfpm").type("TEST NICOLE");
      cy.get("textarea.svelte-gncfpm").clear();
      cy.get('[name="subject"]').clear();
      cy.get('[type="email"]').clear();
      cy.get('[name="name"]').clear();
    });
  });
  // describe("Pruebas menú principal", () => {
  //   it("Pruebas de Cotizador de Medicamentos/CREACIÓN DE CUENTA", () => {
  //     cy.visit("https://yapp.cl/");

  //     cy.xpath("/html/body/div/div[1]/div/header/div/nav/a[3]").click();
  //     cy.get("a.svelte-6kp7um > .svelte-6kp7um").click();

  //     cy.get(".txt-5--regular-db").click();
  //     cy.get("#gtm-webapp-register-name").click();
  //     cy.get("#gtm-webapp-register-name").type("STEVEN");
  //     cy.get("#gtm-webapp-register-last-name").click();
  //     cy.get("#gtm-webapp-register-last-name").type("STEVEN");
  //     cy.get("#gtm-webapp-register-email").click();
  //     cy.get("#gtm-webapp-register-email").type("steven@steven.com");
  //     cy.get("#gtm-webapp-register-pass").type("Steven_11");
  //     cy.get("#gtm-webapp-register-repeat-pass").click();
  //     cy.get("#gtm-webapp-register-repeat-pass").type("Steven_11");
  //     cy.get("#gtm-webapp-register-check-terms").click();
  //     //cy.get("#gtm-webapp-register-btn").click;
  //   });
  // });

  describe("Pruebas menú principal", () => {
    it("Pruebas de Cotizador de Medicamentos/LOGIN", () => {
      cy.visit("https://yapp.cl/");
      //El flujo de inicio con Login y cotizar medicamentos no está con el flujo correcto.
    });
  });
});
