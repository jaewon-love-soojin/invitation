<template>
  <div class="gallery-section" id="gallery">
    <SectionTitle en="Gallery"/>
    <div
      class="gallery-wrapper"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
    >
      <div
        class="gallery-track"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div class="gallery-slide" v-for="(img, index) in images" :key="index">
          <img :src="img" alt="gallery image" />
        </div>
      </div>

      <!-- ⬅ Arrow Left -->
      <button class="arrow left" @click="goPrev" :disabled="currentIndex === 0">
        ‹
      </button>

      <!-- ➡ Arrow Right -->
      <button class="arrow right" @click="goNext" :disabled="currentIndex === images.length - 1">
        ›
      </button>
    </div>

    <div class="gallery-indicator">
      {{ currentIndex + 1 }} / {{ images.length }}
    </div>
  </div>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue';
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)

const goNext = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
  }
}

const goPrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

let touchStartX = 0
let touchEndX = 0
const SWIPE_THRESHOLD = 50

const onTouchStart = (e) => {
  touchStartX = e.changedTouches[0].clientX
}
const onTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].clientX
  handleSwipe(touchEndX - touchStartX)
}

const onMouseDown = (e) => {
  touchStartX = e.clientX
}
const onMouseUp = (e) => {
  touchEndX = e.clientX
  handleSwipe(touchEndX - touchStartX)
}

const handleSwipe = (deltaX) => {
  if (Math.abs(deltaX) < SWIPE_THRESHOLD) return
  if (deltaX < 0) goNext()
  else goPrev()
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.gallery-section {
  margin: 0 auto;
  padding: 0px 0px;
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
  cursor: grab;
}

.gallery-track {
  display: flex;
  transition: transform 0.4s ease;
}

.gallery-slide {
  flex: 0 0 100%;
  box-sizing: border-box;
  padding: 0;
}

.gallery-slide img {
  width: 100%;
  object-fit: cover;
  display: block;
}

/* Arrows */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  font-size: 2rem;
  color: #d6336c;
  padding: 4px 12px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s ease;
}

.arrow.left {
  left: 10px;
}
.arrow.right {
  right: 10px;
}

.arrow:disabled {
  opacity: 0.4;
  cursor: default;
}

.gallery-indicator {
  margin-top: 12px;
  font-size: 0.95rem;
  color: #555;
  font-weight: 500;
}
</style>
