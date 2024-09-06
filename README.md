
# Dynamic User Availability application.

## Overview

The Dynamic User Availability Application allows users to set and manage their availability for specific days or the entire week. The application features a user-friendly interface for users to define their availability, an admin dashboard to view and schedule sessions based on user availability, and various functionalities for session management.


## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Application Architecture](#application-architecture)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Usage](#usage)


## Features

- **User Interface**:
  - Users can set their availability for specific days or the entire week.
  - The interface provides a calendar view and a form to input availability details.

- **Admin Dashboard**:
  - Admins can view all users and their availability.
  - Admins can schedule sessions based on user availability.

- **Session Management**:
  - Users can add or delete their availability.
  - The system supports adding and viewing sessions.

## Tech Stack

- **Frontend**:
  - React.js
  - Vite
  

- **Backend**:
  - Express.js
  - Node.js
  - MongoDB

### Prerequisites

- Node.js (v14 or later)
- MongoDB instance (local or cloud)
- npm

## Application Architecture

### Backend Architecture
1. **Used MVC architecture for the backend to keep the project directory clean and developer friendly.**
2. **The whole application is divided into Models, Controllers and Routes for easability**
3. **Entry point of application is index.js which connects to our MongoDB database and all the middlewares are defined there.**
4. **Controllers** - Controller files contains all the controller functions which interacts with our database to carry out some functionality like adding users, fetching users, etc.
5. **Routes** - Routes contains all the routes which interact with our controller functions when specific route is matched against our backend server application.
6. **Models** - Model contains all the database models which represents the schema of database.
7. **.env** - The .env file contains the environment variables which are used in our project configuration and that doesn't need to share publicily.
8. **db** - The db folder in our project directory contains the database connection logic only.

### Frontend Architecture
1. **The frontend of the application is composed of Pages, reusable components, CSS files and configuration to connect to our backend**
2. **Pages** - The pages in our project directory represents the pages of the application. There are two pages in our project directory HomePage and Adminpage respectively.
3. **Components** - The components in our project directory represent the reusable piece of UI and Navbar logic.
4. **App.jsx** - The entry point of our application.


## API Endpoints
 
- /api/userAuth/ -                End point to get list of all the users of application.
- /api/userAuth/login -           End point to login to our application.
- /api/userAvailability/ -        End point for the user to book slot.
- /api/userAvailability/:userId - End point to get the availability for the specific user.
- /api/userAvailability/:id -     End point to delete specific availability of the user.
- /api/userSession/ -             End point to add selected user for the session.
- /api/userSession/:userId -      End point to get the sesssions of a particular user.

## Installation

To set the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhijeet-maity/Dynamic_User_Availability_application.git
   cd Dynamic_User_Availability_application

2. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install

3. **Install backend dependencies:**
   ```bash
   cd ..
   cd backend
   npm install

4. **Set up environment variables:**
   ```env
    PORT=3000
    MONGO_URI= your-mongodb-uri

## Usage

To run the application locally follow these steps:

1. **Start the backend server:**
   ```bash
   cd backend
   npm run dev

2. **Start the frontend server:**
   ```bash
   cd frontend
   npm run dev

3. Open your browser and navigate to http://localhost:3001 to view the backend.
4. Open another tab in the browser and navigate to http://localhost:5173 to view the frontend.