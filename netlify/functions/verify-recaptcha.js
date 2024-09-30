const axios = require('axios');

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

exports.handler = async function(event, context) {
  // Parse the POST request body (assuming the token comes in the request body)
  const { token } = JSON.parse(event.body);

  if (!token) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'reCAPTCHA token missing' }),
    };
  }

  try {
    // Send request to reCAPTCHA verification API
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`
    );

    const data = response.data;

    if (data.success && data.score >= 0.5) {
      // reCAPTCHA verified successfully
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'reCAPTCHA verified successfully' }),
      };
    } else {
      // reCAPTCHA failed or score too low
      return {
        statusCode: 403,
        body: JSON.stringify({ message: 'Failed reCAPTCHA verification', score: data.score }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error verifying reCAPTCHA', details: error.message }),
    };
  }
};
