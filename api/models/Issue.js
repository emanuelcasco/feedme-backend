/**
 * Issue.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  conection: 'sails-postgresql',
  attributes: {
    idProject: {
      type: 'integer',
      required: true
    },
    type: {
      type: 'integer',
      required: true
    },
    criticity: {
      type: 'integer',
      required: true
    },
    priority: {
      type: 'integer',
      required: true
    },
    desc: {
      type: 'string',
      required: true
    },
    ownerName: {
      type: 'string',
      required: true
    },
    ownerMail: {
      type: 'string',
      required: true
    }
  }
};

