module.exports = ( webserver , mysql , database ) => {
    webserver.post("/api/single_student_data" , ( req , res ) => {
        const output = {
            success: false,
            data : [],
            errors: [],
            message: ''
        };

        const { id } = req.body;

        let query = `
            SELECT id, student_name, class_name, grade_value
            FROM grades
            WHERE id = ?`;

        let inserts = [id];

        let mysqlQuery = mysql.format( query , inserts );

        database.query( mysqlQuery , ( err , data , fields ) => {
                if(!err) {
                    output.success = true;
                    output.data = data;
                    output.message = "Student successfully queried";
                } else {
                    output.errors = err;
                }

                res.json(output);

            });
    });
}