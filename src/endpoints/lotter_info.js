const {
  post_lottery_info,
  get_total_amount,
} = require("../models/lotter_info");

const PATH = {
  POST_LOTTERY_INFO: "/lotter_info",
  GET_TOTAL_AMOUNT: "/totalAmount",
};

const HANDLER = {
  POST_LOTTERY_INFO: async (req, res) => {
    const email = req.body.email;
    const amount = req.body.amount;

    if (amount < 1) {
      const errorInfo = {
        error: true,
        message: "Amount should be greater than 0",
      };
      return res.send(errorInfo);
    }

    const result = await post_lottery_info({ email, amount });
    res.send(result);
  },
  GET_TOTAL_AMOUNT: async (req, res) => {
    const result = await get_total_amount();
    res.send(result);
  },
};

const lotter_info_endpoint = (app) => {
  app.post(PATH.POST_LOTTERY_INFO, HANDLER.POST_LOTTERY_INFO);
  app.get(PATH.GET_TOTAL_AMOUNT, HANDLER.GET_TOTAL_AMOUNT);
};

module.exports = {
  lotter_info_endpoint,
};
