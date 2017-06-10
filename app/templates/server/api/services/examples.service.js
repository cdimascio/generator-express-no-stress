import l from '../../common/logger';

let id = 0;
const examples = [
    { id: id++, name: 'example 0' }, 
    { id: id++, name: 'example 1' }
];

export class ExamplesService {
  all() {
    l.info(`${this.constructor.name}.all()`);
    return Promise.resolve(examples);
  }

  byId(id) {
    l.info(`${this.constructor.name}.byId(${id})`);
    return this.all().then(r => r[id])
  }

  create(name) {
    const example = {
      id: id++,
      name
    };
    
    examples.push(example);
    l.info(example, `${this.constructor.name}.create(${name})`);
    
    return Promise.resolve(example);
  }
}

export default new ExamplesService();