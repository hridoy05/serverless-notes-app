'use strict';

module.exports.createNote = async (event) => {
  return {
    statusCode: 201,
    body: JSON.stringify("create new notes"),
  };
};

module.exports.updateNote = async (event) => {
  const notesId = event.pathParameters.id
  return {
    statusCode: 200,
    body: JSON.stringify(`update new notes${notesId} successfully`),
  };
};


module.exports.deleteNote = async (event, context, cb) => {
  let notesId = event.pathParameters.id;
  return {
    statusCode: 201,
    body: JSON.stringify(`delete new notes${notesId} successfully`),
  };
};

module.exports.getAllNotes = async (event, context, cb) => {
  return {
    statusCode: 201,
    body: JSON.stringify(`get all notes`),
  };
};
