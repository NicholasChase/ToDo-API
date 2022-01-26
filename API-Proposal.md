# API Framework Proposal

## Project Description
The purpose of this project is to find and develop an API for a ToDo app. The app must be able to create a ToDo, fetch all ToDo's, fetch a single ToDo, update a ToDo, and delete a ToDo.

### Criteria For Choosing a API Framework
* Must return JSON
* Must be conform to REST 
* Must be supported by the developers
* Must have adaquate documentation
* Must be a good fit for the project

### API Frameworks Considered
* ExpressJS
* Hapi
* Sails.js

---

### About ExpressJS
ExpressJS is a back end web application framework for Node.js used by many popular companies. ExpressJS provides a robust set of features for web and mobile applications. ExpressJS is the underlying library for a number of other popular Node web frameworks (hapi, sails.js, Kraken, etc.).

### Pros Using ExpressJS
* Effective Error Handling
* Easy Instalation
* Good for Single-Page apps
* High test coverage
* Robust routing
* Scalability 
* middleware functionalities built in to handle and support error handling in both synchronous amd asynchronous codes
* Minimalistic Web Framework
    * Full control of the requests to the server and how to respond

### Cons Using ExpressJS
* Lack of constraints could lead to vulnerabilities
* Middleware functions are hard to learn

### Companies That Use ExpressJS
* Twitter
* Uber
* IMDB

### ExpressJS Speed Test
In a benchmark speed test that tested a Hello World example, ExpressJS processed `12,268` requests per second.

### ExpressJS Hello World Example (Proof of Concept)
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

### Documentation/Resources For ExpressJS
* https://expressjs.com/
* https://www.tutorialspoint.com/expressjs/index.htm
* https://www.tutorialspoint.com/expressjs/expressjs_restful_apis.htm

---

### About Hapi
Hapi is a Node.js framework used for building applications and services. Hapi was developed by Walmart Labs as a rebutal to ExpressJS to fix the shortcomings of ExpressJS. Hapi provides a robust plugin systen that allows additional features and bug fixes. One such plugin is called rest-hapi. Rest-hapi uses mongoose schemas to generat CRUD (Create, Read, Update, Delete) and REST API endpoints on a hapi Server. 

### Pros Using Hapi
* Modularizations
  * Modularization is the process of subdividing a program into sub programs
* Robust pluggins
* Secured
* Integrated Authorizations
* Cuts down Coupling
* Doesn't require a specific architecture though the most popular use is MVC (Model-View-Controller)
* Great Documentations
* Support by the devs

### Cons of Hapi
* Endpoints are manually created
* Endpoints are tested manually 

### Companies That Use Hapi
* Walmart
* Macy's 
* Beats Music
* Vrbo

### Hapi Speed Test
In a benchmark speed test that tested a Hello World example, Hapi processed `27,853` requests per second.

### Hapi Hello World Example (Proof of Concept)


### Documentation/Resources For Hapi
* https://hapi.dev/
* https://futurestud.io/tutorials/hapi-how-to-reply-a-request-with-json
* https://resthapi.com/
* https://resthapi.com/docs/swagger-documentation.html
* http://github.com/hapijs/hapi

---

### About Sails.js
Sails.js is a popular MVC framework for Node.js. Sails.js has support for the requirements of modern apps, data-driven APIs with a scalable, service-oriented architecture.

### Pros of Sails.js
* Works with any database
* Auto-generates REST Apis
* Front-end agnostic
    * Sails.js is compatible with any front-end: Angular, React, iOS, Android, Windows Phone, custom hardware
* Can handle hundreds of thousands of users simultaneously
* MVC archetecture
* Well documented  
* Easy to Deploy

### Cons of Sails.js
* Is a slow framework
* Asset management can get messy
* Some say there is a steep learning curve
* Not very active community

### Companies That Use Sails.js
* Verizon
* Postman
* Leidos
* Philips

### Sails.js Hello World Example (Prood of Concept)


### Documentation/Resources For Sails.js
* https://sailsjs.com/
* https://medium.com/@josephdlawson21/intro-to-sails-js-99a2016bf37d

---

##### Sources

* Express vs. Hapi: The Battle For Being Best Node.js Framework: https://www.simform.com/blog/express-vs-hapi/#section1
* Node.js framework comparison: Hapi.js and Sails.js: https://medium.com/hackernoon/node-js-framework-comparison-hapi-js-and-sails-js-e31f05cc1da
* Express vs. Hapi: A Head-to-Head Comparison: https://scoutapm.com/blog/express-vs-hapi
* Hello World Benchmark Tests: https://www.fastify.io/benchmarks/
* Frameworks built on Express: https://expressjs.com/en/resources/frameworks.html
* Which is the Optimal Node.js Framework: Express.js, Koa.js or Sails.js: https://www.mindinventory.com/blog/express-js-vs-koa-js-vs-sails-js/