module.exports = {
  title: 'Qwerty',
  description: "Hi, I'm Qwerty.",
  // base: '/qwerty/',
  head: head(),
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Qwerty',
      description: "Hi, I'm Qwerty.",
    },
    '/ja/': {
      lang: 'ja-JP',
      title: 'Qwerty',
      description: 'こんにちは、クワーティーです。',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        label: 'English',
        selectText: 'Language',
        sidebar: getSidebar(),
        nav: [],
      },
      '/ja/': {
        label: '日本語',
        selectText: '言語',
        sidebar: getSidebarJa(),
        nav: [],
      },
    },
  },
}

function getSidebar() {
  return [
    { text: 'Introduction', link: '/introduction' },
    {
      text: 'Works',
      children: [
        { text: 'Web Programming', link: '/works/web' },
        { text: 'Video Editing', link: '/works/video' },
        { text: 'Music', link: '/works/music' },
      ],
    },
    { text: 'Links', link: '/links' },
  ]
}

function getSidebarJa() {
  return [
    { text: '自己紹介', link: '/ja/introduction' },
    {
      text: '作品',
      children: [
        { text: 'Webプログラミング', link: '/ja/works/web' },
        { text: '動画編集', link: '/ja/works/video' },
        { text: '音楽', link: '/ja/works/music' },
      ],
    },
    { text: 'リンク', link: '/ja/links' },
  ]
}

function head() {
  return [
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:site', content: '@kuwappi_' }],
    ['meta', { property: 'og:url', content: 'https://noy4.github.io/' }],
    ['meta', { property: 'og:title', content: 'Qwerty' }],
    ['meta', { property: 'og:description', content: "Hi, I'm Qwerty." }],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://noy4.github.io/kuwa_graduate_icon.png',
      },
    ],
    [
      'link',
      { rel: 'icon', type: 'image/x-icon', href: '/kuwa_graduate_icon.png' },
    ],
    ['link', { rel: 'apple-touch-icon', href: '/kuwa_graduate_icon.png' }],
  ]
}
