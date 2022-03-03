describe("Form test", () => {
  it("Can add a new todo item", () => {
    cy.request('DELETE', `${Cypress.env('BACKEND_URL')}/api/todos`)

    cy.visit("/");
    cy.get("form");

    cy.get('input[name="value"]').type("Buy a new car!").should("have.value", "Buy a new car!")
    cy.get("form").submit();

    cy.get(".list-group li").should("have.length", 1)
  });
});