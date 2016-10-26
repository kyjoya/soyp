module.exports = {
  extend: 'apostrophe-events',
  contextual: false,
  addFields: [
    {
      name: 'thumbnail',
      label: 'Preview Image',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        limit: 1,
        aspectRatio: [3, 2]
      }
    },
    {
      name: 'hosts',
      label: 'Hosts',
      type: 'string'
    },
    {
      name: 'location',
      label: 'Location',
      type: 'string',
      textarea: true
    },
    {
      name: 'description',
      label: 'Short Description',
      type: 'string',
      textarea: true
    },
    {
      type: 'singleton',
      widgetType: 'apostrophe-rich-text',
      name: 'longDescription',
      label: 'Description',
      options: {
        toolbar: ['Styles', 'Bold'],
        styles: [
          { name: 'Paragraph', element: 'p' }
        ]
      }
    },
    {
      name: 'registration',
      label: 'Registration Link',
      type: 'url'
    },
    {
      type: 'boolean',
      name: 'published',
      label: 'Published',
      def: true
    }
  ],
  arrangeFields: [
    { name: 'basics', label: 'Basics', fields: ['title', 'startDate', 'startTime', 'endTime'] },
    { name: 'content', label: 'Content', fields: ['thumbnail', 'description', 'longDescription'] },
    { name: 'advanced', label: 'Advanced', fields: ['allDay', 'dateType', 'endDate', 'repeatInterval', 'repeatCount'] },
    { name: 'admin', label: 'Admin', fields: ['tags','published', 'slug', 'upcoming'] }
  ]
};
