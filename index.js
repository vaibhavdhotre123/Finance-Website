const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle subscription request
app.post('/subscribe', (req, res) => {
    // Extract necessary details from the request body
    const { subscriptionPlanId, amount, customerName, customerEmail, customerPhone } = req.body;

    // Make a request to PhonePe API (example endpoint)
    const options = {
        url: 'https://api.phonepe.com/v3/subscription/create',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_PHONEPE_ACCESS_TOKEN'
        },
        body: JSON.stringify({
            subscriptionPlanId,
            amount,
            customerName,
            customerEmail,
            customerPhone
        })
    };

    request(options, (error, response, body) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error processing payment');
        } else {
            console.log(body);
            res.status(200).send('Subscription successful');
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
