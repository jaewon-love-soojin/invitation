<template>
  <div class="information">
    <div
      class="swipe-wrapper"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <div
        class="swipe-track"
        :style="{ transform: `translateX(${translateX}%)` }"
      >
        <div
          v-for="(panel, i) in infinitePanels"
          :key="`${panel.originalIndex}-${i}`"
          class="swipe-panel"
          :class="{ active: i === 1 }"
        >
          <div class="img-wrapper">
            <img :src="panel.img" alt="panel image" />
          </div>
          <h3>{{ panel.title }}</h3>
          <p>{{ panel.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const panels = [
  {
    img: `${import.meta.env.BASE_URL}images/parking.jpg`,
    title: '자가용 및 주차 이용',
    text: '지하 3층 주차장 무료 이용 가능 (오후 6시까지). 주차 공간 여유 있음.'
  },
  {
    img: `${import.meta.env.BASE_URL}images/banquet.jpg`,
    title: '연회 & 식사 안내',
    text: '식당과 웨딩홀은 지하 1층. 식사 시간: 오전 11시 ~ 오후 2시.'
  }
]

// Create infinite panels for seamless looping
const infinitePanels = ref([])
const currentIndex = ref(0)
const translateX = ref(-33.333) // Start positioned to show middle panel

// Initialize infinite panels
const initializePanels = () => {
  const prevIndex = (currentIndex.value - 1 + panels.length) % panels.length
  const nextIndex = (currentIndex.value + 1) % panels.length
  
  infinitePanels.value = [
    { ...panels[prevIndex], originalIndex: prevIndex },
    { ...panels[currentIndex.value], originalIndex: currentIndex.value },
    { ...panels[nextIndex], originalIndex: nextIndex }
  ]
}

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
    // Swipe left - go to next
    goToNext()
  } else {
    // Swipe right - go to previous
    goToPrevious()
  }
}

const goToNext = () => {
  currentIndex.value = (currentIndex.value + 1) % panels.length
  initializePanels()
  // Keep the translateX at the same position to show middle panel
  translateX.value = -33.333 + 10 // -23.333%
}

const goToPrevious = () => {
  currentIndex.value = (currentIndex.value - 1 + panels.length) % panels.length
  initializePanels()
  // Keep the translateX at the same position to show middle panel
  translateX.value = -33.333 + 10 // -23.333%
}

// Initialize on mount
initializePanels()
</script>

<style scoped>
.information {
  background: linear-gradient(to bottom, #fff, #fef6f9);
  display: flex;
  justify-content: center;
  padding: 32px 0;
}

.swipe-wrapper {
  max-width: 480px;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
}

.swipe-wrapper::before,
.swipe-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 10%;
  background: transparent;
  z-index: 1;
  pointer-events: none;
}

.swipe-wrapper::before {
  left: 0;
}

.swipe-wrapper::after {
  right: 0;
}

.swipe-track {
  display: flex;
  transition: transform 0.4s ease;
  width: 300%; /* Track needs to be 3x viewport to hold 3 panels */
}

.swipe-panel {
  flex: 0 0 33.333%; /* Each panel takes 1/3 of track (= 100% of viewport) */
  box-sizing: border-box;
  text-align: center;
  padding: 16px 8px;
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.5;
}

.swipe-panel.active {
  opacity: 1;
}

.img-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  background: #f5f5f5;
}

.swipe-panel img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

.swipe-panel h3 {
  font-size: 18px;
  margin: 16px 0 8px 0;
}

.swipe-panel p {
  font-size: 14px;
  margin: 0;
  line-height: 1.4;
}
</style>
