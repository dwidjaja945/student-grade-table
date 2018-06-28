module.exports = ( webserver , mysql , database ) => {
    webserver.post("/api/single_student_data" , ( req , res ) => {
        const output = {
            success: false,
            data : [],
            errors: [],
            message: ''
        };
        console.log("declaring output" , Date.now());

        const { id } = req.body;

        console.log("setting id " , Date.now());

        let query = `
            SELECT id, student_name, class_name, grade_value
            FROM grades
            WHERE id = ?`;

        console.log("creating query" , Date.now());

        let inserts = [id];

        console.log("setting inserts" , Date.now());

        let mysqlQuery = mysql.format( query , inserts );

        console.log("formatting sql query" , Date.now());

        database.query( mysqlQuery , ( err , data , fields ) => {
            console.log("Query completed" , Date.now());
                if(!err) {
                    console.log("query successful" , Date.now());
                    output.success = true;
                    output.data = data;
                    output.message = "Student successfully queried";
                    console.log("output values set" , Date.now());
                } else {
                    console.log("query unsuccessful");
                    output.errors = err;
                    console.log("output errors" , Date.now());
                }

                console.log("sending output to client" , Date.now());
                res.json(output);

            });
    });
}