module.exports = {
  title: 'Qwerty',
  description: "Hi, I'm Qwerty.",
  themeConfig: {
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
  },
}
