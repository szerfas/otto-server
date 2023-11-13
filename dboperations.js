// Functions to perform database operations.
var config = require('./src/configs/dbconfig');
const sql = require('mssql');

async function getManufacturers() {
    try {
        let pool = await sql.connect(config);
        let manufacturers = await pool.request.query('select * from manufacturer');
        return manufacturers.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

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
    getManufacturers: getManufacturers,
    getModels: getModels
}