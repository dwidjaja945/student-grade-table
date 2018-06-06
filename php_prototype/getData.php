<?php

// Pulling in the credentials from .gitignored file
require_once('mysqlCredentials.php');

// Creating output object
$output = [
    'success' => false,
    'data' => [],
    'errors' => []
];

// Creating sql query for database
$query = "SELECT * FROM users";

// The result of the mysql query
$result = mysqli_query($connection , $query);

// if successful query,
if($result){
    // if there is data ( know because there are number of rows of data )
    if(mysqli_num_rows($result) > 0) {
        $output['success'] = true;
        // As long as there is data
        while( $row = mysqli_fetch_assoc($result) ) {
            // push into output data array
            $output['data'][] = $row;
        };
    } else {
        $output['errors'][] = "no data";
    };
} else {
    $output['errors'][] = 'error with query';
};

// encode output to json
$json_output = json_encode($output);

// send to client
echo $json_output;

?>