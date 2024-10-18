const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Define a rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limit to all requests
app.use(limiter);

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
