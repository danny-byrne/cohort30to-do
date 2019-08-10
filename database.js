
const connectionString = "postgres://oiydmhsx:9enMhgeT082Cug-edPiStUWkJLD2OJmR@raja.db.elephantsql.com:5432/oiydmhsx"
const { Pool } = require('pg');

const pool = new Pool({ connectionString })

pool.query("CREATE TABLE IF NOT EXISTS todo (id serial primary key, item varchar (255));")
.catch(err => {
    console.log("Error creating table: ", err)
})

module.exports = pool;

// console.log("hello world");