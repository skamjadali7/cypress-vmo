var data = require('../../fixtures/testData.json');
import {Login} from '../pages/login_po';
const login = new Login();
before(()=>{
  sessionStorage.clear()
  cy.clearCookies()
  cy.clearLocalStorage();
})
describe('verify account is already exist in vmo application', () => {
  it('click free trail link , add email and click create trail button', () => {
    login.startFreeTrail(data.emailID);
    login.clickCreateTrailButton();
    login.emailAlreadyExist();
  })

})