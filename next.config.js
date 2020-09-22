// next.config.js
const path = require("path");

require("dotenv").config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
};

const withSass = require("@zeit/next-sass");
module.exports = withSass({
  /* config options here */
});
