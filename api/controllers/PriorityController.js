/**
 * PriorityController
 *
 * @description :: Server-side logic for managing proyects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
/* global Priority */

module.exports = {
  find (req, res) {
    const id = req.params.id;
    Priority.find(id).exec(function (err, results) {
      if (results) {
        if (results === []) {
          res.status(201).json({ msg: 'Not found' });
        } else {
          const priority = results[0];
          res.status(201).json(priority);
        }
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    });
  },
  findAll (req, res) {
    Priority.find().exec(function (err, results) {
      if (results) {
        if (results === []) {
          res.status(201).json({ msg: 'Not found' });
        } else {
          const priorities = results;
          res.status(201).json(priorities);
        }
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    });
  }
};

