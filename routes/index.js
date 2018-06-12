const fs = require("fs");

module.exports = ( webserver, mysql, database )=>{
    fs.readdir(__dirname, ( err , files ) => {
        if(!err) {
            files.forEach(file => {
                require(`./${file}`)(webserver, mysql, database);
            });
        }else{
            console.log( "There was an error adding all routes in the index.js file" , err );
        }
    })
};