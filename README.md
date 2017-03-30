# generator-express-no-stress

Create awesome [Express.js](www.expressjs.com) applications with best of breed tech including ES.next via [Babel.js](https://babeljs.io/), structured logging with [Bunyan](https://github.com/trentm/node-bunyan), API validation and interactive documentation via [Swagger](http://swagger.io/), environment based config with [dotenv](https://github.com/motdotla/dotenv), and [Backpack](https://github.com/palmerhq/backpack) powered builds. 

generator-express-no-stress gets you up and running in seconds. It's ridiculously easy to configure. Heck, just take the defaults. Start it. Write code.

This generator scaffolds a fully functioning REST API server complete with interactive documentation, API validation, structured logging, environment driven config, and more. Simply run the generator and smile :-D


## Install

`npm install -g yo generator-express-no-stress`

## Scaffold

`yo express-no-stress myapp`

## Run
#### Run in *development* mode:

```
cd myapp
npm run dev
```

#### Run in *production* mode:

```
npm compile
npm start
```

#### Deploy to the Cloud
e.g. CloudFoundry

```
cf push myapp
```
# Try it!

- Interactive API doc at [http://localhost:3000/api](http://localhost:3000/api)
- Static resources at [http://localhost:3000/api](http://localhost:3000/api)

## Use Yarn

```
# scaffold
yo express-no-stress myapp --yarn 

# start
cd myapp
npm start
```


## What you get!

- [Express.js](www.expressjs.com) - Fast, unopinionated
, minimalist web framework for Node.js
- [Babel.js](https://babeljs.io/) - Use new syntax, right now without waiting for support
- [Bunyan](https://github.com/trentm/node-bunyan) - a simple and fast JSON logging module for node.js services
- [dotenv](https://github.com/motdotla/dotenv) - Loads environment variables from .env for nodejs projects
- [Backpack](https://github.com/palmerhq/backpack) -  a minimalistic build system for Node.js projects.
- [Swagger](http://swagger.io/) - is a simple yet powerful representation of your RESTful API.
- [SwaggerUI](http://swagger.io/) - dynamically generate beautiful documentation and sandbox from a Swagger-compliant API


### API Validation

Simply describe your APIs with Swagger and automagically get for free:
- Interactive documentation
- API validation

#### Interactive API Doc
![](https://github.com/cdimascio/generator-express-no-stress/raw/master/assets/interactive-doc1.png)


#### API Validation!
Oops! I the API caller forgot to pass a `name` field, no stress, we've got this!

![](https://github.com/cdimascio/generator-express-no-stress/raw/master/assets/api-validation.png)


### Structured Logging

Structured logging out of the box! 

#### raw

![](https://github.com/cdimascio/generator-express-no-stress/raw/master/assets/logging-raw.png)

#### pretty

Structured logging pretty printed by default - great for dev!

![](https://github.com/cdimascio/generator-express-no-stress/raw/master/assets/logging-pretty.png)

### API Validation Example

Simply describe your APIs with Swagger and automatically get:
- API request validation
- Interactive documentation

### example

#### Swagger API spec

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

#### Invoke a POST request via the Interactive doc

![](https://github.com/cdimascio/generator-express-no-stress/raw/master/assets/interactive-doc.png)



## License

MIT