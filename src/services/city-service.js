const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');

const {CityRepository} = require('../repositories');

const cityRepository = new CityRepository();


async function createCity(data) {

    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(id,data) {

    try {
        const response = await cityRepository.update(id,data);
        return response;
    }
    catch(error){
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError(error.message, StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot update that City', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(id) {

    try {
        const city = await cityRepository.destroy(id);
        return city;
    }
    catch(error){
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError(error.message, StatusCodes.NOT_FOUND);
        }
        throw new AppError('Cannot delete that city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createCity, updateCity, destroyCity
}
