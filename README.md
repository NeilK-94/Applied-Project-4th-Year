
# Software Developers Job Portal
**Neil Kyne**
This repository contains my final year project along with its accompanying dissertation, a video demonstration of the application as well as a README. The project itself is a a full stack web application with JWT authentication hosted on Heroku. Detailed documentation on the technologies employed in the project can be found in the dissertation along with API and front-end system design rationale. There is also an accompanying screencast provided demonstrating my application in action. Issues encountered during development can be found in the Issues tracker. Lastly, the README provides a brief examination of the project and  repository leaving a more comprehensive study of the application to the dissertation provided.

## Project Overview
This application is a job portal aimed specifically at software developers. Users can:
- Login securely	
- Search all jobs
- Search jobs by:
	- Location
	- Employer
	- Job Title
- Create jobs
- Delete jobs
- Update jobs
- Apply for jobs

## Technologies Used
My project consists of three tiers, each one containing a different technology.
#### Spring Boot
I used Spring Boot to expose my REST API. It also handles JWT creation and exposes JWT resources to the front-end. Notable project dependencies include: 

- spring-boot-starter-data-mongodb
- io.jsonwebtoken.jjwt
- spring-boot-starter-security
- spring-boot-starter-web

#### React
The user interface is designed using React. React is a Javascript library designed specifically for UI development. As such, most React applications will use many other frameworks to help with routing and sending requests etc. I found React to be a very interesting and rewarding library and enjoyed developing with it. Notable project dependencies include: 

- Axios
- React-Router-Dom
- Bootstrap
- Formik
- Jest (Testing)
- React-Testing-Library (Testing)

#### MongoDB
I used MongoDB to host my application data. As this is a deployed project I needed to also deploy my database. To do this I used MongoDB Atlas.

#### Heroku
The back-end API's are deployed on Heroku as one application while the React application is another. They communicate to form one application. I used the Heroku CLI to deploy the application. Issue's with deployment can be found [here]([https://github.com/NeilK-94/Applied-Project-4th-Year/issues?q=is%3Aissue+is%3Aclosed]).

## Development Environment
I developed the API's using the Eclipse IDE. I also bootstrapped my Spring Boot application using [Spring Initializr]([https://start.spring.io/](https://start.spring.io/)).

I used VSCode for front end development and used **npm** for front end project management. I also bootstrapped my React app using *create-react-app*, provided by **npm**.

## How To Run
To use the application, simply visit [https://developer-job-site.herokuapp.com/](https://developer-job-site.herokuapp.com/)

This is the deployed application running on Heroku.

To run the application on you local machine, first clone this repository:
`git clone https://github.com/NeilK-94/Applied-Project-4th-Year.git` 
#### Front-End 
This application was developed using *npm version 6.14*.

From here, ensuring you have **npm** installed `cd` to the *front-end-portal* directory (root) and run `npm start`. This will start up a development server using node.

Now you can visit `localhost:3000` to access the React application.
  
  #### Back-End
  Now in order to start the Spring Boot Tomcat server you can either:
  - Start the server in Eclipse by running the `SpringPortalApplication` class as a Java application.
  - Execute the jar file located in the target folder inside the *spring-portal* directory using: `java -jar spring-portal-0.0.1-snapshot.jar`
The API is now running on `localhost:8080` and will now handles requests from the front-end.

There are two profiles to log in:
 - Username: Neil
 - Password: password   

Or:
 - Username: user
 - Password: gmit2020


## Video Demonstration
Below is a link to my video demonstration of the application. I do not examine any code in this demonstration, just the working application.

https://youtu.be/aZnCnoJZPds
