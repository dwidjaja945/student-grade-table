<?php

require_once('../config/mysqlCredentials.php');

$output = [
    "success" => false,
    "data" => [],
    "errors" => [],
    "message" => ""
];

$id = $_POST["id"];

$query = "SELECT id, student_name, class_name, grade_value
            FROM grades
            WHERE id = ?";

$params = [$id];

$statement = $connection->prepare($query);
$statement->bind_param("i" , ...$params);
$statement->execute();
$result = $statement->get_result();

if( mysqli_num_rows($result) > 0 ) {
    $output['success'] = true;
    while( $row = mysqli_fetch_assoc($result) ){
        foreach($row as $key => $item) {
            $row[$key] = stripslashes($item);
        };
        
        $output['data'][] = $row;
    }
} else {
    $output['errors'][] = "error with query - Could not pull single student data";
};

mysqli_close($connection);

$json_output = json_encode($output);

print $json_output;


?>