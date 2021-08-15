const {connect} = require('../db/mysql')

async function selectStudents(){
    const conn = await connect();
    const [rows]  = await conn.query('SELECT * FROM students;'); 
    return rows;
}

module.exports = {
    selectStudents
}