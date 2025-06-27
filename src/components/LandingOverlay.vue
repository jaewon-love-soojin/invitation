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
      <p class="typewriter">Wedding Invitation</p>
      <p class="letter-animate">
        <span>결</span><span>혼</span><span>합</span><span>니</span><span>다</span><span>.</span>
      </p>

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
  }, 3500)
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

.typewriter {
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #555;
  width: 0;
  animation: typing 2s steps(22) 0.5s forwards, blink 0.7s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 18ch; } /* or 100% if using percentages */
}

@keyframes blink {
  50% { border-color: transparent; }
}
.letter-animate span {
  opacity: 0;
  display: inline-block;
  transform: translateY(8px);
  animation: letterIn 0.5s ease forwards;
}
.letter-animate span:nth-child(1) { animation-delay: 1.1s; }
.letter-animate span:nth-child(2) { animation-delay: 1.2s; }
.letter-animate span:nth-child(3) { animation-delay: 1.2s; }
.letter-animate span:nth-child(4) { animation-delay: 1.2s; }
.letter-animate span:nth-child(5) { animation-delay: 1.2s; }
.letter-animate span:nth-child(6) { animation-delay: 1.2s; }

@keyframes letterIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>

