/// <reference types="cypress" />


describe('user flow', () => {
    beforeEach(() => {
        // Start from the index page
        cy.visit('http://localhost:3000/');
    })
    it('make contact', () => {
        //
        // navigate to form
        //
        // Find a link with an href attribute containing "contact" and click it
        cy
            .get('a[href*="contact"]')
            .first()
            .click();
        // The new url should include "/contact"
        cy
            .url()
            .should('include', '/contact');
        // Find a link with an href attribute containing "contactByEmail" and click it
        cy
            .get('a[href*="contactByEmail"]')
            .click();
        // The new url should include "/contactByEmail"
        cy
            .url()
            .should('include', '/contactByEmail');
        //
        // fill form
        //
        // Find an input with title attribute containing "Subject" and type "business"
        cy
            .get('input[title*="Subject"]')
            .type("business")
            .should("have.value", "business");
        // Find an input with title attribute containing "Message" and type "Hi, I would like to have business with you..."
        cy
            .get('input[title*="Message"]')
            .type("Hi, I would like to have business with you...")
            .should("have.value", "Hi, I would like to have business with you...");
        // Find an input with title attribute containing "Name" and type "Jack Banks"
        cy
            .get('input[title*="Name"]')
            .type("Jack Banks")
            .should("have.value", "Jack Banks");
        // Find an input with title attribute containing "Email" and type "user@domain.com"
        cy
            .get('input[title*="Email"]')
            .type("user@domain.com")
            .should("have.value", "user@domain.com");
        // Find an input with title attribute containing "Phone" and type "+972-50-1234567"
        cy
            .get('input[title*="Phone"]')
            .type("+972-50-1234567")
            .should("have.value", "+972-50-1234567");
        //
        //submit and verify
        //
        // Find a button with a title attribute containing "Submit" and click it
        cy
            .get('button[title*="Submit"]')
            .find("p")
            .should("contain", "submit");
        cy
            .get('button[title*="Submit"]')
            .click();
        cy
            .get('button[title*="Submit"]')
            .find("p")
            .should("contain", "success")
    })
})