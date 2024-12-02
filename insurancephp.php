<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $vehicleType = htmlspecialchars($_POST['vehicleType']);
    $location = htmlspecialchars($_POST['location']);
    $coverageType = htmlspecialchars($_POST['coverageType']);

    // Email configuration
    $to = $email; // recipient's email
    $subject = "Insurance Quote Request Received";
    $message = "Hello $name,\n\nThank you for your insurance quote request. Here are the details you provided:\n\n"
        . "Vehicle Type: $vehicleType\n"
        . "Location: $location\n"
        . "Coverage Type: $coverageType\n\n"
        . "We will review your request and get back to you soon.\n\nBest regards,\nInsurance Team";
    $headers = "From: no-reply@yourdomain.com\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your submission! We will get back to you soon.";
    } else {
        echo "Sorry, there was an error sending your email. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
