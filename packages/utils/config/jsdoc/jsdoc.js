'use strict';

const environment = process.env.NODE_ENV || 'production';
const defaultTemplate = {};

if (environment === 'development') {
  defaultTemplate.layoutFile = 'config/jsdoc/layout.tmpl';
}

module.exports = {
  source: {
    include: ['src'],
    includePattern: '^.*\\.js$',
    excludePattern: '(^.*\\.test\\.js$)',
  },
  opts: {
    template: '../../node_modules/better-docs',
    encoding: 'utf8',
    recurse: true,
  },
  templates: {
    default: defaultTemplate,
    'better-docs': {
      name: 'Utils',
      title: 'Docs: Utils',
      navLinks: [
        {
          label: 'Github',
          href:
            'https://github.com/FranciscoFornell/MIST/tree/master/packages/ink-story-manager',
        },
      ],
    },
  },
};
