const slashes = require('slashes');

module.exports = ( webserver , mysql , database ) => {

    webserver.post( '/api/add_student' , ( req , res ) => {
        const output = {
            success : false,
            data : [],
            errors: [],
            message: ''
        };
        
        let { class_name, student_name, grade_value } = req.body;

        let query = `
            INSERT INTO grades
            (class_name, student_name, grade_value)
            VALUES (?, ? ,?)`;

        let inserts = [class_name, student_name, grade_value];

        let mysqlQuery = mysql.format( query , inserts );

        database.query( mysqlQuery , ( err , data , fields ) => {
            if(!err) {
                output.success = true;
                output.data = data;
                output.message = "Query successful";
            } else {
                output.errors = err;
                output.message = "Query unsuccessful";
            };

            res.json(output);

        });

    } );

}