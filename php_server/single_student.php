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
$result = $statement->execute();

if( $result > 0 ) {
    $output['success'] = true;
    $output['data'] = $result;
} else {
    $output['errors'][] = "error with query - Could not pull single student data";
};

mysqli_close($connection);

$json_output = json_encode($output);

print $json_output;


?>