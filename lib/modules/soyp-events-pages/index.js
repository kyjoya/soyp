var _ = require('lodash');
var moment = require('moment');
module.exports = {
  extend: 'apostrophe-events-pages',
  perPage: 25,
  //
  // construct: function(self, options) {
  //   self.categories = _.find(self.pieces.schema, { name: 'category' }).choices;
  //   self.campus = _.find(self.pieces.schema, { name: 'campus'}).choices;
  //
  //   // Remove upcoming filter when user clicks on past date in calendar
  //   var superIndexCursor = self.indexCursor;
  //   self.indexCursor = function(req) {
  //     if (req.query.date === undefined) {
  //       return superIndexCursor(req).upcoming(true);
  //     } else {
  //       return superIndexCursor(req).upcoming(null);
  //     }
  //   };
  //
  //   self.beforeIndex = function(req, callback) {
  //     req.data.categories = self.categories || [];
  //     req.data.campus = self.campus || [];
  //
  //     var clndrOptions = {
  //       template: self.render(req, '_clndr', {}),
  //       daysOfTheWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  //       events: req.data.pieces,
  //       extras: { queryDate: req.query.date }
  //     };
  //
  //     var now = moment().format('YYYY-MM-DD');
  //
  //     if(req.query.date == now) {
  //       clndrOptions.startWithMonth = req.query.date;
  //     } else {
  //       clndrOptions.startWithMonth = req.query.date;
  //     }
  //
  //     req.browserCall('$(".wc-clndr-container").clndr(?);', clndrOptions);
  //
  //     return setImmediate(callback);
  //   };
  // }
};
