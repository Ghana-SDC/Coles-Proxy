# Coles-SystemDesign-Proxy

My System Design Capstone project for HRLA22. This is the proxy server which is meant to hit a NGINX load balancer which will redircect to an instance of my microservice. This microservice uses a PSQL Database which has been optimized for heavy traffic.

My microservice:
https://github.com/Ghana-SDC/CadenQuestionsAnswers

The microservice I chose was designed by another student during our Front End Capstone project phase where we each designed a functional front end component which would render sample data correctly.

### Technologies Used:

- React
- Express
- Node
- Bluebird

### How To Deploy:

- Dockerize this project
- Push to DockerHub
- Pull image from DockerHub onto instance
- Run "docker run -d image_name:tag_name"
- This proxy server should be hosted on your instance at port 3000
