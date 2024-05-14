
This repository contains the code for a Hospital Management System, consisting of both backend and frontend components, developed as part of a technical task.
Please visit the link to access the screen recording: [Screen Recording](https://drive.google.com/file/d/1yBufJ4kJ0_orIuEdjtE_DgDQgxrGTRZj/view?usp=sharing)

#### Backend 

##### Functionality:
- **User Authentication:**
  - Implemented user registration endpoint.
  - Implemented user login endpoint.
  - Secure API endpoints with JWT.

- **Patient Management:**
  - Createed an endpoint to add a new Patient.
  - Read endpoint to retrieve all Patients associated with a specific user.

- **Database Integration:**
  - Integrateed  a database (MongoDB).

#### Frontend 


##### Functionality:
- **User Authentication:**
  - Implemented user registration form.
  - Implemented user login form.

- **Patient Management:**
  - Implemented forms for creating Patients.
  - Display Patients associated with specific users.


#### Getting Started

1. Clone the repository.
2. Navigate to the client and run npm start
3. Navigate to the server and run npm run dev

#### Run on local :

1. create .env on server run npm i in terminal and add PORT = 8080 and DB_URI=<db_url>
2. run command npm run dev to start the backend
3. navigate to client and run npm i to install all the dependencies
4. run command npm start to start the client server
5. you can access the client on port 3000 and server on port 8080


For detailed setup instructions and documentation, please refer to the README.md files in the backend and frontend directories.

#### Repository Structure

- **backend:** Contains the backend code.
- **frontend:** Contains the frontend code.


#### Technologies Used

- **Backend:** Node.js, Express.js, MongoDB
- **Frontend:** React.js
- **Database:** MongoDB
