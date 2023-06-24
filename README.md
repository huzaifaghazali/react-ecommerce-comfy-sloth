# Comfy Sloth
> **A modern e-commerce site built with React, providing users with a seamless shopping experience.**

The React E-Commerce Site is a web application that allows users to create accounts, log in with popular authentication providers, browse a wide range of products, and securely make payments using Stripe.


## Features
* User authentication and authorization with support for Google and GitHub login
* Dynamic product listing and searching capabilities
* Smooth shopping cart functionality with add-to-cart and quantity control
* Secure payment processing using Stripe integration
* Responsive design for optimal viewing across different devices
* Fast and intuitive user interface for an enhanced shopping experience

## Prerequisites
Before running the application, make sure you have the following installed:

* Node.js (version X.X.X)
* Stripe account with API keys
* Auth0 account with client credentials

## Installation
1. Clone the repository: `https://github.com/huzaifaghazali/react-ecommerce-comfy-sloth.git`
2. Navigate to the project directory: `cd react-ecommerce-comfy-sloth`
3. Install the dependencies: `npm install`

## Configuration
1. Create a .env file in the root of the project.
2. Set the following environment variables in the .env file:

For Auth0:
```sh
REACT_APP_AUTH_CLIENT=YOUR_AUTH0_CLIENT_ID
REACT_APP_AUTH_DOMAIN=YOUR_AUTH0_DOMAIN
```

For Stripe:
```sh
REACT_APP_STRIPE_PUBLIC_KEY=YOUR_STRIPE_PUBLIC_KEY
REACT_APP_STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY
```

Replace **YOUR_AUTH0_CLIENT_ID**, **YOUR_AUTH0_DOMAIN**, **YOUR_STRIPE_PUBLIC_KEY**, and **YOUR_STRIPE_SECRET_KEY** with the respective values obtained from your Auth0 and Stripe accounts.

## Usage
To start the development server
```sh
npm start
```
Open your preferred web browser and navigate to http://localhost:3000 to access the application.

## Building for Production
To build the project for production:
```sh
npm run build
```
The optimized and minified build files will be generated in the **'build'** directory

## Deployment
The application can be deployed to any hosting service of your choice. Here's an example of deploying to Netlify:

1. Create an account on Netlify and set up a new site.
2. Configure the build settings:
   - Build command: npm run build 
   - Publish directory: build/
3. Set the environment variables in the Netlify dashboard using the same values mentioned in the configuration section.

## Built With
- React - JavaScript library for building user interfaces
- Stripe - Payment processing platform
- Auth0 - Authentication and authorization platform
- axios - Promise-based HTTP client
- dotenv - Loads environment variables from a .env file
- styled-components - CSS-in-JS library

# Contributing
Contributions are welcome! If you have any ideas or suggestions, please open an issue or submit a pull request.

# Pictures

   ![1](https://github.com/huzaifaghazali/react-ecommerce-comfy-sloth/assets/63412385/691bdbf2-b831-4049-96d3-592c7ee23aec)

   ![2](https://github.com/huzaifaghazali/react-ecommerce-comfy-sloth/assets/63412385/997e4d7e-c74b-4bd0-9e9a-dc4560f0220d)

   ![3](https://github.com/huzaifaghazali/react-ecommerce-comfy-sloth/assets/63412385/d224421a-60e6-44c4-bee4-fa6202a59b6a)

   ![4](https://github.com/huzaifaghazali/react-ecommerce-comfy-sloth/assets/63412385/2583d2a0-3aae-4151-be79-def86c10de47)

   ![5](https://github.com/huzaifaghazali/react-ecommerce-comfy-sloth/assets/63412385/1f7fb93e-4ba3-4bbe-a32e-ddcc87a2ab6e)

   ![6](https://github.com/huzaifaghazali/react-ecommerce-comfy-sloth/assets/63412385/acddb9ef-e2a7-4656-8c9d-c1d0dde9ed8e)

   ![7](https://github.com/huzaifaghazali/react-ecommerce-comfy-sloth/assets/63412385/e45fa1f9-2c57-4d6a-94d9-21db453854f8)
