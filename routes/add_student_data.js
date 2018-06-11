const slashes = require('slashes');

module.exports = ( webserver , mysql , database ) => {

    webserver.post( '/api/add_student' , ( req , res ) => {
        
        let { student_name , student_course , student_grade } = req.body;

        let query = `
            INSERT INTO 
        `;


    } );

}