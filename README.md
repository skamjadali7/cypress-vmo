# cypress-vmo
cypress assignment for amazon mobile search AND rcb.json validation

# Software Version using
- Node Version < v12.18.3
- Cypress - Latest version (v12.13.0)

# Project setup
- Pre Check ( Please Install git in your local)
- Clone the project in your local machine/system
- npm init (for node modules & package.json install)
- npm install cypress@12.13.0 --save-dev

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
            - amazon_po.ts
            - rcb_po.ts
        - specs (it consist of spec file / test cases )
            - amazon_mobile.spec.cy.js
            - rcb_test.spec.cy.js
    - fixtures (it consist of locators , test data, RCB json details )
        - locator.json
        - testData.json
        - rcb.json
    - screenshots (it consists of screen attachment of the local run)
    - videos (it consists of screen attachment of the local run )** Refer this as part of execution


 ### For more clarification please reach out to me 
 - @mj@d

