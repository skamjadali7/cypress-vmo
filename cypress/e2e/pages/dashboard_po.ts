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
        cy.get(loc.editnamehypothesis).click();
        cy.focused({ timeout: 20000 });
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
        cy.get(loc.createhypotesisbutton).then($el => {
            if ($el.is(':visible')) {
                cy.get(loc.createhypotesisbutton).click({ force: true });
                this.hypothesisModalEntry(hypName, solution, problem, num1, num2, num3);
            }
        })
    }

    // create hypothesis for first
    firstcreateHypothesis(hypName, solution, problem, num1, num2, num3) {
        cy.get(loc.createhypothesis).then($el => {
            if ($el.is(':visible')) {
                cy.get(loc.createhypothesis).click({ force: true });
                this.hypothesisModalEntry(hypName, solution, problem, num1, num2, num3);
            }
        })
    }
}
