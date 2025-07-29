import DefaultTheme from 'vitepress/theme'
import './style.css'

 import { Bot, Users, MessageCircle, BookOpen, Settings, Megaphone } from 'lucide-vue-next'

import HeroActions from './components/HeroActions.vue'
import CardGrid from './components/CardGrid.vue'
import CompactCards from './components/CompactCards.vue'
import VideoPlayer from './components/VideoPlayer.vue'

import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute, useData } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('IconBot', Bot)
    app.component('IconUsers', Users) 
    app.component('IconMessageCircle', MessageCircle)
    app.component('IconBookOpen', BookOpen)
    app.component('IconSettings', Settings)
    app.component('IconMegaphone', Megaphone)
    
    app.component('HeroActions', HeroActions)
    app.component('CardGrid', CardGrid)
    app.component('CompactCards', CompactCards)
    app.component('VideoPlayer', VideoPlayer)
  },
  setup() {
    const route = useRoute()
    const { isDark } = useData()
    
    const updateThemeColor = () => {
      const themeColorMeta = document.querySelector('meta[name="theme-color"]')
      if (themeColorMeta) {
        const color = isDark.value ? '#101010' : '#ffffff'
        themeColorMeta.setAttribute('content', color)
      }
    }
    
    const initZoom = () => {
      const isMobile = window.innerWidth <= 768
      
            if (!isMobile) {
        const isDarkMode = document.documentElement.classList.contains('dark')
        const backgroundColor = isDarkMode ? 'rgba(0, 0, 0, 0.6)' : 'rgba(248, 248, 248, 0.6)'
        
        mediumZoom('.main img:not(.icon-image)', {
          background: backgroundColor,
          margin: 16,
          scrollOffset: 40,
        })
      }
    }
    
    onMounted(() => {
      initZoom()
      updateThemeColor()
    })
    
    watch(isDark, () => {
      updateThemeColor()
    })
    
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
} 