const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');
const AppError = require('../utils/errors/app-error');
class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
    }

    async destroy(data) {
        //console.log(data);
        const response = await this.model.destroy({
            where: {
                id: data
            }
        });
        if(!response){
            throw new AppError('Resource does not exist', StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async getById(data) {
        const response = await this.model.findByPk(data);
        if(!response){
            throw new AppError('Resource does not exist', StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async getAll() {
        const response = await this.model.findAll();
        return response;
    }

    async update(id, data) {
        const updatedRows = await this.model.update(data, {
            where: {
                id: id
            }
        });

        if(updatedRows === 0){
            throw new AppError('Resource does not exist', StatusCodes.NOT_FOUND);
        }
        //console.log(reponse);
        return updatedRows;
    }
}

module.exports = CrudRepository;