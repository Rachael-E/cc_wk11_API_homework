const PubSub = require('../helpers/pub_sub.js');


const CountryDetailView = function (htmlContainer) {
  this.htmlContainer = htmlContainer; //ul

};


CountryDetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:country-detail', (evt) => {
    this.renderCountryDetail(evt.detail);
  });
};

CountryDetailView.prototype.renderCountryDetail = function (country) {
  this.htmlContainer.innerHTML = '';

  const countryCapital = document.createElement('div');
  countryCapital.textContent = `The capital of ${country.name} is ${country.capital}, and it has a population of ${country.population}`;
  this.htmlContainer.appendChild(countryCapital);
};



module.exports = CountryDetailView;

// MunroDetailView.prototype.createMunroDetail = function (munro) {
//   const munroDetail = document.createElement('div');
//   munroDetail.classList.add('munro-detail');
//
//   const name = document.createElement('h3');
//   name.textContent = munro.name;
//   munroDetail.appendChild(name);
//
//   const detailsList = document.createElement('ul');
//   const meaning = this.createDetailListItem('Meaning', munro.meaning);
//   detailsList.appendChild(meaning);
//
//   const height = this.createDetailListItem('Height', munro.height)
//   detailsList.appendChild(height);
//
//   munroDetail.appendChild(detailsList);
//   return munroDetail;
// };
//
// MunroDetailView.prototype.createDetailListItem = function (label, property) {
//   const element = document.createElement('li');
//   element.textContent = `${label}: ${property}`;
//   return element;
// };
//
// module.exports = MunroDetailView;
