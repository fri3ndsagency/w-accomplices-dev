<script src="https://www.google.com/recaptcha/api.js?render=[SITE_KEY]"></script>


// Function to validate form fields
function validateFormFields(formId) {
    const form = document.getElementById(formId);
    const fields = form.querySelectorAll('input[required]');
    let valid = true;

    // Check each required field
    fields.forEach(field => {
        if (!field.value.trim()) {
            valid = false;
            field.style.border = '1px solid red'; // Highlight the empty field
        } else {
            field.style.border = ''; // Reset border if the field is filled
        }
    });

    return valid;
}

// Function to display error message
function displayErrorMessage(message) {

    const errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.textContent = message; // Set the error message text
    if (message)
        errorMessageDiv.style.display = 'block'; // Show the error message
    else
        errorMessageDiv.style.display = 'none';
}

// Function to handle reCAPTCHA and form submission
function handleReCaptchaAndSubmit(formId, action) {
    const btnForm = document.getElementById(formId);
    const siteKey = "[SITE_KEY]";

    grecaptcha.ready(function () {
        grecaptcha.execute(siteKey, { action: action }).then(function (token) {
            // Send token to Netlify function
            const endpoint = "https://accomplices.netlify.app/.netlify/functions/verify-recaptcha";
            //const endpoint = "http://localhost:8888/.netlify/functions/verify-recaptcha";
            fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: token }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message === 'reCAPTCHA verified successfully') {
                        // Clear any previous error message
                        displayErrorMessage(''); // Clear the error message
                        console.log('Form submitted successfully');

                        btnForm.click(); // Submit the form if reCAPTCHA verification is successful
                    } else {
                        // Handle failed reCAPTCHA verification and show an error message
                        displayErrorMessage('reCAPTCHA verification failed: ' + data.message);
                        console.error('reCAPTCHA verification failed: ' + data.message);
                    }
                })
                .catch(error => {
                    // Handle errors such as network issues
                    displayErrorMessage('An error occurred during sent data. Please try again.');
                    console.error('Error:', error);
                });
        });
    });
}

// Event delegation to trigger based on the data-action attribute
document.addEventListener('click', function (event) {
    const target = event.target;

    if (target && target.getAttribute('data-action') === 'recaptcha') {
        event.preventDefault(); // Prevent default submit action

        // Validate form fields before triggering reCAPTCHA
        if (validateFormFields('email-form')) {
            handleReCaptchaAndSubmit('btn-submit', 'submit'); // Trigger reCAPTCHA if validation passes
        } else {
            displayErrorMessage('Please complete all required fields.');
            console.error('Please complete all required fields.');
        }
    }
});
