<!-- <?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $vehicleType = htmlspecialchars($_POST['vehicleType']);
    $location = htmlspecialchars($_POST['location']);
    $coverageType = htmlspecialchars($_POST['coverageType']);

    // Email details
    $to = 'vvaibhavdhotre@gmail.com'; // Replace with your email address
    $subject = 'New Insurance Quote Request';
    $message = "
        Name: $name\n
        Email: $email\n
        Vehicle Type: $vehicleType\n
        Location: $location\n
        Coverage Type: $coverageType\n
    ";

    // Additional headers
    $headers = "From: no-reply@example.com\r\n"; // Change to a valid sender email address
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you, $name. Your request has been sent successfully.";
    } else {
        echo "An error occurred while sending your request. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?> -->
