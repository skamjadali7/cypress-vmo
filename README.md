# cypress-vmo
cypress assignment for vmo app for layr

# Software Version using
- Node Version - v12.18.3
- Cypress - Latest version (v10.9.0)

# Project setup
- Pre Check ( Please Install git in your local)
- Clone the project in your local machine/system
- npm init (for node modules & package.json install)
- npm install cypress
- npm i --save-dev cypress-localstorage-commands ( for local session and storage handling )

# How to run the project 

- On Open mode ( UI view )
    - Go to project cloned directory from command line / Terminal
    - npx cypress open ( run local server)
    - select e2e Testing
    - Select choice of browser ( chrome , electron ...)
    - Click "Start E2E testing {browser name}
    - Run Spec files on clicking them.

- On Run Mode ( Headless run )
    - Go to project cloned directory from command line / Terminal
    - npx cypress run

# Project Structer 
### NOTE : used simple Page Design Pattern as framework

- cypress
    - e2e
        - pages ( it consist of generic/reusable method/function )
            - dashboard_po.ts
            - login_po.ts
        - specs (it consist of spec file / test cases )
            - Test_01.spec.cy.js
            - Test_02.spec.cy.js
            - Test_03.spec.cy.js
    - fixtures (it consist of locators and test data )
        - locator.json
        - testData.json
    - screenshots (it consists of screen attachment of the local run)
    - videos (it consists of screen attachment of the local run )** Refer this as part of execution


 ### For more clarification please reach out to me 
 - @mj@d

