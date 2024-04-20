// src/controllers/userController.js
const userService = require('../services/userService');

exports.getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const userId = await userService.createUser(req.body);
    res.status(201).json({ userId, message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};