import BasePage from './support'

class HomePage extends BasePage {

    get mortgage() { return $('a[href="/products/mortgages/our-mortgages/who-we-can-help"]') }
    get rates() { return $$('nav[aria-label="New mortgage customers"] > a[href="/products/mortgages/our-mortgage-rates"]') }

    open() {
        super.open('/')
    }

    hoverOverMortgageTab(){
      browser.moveToElement(this.mortgage)
    }

    clickMortgageRateLink(){
    this.rates.click()
    }

}

export default new HomePage()
