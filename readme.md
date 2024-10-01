# Netlify Function with reCAPTCHA v3 Integration

This project demonstrates how to integrate **Google reCAPTCHA v3** with a Netlify Function. The purpose is to validate users using reCAPTCHA on the frontend and verify the token on the backend using Netlify Functions.

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Install Netlify CLI](#3-install-netlify-cli)
  - [4. Configure Google reCAPTCHA](#4-configure-google-recaptcha)
  - [5. Set Environment Variables on Netlify](#5-set-environment-variables-on-netlify)
  - [6. Deploy the Project](#6-cdeploy-the-project)
  - [7. Test the Project Locally](#7-testthe-project-locally)
  - [8. Testing the Integration](#8-testing-the-integration)

## Overview

This project uses **Netlify Functions** to handle the backend verification of Google reCAPTCHA v3 tokens. The steps are as follows:
1. The frontend generates a reCAPTCHA token via Google's reCAPTCHA API.
2. The token is sent to a Netlify Function.
3. The function verifies the token by making a request to Google’s reCAPTCHA API.
4. If the token is valid, the function processes the form submission.

## Prerequisites

Before getting started, ensure you have the following:
- A [Netlify](https://www.netlify.com/) account.
- Node.js and npm installed.
- A GitHub account (if deploying via Git).
- Google reCAPTCHA v3 API keys (site and secret keys).

## Setup

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/fri3ndsagency/netlify-lambda-recaptcha-v3.git
cd netlify-lambda-recaptcha-v3
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Netlify CLI
```bash
npm install -g netlify-cli
```
```bash
netlify --version
```

### 4.  Configure Google reCAPTCHA

Before you proceed, configure Google reCAPTCHA v3:
- Go to the Google reCAPTCHA Admin Console and register a new site with reCAPTCHA v3.
- After registration, you will get a site key and secret key.
- The site key will be used on the frontend.
- he secret key will be used in the backend (Netlify function) to verify the token.

### 5.  Set Environment Variables on Netlify

You need to securely store your reCAPTCHA secret key as an environment variable in Netlify.

- Log in to your Netlify dashboard.
- Go to your site's settings.
- Navigate to Site Settings > Build & Deploy > Environment.
- Add the following environment variable:
    Key: RECAPTCHA_SECRET_KEY
    Value: Your Google reCAPTCHA secret key from step 5.


### 6.  Deploy the Project

Once everything is set up, you can deploy the project to Netlify.

#### **A. Deploy Locally with Netlify CLI:**

Run netlify init to link the project to Netlify and choose the correct site:

```bash
netlify init
```
You will be asked to:

- Authenticate with Netlify (if you're not already logged in).
- Choose an existing site or create a new one.


Run the deployment command to deploy the site and functions to production:

```bash
netlify deploy --prod
```

Your site will be deployed, and Netlify will provide you with a URL where you can view your live project.

#### **B. Deploy via Git (Optional):**


You can also link your repository to Netlify for continuous deployment. Every time you push changes to your repository, Netlify will rebuild and redeploy the site automatically.

- In the Netlify dashboard, choose New site from Git.
- Select your Git provider (e.g., GitHub) and authorize Netlify.
- Select the repository (netlify-lambda-recaptcha-v3).
- Choose branch release
- Now, every time you push changes to your branch release, Netlify will automatically deploy the site.



### 7. Test the Project Locally

To test the project locally before deploying, you can use the Netlify CLI to simulate the environment.

Run the following command to serve your site and function locally:

```bash
netlify dev
```

This command will spin up a local development server, allowing you to test the form submission, reCAPTCHA, and Netlify Function in your local environment.

You can access your site at the provided URL (usually http://localhost:8888) and verify that the form and reCAPTCHA functionality work as expected.

### 8. Testing the Integration

Once your project is deployed, follow these steps to test the reCAPTCHA v3 integration:

- Open the deployed site.
- Fill in the form that triggers reCAPTCHA.
- Inspect the network requests and the response from the reCAPTCHA validation function.
- If reCAPTCHA validation is successful, you should see a success message.
- If the validation fails, the server will respond with an error, and the appropriate error message will be displayed.
- You can check the status of the deployed function in the Functions tab of your Netlify site’s dashboard.

**Simulate reCAPTCHA Failure**

* Site Key (for always failing tests): 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI

To test failure scenarios:

- Use an site key failing tests in the frontend request.
- Send an empty token to the backend.
- Lower the score threshold in the function to fail reCAPTCHA validation more easily.
