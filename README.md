# 🚂 generator-express-no-stress

![](https://img.shields.io/badge/status-stable-green.svg) ![](https://img.shields.io/npm/v/generator-express-no-stress.svg) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/56c006ccc44c47f49d12b6b35fcf35da)](https://www.codacy.com/app/cdimascio/generator-express-no-stress?utm_source=github.com&utm_medium=referral&utm_content=cdimascio/generator-express-no-stress&utm_campaign=Badge_Grade) [![](https://img.shields.io/gitter/room/cdimascio-oss/community?color=%23eb205a)](https://gitter.im/cdimascio-oss/community) [![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-) ![](https://img.shields.io/badge/license-MIT-blue.svg)

Create awesome [Express.js](http://www.expressjs.com) applications with best of breed tech including ES.next via [Babel.js](https://babeljs.io/), structured logging with [Pino](https://github.com/pinojs/pino), API validation and interactive documentation using an [OpenAPI 3](https://swagger.io/specification/) or [Swagger 2](https://swagger.io/specification/v2/) spec, environment based config with [dotenv](https://github.com/motdotla/dotenv), and linting with [ESLint](http://eslint.org/).

[![GitHub stars](https://img.shields.io/github/stars/cdimascio/generator-express-no-stress.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/cdimascio/generator-express-no-stress/stargazers/) [![Twitter URL](https://img.shields.io/twitter/url/https/github.com/cdimascio/generator-express-no-stress.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20express-no-stress%20by%20%40CarmineDiMascio%20https%3A%2F%2Fgithub.com%2Fcdimascio%2Fgenerator-express-no-stress%20%F0%9F%91%8D)

<p align="center">
<img src="https://raw.githubusercontent.com/cdimascio/generator-express-no-stress/master/assets/express-no-stress-logo-v.png">
</p>

generator-express-no-stress gets you up and running in seconds. It's ridiculously easy to configure. Heck, just take the defaults. Start it. Write code.

This generator scaffolds a fully functioning REST API server, complete with interactive documentation, API request and response validation, structured logging, environment driven config, and more. Simply run the generator and smile :-D

[Here's what you get!](#what-you-get)

## Install

_Requires Node 8 or greater_

```shell
npm install -g yo generator-express-no-stress
```

- See [here](#usage-cli) for use with Yarn and/or Docker
- See [here](#faqs) for Node 6 support

## Scaffold

```shell
yo express-no-stress myapp
cd myapp
```

## Run

Run in _development mode_:

```shell
npm run dev
```

Package and run in _production mode_

```shell
npm run compile
npm start
```

## Test

```shell
npm test
```

## Debug

Run one of the following, then attach your favorite inspector e.g. [VSCode](#debug-in-vscode):

```shell
# debug the server
npm run dev:debug

# debug the tests
npm run test:debug
```

## Try it!

- Interactive API doc at [http://localhost:3000/api-explorer](http://localhost:3000/api-explorer)
- Landing page at [http://localhost:3000](http://localhost:3000)

---

## Usage: CLI

```shell
yo express-no-stress [appname] [--yarn] [--docker]
```

| Option     | default | Description                                                                |
| ---------- | ------- | -------------------------------------------------------------------------- |
| `appname`  | myapp   | The application folder                                                     |
| `--yarn`   | -       | Use the [`yarn`](https://yarnpkg.com) package manager, instead of `npm`    |
| `--docker` |         | Install [Docker](https://www.docker.com/) artifacts including a Dockerfile |

## Usage: Project

The sections below describe all usage options available once the project is generated/scaffolded.

### npm targets

| Target               | Description                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| `npm run dev`        | Run in _development_ mode                                                |
| `npm run dev:debug`  | Debug in _development_ mode                                              |
| `npm run test`       | Run tests                                                                |
| `npm run test:debug` | Debug tests                                                              |
| `npm run lint`       | View a listing of all errors discovered by the linter                    |
| `npm run lint:fix`   | Fix all errors discovered by the linter                                  |
| `npm run compile`    | Transpile source code for production use                                 |
| `npm start`          | Run the in _production_ mode. \*Requires running `npm run compile` first |

### Debug in VSCode

Add these [contents](https://github.com/cdimascio/generator-express-no-stress/blob/next/assets/.vscode/launch.json) to your `.vscode/launch.json` file

### Debug in WebStorm

1. Start debug in _development_ mode via `npm run dev:debug`
2. From the "Run" menu, select "Debug"
3. Select "Edit Configurations..."
4. From the list of Templates on the left side of the dialog, select "Attach to Node.js/Chrome"
5. Press the "Debug" button to attach the WebStorm debugger


### Deploy to the Cloud

e.g. CloudFoundry

```
cf push myapp
```

### Use Yarn

```
# scaffold
yo express-no-stress myapp --yarn
cd myapp

# run in development mode
yarn run dev

# run in production mode
yarn run compile
yarn start

# test
yarn test
```

---

## What you get!

- [Express.js](http://www.expressjs.com) - Fast, unopinionated
  , minimalist web framework for Node.js
- [Babel.js](https://babeljs.io/) - Use new syntax, right now without waiting for support
- [Pino](https://github.com/pinojs/pino) - Extremely fast node.js logger, inspired by Bunyan. It also includes a shell utility to pretty-print its log files
- [dotenv](https://github.com/motdotla/dotenv) - Loads environment variables from .env for nodejs projects
- [ESLint](http://eslint.org/) - a pluggable linting utility for JavaScript and JSX

  Choose from the following ESLint lint rules:

     - [Airbnb](https://github.com/airbnb/javascript) - A mostly reasonable approach to JavaScript
     - [Prettier](https://github.com/prettier/prettier) - Prettier is an opinionated code formatter

- [Swagger](http://swagger.io/) - is a simple yet powerful representation of your RESTful API
- [SwaggerUI](http://swagger.io/) - dynamically generate beautiful documentation and sandbox from a Swagger-compliant API

### API Validation

Simply describe your APIs with Swagger and automagically get for free:

- Interactive documentation
- API request validation
- API response validation (OpenAPI 3 only. Disabled by default)
  - To enable set `OPENAPI_ENABLE_RESPONSE_VALIDATION=true` in `.env`
  

#### Interactive API Doc

![](https://raw.githubusercontent.com/cdimascio/generator-express-no-stress/master/assets/interactive-doc1.png)

#### API Validation!

Oops! I the API caller forgot to pass a `name` field, no stress, we've got this!

![](https://raw.githubusercontent.com/cdimascio/generator-express-no-stress/master/assets/api-validation.png)

### Structured Logging

Structured logging out of the box!

#### raw

![](https://raw.githubusercontent.com/cdimascio/generator-express-no-stress/master/assets/logging-raw.png)

#### pretty

Structured logging pretty printed by default - great for dev!

![](https://raw.githubusercontent.com/cdimascio/generator-express-no-stress/master/assets/logging-pretty.png)

### API Validation Example

Simply describe your APIs with Swagger and automatically get:

- API request validation
- Interactive documentation

### example

#### Swagger API spec

```yaml
swagger: '2.0'
info:
  version: 1.0.0
  title: myapp
  description: My cool app
basePath: /api/v1
tags:
  - name: Examples
    description: Simple example endpoints
  - name: Specification
    description: The swagger API specification

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
        example: no_stress

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
        - name: example
          in: body
          description: an example
          required: true
          schema:
            $ref: '#/definitions/ExampleBody'
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
          description: The id of the example to retrieve
          type: integer
      responses:
        200:
          description: Return the example with the specified id
        404:
          description: Example not found

  /spec:
    get:
      tags:
        - Specification
      responses:
        200:
          description: Return the API specification
```

#### Invoke a POST request via the Interactive doc

![](https://raw.githubusercontent.com/cdimascio/generator-express-no-stress/master/assets/interactive-doc.png)

### Linting

express-no-stress uses [ESLint](http://eslint.org/) and provides two choices, Airbnb or Prettier.

To add your own ESLint customizations, edit`.eslintrc.json`.

Note that the Airbnb variant provides a slightly modified Airbnb [base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) configuration.

## FAQ
**Q**: How do I modify the example API and make it my own?

**A**: There are two key files that enable you to customize and describe your API:
1. `server/routes.js` - This references the implementation of all of your routes. Add as many routes as you like and point each route your express handler functions.
2. `server/common/api.yaml` - This file contains your [OpenAPI spec](https://swagger.io/specification/). Describe your API here. It's recommended that you to declare any and all validation logic in this YAML. `express-no-stress-typescript`  uses [express-openapi-validator](https://github.com/cdimascio/express-openapi-validator) to automatically handle all API validation based on what you've defined in the spec.

**Q**: I previously generated an app, but I want to change the API root. How do I do this?

**A**: You need to make to small changes
  1. Modify `server/routes.js`
  ```javascript
     // Change your original path e.g. /api/v1/examples, to:
     app.use('/api/v2/examples', examplesRouter);
   ```

  2. Modify `server/common/api.yaml` and update the api root:
  ```yaml
    # Change e.g. /api/v1 to /api/v2
    servers:
    - url: /api/v2   
  ```

## License

[MIT](LICENSE)


<a href="https://www.buymeacoffee.com/m97tA5c" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/yellow_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/leosuncin"><img src="https://avatars1.githubusercontent.com/u/4307697?v=4" width="100px;" alt=""/><br /><sub><b>Jaime Leonardo Suncin Cruz</b></sub></a><br /><a href="https://github.com/cdimascio/generator-express-no-stress/commits?author=leosuncin" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/amygdaloideum"><img src="https://avatars2.githubusercontent.com/u/18416252?v=4" width="100px;" alt=""/><br /><sub><b>Daniel Bornstrand</b></sub></a><br /><a href="https://github.com/cdimascio/generator-express-no-stress/commits?author=amygdaloideum" title="Code">💻</a></td>
    <td align="center"><a href="http://www.about.me/jasoncorns"><img src="https://avatars2.githubusercontent.com/u/3839416?v=4" width="100px;" alt=""/><br /><sub><b>Jason Corns</b></sub></a><br /><a href="https://github.com/cdimascio/generator-express-no-stress/commits?author=JasonAllenCorns" title="Documentation">📖</a></td>
    <td align="center"><a href="http://frankcalise.com"><img src="https://avatars0.githubusercontent.com/u/374022?v=4" width="100px;" alt=""/><br /><sub><b>Frank Calise</b></sub></a><br /><a href="https://github.com/cdimascio/generator-express-no-stress/commits?author=frankcalise" title="Documentation">📖</a></td>
    <td align="center"><a href="https://blog.daskepon.com/"><img src="https://avatars0.githubusercontent.com/u/6374952?v=4" width="100px;" alt=""/><br /><sub><b>Daisuke Tsuji</b></sub></a><br /><a href="https://github.com/cdimascio/generator-express-no-stress/commits?author=daskepon" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/uronly14me"><img src="https://avatars2.githubusercontent.com/u/5186814?v=4" width="100px;" alt=""/><br /><sub><b>Sangbeom Han</b></sub></a><br /><a href="https://github.com/cdimascio/generator-express-no-stress/commits?author=uronly14me" title="Documentation">📖</a></td>
    <td align="center"><a href="http://mkly.io"><img src="https://avatars1.githubusercontent.com/u/965353?v=4" width="100px;" alt=""/><br /><sub><b>Mike Lay</b></sub></a><br /><a href="https://github.com/cdimascio/generator-express-no-stress/commits?author=mkly" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/jodejar214"><img src="https://avatars2.githubusercontent.com/u/9385902?v=4" width="100px;" alt=""/><br /><sub><b>jodejar214</b></sub></a><br /><a href="https://github.com/cdimascio/generator-express-no-stress/commits?author=jodejar214" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
