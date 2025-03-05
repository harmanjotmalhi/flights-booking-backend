const express = require('express');

const { InfoController } = require('../../controllers');

const router = express.Router();

const airplaneRoutes = require('./airplane-routes');

router.use('/airplanes', airplaneRoutes);

router.get('/info', InfoController.info);

module.exports = router;