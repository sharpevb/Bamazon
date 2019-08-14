var mysql = require("mysql");
var inquirer = require("inquirer");
require("dotenv").config();

var connection = mysql.createConnection({
    host: process.env.SQL_HOST,
    port: 3306,
    user: process.env.SQL_USER,
    password: process.env.SQL_ID,
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    startUp();
});

// On run, the app will display:
function startUp() {
    inquirer.prompt({
        name: "item",
        type: "list",
        message: "Welcome to Bamazon! What would you like to do?",
        choices: ["See all products", "Quit"]
    })
        .then(function (answer) {
            if (answer.item === "See all products") {
                console.log("\nList of items below:\n")
                list();
                console.log("\n");
            }
            else {
                connection.end();
            }
        });
}

// List inventory in a table
function list() {
    connection.query(
        "SELECT item_id, product_name, price FROM products",
        function (err, res) {
            if (err) throw err;
            console.table(res);
        },
    )
    buy();
};

// Ask user what product(s) they want to buy
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
    ]).then(function (input) {

        var item = input.item_id;
        var quantity = input.quantity;

        var queryStr = "SELECT * FROM products WHERE ?";

        connection.query(queryStr, {
            item_id: item
        }, function (err, data) {
            if (err) throw err;
            var productData = data[0];

            if (quantity <= productData.stock_quantity) {
                console.log("\nThis item is in stock. Placing order now.\n");

                var updateQueryStr = "UPDATE products SET stock_quantity = " + (productData.stock_quantity - quantity) + " WHERE item_id = " + item;

                connection.query(updateQueryStr, function (err, data) {
                    if (err) throw err;

                    console.log("-----------------------------------------------------------");
                    console.log("  Your total is $" + total(productData.price * quantity, 2));
                    console.log("\n  Thank you for shopping with Bamazon. Have a great day!");
                    console.log("-----------------------------------------------------------\n");
                    connection.end()
                });

            } else {
                console.log("\nSorry, your order cannot be placed because of low inventory.\n");
                buy();

            }
        }
        )
    })
}

function total(num, precision) {
    let c = Math.pow(10, precision);
    return Math.trunc(num * c) / c;
}

function validateInput(val) {
    var integer = Number.isInteger(parseFloat(val));
    var sign = Math.sign(val);

    if (integer && (sign === 1)) {
        return true;
    } else {
        return "Very funny... Please input a number greater than 0"
    }
}