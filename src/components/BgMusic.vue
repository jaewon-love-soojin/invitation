<template>
  <div class="bg-music-button" @click="toggle">
    <span v-if="isPlaying">🔊</span>
    <span v-else>🔈</span>
  </div>

  <!-- Hidden Audio Player -->
  <audio
    ref="audio"
    :src="musicUrl"
    preload="auto"
    loop
    @canplay="autoplay"
  ></audio>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isProd = import.meta.env.MODE === 'production'

// 📁 Replace with your own local or hosted music file
const musicUrl = import.meta.env.MODE === 'production'
  ? 'https://cdn.jsdelivr.net/gh/hellojaewon/wed/public/assets/AShamaluevMusic.mp3'
  : '`${import.meta.env.BASE_URL}/assets/AShamaluevMusic.mp3'
const audio = ref(null)
const isPlaying = ref(false)

const toggle = () => {
  if (!audio.value) return
  if (isPlaying.value) {
    audio.value.pause()
  } else {
    audio.value.play().catch(() => {
      // iOS blocks until user interacts
    })
  }
  isPlaying.value = !isPlaying.value
}

// 🚀 Autoplay after first load (if allowed)
const autoplay = () => {
  // Play only after user gesture if needed
  audio.value?.play().then(() => {
    isPlaying.value = true
  }).catch(() => {
    // fallback: wait for user click
  })
}

onMounted(() => {
  // optional: attach gesture listener for iOS
  document.body.addEventListener('click', () => {
    if (!isPlaying.value) {
      audio.value?.play()
      isPlaying.value = true
    }
  }, { once: true })
})
</script>

<style scoped>
.bg-music-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 28px;
  cursor: pointer;
  z-index: 999;
  background: rgba(255, 255, 255, 0.8);
  padding: 8px 12px;
  border-radius: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}
</style>

