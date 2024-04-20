// src/middlewares/errorHandler.js
exports.errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err);
    res.status(statusCode).json({ message: err.message });
  };