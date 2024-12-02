
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
$sql = "INSERT INTO account (user, pass, email, date, month, year) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

// Check if prepare() succeeded
if ($stmt === false) {
    die("Prepare failed: " . $conn->error);
}

// Bind parameters
// Assuming 'user', 'pass', 'email', 'date', 'month', 'year' are all strings ('s')
$stmt->bind_param("ssssss", $a, $b, $c, $d, $e, $f);

// Set parameters from POST data
$a = $_POST['user'];
$b = $_POST['pass'];
$c = $_POST['email'];
$d = $_POST['date'];
$e = $_POST['month'];
$f = $_POST['year'];

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