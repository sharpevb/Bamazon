var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "limegreen3A",
    database: "products"
});

connection.connect(function (err) {
    if (err) throw err;
    startUp();
});

// On run, the app will display
function startUp() {
    console.log("HELLO")
    inquirer
      .prompt({
        name: "item",
        type: "list",
        message: "Would you like to [POST] an auction or [BID] on an auction?",
        choices: ["POST", "BID", "EXIT"]
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.item === "POST") {
          postAuction();
        }
        else if(answer.item === "BID") {
          bidAuction();
        } else{
          connection.end();
        }
      });
  }
