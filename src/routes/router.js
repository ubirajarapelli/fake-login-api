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
