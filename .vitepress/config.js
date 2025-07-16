import { defineConfig } from 'vitepress'

function generateMetaTags(title, description, url) {
  return [
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: url }],
    ['meta', { name: 'twitter:title', content: title }],
    ['meta', { name: 'twitter:description', content: description }],
    ['link', { rel: 'canonical', href: url }]
  ]
}

// Функция для генерации навигационной цепочки
function generateBreadcrumbSchema(pageData) {
  const baseUrl = 'https://saturn-network.com'
  const pathSegments = pageData.relativePath.replace(/\.md$/, '').split('/').filter(Boolean)
  
  if (pathSegments.length === 0) return null
  
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Главная',
      'item': baseUrl
    }
  ]
  
  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const position = index + 2
    
    // Определяем название раздела на основе пути
    let name = segment
    if (segment === 'bot-guide') name = 'Работа с ботом'
    else if (segment === 'setup-guide') name = 'Настройка VPN'
    else if (segment === 'android') name = 'Android'
    else if (segment === 'windows') name = 'Windows'
    else if (segment === 'ios') name = 'iOS'
    else if (segment === 'macos') name = 'macOS'
    else if (segment === 'linux') name = 'Linux'
    else if (segment === 'tv') name = 'Android TV'
    else if (segment === 'balance') name = 'Пополнение баланса'
    else if (segment === 'subscription-purchase') name = 'Покупка подписки'
    else if (segment === 'subscription-renew') name = 'Продление подписки'
    else if (segment === 'change-plan') name = 'Смена тарифа'
    else if (segment === 'prices') name = 'Тарифы'
    else if (segment === 'contacts') name = 'Контакты'
    else if (segment === 'terms') name = 'Пользовательское соглашение'
    else if (segment === 'v2raytun') name = 'v2RayTun'
    else if (segment === 'happ') name = 'Happ'
    else if (segment === 'hiddify') name = 'Hiddify'
    else if (segment === 'nekoray') name = 'Nekoray'
    else if (segment === 'v2rayng') name = 'v2rayNG'
    else if (segment === 'v2box') name = 'V2Box'
    else if (segment === 'v2rayn') name = 'v2RayN'
    else if (segment === 'streisand') name = 'Streisand'
    
    breadcrumbItems.push({
      '@type': 'ListItem',
      'position': position,
      'name': name,
      'item': `${baseUrl}${currentPath}`
    })
  })
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems
  }
}

export default defineConfig({
  title: 'Saturn Wiki',
  description: 'Вся необходимая информация для клиентов Saturn VPN, собранная в одном месте. Инструкции по установке и настройке VPN с протоколом VLESS для приложений v2RayTun, v2RayN, v2rayNG, V2Box, Streisand, Nekoray и Hiddify',
  
  base: '/',
  
  lang: 'ru-RU',
  
  vite: {
    assetsInclude: ['**/*.mp4', '**/*.MP4', '**/*.webm', '**/*.WEBM', '**/*.mov', '**/*.MOV', '**/*.avi', '**/*.AVI']
  },
  
  head: [
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-RQGCWMT85F' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RQGCWMT85F');
    `],
    ['script', {}, `
       (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
       m[i].l=1*new Date();
       for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
       k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
       (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    
       ym(103338244, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
       });
    `],
    ['noscript', {}, '<div><img src="https://mc.yandex.ru/watch/103338244" style="position:absolute; left:-9999px;" alt="" /></div>'],
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'yandex-verification', content: 'b50710c3c0486d68' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],

    ['meta', { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }],
    ['meta', { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }],
    ['meta', { name: 'author', content: 'Saturn VPN' }],
    ['meta', { name: 'generator', content: 'VitePress' }],
    ['meta', { name: 'theme-color', content: '#101010' }],
    
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Saturn Wiki' }],
    ['meta', { property: 'og:title', content: 'Saturn Wiki - База знаний для клиентов Saturn VPN' }],
    ['meta', { property: 'og:description', content: 'Полная база знаний Saturn VPN. Инструкции по установке и настройке VPN приложений для всех платформ: Windows, Android, iOS, macOS, Linux' }],
    ['meta', { property: 'og:image', content: 'https://saturn-network.com/hero-logo.svg' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'Saturn VPN Logo' }],
    ['meta', { property: 'og:url', content: 'https://saturn-network.com' }],
    ['meta', { property: 'og:locale', content: 'ru_RU' }],
    
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@SaturnVPN' }],
    ['meta', { name: 'twitter:creator', content: '@SaturnVPN' }],
    ['meta', { name: 'twitter:title', content: 'Saturn Wiki - VPN инструкции и настройка' }],
    ['meta', { name: 'twitter:description', content: 'Полная база знаний Saturn VPN. Инструкции по установке и настройке VPN приложений для всех платформ' }],
    ['meta', { name: 'twitter:image', content: 'https://saturn-network.com/hero-logo.svg' }],
    ['meta', { name: 'twitter:image:alt', content: 'Saturn VPN Logo' }],
    
    ['meta', { name: 'keywords', content: 'Saturn VPN, VLESS, v2ray, vpn инструкции, настройка vpn, v2raytun, hiddify, nekoray, telegram vpn bot, vpn android, vpn ios, vpn windows, vpn macos, vpn linux' }],
    
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Saturn Wiki' }],
    
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo.svg' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo.svg' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#FF6200' }],
    ['link', { rel: 'shortcut icon', href: '/logo.svg' }],
    
    ['link', { rel: 'canonical', href: 'https://saturn-network.com' }],
    ['link', { rel: 'alternate', hreflang: 'ru', href: 'https://saturn-network.com' }],
    ['link', { rel: 'alternate', hreflang: 'x-default', href: 'https://saturn-network.com' }],
    
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Saturn Wiki',
      description: 'Полная база знаний Saturn VPN с инструкциями по настройке',
      url: 'https://saturn-network.com',
      publisher: {
        '@type': 'Organization',
        name: 'Saturn VPN',
        url: 'https://saturn-network.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://saturn-network.com/logo.svg'
        }
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://saturn-network.com/?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    })]
  ],
  
  cleanUrls: true,
  
  sitemap: {
    hostname: 'https://saturn-network.com',
    transformItems: (items) => {
      return items.map((item) => ({
        ...item,
        changefreq: 'daily',
        priority: item.url === '/' ? 1.0 : 0.8
      }))
    }
  },
  
  lastUpdated: true,
  metaChunk: true,
  
  cacheDir: './.vitepress/cache',
  
  transformHead: ({ pageData }) => {
    const head = []
    
    if (pageData.frontmatter.title) {
      head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }])
      head.push(['meta', { name: 'twitter:title', content: pageData.frontmatter.title }])
    }
    
    if (pageData.frontmatter.description) {
      head.push(['meta', { name: 'description', content: pageData.frontmatter.description }])
      head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }])
      head.push(['meta', { name: 'twitter:description', content: pageData.frontmatter.description }])
    }
    
    const canonicalUrl = `https://saturn-network.com${pageData.relativePath.replace(/\.md$/, '')}`
    head.push(['link', { rel: 'canonical', href: canonicalUrl }])
    head.push(['meta', { property: 'og:url', content: canonicalUrl }])
    
    const breadcrumbSchema = generateBreadcrumbSchema(pageData)
    if (breadcrumbSchema) {
      head.push(['script', { type: 'application/ld+json' }, JSON.stringify(breadcrumbSchema)])
    }
    
    return head
  },

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Как использовать бота', link: '/bot-guide/' },
      { text: 'Как настроить VPN на устройстве', link: '/setup-guide/' },
    ],

    sidebar: {
      '/bot-guide/': [
        {
          text: 'Работа с ботом',
          items: [
            { text: 'Начало работы', link: '/bot-guide/' },
            { text: 'Пополнение баланса', link: '/bot-guide/balance' }
          ]
        },
        {
          text: 'Управление подпиской',
          items: [
            { text: 'Приобритение подписки', link: '/bot-guide/subscription-purchase' },
            { text: 'Продление подписки', link: '/bot-guide/subscription-renew' },
            { text: 'Смена тарифа', link: '/bot-guide/change-plan' }
          ]
        },
        {
          text: 'Сервис',
          items: [
            { text: 'Тарифы', link: '/bot-guide/prices' },
            { text: 'Контакты', link: '/bot-guide/contacts' },
            { text: 'Пользовательское соглашение', link: '/bot-guide/terms' },
          ]
        },
      ],

      '/setup-guide/': [
        {
          text: 'Подключение к VPN на устройстве', link: '/setup-guide/' 
        },
        {
          text: 'Android',
          items: [
            { text: 'v2RayTun (рекомендуется)', link: '/setup-guide/android/v2raytun' },
            { text: 'Happ', link: '/setup-guide/android/happ' },
            { text: 'Hiddify', link: '/setup-guide/android/hiddify' },
            { text: 'Nekoray', link: '/setup-guide/android/nekoray' },
            { text: 'v2rayNG', link: '/setup-guide/android/v2rayng' },
            { text: 'V2Box', link: '/setup-guide/android/v2box' }
          ]
        },
        {
          text: 'Windows',
          items: [
            { text: 'v2RayTun (рекомендуется)', link: '/setup-guide/windows/v2raytun' },
            { text: 'Hiddify', link: '/setup-guide/windows/hiddify' },
            { text: 'v2RayN', link: '/setup-guide/windows/v2rayn' },
            { text: 'Nekoray', link: '/setup-guide/windows/nekoray' }
          ]
        },
        {
          text: 'Linux',
          items: [
            { text: 'Nekoray (рекомендуется)', link: '/setup-guide/linux/nekoray' }
          ]
        },
        {
          text: 'iOS, iPadOS',
          items: [
            { text: 'Streisand (рекомендуется)', link: '/setup-guide/ios/streisand' },
            { text: 'v2RayTun', link: '/setup-guide/ios/v2raytun' },
            { text: 'Happ', link: '/setup-guide/ios/happ' },
            { text: 'Hiddify', link: '/setup-guide/ios/hiddify' },
            { text: 'V2Box', link: '/setup-guide/ios/v2box' }
          ]
        },
        {
          text: 'macOS',
          items: [
            { text: 'v2RayTun (рекомендуется)', link: '/setup-guide/macos/v2raytun' },
            { text: 'Happ', link: '/setup-guide/macos/happ' },
            { text: 'Hiddify', link: '/setup-guide/macos/hiddify' },
            { text: 'V2Box (Для Mac с процессором Intel)', link: '/setup-guide/macos/v2box' }
          ]
        },
        {
          text: 'Телевизор Android TV',
          items: [
            { text: 'v2RayTun (рекомендуется)', link: '/setup-guide/tv/v2raytun' },
            { text: 'Hiddify', link: '/setup-guide/tv/hiddify' }
          ]
        }
      ],

      '/troubleshoot/': [
        {
          text: 'Устранение проблем',
          items: [
            { text: 'Общие проблемы', link: '/troubleshoot/' },
            { text: 'Проблемы подключения', link: '/troubleshoot/connection' },
            { text: 'Низкая скорость', link: '/troubleshoot/speed' },
            { text: 'Ошибки приложений', link: '/troubleshoot/app-errors' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск по документации'
              },
              modal: {
                displayDetails: 'Показать подробности',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов для',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'навигация',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'escape'
                }
              }
            }
          }
        }
      }
    },

    outline: {
      label: 'Содержание страницы',
      level: [2, 3, 4]
    },

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
    
    lastUpdated: {
      text: 'Последнее обновление'
    },

    darkModeSwitchLabel: 'Тёмная тема',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему',

    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Вернуться наверх',
    langMenuLabel: 'Изменить язык',

    notFound: {
      title: 'СТРАНИЦА НЕ НАЙДЕНА',
      quote: 'Вернитесь на главную страницу и используйте меню или поиск для навигации по базе знаний.',
      linkLabel: 'На главную',
      linkText: 'Вернуться на главную'
    },

    container: {
      tip: 'Подсказка',
      info: 'Информация', 
      warning: 'Внимание',
      danger: 'Важно',
      details: 'Подробности'
    }
  }
}) 
