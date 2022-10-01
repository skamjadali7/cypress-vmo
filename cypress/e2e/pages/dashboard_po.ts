///<reference types="Cypress"/>
var loc = require('../../fixtures/locator.json');
export class Dashboard {
    sideMenuValidation(sideMenu: any) {
        const list = [];
        cy.get(loc.navbuttonlabel).each(($el) => {
            list.push($el.text())
        }).then(() => {
            expect(list).to.deep.equal(sideMenu)
        })
    }

    clickSideMenu(option) {
        cy.get(loc.navbuttonlabel,{timeout:20000}).contains(option).click();
    }

    clickSideSubMenu(option) {
        cy.get(loc.subnavbuttonlabel,{timeout:20000}).contains(option).click()
    }

    hypothesisModalEntry(hypName, solution, problem, num1, num2, num3) {
        cy.get(loc.editnamehypothesis).click({force: true});
        cy.wait(5000) // 5 sec wait
        cy.get(loc.namehypothesis).type(hypName, { delay: 1000 });
        cy.get(loc.solutionhypothesis).type(solution);
        cy.get(loc.problemhypothesis).type(problem);
        cy.get(loc.confidencescore).eq(num1).click();
        cy.get(loc.importancescore).eq(num2).click();
        cy.get(loc.easescore).eq(num3).click();
        cy.get(loc.createhypotesisbutton).click({ force: true });
    }

    // create hypothesis from progess view
    createHypothesis(hypName, solution, problem, num1, num2, num3) {
        cy.wait(10000) // 10 sec wait
        cy.get(loc.createplushypothesis,{timeout:20000}).then($el => {
            if ($el.is(':visible')) {
                cy.get(loc.createplushypothesis,{timeout:20000}).click();
                this.hypothesisModalEntry(hypName, solution, problem, num1, num2, num3);
            }
        })
    }

    // create hypothesis for first
    firstcreateHypothesis(hypName, solution, problem, num1, num2, num3) {
        cy.wait(10000) // 10 sec wait
        cy.get(loc.createhypothesis,{timeout:20000}).then($el => {
            if ($el.is(':visible')) {
                cy.get(loc.createhypothesis,{timeout:20000}).click();
                this.hypothesisModalEntry(hypName, solution, problem, num1, num2, num3);
            }
        })
    }

    //List view 
    listView () {
        cy.wait(10000) // wait for 10 sec for detachment of element
        cy.get(loc.listViewTab,{timeout: 20000}).click({force: true});
    }

    //Search of hypothesis
    searchHypothesis (hypName) {
        cy.get(loc.searchHypothesis,{timeout:20000}).clear().type(hypName);
        cy.get(loc.listviewitem,{timeout:10000}).should('be.visible');
        cy.get(loc.hypothesisname).should(($text)=>{
            const name = $text.text();
            expect(name).to.include(hypName);
        })
    }
}
