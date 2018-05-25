const Countries = require('./models/countries.js');
const CountryListView = require('./views/country_list_view.js');
const CountryDetailView = require('./views/country_detail_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const countries = new Countries();
  countries.getData();
  countries.bindEvents();

  const listContainer = document.querySelector('#country-list');
  const countryListView = new CountryListView(listContainer);
  countryListView.bindEvents();

  const detailContainer = document.querySelector('#country-details');
  const countryDetailView = new CountryDetailView(detailContainer);
  countryDetailView.bindEvents();

})


// document.addEventListener('DOMContentLoaded', () => {
//   const listContainer = document.querySelector('#munro-list');
//   const munroListView = new MunroListView(listContainer);
//   munroListView.bindEvents();
//
//   const munros = new Munros;
//   munros.getData();
// })
