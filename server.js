const app = require('./app');
const config = require('./src/config');
require('dotenv').config();

app.listen(config.port, (error) => {
    if (error) {
        console.error('Error starting server:', error);
        return;
    }
    console.log(`Server is running on http://localhost:${config.port}`);
});