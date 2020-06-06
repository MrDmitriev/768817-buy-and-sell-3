'use strict';
// BE BASE URLS
const BASE_URL_EXPRESS = `http://localhost:8080/`;
const BASE_URL_SERVICE = `http://localhost:3000/`;

// SERVICE ENDPOINTS
const offersList = `api/offers/`;
const offerItem = (offerId) => `api/offers/${offerId}`;
const search = `api/search`;

module.exports = {
  offersList,
  offerItem,
  search,
  BASE_URL_EXPRESS,
  BASE_URL_SERVICE
};
