import assert from 'chai';

describe('Client', function () { //define suite title by passing a string

    it('Get title', function () { //define test title by passing a string
      browser.url('/'); //open baseUrl + string passed in .url() function
      let title = browser.getTitle(); //get page title and assign it to the "title" variable
      assert.equal(title, 'Progress Monitor'); //compare {title} (actual) and "Bug Tracker" (expected)
    })

});

describe('Elements exist', function () {

  it('Header', function () {
    let header = $('#site-name').isDisplayed();
    assert.equal(header, true);
  })

  it('Header title', function () {
    let headerTitle = $('h1').isDisplayed();
    assert.equal(headerTitle, true);
  })

  it('Footer', function () {
    let footer = $('footer').isDisplayed();
    assert.equal(footer, true);
  })

});

describe('Elements values', function () {

  it('Progress Monitor', function () {
    let text = $('#site-name').getText();
    assert.equal(text, 'Progress Monitor');
  })

}); 
