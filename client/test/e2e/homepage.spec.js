module.exports= {

'Home page': (browser) => {
  browser
  .url('http://localhost:8000')
  .waitForElementVisible('body')
  .assert.title('Doc Manager')
  .end();
}
};
