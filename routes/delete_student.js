module.exports = ( webserver, mysql, database ) => {

    webserver.delete( '/api/delete_student' , ( req , res ) => {

        const output = {
            success: false,
            data: [],
            errors: [],
            message: ""
        };

        let { id } = req.query;

        let query = `
            DELETE FROM grades
            WHERE id = ?`;

        let inserts = [id];

        let mysqlQuery = mysql.format( query , inserts );

        database.query( mysqlQuery , ( err , data , fields ) => {

            if(!err) {
                output.success = true;
                output.message = "Student successfully deleted";
            } else {
                output.errors = err;
                output.message = "Student was unable to be deleted";
            };

            res.json(output);

        });

    });
    
};