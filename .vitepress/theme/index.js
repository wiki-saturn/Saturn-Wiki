import DefaultTheme from 'vitepress/theme'
import './style.css'

// Импортируем иконки из Lucide
import { Bot, Users, MessageCircle, BookOpen, Settings, Megaphone } from 'lucide-vue-next'

// Импортируем кастомные компоненты
import HeroActions from './components/HeroActions.vue'
import CardGrid from './components/CardGrid.vue'
import CompactCards from './components/CompactCards.vue'
import VideoPlayer from './components/VideoPlayer.vue'

// Импортируем medium-zoom для увеличения изображений
import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Регистрируем иконки глобально
    app.component('IconBot', Bot)
    app.component('IconUsers', Users) 
    app.component('IconMessageCircle', MessageCircle)
    app.component('IconBookOpen', BookOpen)
    app.component('IconSettings', Settings)
    app.component('IconMegaphone', Megaphone)
    
    // Регистрируем кастомные компоненты
    app.component('HeroActions', HeroActions)
    app.component('CardGrid', CardGrid)
    app.component('CompactCards', CompactCards)
    app.component('VideoPlayer', VideoPlayer)
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      // Проверяем, что это не мобильное устройство
      const isMobile = window.innerWidth <= 768
      
            if (!isMobile) {
        // Определяем цвет фона в зависимости от темы
        const isDark = document.documentElement.classList.contains('dark')
        const backgroundColor = isDark ? 'rgba(0, 0, 0, 0.6)' : 'rgba(248, 248, 248, 0.6)'
        
        // Исключаем изображения карточек из medium-zoom
        mediumZoom('.main img:not(.icon-image)', {
          background: backgroundColor,
          margin: 16,
          scrollOffset: 40,
        })
      }
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
} 