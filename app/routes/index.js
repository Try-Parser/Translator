const transRoute = require('./translate_routes');

module.exports = function(app, db) {
  transRoute(app, db);
};