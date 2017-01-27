'use strict';

var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  initializing() {
    console.log('initializing')
  }

  prompting() {
    console.log('prompting');
  }

  configuring() {
    console.log('configuring');
  }

  default() {
    console.log('default')
  }

  get writing() {
    return {
      appStaticFiles() {
        const src = this.sourceRoot()
        const dest = this.destinationRoot()
        const files = [
          'package.json',
          'README.md',
          'server/routes.js',
          'server/common/swagger/Api.yaml',
          'public/api/index.html',
          'public/index.html',
        ]

        this.fs.copy(src, dest)

        const opts = {
            name: 'myapp',
            title: 'My App',
            description: 'My App is cool!',
            version: '1.0.0',
            apiRoot: '/api/v1'
        }
        
        this.fs.copy(
          this.templatePath('.*'),
          this.destinationRoot()
        );

        files.forEach(f => {
          this.fs.copyTpl(
            this.templatePath(f),
            this.destinationPath(f), opts);
        });
      }
    }
  }

  conflicts() {
    console.log('conflicts')
  }

  install() {
    console.log('install')
    this.npmInstall();
  }

  end() {
    console.log('end')
  }

  custom() {
    console.log('my custom')
  }
}