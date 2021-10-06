const { lotter_info_endpoint } = require("./lotter_info");

const connect_endpoint = (app) => {
  lotter_info_endpoint(app);
};

module.exports = { connect_endpoint };
