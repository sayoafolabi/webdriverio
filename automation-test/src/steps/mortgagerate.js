  import { expect } from 'chai'
  import HomePage from '../support'
  import RatesPage from '../support'
  import ApplicationPage from '../support'

 var {defineSupportCode} = require("cucumber");

 defineSupportCode(function({Given,When,Then})
 {
	Given('I open the url {string}', function(text){
      HomePage.open()

	});

	Given('I navigate to Mortgage rates using the Menu tab', function(){
      HomePage.hoverOverMortgageTab()
      HomePage.clickMortgageRateLink()

	});

	When('I click on No for Nationwide mortgage', function(){
    RatesPage.clickNoNationwideMortgage()
	});

	When('I click on Changing lender for Type of mortgage', function(){
    RatesPage.clickChangingLender()

	});

	When('I enter {string} as the Property value', function(text){
    RatesPage.propertyValue.setValue(text)

	});

	When('I enter {string} as the Mortgage amount', function(text){
    RatesPage.mortgageAmount.setValue(text)

	});

	When('I enter {string} as the Term years', function(text){
    RatesPage.mortgageTerm.setValue(text)

	});

	When('I click on Find a mortgage rate button', function(){
      RatesPage.findRate()

  	});

	When('I filter the result by Fixed Mortgage type', function(){
    RatesPage.tickFixedRateBox()

	});

	When('And I filter the result by With Fee Product fee', function(){
    RatesPage.tickWithFeeBox()

	});

	Then('{string} is displayed as the first result', function(text){

    expect(RatesPage.twoYrsFixed.getText()).to.contain(text)

	});

	Then('{string} is displayed as the second result', function(text){
      expect(RatesPage.threeYrsFixed.getText()).to.contain(text)

  	});

  Then('{string} is displayed as the third result', function(text){
          expect(RatesPage.fiveYrsFixed.getText()).to.contain(text)

      	});

   Then('{string} is displayed as the fourth result', function(text){
           expect(RatesPage.tenYrsFixed.getText()).to.contain(text)

       	});

	Then('I click on More info and apply link against 5 yr Fixed product', function(){
    RatesPage.expandMoreInfo()

	});

	Then('I click on Apply button', function(){
    RatesPage.beginApplication()

	});

	Then('And {string} is the header of the page displayed', function(text){
    ApplicationPage.isTextDisplayed(text)

    expect(ApplicationPage.pageHeader.getText()).to.contain(text)

	});
});
