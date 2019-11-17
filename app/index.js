'use strict';

const Generator = require('yeoman-generator');
const path = require('path');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('appname', { type: String, required: false });
    this.option('yarn', {
      description: 'Use Yarn as the package manager',
    });
    this.option('docker', {
      description: 'Install Docker artifacts including a Dockerfile',
    });

    this.useYarn = this.options.yarn;
    this.docker = this.options.docker;
    this.name = this.options.appname || 'myapp';
    this.description = 'My cool app';
    this.version = '1.0.0';
    this.apiRoot = '/api/v1';
    this.specification = 'openapi_3';
  }

  initializing() {}

  async prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'description',
        message: `App description [${this.description}]`,
      },
      {
        type: 'input',
        name: 'apiRoot',
        message: `API Root [${this.apiRoot}]`,
      },
      {
        type: 'input',
        name: 'apiVersion',
        message: `Version [${this.version}]`,
      },
      {
        type: 'list',
        name: 'specification',
        message: `OpenAPI spec version`,
        choices: [
          { name: 'OpenApi 3', value: 'openapi_3' },
          { name: 'Swagger 2', value: 'swagger_2' },
        ],
        default: 'openapi_3',
      },
      {
        type: 'list',
        name: 'linter',
        message: `Linter`,
        choices: [
          { name: 'Prettier', value: 'prettier' },
          { name: 'Airbnb', value: 'airbnb' },
        ],
        default: 'prettier',
      },
    ];

    if (!this.options.appname) {
      prompts.unshift({
        type: 'input',
        name: 'name',
        message: `App name [${this.name}]`,
      });
    }

    return await this.prompt(prompts).then(r => {
      this.name = r.name ? r.name : this.name;
      this.description = r.description ? r.description : this.description;
      this.version = r.version ? r.version : this.version;
      this.apiRoot = r.apiRoot ? r.apiRoot.replace(/^\/?/, '/') : this.apiRoot;
      this.linter = r.linter;
      this.specification = r.specification;
    });
  }

  configuring() {}

  default() {}

  get writing() {
    return {
      appStaticFiles() {
        const src = this.sourceRoot() + '/**';
        const dest = this.destinationPath(this.name);

        const files = [
          'package.json',
          'README.md',
          '.env',
          '.eslintrc.json',
          'server/routes.js',
          'test/examples.controller.js',
          'server/common/api.yml',
          'server/common/server.js',
          'server/api/middlewares/error.handler.js',
          'server/api/controllers/examples/controller.js',
          'public/api-explorer/index.html',
          'public/api-explorer/swagger-ui-standalone-preset.js',
          'public/index.html',
          'gitignore',
        ];

        const copyOpts = {
          globOptions: {
            ignore: [],
          },
        };

        if (this.specification === 'openapi_3') {
          copyOpts.globOptions.ignore.push(src + '/server/common/swagger.js');
          copyOpts.globOptions.ignore.push(src + '/server/common/api.v2.yml');
        } else {
          files.push('server/common/api.v2.yml');
          copyOpts.globOptions.ignore.push(src + '/server/common/api.yml');
        }
        if (!this.docker) {
          copyOpts.globOptions.ignore.push(
            src + '/+(Dockerfile|.dockerignore)'
          );
        }

        this.fs.copy(src, dest, copyOpts);
        this.fs.copy(this.templatePath('.*'), dest, copyOpts);

        const opts = {
          name: this.name,
          title: this.name,
          description: this.description,
          version: this.version,
          apiRoot: this.apiRoot,
          linter: this.linter,
          specification: this.specification,
        };

        files.forEach(f => {
          this.fs.copyTpl(
            this.templatePath(f),
            this.destinationPath(`${this.name}/${f}`),
            opts,
            copyOpts
          );
        });

        this.fs.move(
          this.destinationPath(`${this.name}`, 'gitignore'),
          this.destinationPath(`${this.name}`, '.gitignore')
        );
        if (this.specification !== 'openapi_3') {
          this.fs.move(
            this.destinationPath(`${this.name}`, 'server/common/api.v2.yml'),
            this.destinationPath(`${this.name}`, 'server/common/api.yml')
          );
        }
      },
    };
  }

  conflicts() {}

  install() {
    const appDir = path.join(process.cwd(), this.name);
    process.chdir(appDir);
    if (this.useYarn) {
      this.yarnInstall();
    } else {
      this.npmInstall();
    }
  }

  end() {
    if (this.useYarn) {
      this.spawnCommandSync('yarn', ['lint:fix']);
    } else {
      this.spawnCommandSync('npm', ['run', 'lint:fix']);
    }
  }
};
