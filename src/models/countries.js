const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Countries = function () {
  this.countriesData = [];
}

Countries.prototype.getData = function () {

  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all')
  requestHelper.get((data) => {
    this.countriesData = data;
    console.log(`this is loaded ${data.length}`);
    PubSub.publish('Countries:countries-ready-to-publish', data);
  });


};

Countries.prototype.bindEvents = function () {
  PubSub.subscribe('CountryListView:country-clicked', (evt) => {
    //get all info from this countryName
    console.log(`CountryListView:country-clicked on ${evt.detail}`);
    const detailOfOneCountry = this.countriesData[evt.detail];
    console.log(`Country ${detailOfOneCountry.name}`);

    //boradast to details with data of this country
    PubSub.publish('Countries:country-detail', detailOfOneCountry);

  });
};



module.exports = Countries;





// const Munros = function () {
//   this.munrosData = [];
//   this.regions = [];
// }
//
// Munros.prototype.getData = function () {
//   const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros')
//   requestHelper.get((data) => {
//     PubSub.publish('Munros:munros-ready', data);
//   });
// }
//
// module.exports = Munros;
