-- Create the categories table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Insert sample categories
INSERT INTO categories (name) VALUES
('Electronics'),
('Books'),
('Clothing');

-- Create the customers table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    address VARCHAR(200),
    phone VARCHAR(20)
);

-- Insert sample customers
INSERT INTO customers (name, email, address, phone) VALUES
('John Doe', 'john.doe@example.com', '123 Elm Street', '123-456-7890'),
('Jane Smith', 'jane.smith@example.com', '456 Maple Avenue', '234-567-8901'),
('Robert Brown', 'robert.brown@example.com', '789 Oak Drive', '345-678-9012'),
('Emily Davis', 'emily.davis@example.com', '101 Pine Lane', '456-789-0123'),
('Michael Wilson', 'michael.wilson@example.com', '202 Cedar Street', '567-890-1234'),
('Jessica Taylor', 'jessica.taylor@example.com', '303 Birch Avenue', '678-901-2345'),
('David Anderson', 'david.anderson@example.com', '404 Walnut Road', '789-012-3456'),
('Laura Thomas', 'laura.thomas@example.com', '505 Willow Court', '890-123-4567'),
('Daniel Martinez', 'daniel.martinez@example.com', '606 Spruce Boulevard', '901-234-5678'),
('Sarah Hernandez', 'sarah.hernandez@example.com', '707 Fir Terrace', '012-345-6789');

-- Create the orders table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id) ON DELETE CASCADE,
    category_id INT REFERENCES categories(id) ON DELETE SET NULL,
    order_date DATE NOT NULL DEFAULT CURRENT_DATE,
    amount DECIMAL(10, 2) NOT NULL
);

-- Insert sample orders
INSERT INTO orders (customer_id, category_id, order_date, amount) VALUES
(1, 1, '2024-01-01', 150.00),
(1, 2, '2024-01-05', 25.00),
(2, 1, '2024-01-10', 200.00),
(2, 3, '2024-01-15', 75.00),
(3, 2, '2024-01-20', 40.00),
(3, 1, '2024-01-25', 300.00),
(4, 3, '2024-02-01', 50.00),
(4, 2, '2024-02-05', 35.00),
(5, 1, '2024-02-10', 220.00),
(5, 3, '2024-02-15', 80.00),
(6, 2, '2024-02-20', 45.00),
(6, 1, '2024-02-25', 275.00),
(7, 3, '2024-03-01', 60.00),
(7, 2, '2024-03-05', 30.00),
(8, 1, '2024-03-10', 240.00),
(8, 3, '2024-03-15', 85.00),
(9, 2, '2024-03-20', 55.00),
(9, 1, '2024-03-25', 260.00),
(10, 3, '2024-04-01', 90.00),
(10, 1, '2024-04-05', 320.00);


-- Create the user with a password
CREATE USER "user" WITH PASSWORD 'password';

-- Grant the user CONNECT privileges on the database
GRANT CONNECT ON DATABASE sample_db TO "user";

-- Grant the user USAGE privileges on the schema (replace 'public' with the actual schema name if different)
GRANT USAGE ON SCHEMA public TO "user";

-- Grant SELECT and INSERT privileges on all tables in the schema, without DELETE or DROP privileges
GRANT SELECT, INSERT ON ALL TABLES IN SCHEMA public TO "user";

-- Optionally, you can prevent the user from creating new tables
REVOKE CREATE ON SCHEMA public FROM "user";

-- Ensure the user will not receive DELETE or DROP permissions in the future
ALTER DEFAULT PRIVILEGES IN SCHEMA public
GRANT SELECT, INSERT ON TABLES TO "user";
