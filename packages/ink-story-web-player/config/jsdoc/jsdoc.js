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
  tags: {
    allowUnknownTags: ['component'],
  },
  plugins: ['../../node_modules/better-docs/component'],
  templates: {
    default: defaultTemplate,
    'better-docs': {
      name: 'Simple Ink Story Web Player',
      title: 'Docs: Simple Ink Story Web Player',
      navLinks: [
        {
          label: 'Github',
          href:
            'https://github.com/FranciscoFornell/MIST/tree/master/packages/ink-story-web-player',
        },
      ],
    },
  },
};
