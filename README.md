# ray-advertising-crud-test

## Project description

-This is a very basic CRUD application that provides routes for a single resource, product. No database is required as all the data gets stored and retrieved from a json file within the project's db directory. A basic input validation is used in middleware instead of any third party libraries. A postman collection file has been provided with the project for API testing.

## Required for the project :

- Node

## To run the project using npm type:

- "npm install"
- "npm run dev" for developemt server
- "npm start" for build version

## Folder structure

```
project
|     db
|     |   data.json
|     src
|     |
|     |___
|     |   constant
|     |   |   messages.js
|     |   controllers
|     |   |   product.controller.js
|     |   helper
|     |   |   idGenerator.js
|     |   middlewares
|     |   |   validation.middleware.js
|     |   |   index.js
|     |   routes
|     |   |   product.routes.js
|     |   |   routes.js
|     |   service
|     |   |   product.service.js
|     |   app.js
|     |   index.js
|     crud test.postman_collection.json
|     package.json
|     package-lock.json
|     README.md
```

## Project feature

- User can do the following:

Create:

- In order to create a product user need to input two information, "title" and "description". Both fields are mandatory.

Single View and Delete:

- To view or delete a data entry, user must have to pass a valid product id with the route parameter.

Update:

- To update an entry user must have to send a valid product id with the route parameter. Also in the request body user have to send the values of both "title" and "description" field. If the user choose to update just one field, the other field have to be present with the request containing the previous value.
