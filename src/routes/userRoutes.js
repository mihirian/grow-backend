// src/routes/userRoutes.js
const express = require('express');
const { getUsers, createUser } = require('../controllers/userController');
const { validateUser } = require('../middlewares/validateRequest');

const router = express.Router();

router.get('/getUsers', getUsers); // GET all users
router.post('/', validateUser, createUser); // POST a new user

module.exports = router;