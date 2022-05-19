#!/usr/bin/env node

const axios = require("axios");
let [cityName] = process.argv.slice(2);
let API_KEY = "7b18c93e2c824af7b7a72323221905";
let baseUrl = "http://api.weatherapi.com/v1";

let endPoint = `${baseUrl}/current.json?key=${API_KEY}&q=${cityName}`;

axios
  .get(endPoint)
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
