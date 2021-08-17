const {connect} = require('../db/mysql')

async function selectStudents(search){
    const conn = await connect();

    let query = `SELECT * FROM students`;

    if(search){
        query += ` 
            WHERE 
                name LIKE '%${search}%'
                OR
                email LIKE '%${search}%'
                OR
                cpf LIKE '%${search}%';
        `;
    }

    const [rows]  = await conn.query(query); 
    return rows;
}

module.exports = {
    selectStudents
}