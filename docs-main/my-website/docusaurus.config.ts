import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Legi.one Docs',
  tagline: 'Jednoduchý nástroj. Skutečné vztahy. Reálný příjem.',
  favicon: 'img/l1favicon.svg',
  url: 'https://docs.legi.one',
  baseUrl: '/',

  organizationName: 'legi-one',
  projectName: 'docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'cs',
    locales: ['cs'],
  },

  plugins: [
    function redirectPlugin() {
      return {
        name: 'redirect-plugin',
        async loadContent() {
          return null;
        },
        async contentLoaded({ actions }) {
          const { createData, addRoute } = actions;
          const redirects = await createData(
            'redirects.json',
            JSON.stringify([{ from: '/', to: '/uvod-legione' }])
          );
          addRoute({
            path: '/',
            component: '@site/src/components/Redirect',
            modules: {
              redirects: redirects,
            },
            exact: true,
          });
        },
      };
    },
    '@docusaurus/plugin-sitemap',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/',
          editUrl: undefined,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap',
      type: 'text/css',
    },
  ],

  themeConfig: {
    image: 'img/legi-one-social-card.jpg', // ✅ Opravený název obrázku

    metadata: [
      { name: 'description', content: 'Legi.one - Digitální franšíza platebních služeb. Budujte pasivní příjem v novém ekosystému Mo.one.' },
      { name: 'keywords', content: 'Legi.one, Mo.one, platební brána, PSD2 licence, franšíza, digitální franšíza, pasivní příjem' },
      { property: 'og:title', content: 'Legi.one Docs' },
      { property: 'og:description', content: 'Digitální franšíza platebních služeb. Jednoduchý nástroj. Skutečné vztahy. Reálný příjem.' },
      { property: 'og:image', content: 'https://docs.legi.one/img/legi-one-social-card.jpg' }, // ✅ Opravený OG obrázek
      { property: 'og:url', content: 'https://docs.legi.one/' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Legi.one Docs' },
      { property: 'twitter:description', content: 'Budujte pasivní příjem s Legi.one.' },
    ],

    navbar: {
      title: '',
      logo: {
        alt: 'Legi.one Logo',
        src: 'img/Legi.one-logo.svg',
      },
      items: [
        { to: '/uvod-legione', label: 'Průvodce', position: 'left' },
        { to: '/co-je-moone', label: 'Produkty', position: 'left' },
        { to: '/partneri', label: 'Partneři', position: 'left' },
        {
          href: 'https://app.mo.one/sign-up-hunter',
          label: 'Staň se Hunterem',
          position: 'left',
          className: 'header-hunter-link',
          target: '_blank',
        },
        {
          href: 'https://legi.one',
          label: 'Zpět na Legi.one',
          position: 'right',
          target: '_blank',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navigace',
          items: [
            { label: 'Průvodce', to: '/uvod-legione' },
            { label: 'Produkty', to: '/co-je-moone' },
            { label: 'Partneři', to: '/partneri' },
          ],
        },
        {
          title: 'Právní',
          items: [
            { label: 'Obchodní podmínky', href: 'https://legi.one/terms' },
            { label: 'Ochrana osobních údajů', href: 'https://legi.one/privacy' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Legi.one. Všechna práva vyhrazena.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
} satisfies Config;

export default config;