export default {
  title: 'Saturn Wiki',
  description: 'Документация проекта Saturn',
  
  themeConfig: {
    logo: '/wiki.svg',
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Документация', link: '/guide/' }
    ],
    
    sidebar: [
      {
        text: 'Начало работы',
        items: [
          { text: 'Введение', link: '/guide/' },
          { text: 'Установка', link: '/guide/installation' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SaturnConnect/Saturn-Wiki' }
    ]
  }
}
