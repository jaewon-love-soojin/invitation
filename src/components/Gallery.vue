<template>
  <div class="gallery-section">
    <h2 class="gallery-title">Gallery</h2>

    <div
      class="gallery-wrapper"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <div class="gallery-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="gallery-slide" v-for="(img, index) in images" :key="index">
          <img :src="img" alt="gallery image" />
        </div>
      </div>
    </div>

    <div class="gallery-indicator">
      {{ currentIndex + 1 }} / {{ images.length }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  images: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)

let touchStartX = 0
let touchEndX = 0
const SWIPE_THRESHOLD = 50

const onTouchStart = (e) => {
  touchStartX = e.changedTouches[0].clientX
}
const onTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].clientX
  const delta = touchEndX - touchStartX
  if (Math.abs(delta) < SWIPE_THRESHOLD) return
  if (delta < 0) {
    currentIndex.value = (currentIndex.value + 1) % images.length
  } else {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.gallery-section {
  max-width: 480px;
  margin: 0 auto;
  padding: 32px 16px;
  text-align: center;
}

.gallery-title {
  font-family: 'Great Vibes', cursive;
  font-size: 2.2rem;
  color: #d6336c;
  margin-bottom: 24px;
}

.gallery-wrapper {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.gallery-track {
  display: flex;
  transition: transform 0.4s ease;
  width: 100%;
}

.gallery-slide {
  flex: 0 0 100%;
  box-sizing: border-box;
  padding: 0 8px;
}

.gallery-slide img {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  display: block;
}

.gallery-indicator {
  margin-top: 12px;
  font-size: 0.95rem;
  color: #555;
  font-weight: 500;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: #d6336c;
}
</style>
