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

    it("select two tickets", ()=> {
        cy.get("#ticket-quantity").select("2");        
    })

    it("select 'vip' ticket type", ()=>{
        cy.get("#vip").check();
    })

    it("selects 'social media' checkbox", ()=>{
        cy.get("#social-media").check();
    })

    it("selects 'friend' and 'publication', then uncheck 'friend'", ()=>{
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#friend").uncheck();
    })

    it("has 'TICKETBOX' header's heading", ()=>{
        cy.get("header h1").should("contain", "TICKETBOX");
    });

    it("alerts on invalid mail", ()=>{
        cy.get("#email")
            .as("email")    
            .type("testcomcypress-gmail.com");

        cy.get("#email.invalid").should("exist")    

        cy.get("@email")
            .clear()
            .type("testcomcypress@gmail.com");

        cy.get("#email.invalid").should("not.exist");    
    });

    it("fills and reset the form", ()=>{
        const firstName = "Gabriela"
        const lastName = "Mesquita"   
        const fullName = `${firstName} ${lastName}`	    

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("testcomcypress@gmail.com");
        cy.get("#ticket-quantity").select("2");
        cy.get("#vip").check();
        cy.get("#friend").check();
        cy.get("#requests").type("Teste");
        cy.get(".agreement p").should("contain", `I, ${fullName}, wish to buy 2 VIP tickets.`)     
        cy.get("#agree").click();   
        cy.get("#signature").type(fullName);
        cy.get("button[type=submit]").as("submitButton").should("not.be.disabled");
        cy.get("button[type=reset]").click();
        cy.get("@submitButton").should("be.disabled");
    })

});