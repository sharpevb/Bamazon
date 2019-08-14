# Bamazon
Bamazon is an Amazon-like Node app that takes in orders from customers and depletes stock from the store's inventory.

### App Demo
![Bamazon.gif](/documentation/Bamazon.gif)

## Let's Go Shopping!
On start up, Bamazon asks the shopper to either see all of its products or to quit. When they select "See all products", Bamazon's inventory displays as a table.

![LGS.png](/documentation/LGS.png)


## Decisions, Decisions...
Bamazon asks the shopper the ID of the product they would like to buy. It then asks how many units of the product that the shopper needs.


* If the shopper's desired quanitity is more than the available inventory, Bamazon will informs them of the  low inventory.

![DDD1.png](/documentation/DDD1.png)


* If the shopper inputs zero as the number of units, Bamazon will think the shopper playing a trick on them and ask them to put in an amount higher than zero.

![DDD2.png](/documentation/DDD2.png)


## Cash Rules Everythin' Around Me
If the shopper's desired item is in stock _and_ there's enough units, it'll add up the shopper's total, display it, and remove the total units bought from the inventory.

![CASH.png](/documentation/CASH.png)

## Technology and Packages Used
[Node.js](https://nodejs.org/)

[MySQL](https://www.mysql.com/)
