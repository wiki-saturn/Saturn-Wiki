<template>
  <div class="hero-actions">
    <div class="action-group primary">
      <a href="https://t.me/SaturnVPN_bot?start=docs" class="action primary">
        <IconBot :size="18" />
        <span>Открыть Telegram-бот</span>
      </a>
      <a href="https://t.me/SaturnVPN_Support" class="action primary">
        <IconUsers :size="18" />
        <span>Служба поддержки</span>
      </a>
      <a href="https://t.me/SaturnVPN_News" class="action primary">
        <IconMegaphone :size="18" />
        <span>Telegram канал</span>
      </a>
    </div>
    
    <div class="action-group secondary">
      <a href="/bot-guide/" class="action secondary">
        <IconBookOpen :size="18" />
        <span>Как пользоваться ботом?</span>
      </a>
      <a href="/setup-guide/" class="action secondary">
        <IconSettings :size="18" />
        <span>Настройка VPN на устройстве</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 32px;
}

.action-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.action {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.25s;
  border: 2px solid transparent;
}

.action.primary {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}

.action.primary:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(255, 98, 0, 0.3);
}

.action.secondary {
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-divider);
}

.action.secondary:hover {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(255, 98, 0, 0.2);
}

@media (max-width: 768px) {
  .action-group {
    flex-direction: column;
  }
  
  .action {
    justify-content: center;
    width: 100%;
  }
}
</style> 