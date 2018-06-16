var _ = require('lodash');
// var h2p = require('html2plaintext');
// var moment = require('moment');

var baseTextStyles = {
  toolbar: [ 'Styles', 'Bold', 'Italic', 'Link', 'Unlink' ],
  styles: [
    { name: 'Body Text',           element: 'p' },
    { name: 'Title Small',         element: 'h6'},
    { name: 'Title Medium',        element: 'h5'}
  ]
};

var defaultTextStyles = _.cloneDeep(baseTextStyles);
defaultTextStyles.column = 6;

module.exports = {
  extend: 'apostrophe-module',
  alias: 'soyp',
  baseTextStyles: baseTextStyles,

  construct: function(self, options) {
    self.addHelpers({
      defaultAreaOptions: {
        widgets: {
          'apostrophe-rich-text': defaultTextStyles,
          'apostrophe-video': {},
          'soyp-cta': {},
        }
      },

      pieceAreaOptions: {
        widgets: {
          'apostrophe-rich-text': defaultTextStyles,
          'apostrophe-video': {},
          'wc-cta': {}
        }
      },

    baseTextStyles: baseTextStyles

      // findInCollection: function(collection, field, value) {
      //   var criteria = {};
      //   criteria[field] = value;
      //   return _.find(collection, criteria);
      // },

      // areaToPlainText: function(page, area) {
      //   if (!page[area] || ! page[area].items) {
      //     return ''
      //   }
      //   var s = '';
      //   for (var i = 0; i < page[area].items.length; i++) {
      //     if (page[area].items[i].type === 'apostrophe-rich-text') {
      //       s = h2p(page[area].items[i].content);
      //       s = s.replace(/(\r\n|\n|\r)/gm,"");
      //       break;
      //     }
      //   }
      //   return s;
      // },

      // randomSlide: function(items){
      //   var slide = {};
      //   if(items.length){
      //     random = Math.floor(Math.random() * items.length);
      //     slide = items[random];
      //   }
      //   return slide;
      // },
    });
  }
}
