export default {
  title: 'Saturn Wiki',
  description: 'Документация Saturn VPN. Инструкции по настройке VLESS VPN на любом устройстве.',
  
  head: [
    ['link', { href: 'https://i.postimg.cc/76Db6sMN/favicon180x180.png', rel: 'apple-touch-icon', sizes: '180x180' }],
    ['link', { href: 'https://i.postimg.cc/cJfrdyYH/favicon16x16.png', rel: 'icon', sizes: '16x16', type: 'image/png' }],
    ['link', { href: 'https://i.postimg.cc/cHmC8RFG/favicon32x32.png', rel: 'icon', sizes: '32x32', type: 'image/png' }]
  ],
  
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
  }
}
