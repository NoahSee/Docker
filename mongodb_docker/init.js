// mongodb_init.js
// Define database and collections
let db = db.getSiblingDB('scrubs_db');

// Connect to the database
db = db.getSiblingDB('scrubs_db');

// Create an admin user for scrubs_db with root privileges
db.createUser({
  user: 'admin',
  pwd: 'password', // Choose a secure password in production
  roles: [
    { role: 'dbOwner', db: 'scrubs_db' } // Provides full access to the scrubs_db
  ]
});

db.createCollection('agents');
db.createCollection('users');
db.createCollection('organisations');

db.organisations.insertOne({
  name: "Scrubs Dev Team",
  identifier: "scrubs-dev",
  createdAt: new Date(),
  updatedAt: new Date()
})

db.users.insertMany([
  {
    name: "Dr. John Smith",
    email: "john.smith@scrubs.dev",
    password: "password123", // In production, this should be hashed
    organisation: db.organisations.findOne({ identifier: "scrubs-dev" })._id,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Dr. Jane Doe",
    email: "jane.doe@scrubs.dev",
    password: "password456", // In production, this should be hashed
    organisation: db.organisations.findOne({ identifier: "scrubs-dev" })._id,
    createdAt: new Date(),
    updatedAt: new Date()
  }
])

db.agents.insertOne({
  type: 'mongodb',
  db_uri: 'mongodb://test_user:password@localhost:27017/test_db',
  initial_message: "Hello! I'm your medical assistant. How can I help you today?",
  instructions: "Assist users with medical record queries and management.",
  user: db.users.findOne({ email: "john.smith@scrubs.dev" })._id,
  createdAt: new Date(),
  updatedAt: new Date()
})

// Create and switch to test_db
let testDb = db.getSiblingDB('test_db');

testDb.createUser({
  user: 'test_user',
  pwd: 'password',
  roles: [
    { role: 'dbOwner', db: 'test_db' } 
  ]
});

// Create collections for test_db
testDb.createCollection('patients');

// Insert sample patient data
testDb.patients.insertMany([
  {
    patientId: "P001",
    firstName: "Robert",
    lastName: "Chase",
    dateOfBirth: new Date("1980-04-15"),
    gender: "M",
    contactInfo: {
      email: "robert.chase@example.com",
      phone: "555-0101"
    },
    medicalHistory: [
      {
        condition: "Hypertension",
        diagnosedDate: new Date("2019-03-10"),
        status: "Ongoing"
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    patientId: "P002",
    firstName: "Allison",
    lastName: "Cameron",
    dateOfBirth: new Date("1985-07-22"),
    gender: "F",
    contactInfo: {
      email: "allison.cameron@example.com",
      phone: "555-0102"
    },
    medicalHistory: [
      {
        condition: "Asthma",
        diagnosedDate: new Date("2015-11-28"),
        status: "Controlled"
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);
