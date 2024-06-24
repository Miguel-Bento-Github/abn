describe("show page", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.tvmaze.com/shows?page=1", {
      statusCode: 200,
      fixture: "../fixtures/data.json",
    }).as("data");
  });

  it("should fetch and display data", () => {
    cy.visit("/show/2")
      .wait("@data")
      .location()
      .should((location) => {
        expect(location.pathname).to.equal("/show/2");
      })
      .dataCy("show-title")
      .should("exist")
      .dataCy("show-image")
      .should("exist")
      .dataCy("show-language")
      .should("exist")
      .dataCy("show-runtime")
      .should("exist")
      .dataCy("show-premiered")
      .should("exist")
      .dataCy("show-ended")
      .should("exist")
      .dataCy("show-country")
      .should("exist")
      .dataCy("show-showtime")
      .should("exist")
      .dataCy("show-summary")
      .should("exist");
  });
});
