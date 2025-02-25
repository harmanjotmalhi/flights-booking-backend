const express = require('express');

const { PORT } = require('./config');
const apiRoutes = require('./routes');

const {} = require('./controllers');

const app = express();

app.use('/api', apiRoutes);

app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
})