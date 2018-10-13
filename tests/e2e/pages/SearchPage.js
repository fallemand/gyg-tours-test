module.exports = {
  commands: [{
    filter(query, client) {
      this
        .waitForElementVisible('@filterOptionTitle', 2000)
        .click('@filterOptionTitle')
        .waitForElementVisible('@filterField', 2000)
        .setValue('@filterField', [query, client.Keys.ENTER]);
      return this;
    },
    sortByRating() {
      this.waitForElementVisible('@sortField', 2000)
        .click('@filterField')
        .waitForElementVisible('@sortOptionRating', 2000)
        .click('@sortOptionRating');
      return this;
    },
    hoverFirstElement(callback) {
      this
        .waitForElementVisible('@loadingNotVisible', 4000)
        .waitForElementVisible('@toursFirstChild', 2000)
        .moveToElement('@toursFirstChild', 10, 10, callback);
      return this;
    },
    waitNoLoading() {
      this.waitForElementVisible('@loadingNotVisible', 4000);
      return this;
    },
  }],
  elements: {
    filterField: '.filter__value',
    filterOptionTitle: '.filter__field option[value="title"]',
    sortField: '.sort__field[name="sort"]',
    sortOptionRating: '.sort__field[name="sort"] option[value="rating"]',
    toursFirstChild: 'tours__list-tours .tour-info:first-child',
    toursFirstChildTitle: '.tour-info:first-child .tour-info__title',
    pagination: '.pagination',
    paginationButtons: '.pagination .pagination__number',
    loadingNotVisible: '.tours__list-tours:not(.tours__list-tours--loading)',
  },
};
