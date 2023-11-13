var config = require('../configs/dbconfig');
const sql = require('mssql');

async function getModels() {
    try {
        await sql.connect(config);
        let models = await sql.query(`select manufacturer.name as manufacturer, model.name
                                                from model
                                                inner join manufacturer
                                                on model.manufacturer_id = manufacturer.id`);
        return models.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getModels: getModels
}