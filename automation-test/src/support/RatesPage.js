import BasePage from './support'

class RatesPage extends BasePage {

    get noNationwideMortgage() { return $$('#selectorItemHaveNationwideMortgage1 span') }
    get changingLender() { return $$('#selectorItemNationwideMortgageTypeNo2 span') }
    get propertyValue() { return $('#SearchPropertyValue') }
    get mortgageAmount() { return $('#SearchMortgageAmount') }
    get mortgageTerm() { return $('#SearchMortgageTerm') }
    get findRateBtn() { return $('#myButton') }
    get fixedRateBox() { return $$('#fixed span') }
    get withFeeBox() { return $$('#product-fee-fee span') }
    get moreInfo() { return $$('a[href="#prod142250"] span.iconText.closed') }
    get applyBtn() { return $('a[href="/products/mortgages/remortgage-to-nationwide/ready-to-apply"]') }
    get twoYrsFixed() { return $('#table20_ProductName') }
    get threeYrsFixed() { return $('#table21_ProductName') }
    get fiveYrsFixed() { return $('#table22_ProductName') }
    get tenYrsFixed() { return $('#table23_ProductName') }





    expandMoreInfo(){
          this.moreInfo.click()
        }

    clickNoNationwideMortgage(){
      this.noNationwideMortgage.click()
    }

    clickChangingLender(){
          this.changingLender.click()
        }

    findRate() {
        this.findRateBtn.click()
    }

    tickFixedRateBox(){
      this.fixedRateBox.click()
    }

    tickWithFeeBox(){
          this.withFeeBox.click()
        }

     beginApplication(){
               this.applyBtn.click()
             }


}

export default new RatesPage()
