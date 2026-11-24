const config = {
  title: 'Optimize Bar',
  tagline: 'Shot-aware scene optimization in Unreal Editor',
  url: 'https://rmanmetaverse.github.io',
  baseUrl: '/OptimizeBar-Docs/',
  organizationName: 'RmaNMetaverse',
  projectName: 'OptimizeBar-Docs',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  presets: [['classic', {
    docs: { routeBasePath: '/', sidebarPath: './sidebars.js' },
    blog: false,
    theme: { customCss: './src/css/custom.css' },
  }]],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Optimize Bar',
      items: [
        { to: '/', label: 'Start here', position: 'left' },
        { to: '/planner/', label: 'Planner', position: 'left' },
        { to: '/tool-checklist/', label: 'Tool checklist', position: 'left' },
        { to: '/troubleshooting/', label: 'Troubleshooting', position: 'left' },
        { href: 'https://github.com/RmaNMetaverse/OptimizeBar-Docs', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: 'Optimize Bar 1.0.0 user documentation',
    },
  },
};

module.exports = config;
