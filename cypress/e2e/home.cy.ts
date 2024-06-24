describe("home page", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.tvmaze.com/shows?page=1", {
      statusCode: 200,
      fixture: "../fixtures/data.json",
    }).as("data");
  });

  it("should change language", () => {
    cy.visit("/home")
      .wait("@data")
      .location()
      .should((location) => {
        expect(location.pathname).to.equal("/home");
      })
      .dataCy("locale-changer")
      .get("select")
      .select("中文")
      .should("have.value", "zh-CN")
      .dataCy("home-title")
      .should("contain.text", "欢迎");
  });

  it("should fetch data", () => {
    cy.visit("/home")
      .wait("@data")
      .location()
      .should((location) => {
        expect(location.pathname).to.equal("/home");
      })
      .dataCy("home-content")
      .should("exist")
      .contains("genres", { matchCase: false });

    cy.dataCy("show-card").should("have.length", 2);
  });

  it("should filter by input", () => {
    const filter = "Under";

    cy.visit("/home")
      .wait("@data")
      .dataCy("show-filter")
      .type(filter)
      .dataCy("show-card")
      .should("have.length", 1)
      .contains("under", { matchCase: false });
  });

  it("should filter by genre", () => {
    cy.visit("/home")
      .wait("@data")
      .dataCy("genre-selection")
      .children()
      .first()
      .click()
      .dataCy("show-card")
      .should("have.length", 1)
      .contains("under", { matchCase: false });
  });

  it("should reset genres", () => {
    cy.visit("/home")
      .wait("@data")
      .dataCy("genre-selection")
      .children()
      .first()
      .click()
      .dataCy("genre-reset")
      .click()
      .dataCy("show-card")
      .should("have.length", 2);
  });

  it("should sort shows ascending", () => {
    cy.visit("/home")
      .wait("@data")
      .dataCy("sort-shows")
      .click()
      .dataCy("show-card")
      .first()
      .contains("under", { matchCase: false });
  });

  it("should sort shows descending", () => {
    cy.visit("/home")
      .wait("@data")
      .dataCy("sort-shows")
      .click()
      .click()
      .dataCy("show-card")
      .first()
      .contains("Person", { matchCase: false });
  });
});
