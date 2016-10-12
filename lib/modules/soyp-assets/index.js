module.exports = {
  extend: 'apostrophe-module',
  alias: 'soyp-assets',
  stylesheets: [
    {
      name: 'site'
    },
  ],
  afterConstruct: function(self) {
    self.pushAsset('stylesheet', 'site', { when: 'always' });
    // self.pushAsset('script', 'components/announcement', { when: 'always' });
  }
};
