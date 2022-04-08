const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger.json');
const app = require('./');

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3333, () => console.log('Server API is Running! --PORT 3333'));