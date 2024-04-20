const { celebrate, Joi, errors, Segments } = require('celebrate');

// Validation rules for creating a new user
const validateUser = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().min(3).max(30),
        email: Joi.string().required().email(),
        password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })
});

// Validation rules for updating a user
const validateUserUpdate = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().min(3).max(30),
        email: Joi.string().email(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    }),
    [Segments.PARAMS]: Joi.object().keys({
        userId: Joi.string().required().uuid()
    })
});


// Middleware function to validate PAN numbers
const validatePanNumber = (req, res, next) => {
    const panNumber = req.body.panNumber; // Assuming the PAN number is sent in the request body

    // Check if the PAN number is provided and meets validation criteria
    if (!panNumber || !isValidPanNumber(panNumber)) {
        return res.status(400).json({ error: 'Invalid PAN number' });
    }

    // If the PAN number is valid, proceed to the next middleware or route handler
    next();
};

// Function to validate PAN numbers (implement according to your validation criteria)
const isValidPanNumber = (panNumber) => {
    // Implement PAN number validation logic here
    // Example: check length, format, etc.
    // Return true if valid, false otherwise
    return true; // Placeholder, replace with actual validation logic
};


// Use this middleware to handle Joi validation errors
const validationErrorHandler = errors();

module.exports = {
    validateUser,
    validateUserUpdate,
    validatePanNumber,
    validationErrorHandler
};