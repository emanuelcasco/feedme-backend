/**
 * ProyectController
 *
 * @description :: Server-side logic for managing proyects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

/* globals Project */

module.exports = {
  find (req, res) {
    const hash = req.params.hash;
    Project.find({ hash: `${hash}` }).exec(function (err, results) {
      if (results) {
        if (results === []) {
          res.status(200).json({ msg: 'Not found' });
        } else {
          const project = results[0];
          res.status(200).json(project);
        }
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    });
  }
};

