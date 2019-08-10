
const connectionString = "postgres://fwjjvrok:czPeqMXluguWck_p-epGGT7UCRZQPEbl@raja.db.elephantsql.com:5432/fwjjvrok"
const { Pool } = require('pg');

const pool = new Pool({ connectionString })

pool.query("CREATE TABLE IF NOT EXISTS todolist (id serial primary key, item varchar (255));")
.catch(err => {
    console.log("Error creating table: ", err)
})

module.exports = pool;

// console.log("hello world");