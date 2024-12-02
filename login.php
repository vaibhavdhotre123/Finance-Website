<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bank"; // Replace with your actual database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind SQL statement with placeholders
$sql = "INSERT INTO signup (name, email, no) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);

// Check if prepare() succeeded
if ($stmt === false) {
    die("Prepare failed: " . $conn->error);
}

// Bind parameters
$stmt->bind_param("sss", $a, $b, $c);

// Set parameters from POST data
$a = $_POST['p1'];
$b = $_POST['p2'];
$c = $_POST['p3'];

// Execute statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close statement and connection
$stmt->close();
$conn->close();
?>




