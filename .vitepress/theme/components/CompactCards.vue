<template>
  <div class="compact-cards-grid">
    <div 
      v-for="card in cards" 
      :key="card.title"
      class="compact-card"
    >
      <a :href="card.link" class="card-icon">
        <img :src="card.image" :alt="card.title" class="icon-image">
      </a>
      <a :href="card.link" class="card-title">{{ card.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompactCards',
  props: {
    cards: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.compact-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 24px 0;
}

.compact-card {
  display: flex;
  flex-direction: column;
  padding: 0;
  background: var(--vp-c-default-soft);
  border-radius: 8px;
  transition: all 0.2s ease;
  overflow: hidden;
}

.compact-card:hover {
  background: var(--vp-c-brand-soft);
}

.card-icon {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  position: relative;
  overflow: hidden;
  background: var(--vp-c-bg-alt);
  text-decoration: none;
}

.icon-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  text-align: left;
  line-height: 1.3;
  padding: 16px;
  text-decoration: none;
  display: block;
  transition: color 0.2s ease;
}

.card-title:hover {
  color: var(--vp-c-brand-1);
}

/* Темная тема */
.dark .compact-card {
  background: var(--vp-c-default-soft);
}

.dark .compact-card:hover {
  background: var(--vp-c-brand-soft);
}

/* Адаптивность */
@media (max-width: 768px) {
  .compact-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  
  .card-icon {
    height: 140px;
  }
  
  .card-title {
    font-size: 0.8rem;
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .compact-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .card-icon {
    height: 120px;
  }
  
  .card-title {
    padding: 10px;
    font-size: 0.75rem;
  }
}
</style> 