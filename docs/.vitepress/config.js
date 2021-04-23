module.exports = {
  title: 'Qwerty',
  description: "Hi, I'm Qwerty.",
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
              { text: 'Web Programming', link: '/web' },
              { text: 'Video Editing', link: '/video' },
              { text: 'Music', link: '/music' },
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
              { text: 'Webプログラミング', link: '/ja/web' },
              { text: '動画編集', link: '/ja/video' },
              { text: '音楽', link: '/ja/music' },
            ],
          },
          { text: 'Links', link: '/ja/links' },
        ],
        nav: [],
      },
    },
  },
}
