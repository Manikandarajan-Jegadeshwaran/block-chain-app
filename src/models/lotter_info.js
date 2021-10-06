const db = require("../../db.js");

const post_lottery_info = (data) =>
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

const get_total_amount = (data) =>
  new Promise((resolve, reject) => {
    db.query(
      "SELECT sum(amount) as totalAmount from lotter_info",
      null,
      (error, results, fields) => {
        if (error) {
          reject("Could not get total amount");
        }
        resolve(results);
      }
    );
  });

module.exports = {
  post_lottery_info,
  get_total_amount,
};



//TABLE INFO
// CREATE TABLE `lotter_info` (
//   `id` int unsigned NOT NULL AUTO_INCREMENT,
//   `email` varchar(45) DEFAULT NULL,
//   `amount` decimal(20,0) DEFAULT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
