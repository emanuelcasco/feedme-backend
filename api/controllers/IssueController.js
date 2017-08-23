/**
 * IssueController
 *
 * @description :: Server-side logic for managing issues
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

/* globals Issue */

module.exports = {
  create (req, res) {
    const report = req.body.report;
    const project = report.project;
    const owner = report.owner;

    report.issues.forEach((issue) => {
      const newIssue = {
        idProject: project.id,
        criticity: issue.criticity,
        priority: issue.priority,
        desc: issue.desc,
        ownerName: owner.name,
        ownerMail: owner.mail
      };

      Issue.create(newIssue).exec(function (err, records) {
        if (err) {
          res.status(500);
        }
        res.status(200);
      });
    });
  }
};

