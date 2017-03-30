let id = 0;
const examples = [
    { id: id++, name: 'example 0' }, 
    { id: id++, name: 'example 1' }
];

export class ExamplesService {
  all() {
    return Promise.resolve(examples);
  }

  byId(id) {
    return this.all().then(r => r[id])
  }

  create(name) {
    examples.push({
      id: id++,
      name
    })
    return Promise.resolve({id});
  }
}

export default new ExamplesService();