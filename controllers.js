const pool = require('./database.js')

const dbController = {};

//item is defined in the fetch request
//as req.body.item is the JSON stringified ourInput from the DOM
//which is inserted into the database
dbController.add = (req, res, next) => {
    let data = req.body.item; 
    //query the pool and return the id
    pool.query("INSERT INTO todolist (item) VALUES ($1) RETURNING id;", [data], (err,result)=>{
        if (err){console.log("Error adding to the database.")}
        else {
//response comes back as the first element in result.rows
//which we pass to res.locals
            res.locals.id = result.rows[0].id 
            console.log(result.rows[0]);
            console.log("succesfully updated the database");
            next();
        }
    })
}
/**
 * data is pulled from req.body.id, which is defined as id in the fetch request the query to delete the item.
 *
 */
dbController.delete = (req, res, next) => {
    let data = req.body.id; 
    pool.query("DELETE FROM todolist WHERE id=$1 RETURNING id;", [data], (err,result)=>{
        if (err){console.log("Error deleting from the database.")}
        else {
            console.log("Success in deleting from the database");
            console.log(result);
            // res.locals.id = result.rows[0].id;
            next();
        }
    })
}

module.exports = dbController; 