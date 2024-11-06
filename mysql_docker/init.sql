-- Create the customers table
CREATE TABLE IF NOT EXISTS customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the orders table
CREATE TABLE IF NOT EXISTS orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    status ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled') DEFAULT 'Pending',
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
);

-- Insert sample data into customers
INSERT INTO customers (name, email, phone) VALUES
    ('John Doe', 'john@example.com', '123-456-7890'),
    ('Jane Smith', 'jane@example.com', '987-654-3210'),
    ('Alice Johnson', 'alice.j@example.com', '555-123-4567'),
    ('Bob Williams', 'bob.w@example.com', '555-765-4321');

-- Insert sample data into orders
INSERT INTO orders (customer_id, order_date, amount, status) VALUES
    (1, '2023-10-15', 250.00, 'Shipped'),
    (2, '2023-10-16', 150.00, 'Pending'),
    (3, '2023-10-17', 300.00, 'Delivered'),
    (4, '2023-10-18', 400.00, 'Cancelled');
