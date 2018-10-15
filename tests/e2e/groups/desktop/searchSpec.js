module.exports = {
  'Should filter with tour name': (client) => {
    const searchPage = client.page.SearchPage();
    searchPage
      .filter('Skip the Line: Berlin TV Tower Ticket', client)
      .waitNoLoading();
    client.elements('css selector', '.tours__list-tours .tour-info', (result) => {
      client.assert.equal(result.value.length, 1);
      searchPage.expect.element('@toursFirstChildTitle').text.to.equal('Skip the Line: Berlin TV Tower Ticket');
    });
  },
  'Should sort tours RATING': (client) => {
    const searchPage = client.page.SearchPage();
    searchPage
      .sortByRating()
      .waitNoLoading()
      .expect.element('@toursFirstChildTitle').text.to.equal('German Tour: Reichstag with dome Chamber &amp;');
  },
  beforeEach: (client) => {
    client.url(client.globals.site);
  },
  after: (client) => {
    client.end();
  },
};
