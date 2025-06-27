<template>
  <transition name="fade">
  <div v-if="show" class="landing-overlay">
    <div class="landing-content">
      <lottie-player
        :src="landingUrl"
        background="transparent"
        speed="1"
        style="width: 120px; height: 120px"
        autoplay
      ></lottie-player>
      <h1 class="fade-in-delay-1">💍 jw & sj</h1>
      <p class="fade-in-delay-2">Wedding Invitation</p>
    </div>
  </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const show = ref(true)

const landingUrl = `${import.meta.env.BASE_URL}/animations/landing.json`

onMounted(() => {
  setTimeout(() => {
    show.value = false
  }, 2500) // show for 2.5 seconds
})
</script>

<style scoped>
.landing-overlay {
  position: fixed;
  inset: 0;
  background: white;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: opacity 0.5s ease;
}

.landing-content {
  text-align: center;
  font-family: 'Noto Serif KR', serif;
  animation: fadeZoomIn 1s ease-out forwards;
  opacity: 0;
  transform: scale(0.9);
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

lottie-player {
  animation: fadeZoomIn 1s ease-out forwards;
  opacity: 0;
  transform: scale(0.9);
  animation-delay: 0.1s;
}
</style>

