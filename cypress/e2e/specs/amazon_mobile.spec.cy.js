import {amazon} from '../pages/amazon_po';
const amz = new amazon();
var data = require('./../../fixtures/testData.json');
describe('Land Main Page',()=>{
    it("search mobile with in price range of ₹10,000 - ₹20,000",()=>{
        amz.mainPageLanding();
        amz.enterSearchItem(data.itemName);
        amz.mobileSearchPage();
        amz.productPriceRefineMent(data.range,data.intialRange,data.finalRange);
    })
})