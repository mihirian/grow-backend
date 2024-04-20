// scripts/seedDatabase.js
const db = require('../src/config/db');
const User = require('../src/models/userModel');

async function seedDatabase() {
  await db.sync({ force: true });  // This line drops all tables and recreates them

  const users = [
    { name: 'Alice', email: 'alice@example.com', password: 'password123' },
    { name: 'Bob', email: 'bob@example.com', password: 'password123' }
  ];

  try {
    for (let user of users) {
      await User.create(user);
    }
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await db.close();
  }
}

seedDatabase();