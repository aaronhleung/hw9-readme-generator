const axios = require("axios");
const api = {
  getUser() {
    const username = "aaronhleung";
    const queryUrl = `https://api.github.com/users/${username}`
    return axios.get(queryUrl);
  }

};

api.getUser();

module.exports = api;