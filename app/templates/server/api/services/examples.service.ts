import * as Promise from 'bluebird';

let id = 0;
interface Example {
  id: number,
  name: string
};

const examples: Example[] = [
    { id: id++, name: 'example 0' }, 
    { id: id++, name: 'example 1' }
];

export class ExamplesService {
  all(): Promise<Example[]> {
    return Promise.resolve(examples);
  }

  byId(id: number): Promise<Example> {
    return this.all().then(r => r[id])
  }

  create(name: string): Promise<Example> {
    const example: Example = {
      id: id++,
      name
    };
    examples.push(example)
    return Promise.resolve(example);
  }
}

export default new ExamplesService();