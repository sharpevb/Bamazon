USE mysql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'limegreen3A';
GRANT ALL PRIVILEGES ON products.* TO 'root'@'localhost';

DROP DATABASE IF exists bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NULL,
department_name VARCHAR(100) NULL,
price DECIMAL(10,2) NULL,
stock_quantity INT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ("Toaster Oven", "Kitchen", 55.95, 50 );
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ("Laptop Computer", "Electronics", 799.99, 10 );
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ("Alarm Clock", "Home", 8.95, 50 );
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ("Hairbrush", "Beauty", 4.99, 100 );
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ("Floor Lamp", "Home", 35.95, 10 );
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ("Stand Mixer", "Kitchen", 99.99, 25 );
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ("Hanger", "Home", 00.99, 100 );
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ("Table Lamp", "Home", 10.95, 20 );
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ("Nintendo Switch", "Gaming", 299.99, 10 );
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ("Propane Grill", "Outdoor", 499.99, 10 );

SELECT * FROM bamazon.products;