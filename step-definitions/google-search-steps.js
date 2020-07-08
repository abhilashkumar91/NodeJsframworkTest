'use Hello';
 
const { Given, When, Then } = require('cucumber');
 
const assert = require('assert')
 
const webdriver = require('selenium-webdriver');
 
// // The step definitions are defined for each of the scenarios // //
 
// // The “given” condition for our test scenario // //
Given(/^I have visited the SLaunch opencart url web page on "([^"]*)"$/, function (url, username,password) {
    
this.driver.get('www.opencart.com').then(username);
 
  });
 
// // The “when” condition for our Verify title scenario // //
  When(/^There is a title on the page as "----" "([^"]*)"$/, function (titleMatch, username) {
    this.driver.getTitle()
      .then(function(title) {
        assert.equal(title, titleMatch, username, 'Expected title to be ' + titleMatch);
 
// // The “then” condition for our test scenario // //Success Login 
Then(/^I should be able to click Search in the sidebar $/, function (text, password) {
var username= 'abhilash';
var password ='wipro@12';
     this.driver.findElement({ id: 'username' }).sendKeys(text).then(username);
     this.driver.findElement({ id: 'password' }).sendKeys(password).then(password);
	  Assert.assertTrue("Login  successful",expectedText.equals(text));
  });
  
  
  // // The “then” condition for our test scenario // //Failed Login 
  var username= 'abhilash';
var password ='wiproE';
Then(/^I should be able to click Search in the sidebar $/, function (text, password) {
     this.driver.findElement({ id: 'username' }).sendKeys(text).then(username);
     this.driver.findElement({ id: 'password' }).sendKeys(password).then(password);
	 	  Assert.assertTrue("Login  not successful",expectedText.equals(text));
  });
  
  // // The “then” condition for our test scenario // //
Then(/^I should be able to click Login Button$/, function (text, username) {
	this.driver.findElement({ id: 'Login' }).click();	
	this.driver.findElement({ id: 'buttonText' }).sendKeys(text).then(next);
    
  });
  
  this.Then(/^Verify the error message"([^"]*)"$/, function (titleMatch, next) {
    this.driver.getTitle()
      .then(function(title) {
        assert.equal(title, titleMatch, next, 'Expected title to be ' + titleMatch);
      });
  });
  
  this.Then(/^Close the browser "([^"]*)"$/, function (button, next) {
  this.driver.quit('Close the browser').then(url);
  });