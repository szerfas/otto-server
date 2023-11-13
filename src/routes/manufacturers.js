var manufacturerController = require('../controllers/manufacturerController');
var express = require('express');
var app = express();
var router = express.Router();
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');

const checkJwt = auth({
    audience: 'http://localhost:5000/',
    issuerBaseURL: `https://dev-df4ef0cqe070vw4o.us.auth0.com/`,
  });

router.get('/', checkJwt, (request, response) => {
    manufacturerController.getManufacturers().then((data) => {
        response.setHeader('Content-Type', 'application/json');
        response.json(data[0]);
    })
});

module.exports = router;