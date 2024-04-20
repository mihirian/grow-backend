// src/services/userService.js
const User = require('../models/userModel');

exports.getUsers = async () => {
  return await User.findAll();
};

exports.createUser = async (userData) => {
  return await User.create(userData);
};