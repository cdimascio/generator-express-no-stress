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
}
export default new Controller();