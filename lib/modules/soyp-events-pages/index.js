var _ = require('lodash');
var moment = require('moment');

module.exports = {
  extend: 'apostrophe-events-pages',
  perPage: 25,

  construct: function(self, options) {

    // Remove upcoming filter when user clicks on past date in calendar
    var superIndexCursor = self.indexCursor;
    self.indexCursor = function(req) {
      return superIndexCursor(req).upcoming(null);
    };
  }
}
