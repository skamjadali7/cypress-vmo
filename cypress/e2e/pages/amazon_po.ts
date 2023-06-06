var loc = require('./../../fixtures/locator.json');
var prices = [];
export class amazon {
    mainPageLanding () {
        cy.visit('/')
    }

    enterSearchItem (itemName) {
        cy.get(loc.searchBoxInput).clear().then((e)=>{
            if (itemName != '') cy.wrap(e).type(itemName);
            cy.get(loc.searchSubmitBtn).click();
        })
    }

    mobileSearchPage () {
        cy.get(loc.categoryChecked).each(($ele)=>{
            expect($ele.text()).to.match(/^([Smartphones & Basic Mobiles|Smartphones|Basic Mobiles])/)
        })
    }

    productPriceRefineMent (range,intialRange,finalRange) {
        cy.get(loc.priceRefineMentSelection).each(($ele)=>{
            if ($ele.text() == range) {
                cy.wrap($ele).click();
            }
        })
        cy.get(loc.rangedProductPrice).each(($ele)=>{
            var values = $ele.text().replace(/\,/g,'');
            var num = parseInt(values);
            prices.push(num);
            let disission = prices.every((item)=> item >= intialRange && item <= finalRange);
                if (disission) {
                    cy.log("Product prices are in range");
                }
                else if (!disission) {
                    cy.log("Product prices are not in range")  
                }
            //expect(num).to.lessThan(finalRange);
            //expect(num).to.greaterThan(intialRange);
        })
    }


}