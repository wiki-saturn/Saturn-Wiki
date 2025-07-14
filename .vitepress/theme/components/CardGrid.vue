<template>
  <div class="card-grid">
    <div 
      v-for="card in cards" 
      :key="card.title"
      class="card"
    >
      <div class="card-image-container">
        <img :src="card.image" :alt="card.title" class="card-image">
      </div>
      <div class="card-content">
        <h3 class="card-title">{{ card.title }}</h3>
        <p class="card-description">{{ card.description }}</p>
        <a :href="card.link" class="card-link">
          {{ card.linkText || 'Перейти →' }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardGrid',
  props: {
    cards: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 32px 0;
}

.card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border-color: var(--vp-c-brand-1);
}

.card-image-container {
  position: relative;
  height: 160px;
  overflow: hidden;
  background: var(--vp-c-bg-alt);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card-image {
  transform: scale(1.05);
}

.card-content {
  padding: 20px;
}

.card-title {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--vp-c-text-1);
  margin: 0 0 12px 0;
}

.card-description {
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 0 0 16px 0;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: all 0.2s ease;
}

.card-link:hover {
  color: var(--vp-c-brand-2);
  transform: translateX(4px);
}

.card-link::after {
  content: '→';
  transition: transform 0.2s ease;
}

.card-link:hover::after {
  transform: translateX(2px);
}

/* Темная тема */
.dark .card {
  background: var(--vp-c-bg-elv);
  border-color: var(--vp-c-divider);
}

.dark .card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

/* Адаптивность */
@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 24px 0;
  }
  
  .card-image-container {
    height: 140px;
  }
  
  .card-content {
    padding: 16px;
  }
  
  .card-title {
    font-size: 1.1rem;
  }
  
  .card-description {
    font-size: 0.85rem;
  }
}
</style> 