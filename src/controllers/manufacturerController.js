var config = require('../configs/dbconfig');
const sql = require('mssql');

async function getManufacturers() {
    try {
        await sql.connect(config);
        let manufacturers = await sql.query('select * from manufacturer');
        return manufacturers.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getManufacturers: getManufacturers
}