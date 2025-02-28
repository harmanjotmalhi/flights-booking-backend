const CrudRepository = require('./CrudRepository');
const { Airplane } = require('./models');

class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }
}

module.exports = AirplaneRepository;