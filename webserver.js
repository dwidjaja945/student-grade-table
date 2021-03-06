const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const webserver = express();
const { credentials } = require('./config/mysqlCredentials');
const database = mysql.createConnection( credentials );

webserver.use(bodyParser.urlencoded( {extended: false} ));
webserver.use(bodyParser.json());

database.connect( (error) => {
    if( error ) throw error;
    console.log("database connection successful");
});

webserver.use(express.static( __dirname + "/client" + "/build" ));

// ====================================
// ======= Endpoints start here =======
// ====================================

require('./routes')( webserver , mysql , database );

webserver.get( '/test' , ( req , res ) => {
    res.sendFile("/Users/dylanwidjaja/Desktop/projects/student-grade-table/test.html");
});

// webserver.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });


webserver.listen( 9000 , () => {
    console.log("webserver listening on port 9000");
});

