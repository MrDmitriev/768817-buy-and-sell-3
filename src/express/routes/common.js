'use strict';

const {Router} = require(`express`);

const commonRouter = new Router();

commonRouter.get(`/`, (req, res) => res.render(`main`, {}));
commonRouter.get(`/search`, (req, res) => res.render(`search-result`));
commonRouter.get(`/register`, (req, res) => res.render(`sign-up`));
commonRouter.get(`/login`, (req, res) => res.render(`login`));

module.exports = commonRouter;
