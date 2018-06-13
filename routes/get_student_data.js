module.exports = ( webserver , mysql , database ) => {

    webserver.get( '/api/get_student_data' , ( req , res ) => {

        const output = {
            success: false,
            data: [],
            errors: []
        };

        let query = `
            SELECT 
            id,
            student_name,
            grade_value,
            class_name
            FROM grades`;

        database.query( query , ( err , data , fields ) => {
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