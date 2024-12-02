const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/process-payment', (req, res) => {
    // Simulate payment processing
    // In a real application, this would communicate with a payment gateway

    // Assuming payment is successful 80% of the time
    const success = Math.random() < 0.8;

    if (success) {
        res.status(200).json({ success: true });
    } else {
        res.status(500).json({ success: false, error: 'Payment failed' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
