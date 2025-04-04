const express = require('express');
const { AirportMiddlewares } = require('../../middlewares');

const { AirportController } = require('../../controllers');

const router = express.Router();

// /api/v1/airports POST request
router.post('/', AirportMiddlewares.validateCreateRequest, AirportController.createAirport);

router.get('/', AirportController.getAirports);

router.get('/:id', AirportController.getAirport);

router.delete('/:id', AirportController.destroyAirport); 

router.patch('/:id', AirportController.updateAirport);

module.exports = router; 