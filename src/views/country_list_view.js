const PubSub = require('../helpers/pub_sub.js');
const CountryDetailView = require('./country_detail_view');

const CountryListView = function (container) {
  this.container = container;
};

CountryListView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-ready-to-publish', (evt) => {
    this.renderCountryNamesViews(evt.detail);
  });
};

CountryListView.prototype.renderCountryNamesViews = function (countries) {
  //console.log(countries.length);
  
  countries.forEach( (oneCountry, index) => {
    //create one country list item
    const countryListItem = this.makeNewCountryListItem(oneCountry.name, index );
    //add that to the container
    this.container.appendChild(countryListItem);
  });
};

CountryListView.prototype.makeNewCountryListItem = function (countryName, countryId) {
  const countryDetailView = document.createElement('li');
  countryDetailView.textContent = countryName; //France
  countryDetailView.id = countryId; //23

  countryDetailView.addEventListener('click', (evt) => { //can use mouseover when hovering
    //evt.target is countryDetailView
    console.log(evt.target.id);
    PubSub.publish('CountryListView:country-clicked', evt.target.id);
  });
  return countryDetailView;
};


//
// MunroListView.prototype.renderMunroDetailViews = function (munros) {
//   munros.forEach((munro) => {
//     const munroItem = this.createMunroListItem(munro);
//     this.container.appendChild(munroItem);
//   });
// };
//
// MunroListView.prototype.createMunroListItem = function (munro) {
//   const munroDetailView = new MunroDetailView();
//   const munroDetail = munroDetailView.createMunroDetail(munro);
//   return munroDetail;
// };
//
 module.exports = CountryListView;
