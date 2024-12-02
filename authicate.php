<?php
session_start();

// Hardcoded credentials for demonstration
$valid_username = "user";
$valid_password = "password";

// Get the username and password from POST
$username = $_POST['username'];
$password = $_POST['password'];

// Check if the username and password are correct
if ($username === $valid_username && $password === $valid_password) {
    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $username;
    header("Location: welcome.php");
} else {
    echo "Invalid username or password.";
}
?>
