module.exports = ( webserver , mysql , database ) => {

    webserver.post( '/api/update_student' , ( req , res ) => {
        const output = {
            success: false,
            data: [],
            errors: [],
            student_id: '',
            message: ''
        };

        let { student_name, grade_value, class_name, id } = req.body;

        let query = `
            UPDATE grades
            SET 
                student_name = ?,
                grade_value = ?,
                class_name = ?
            WHERE id = ?`;

        let inserts = [student_name, grade_value, class_name, id];

        let mysqlQuery = mysql.format( query , inserts );

        database.query( mysqlQuery , ( err, data, fields ) => {
            if(!err) {
                output.success = true;
                output.data = data;
                output.message = "Student successfully updated";
            } else {
                output.errors = err;
            };

            res.json(output);

        });
    })
}