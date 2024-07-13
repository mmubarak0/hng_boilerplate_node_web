var swaggerJsdoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');
var options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
        },
    },
    apis: ['src/docs/v1/*.yaml'],
};
var specs = swaggerJsdoc(options);
module.exports = function (app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
