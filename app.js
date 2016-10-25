var apos = require('apostrophe')({
  shortName: 'soyp',
  title: 'soyp',
  absoluteUrls: true,
  bundles: ['apostrophe-events'],
  modules: {
    // This configures the apostrophe-users module to add an admin-level
    // group by default
    'apostrophe-templates': { viewsFolderFallback: __dirname + '/views' },
    'apostrophe-users': {
      groups: [
        {
          title: 'guest',
          permissions: [ ]
        },
        {
          title: 'admin',
          permissions: [ 'admin' ]
        }
      ]
    },

    'soyp-assets': {},
    'soyp-events': {},
    'soyp-events-pages': {},
    'soyp-events-widgets': {}
  }

});
