module.exports = {
  title: 'Qwerty',
  description: "Hi, I'm Qwerty.",
  base: '/qwerty/',
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
        sidebar: [
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
        ],
        nav: [],
      },
      '/ja/': {
        label: '日本語',
        selectText: '言語',
        sidebar: [
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
        ],
        nav: [],
      },
    },
  },
}
