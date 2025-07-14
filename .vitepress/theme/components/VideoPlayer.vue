<template>
  <div class="video-container">
    <div class="video-wrapper">
      <!-- YouTube видео -->
      <iframe 
        v-if="youtube"
        :src="`https://www.youtube.com/embed/${youtube}`"
        :title="title || 'YouTube video'"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video-iframe">
      </iframe>
      
      <!-- Локальное видео -->
      <video 
        v-else-if="src"
        :controls="controls !== false"
        :autoplay="autoplay"
        :loop="loop"
        :muted="muted"
        class="video-element">
        <source :src="src" :type="type || 'video/mp4'">
        Ваш браузер не поддерживает видео.
      </video>
    </div>
    
    <!-- Заголовок видео -->
    <div v-if="title" class="video-title">{{ title }}</div>
    
    <!-- Описание видео -->
    <div v-if="description" class="video-description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    // YouTube ID
    youtube: {
      type: String,
      default: null
    },
    // Локальный файл
    src: {
      type: String,
      default: null
    },
    // Тип видео
    type: {
      type: String,
      default: 'video/mp4'
    },
    // Заголовок
    title: {
      type: String,
      default: null
    },
    // Описание
    description: {
      type: String,
      default: null
    },
    // Управление
    controls: {
      type: Boolean,
      default: true
    },
    // Автовоспроизведение
    autoplay: {
      type: Boolean,
      default: false
    },
    // Зацикливание
    loop: {
      type: Boolean,
      default: false
    },
    // Без звука
    muted: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.video-container {
  margin: 24px 0;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.video-iframe,
.video-element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.video-element {
  object-fit: cover;
}

.video-title {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
  margin-top: 16px;
  margin-bottom: 8px;
}

.video-description {
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

/* Темная тема */
.dark .video-wrapper {
  background: var(--vp-c-bg-elv);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* Адаптивность */
@media (max-width: 768px) {
  .video-container {
    margin: 16px 0;
  }
  
  .video-title {
    font-size: 1rem;
    margin-top: 12px;
  }
  
  .video-description {
    font-size: 0.85rem;
  }
}
</style> 