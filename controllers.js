const pool = require('./database.js')

const dbController = {};

dbController.add = (req, res, next) => {
    let data = req.body.item; 
    pool.query("INSERT INTO todo (item) VALUES ($1) RETURNING id;", [data], (err,result)=>{
        if (err){console.log("Error adding to the database.")}
        else {
            res.locals.id = result.rows[0].id 
            console.log(result.rows[0]);
            next();
        }
    })
}

dbController.delete = (req, res, next) => {
    let data = req.body.id; 
    pool.query("DELETE FROM todo WHERE id=$1 RETURNING id;", [data], (err,result)=>{
        if (err){console.log("Error deleting from the database.")}
        else {
            console.log("Sucess in deleting from the database");
            console.log(result);
            // res.locals.id = result.rows[0].id;
            next();
        }
    })
}

module.exports=dbController; 