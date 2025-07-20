<template>
  <transition name="fade">
  <div v-if="show" class="landing-overlay">
    <div class="landing-content">
      <p class="text">저희 아들, 딸이 결혼합니다.</p>
      <p class="text">최재원 그리고 나수진</p>
    </div>
  </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const show = ref(true)

onMounted(() => {
  setTimeout(() => {
    show.value = false
  }, 3500)
})
</script>

<style scoped>
.landing-overlay {
  position: fixed;
  max-width: 480px;
  inset: 0;
  background: linear-gradient(to bottom, #93729B, white);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: opacity 0.5s ease;
  margin: 0 auto;
}

.landing-content {
  text-align: center;
  animation: fadeZoomIn 1s ease-out forwards;
  opacity: 0;
  transform: scale(0.9);
}

.text {
  font-size: 16px;
  color: #555;
  animation: slideUpFade 0.8s ease-out forwards;
  opacity: 0;
  margin: 4px 0;
}

.text:nth-child(1) {
  animation-delay: 1.0s;
}

.text:nth-child(2) {
  animation-delay: 2.0s;
}

@keyframes slideUpFade {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeZoomIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.landing-content h1 {
  font-size: 32px;
  margin-bottom: 8px;
  color: #b4466c;
}

.landing-content p {
  font-size: 16px;
  color: #555;
}

/* fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
