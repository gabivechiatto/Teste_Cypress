describe("Tickets", ()=>{
    beforeEach(()=> cy.visit("https://ticketbox-backstopjs-tat.s3.eu-central-1.amazonaws.com/index.html"));
    
    it("fills all the text input fields", ()=>{
        const firstName = "Gabi"
        const lastName = "Mesquita"
        const email = "testcomcypress@gmail.com"
        const requests = "Teste"
        const signature = "Assinatura"

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type(email);
        cy.get("#requests").type(requests);
        cy.get("#signature").type(signature);
    });

    it.only("select two tickets", ()=> {
        cy.get("#ticket-quantity").select("2");
        
    })

    it("has 'TICKETBOX' header's heading", ()=>{
        
    });
})