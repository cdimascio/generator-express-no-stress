#generator-express-no-stress

Tired of scaffolding REST APIs? Sick of writing validation code for your APIs? No worries, this generator has you covered. It creates a brand new REST API server complete with interactive documentation, API request validation, structured logging, environment driven config, and solid separation of of concerns. Simply run this generator and smile.

Provide a Swagger definition for your API and get...

#### Interactive API Doc
![](https://github.com/cdimascio/generator-express-no-stress/raw/master/assets/api-doc.png)


#### API Validation!

Add a Swagger definition

```
  ExampleBody:
    type: object
    title: example
    required:
      - name
    properties:
      name:
        type: string
        description: The example name
```

and reap the benefits

![](https://github.com/cdimascio/generator-express-no-stress/raw/master/assets/api-validation.png)

other goodies include...

#### Structured Logging

![](https://github.com/cdimascio/generator-express-no-stress/raw/master/assets/logging-raw.png)

#### Structured Logging (Pretty)

![](https://github.com/cdimascio/generator-express-no-stress/raw/master/assets/logging-pretty.png)



## Prequisites

`npm install yeoman-generator`

## Install

`npm install generator-express-no-stress`

## Generate 

`yo express-no-stress`

## Run

`npm start`

## What you get!

- [Express.js](www.expressjs.com) - Fast, unopinionated
, minimalist web framework for Node.js
- [Babel.js](https://babeljs.io/) - Use new syntax, right now without waiting for support
- [Bunyan](https://github.com/trentm/node-bunyan) - a simple and fast JSON logging module for node.js services
- [Swagger](http://swagger.io/) - is a simple yet powerful representation of your RESTful API.
- [SwaggerUI](http://swagger.io/) - dynamically generate beautiful documentation and sandbox from a Swagger-compliant API


Simply describe your APIs with Swagger and automagically get for free:
- API request validation
- Interactive documentation

### example

```json
swagger: "2.0"
info:
  version: "1.0.0"
  title: My App
  description: My App is Cool
basePath: /api/v1
tags:
  - name: Examples
    description: Simple example endpoints

consumes:
  - application/json
produces:
  - application/json

definitions:
  ExampleBody:
    type: object
    title: example
    required:
      - name
    properties:
      name:
        type: string
        description: The example name

paths:
  /examples:
    get:
      tags:
        - Examples
      description: Fetch all examples
      responses:
        200:
          description: Returns all examples
    post:
      tags:
        - Examples
      description: Create a new example
      parameters:
        - name: body
          in: body
          description: number of items to skip
          required: true
          schema: 
            $ref: "#/definitions/ExampleBody"
      responses:
        200:
          description: Returns all examples

  /examples/{id}:
    get:
      tags:
        - Examples
      parameters:
        - name: id
          in: path
          required: true
          description: The id of the entity to retrieve
          type: integer
      responses:
        200:
          description: Return the example with the specified id
        404:
          description: Example not 

```

![](https://github.com/cdimascio/generator-express-no-stress/raw/master/assets/interactive-doc.png)



## License

MIT