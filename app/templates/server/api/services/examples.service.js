export class ExamplesService {
  all() {
    return Promise.resolve([
      { id: 0, name: 'example 0' }, 
      { id: 1, name: 'example 1' }
    ]);
  }

  byId(id) {
    return this.all().then(r =>r[id]);
  }
}

export default new ExamplesService();