const db = require("../db.js");

const save_lottery_info = (data) =>
  new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO lotter_info SET ?",
      data,
      (error, results, fields) => {
        if (error) {
          reject("Could not insert into lottery_info");
        }
        resolve("Success");
      }
    );
  });

module.exports = {
  save_lottery_info,
};
