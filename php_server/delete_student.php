<?php

require_once('../config/mysqlCredentials.php');
$output = [
    'success' => false,
    'data' => [],
    'errors' => [],
    'message' => ''
];

$id = $_GET['id'];

$query = "DELETE FROM `grades` WHERE `id` = ?";

$params = [$id];

$statement = $connection->prepare($query);
$statement->bind_param('i', ...$params);
$result = $statement->execute();

if( $result > 0 ) {
    $output['success'] = true;
    $output['message'] = "Student with id of $id deleted";
} else {
    $output['errors'][] = "Could not delete student";
};

mysqli_close($connection);

$json_output = json_encode($output);

print $json_output;

?>