var data = require('../../fixtures/testData.json');
import {Login} from '../pages/login_po';
const login = new Login();
const email = "sam" + Math.floor((Math.random() * 1000)+1) + "@test.com" 
before(()=>{
  sessionStorage.clear()
  cy.clearCookies()
  cy.clearLocalStorage();
})
describe('create a new account in vmo application with free trail', () => {
  it('click free trail link , add email and click create trail button', () => {
    login.startFreeTrail(email);
    login.clickCreateTrailButton();
  })
  it('fill the form and click create account', ()=>{
    login.createNewAccount(data.fname,data.lname,data.country,data.phn,data.pwd);
  })

  xit('account setup and navigate to dashboard',()=>{
    login.setupNewAccount(data.url);
  })
})