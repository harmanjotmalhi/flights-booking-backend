const { AirportRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');

const airportRepository  = new AirportRepository();

async function createAirport(data) {

    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airport object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports() {

    try {
        const airports = await airportRepository.getAll();
        return airports;
    }
    catch(error){
        throw new AppError('Cannot fetch all airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id) {

    try {
        const airport = await airportRepository.getById(id);
        return airport;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError(error.message, StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot fetch airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id) {

    try {
        const airport = await airportRepository.destroy(id);
        return airport;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError(error.message, StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot delete that airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id,data) {

    try {
        const [airport] = await airportRepository.update(id,data);
        return [airport];
    }
    catch(error){
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError(error.message, StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot update that airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}



module.exports = { createAirport, getAirport, getAirports, destroyAirport, updateAirport};