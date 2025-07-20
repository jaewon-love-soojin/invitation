<template>
  <transition name="fade">
  <div v-if="show" class="landing-overlay">
    <div class="landing-content">
      <div class="svg-heart-wrapper">
        <svg viewBox="0 0 32 29.6" class="svg-heart" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23.6,0c-3.1,0-5.9,2-7.6,4.1C14.3,2,11.5,0,8.4,0C3.8,0,0,3.8,0,8.4
              c0,9.3,16,21.2,16,21.2s16-11.9,16-21.2C32,3.8,28.2,0,23.6,0z"
            fill="white"
          />
        </svg>
      </div>
      <p class="text">저희 아들, 딸이 결혼합니다.</p>
      <p class="text">최재원 그리고 나수진</p>
    </div>
  </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue'

const emit = defineEmits(['hide'])

const show = ref(true)

onMounted(() => {
  setTimeout(() => {
    show.value = false
    emit('hide')
  }, 5000)
})
</script>

<style scoped>
.svg-heart-wrapper {
  width: 40px;
  height: 40px;
  margin: 0 auto 12px;
  animation: heartPulse 1.5s ease-in-out infinite;
  opacity: 1;
}


.svg-heart {
  width: 100%;
  height: 100%;
}

@keyframes heartPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

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
  animation: slideUpFade 0.8s ease-out forwards;
  opacity: 0;
  margin: 4px 0;
}

.text:nth-child(2) {
  animation-delay: 2.0s;
}

.text:nth-child(3) {
  animation-delay: 3.0s;
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
  font-size: 20px;
  color: #794886;
}

/* fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
