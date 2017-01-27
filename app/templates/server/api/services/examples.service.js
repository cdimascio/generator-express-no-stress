import Logger from 'bunyan-node-logger';

let id = 0;
const examples = [
    { id: id++, name: 'example 0' }, 
    { id: id++, name: 'example 1' }
];

export class ExamplesService {
  constructor() {
    this._l = new Logger(this.constructor.name);
  }

  all() {
    this._l.info('all()', 'fetch all examples');
    return Promise.resolve(examples);
  }

  byId(id) {
    this._l.info(`byId(${id})`, `fetch example with id ${id}`);
    return this.all().then(r =>r[id]);
  }

  create(name) {
    this._l.info(`create(${name})`, 'create new example');
    examples.push({
      id: id++,
      name
    })
    return Promise.resolve({id});
  }
}

export default new ExamplesService();