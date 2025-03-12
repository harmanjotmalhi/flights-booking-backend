const { StatusCodes } = require('http-status-codes');

const {ErrorResponse} = require('../utils');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if(!req.body) {
        ErrorResponse.message = 'Something went wrong with the city name';
        ErrorResponse.error = new AppError(['city name not found in the incoming request'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}