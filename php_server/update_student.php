<?php

require_once('../config/mysqlCredentials.php');

$output = [
    'success' => false,
    'data' => [],
    'errors' => [],
    'message' => ''
];

$id = $_POST['id'];
$student_name = $_POST['student_name'];
$grade_value = $_POST['grade_value'];
$class_name = $_POST['class_name'];

$query = "
    UPDATE grades
    SET 
        student_name = ?,
        grade_value = ?,
        class_name = ?
    WHERE id = ?";

$params = [ $student_name , $grade_value , $class_name , $id ];

$statement = $connection->prepare($query);
$statement->bind_param('sdsi' , ...$params);

$result = $statement->execute();

if( $result > 0 ) {
    $output['success'] = true;
    $output['message'] = "Student with id $id updated";
} else {
    $output['errors'][] = "Student was unable to be updated";
};

mysqli_close($connection);

$json_output = json_encode($output);

print $json_output;

?>