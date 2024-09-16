const categories = require("../models/categories");
const appetizers = require("../models/appetizers");
const hamburgers = require("../models/hamburgers");
const desserts = require("../models/desserts");
const beverages = require("../models/beverages");
const paymentOptions = require("../models/paymentOptions");
const createOrder = require("../models/createOrder");
const login = require("../models/login");

const router = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World!";
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: (request, h) => {
      return login(request, h);
    },
  },
];

module.exports = router;
