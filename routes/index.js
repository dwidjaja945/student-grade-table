const fs = require("fs");

// module.exports = ( webserver, mysql, database )=>{
//     fs.readdir(__dirname, ( err , files ) => {
//         if(!err) {
//             files.forEach(file => {
//                 require(`./${file}`)(webserver, mysql, database);
//             });
//         }else{
//             console.log( "There was an error adding all routes in the index.js file" , err );
//         }
//     })
// };

module.exports = (webserver, mysql, database) => {
    
    require("./add_student_data")(webserver, mysql, database);
    
    require("./delete_student")(webserver, mysql, database);
    
    require("./get_student_data")(webserver, mysql, database);
    
    require("./single_student")(webserver, mysql, database);
    
    require("./update_student")(webserver, mysql, database);
    
};