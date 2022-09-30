var data = require('../../fixtures/testData.json');
import { Login } from '../pages/login_po';
import { Dashboard } from '../pages/dashboard_po';
const dash = new Dashboard();
const login = new Login();
const hyName = "Test-" + + Math.floor((Math.random() * 10) + 1)
const item = ['Dashboard', 'Testing', 'Insights', 'Personalize', 'Deploy', 'Data360', 'Plan', 'Configurations', 'Services', 'Updates']
before(() => {
  sessionStorage.clear()
  cy.clearCookies()
  cy.clearLocalStorage();
})
afterEach(() => {
  cy.saveLocalStorage();
});
describe('login dashboard and create hypothessis', () => {
  it('login to dashboard page', () => {
    login.memberLogin(data.emailID, data.pwd);
  })

  it('verify all side menu on dasboard page', () => {
    dash.sideMenuValidation(item);
  })
  it('click side menu option and click submenu', () => {
    dash.clickSideMenu(data.sideMenu);
    dash.clickSideSubMenu(data.subSideMenu);
  })

  it('create 1st hypothesis in plan', () => {
    dash.firstcreateHypothesis(data.hypName1, data.solution, data.problem, data.num1, data.num2, data.num3);
  })

  it('create 2nd and 3rd hypothesis', () => {
    for (let i = 0; i < 2; i++) {
      dash.createHypothesis(hyName, data.solution, data.problem, data.num1, data.num2, data.num3);
    }
  })

})