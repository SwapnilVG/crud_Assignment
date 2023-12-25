# User Management Backend

This is a simple user management backend system built with Express.js and MongoDB. It provides RESTful APIs for user registration and login, and utilizes MongoDB as the database for storing user information.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- Express
- npm (Node Package Manager)
- MongoDB
- Mongoosh
- cors
- Dotenv

## Installation

1. Clone the repository:
   
   ```bash
   git clone https://github.com/SwapnilVG/crud_Assignment.git

2. Change into the project directory:
   
   ```bash
   cd crud_Assignment

3. Install dependencies:

   ```bash
   npm install
   
4. Start the server:
   ```bash
   npm start

The server will be running on http://localhost:3000 by default.


## API Endpoints
### Register User   

Method: POST

Endpoint: /registerUser


- #### Payload:
   ```bash
   {
      "name": "User_Name",
      "email": "UsermailId@gmail.com",
       "password": "User_password"
   }


- #### Response:
   ```bash
   {
       "msg": "User registered successfully"
   }



### Login User   

Method: POST

Endpoint: /loginUser 


- #### Payload:
   ```bash
   {
      "email": "UsermailId@gmail.com",
       "password": "User_password"
   }


- #### Response:
   ```bash
   {
       "msg": "User login successfully"
   }


## Using Thunder Client for API Requests
To test the API endpoints, you can use Thunder Client, a REST client extension for Visual Studio Code.

1. Install Thunder Client from the Visual Studio Code marketplace.

2. Open Thunder Client.

3. Create a new request and set the method, URL, and payload as mentioned in the API documentation.



## Folder Structure
- /config : Database Connection
- /controllers: Contains the controllers handling user-related operations.
- /models: Defines the MongoDB data model for the User.
- /routes: Defines the Express.js routes for handling API endpoints.
- /middlewares: Contains validation middleware for request payload validation.


## Dependencies
- Express.js: Web application framework for Node.js.
- Mongoose: MongoDB object modeling for Node.js.
- Cors : important when your frontend (client-side code) is hosted on a different 
         domain than your backend (Express.js server)
- Dotenv :keeping sensitive information (like API keys or database credentials) separate from your code and configuration.