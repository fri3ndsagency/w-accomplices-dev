const axios = require('axios');
require('dotenv').config();

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const SCORE = process.env.SCORE;

exports.handler = async function (event, context) {

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins (change '*' to specific origin if necessary)
        'Access-Control-Allow-Headers': 'Content-Type', // Allow specific headers
        'Access-Control-Allow-Methods': 'POST, OPTIONS', // Allowed methods
      },
      body: JSON.stringify({ message: 'CORS preflight request' }),
    };
  }

  const clientIp = event.headers['x-nf-client-connection-ip'];
  console.log("clientIp", clientIp)
  console.log("event.body", event.body)

  const { token } = JSON.parse(event.body);

  if (!token) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins
      },
      body: JSON.stringify({ error: 'reCAPTCHA token missing', ip: clientIp }),
    };
  }

  try {
    // Send request to reCAPTCHA verification API
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`
    );

    const data = response.data;
    console.log("response", data)


    if (data.success && data.score >= SCORE) {
      // reCAPTCHA verified successfully
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*', // Allow all origins
        },
        body: JSON.stringify({ message: 'reCAPTCHA verified successfully', ip: clientIp }),
      };
    } else {
      // reCAPTCHA failed or score too low
      return {
        statusCode: 403,
        headers: {
          'Access-Control-Allow-Origin': '*', // Allow all origins
        },
        body: JSON.stringify({ message: 'Failed reCAPTCHA verification', score: data.score, ip: clientIp }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins
      },
      body: JSON.stringify({ error: 'Error verifying reCAPTCHA', details: error.message, ip: clientIp }),
    };
  }
};
