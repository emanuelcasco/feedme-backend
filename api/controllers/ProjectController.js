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
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
      }
      if (results) {
        const project = results[0];
        res.status(201).json(project);
      }
    });
  }
};

