const {database} = require('../../config')
const mysql = require("mysql2/promise");

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const connection = await mysql.createConnection(database.url);
    
    console.log("MySQL conectado!");
    
    global.connection = connection;
    return connection;
}

module.exports = {
    connect
}