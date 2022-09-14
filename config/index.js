require("dotenv").config();

const config = {};
config.PORT = process.env.PORT || 4040;

module.exports = config;
