// Switch to the admin database for creating users with admin roles
db = db.getSiblingDB('admin');

// Create the admin user with root privileges in the admin database
db.createUser({
  user: 'admin',
  pwd: 'password',
  roles: [{ role: 'root', db: 'admin' }]
});

// Create a new database (optional, since MongoDB creates a DB when it is first used)
db = db.getSiblingDB('sample_db');

// Create a user with read access

db.createUser({
  user: 'user',
  pwd: 'password',
  roles: [{ role: 'read', db: 'sample_db' }]
});

// Create the 'customers' collection with 10 sample documents
db.createCollection('customers');
db.customers.insertMany([
  { name: 'Alice', email: 'alice@example.com', age: 30, city: 'New York' },
  { name: 'Bob', email: 'bob@example.com', age: 25, city: 'Los Angeles' },
  { name: 'Charlie', email: 'charlie@example.com', age: 35, city: 'Chicago' },
  { name: 'David', email: 'david@example.com', age: 40, city: 'Houston' },
  { name: 'Eva', email: 'eva@example.com', age: 28, city: 'Phoenix' },
  { name: 'Frank', email: 'frank@example.com', age: 22, city: 'San Francisco' },
  { name: 'Grace', email: 'grace@example.com', age: 27, city: 'Austin' },
  { name: 'Hank', email: 'hank@example.com', age: 32, city: 'Dallas' },
  { name: 'Ivy', email: 'ivy@example.com', age: 29, city: 'Miami' },
  { name: 'Jack', email: 'jack@example.com', age: 33, city: 'Seattle' }
]);

// Create the 'orders' collection with 20 sample documents
db.createCollection('orders');
db.orders.insertMany([
  { orderId: 1, customerId: 1, totalAmount: 100, date: new Date('2024-10-01') },
  { orderId: 2, customerId: 2, totalAmount: 150, date: new Date('2024-10-02') },
  { orderId: 3, customerId: 3, totalAmount: 120, date: new Date('2024-10-03') },
  { orderId: 4, customerId: 4, totalAmount: 80, date: new Date('2024-10-04') },
  { orderId: 5, customerId: 5, totalAmount: 200, date: new Date('2024-10-05') },
  { orderId: 6, customerId: 6, totalAmount: 170, date: new Date('2024-10-06') },
  { orderId: 7, customerId: 7, totalAmount: 90, date: new Date('2024-10-07') },
  { orderId: 8, customerId: 8, totalAmount: 220, date: new Date('2024-10-08') },
  { orderId: 9, customerId: 9, totalAmount: 110, date: new Date('2024-10-09') },
  { orderId: 10, customerId: 10, totalAmount: 60, date: new Date('2024-10-10') },
  { orderId: 11, customerId: 1, totalAmount: 130, date: new Date('2024-10-11') },
  { orderId: 12, customerId: 2, totalAmount: 140, date: new Date('2024-10-12') },
  { orderId: 13, customerId: 3, totalAmount: 200, date: new Date('2024-10-13') },
  { orderId: 14, customerId: 4, totalAmount: 160, date: new Date('2024-10-14') },
  { orderId: 15, customerId: 5, totalAmount: 110, date: new Date('2024-10-15') },
  { orderId: 16, customerId: 6, totalAmount: 130, date: new Date('2024-10-16') },
  { orderId: 17, customerId: 7, totalAmount: 180, date: new Date('2024-10-17') },
  { orderId: 18, customerId: 8, totalAmount: 90, date: new Date('2024-10-18') },
  { orderId: 19, customerId: 9, totalAmount: 140, date: new Date('2024-10-19') },
  { orderId: 20, customerId: 10, totalAmount: 200, date: new Date('2024-10-20') }
]);

// Create the 'categories' collection with 3 sample documents
db.createCollection('categories');
db.categories.insertMany([
  { categoryId: 1, name: 'Electronics', description: 'Electronic devices and gadgets' },
  { categoryId: 2, name: 'Clothing', description: 'Apparel and accessories' },
  { categoryId: 3, name: 'Books', description: 'Fiction, non-fiction, and educational books' }
]);
