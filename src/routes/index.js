const express = require('express');

const v1Routes = require('./v1');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const router = express.Router();

router.use('/v1', v1Routes);

module.exports = router;