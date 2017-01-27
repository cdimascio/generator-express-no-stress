import ExamplesService from '../../services/examples.service';
export class Controller {
  all(req, res) {
    ExamplesService
    .all()
    .then(r => res.json(r));
  }

  byId(req, res) {
    if (req.params.id > 1 || req.params.id < 0) {
      res.status(404).end()
    } else {
      ExamplesService
        .byId(req.params.id)
        .then(r => res.json(r));
    }
  }

  create(req, res) {
    ExamplesService
      .create(req.body.name)
      .then(r => res.status(201).location(`/api/v1/examples/${r.id}`).end())
  } 
}
export default new Controller();