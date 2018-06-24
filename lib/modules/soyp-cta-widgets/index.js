module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Call to Action',
  addFields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'string',
      required: true
    },
    {
      type: 'singleton',
      widgetType: 'apostrophe-rich-text',
      name: 'body',
      label: 'Body',
      options: {
        toolbar: ['Bold', 'Styles', 'Link'],
        styles: [
          { name: 'Body Text', element: 'p' }
        ]
      }
    },
    {
      name: 'actions',
      label: 'Buttons',
      type: 'array',
      schema: [
        {
          name: 'buttonText',
          label: 'Button Text',
          type: 'string'
        },
        {
        name: 'linkType',
        label: 'Link Type',
        type: 'select',
        choices: [
            { label: 'Internal Link', value: 'internal', showFields: ['_ctaPage'] },
            { label: 'External Link', value: 'external', showFields: ['externalUrl'] }
          ],
          def: 'internal'
        },
        {
          name: '_ctaPage',
          type: 'joinByOne',
          label: 'Page',
          help: 'Please choose a page from within the site',
          withType: 'apostrophe-page',
          idField: 'ctaPageId',
          filters: {
            projection: {
              slug: 1,
              title: 1
            }
          }
        },
        {
          name: 'externalUrl',
          label: 'External Link',
          type: 'url'
        }
      ]
    }
  ]
};
