var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "limegreen3A",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    startUp();
});

// On run, the app will display:
function startUp() {
    console.log("HELLO")
    inquirer.prompt({
        name: "item",
        type: "list",
        message: "Welcome to Bamazon! What would you like to do?",
        choices: ["See all products", "Quit"]
      })
      .then(function(answer) {
        if (answer.item === "See all products") {
            console.log("\nList of items below:\n")
            list();
        }
        else {
          connection.end();
        }
      });
  }

  function list() {
      /*var table = new Table({
        head: ["item_id", "product_name", "price"],
        colWidths: [10, 20]
      });
      table.push(
        ["First value", "Second value"]
      , ["First value", "Second value"]
    );
    console.log(table.toString());*/
    
    connection.query(
        "SELECT item_id, product_name, price FROM products",
        function (err, res) {
            if (err) throw err;
            console.table(res);   
        },

    )
        buy();    
  };

function buy() {
    inquirer.prompt([{
        type: "input",
        name: "item_id",
        message: "Please enter the item ID of the product you would like to purchase.",
        validate: validateInput,
        filter: Number
    },
    {
        type: "input",
        name: "quantity",
        message: "How many do you need?",
        validate: validateInput,
        filter: Number

    }

]).then
}

  /* CODING GRAVEYARD

  



  */