<?php

require_once('../config/mysqlCredentials.php');

$output = [
    'success' => false,
    'data' => [],
    'errors' => []
];

$student_name = $_POST['student_name'];
$class_name = $_POST['class_name'];
$grade_value = $_POST['grade_value'];

$query = "
    INSERT INTO grades
    (student_name, class_name, grade_value)
    VALUES (?, ?, ?)";

$params = [$student_name, $class_name, $grade_value];

$statement = $connection->prepare($query);
$statement->bind_param('ssd' , ...$params);
$result = $statement->execute();

// $insert_id = $statement->insert_id;

if($result > 0) {
    $output['success'] = true;
    $output['data'] = $result;
} else {
    $output['errors'][] = "error with query - Could not add student";
}

mysqli_close($connection);

$json_output = json_encode($output);

print $json_output;

?>