const mySql = require("mysql");
const dbConfig = {
  host: "127.0.0.1",
  user: "root",
  password: "mani1234",
  database: "blockchainapp",
};

let connection;

const handleConnection = () => {
  connection = mySql.createConnection(dbConfig);
  connection.connect((error) => {
    if (error) {
      console.log("Error while connection db : ", error);
      setTimeout(handleConnection, 2000);
    }
  });
  connection.on("error", (error) => {
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      handleConnection();
    } else {
      throw error;
    }
  });
};

handleConnection();
module.exports = connection;
