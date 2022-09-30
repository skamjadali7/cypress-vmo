///<reference types="Cypress"/>

import { eq } from "cypress/types/lodash";

var loc = require('../../fixtures/locator.json');
export class Login {
    // Login to vwo application
    memberLogin (memail,pwd) {
        cy.visit('/');
        cy.get(loc.email).clear().then((e) => {
            if (memail != '') cy.wrap(e).type(memail);
        })
        cy.get(loc.pass).clear().then((e) => {
            if (pwd != '') cy.wrap(e).type(pwd);
        })
        cy.get(loc.loginbutton).click({force: true});
        cy.get(loc.pageheading,{timeout:15000}).should('be.visible')
    }
    // start a free trail 
    startFreeTrail(workemail) {
        cy.visit('/');
        cy.get(loc.startfreetrail).should('be.visible').click();
        cy.url().should('include', 'free-trial/');
        cy.get(loc.freetrailform).should('be.visible');
        cy.get(loc.regdworkemail).clear().then((e) => {
            if (workemail != '') cy.wrap(e).type(workemail);
        })
    }
    // click create trail button
    clickCreateTrailButton() {
        cy.get(loc.createtrailbutton).eq(0).click();
    }
    
    // exist email verification
    emailAlreadyExist () {
        cy.get(loc.alreadyexist).its('length').then(res =>{
            if (res > 0 ) {
                cy.get(loc.existmemeberlogin).invoke('removeAttr', 'target').click({ force: true });
            }
        })
    }

    // Create new account
    createNewAccount (fname,lname,country,phn,pwd) {
        cy.get(loc.passwordsetupform,{timeout: 25000}).should('be.visible');
        cy.get(loc.firstname).clear().then((e) => {
            if (fname != '') cy.wrap(e).type(fname);
        })
        cy.get(loc.lastname).clear().then((e) => {
            if (lname != '') cy.wrap(e).type(lname);
        })
        cy.get(loc.flagclick).eq(0).should('be.visible').click({force: true});
        cy.get(loc.listofcountry).contains(country).scrollIntoView().click()
        cy.get(loc.phonenumber).clear().then((e) => {
            if (phn != '') cy.wrap(e).type(phn);
        })
        cy.get(loc.password).clear().then((e) => {
            if (pwd != '') cy.wrap(e).type(pwd);
        })
        cy.get(loc.createaccount).eq(1).click();
        cy.get(loc.accountsetup,{timeout: 20000}).should('be.visible');
        cy.url().should('include', '/setup/account-setup');
    }

    // setting up new account
    setupNewAccount (url) {
        cy.get(loc.accountsetup,{timeout: 20000}).should('be.visible');
        cy.url().should('include', '/setup/account-setup');
        cy.get(loc.choose).eq(0).click();
        cy.get(loc.traffic).eq(3).click();
        cy.get(loc.choose).eq(0).click();
        cy.get(loc.industry).eq(12).click();
        cy.get(loc.next3button).scrollIntoView().click();
        cy.get(loc.comboplan,{timeout:20000}).click();
        cy.get(loc.next2button).scrollIntoView().click();
        cy.get(loc.next3button,{timeout:20000}).scrollIntoView().click();
        //cy.url().should('include', '/setup/track-goal');
        cy.get(loc.next3button,{timeout:20000}).scrollIntoView().click();
       // cy.url().should('include', '/setup/goal-details');
        cy.get(loc.primaryurl,{timeout:20000}).scrollIntoView().type(url);
        cy.get(loc.next3button,{timeout:20000}).click({force: true});
       // cy.url().should('include', '/setup/analyze-data');
        cy.get(loc.next3button,{timeout:20000}).should('be.visible').click({force: true});
       // cy.url().should('include', '/setup/install-code');
        cy.get(loc.next3button,{timeout:20000}).scrollIntoView().click({force: true});
        cy.get(loc.setupcompletebox,{timeout:20000}).should('be.visible')
        cy.get(loc.gotodashboard,{timeout:20000}).should('be.visible').click({force: true});
      // cy.url().should('include', '/dashboard');
    }


}