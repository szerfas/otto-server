var modelController = require('../controllers/modelController');
var express = require('express');
var router = express.Router();

router.get('/', (request, response) => {
    // response.send('models');
    modelController.getModels().then((data) => {
        response.json(data[0]);
    })
});

module.exports = router;