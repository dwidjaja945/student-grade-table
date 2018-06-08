module.exports = ( webserver , mysql , database ) => {

    webserver.get( '/api/get_student_data' , ( req , res ) => {

        const output = {
            success: false,
            data: [],
            errors: []
        };

        // assume class_name of biology 100
        let class_name = 'biology 100';

        // let class_name = req.query.class_name;

        let query = `
            SELECT 
                users.full_name,
                classes.class_name,
                classes.grade_value
            FROM classes
            JOIN users
                ON classes.student_id = users.id
            WHERE class_name = ?`;

        let inserts = [class_name];

        let mysqlQuery = mysql.format( query , inserts );

        database.query( mysqlQuery , ( err , data , fields ) => {
            if(!err) {
                console.log( 'query successful' );
                output.success = true;
                output.data = data;
                output.message = "Query was successful";
            } else {
                output.errors = err;
            };

            res.json(output);

        } );

    } );

}