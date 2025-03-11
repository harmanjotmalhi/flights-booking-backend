const express = require('express');
const { AirplaneMiddleware } = require('../../middlewares');

const { AirplaneController } = require('../../controllers');

const router = express.Router();

// /api/v1/airplanes POST request
router.post('/', AirplaneMiddleware.validateCreateRequest, AirplaneController.createAirplane);

router.get('/', AirplaneController.getAirplanes);

router.get('/:id', AirplaneController.getAirplane);

router.delete('/:id', AirplaneController.destroyAirplane);

router.patch('/:id', AirplaneController.updateAirplane);


module.exports = router; 