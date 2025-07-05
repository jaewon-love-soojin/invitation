<template>
  <div class="information">
    <div
      class="swipe-container"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <transition
        :name="swipeDirection"
        mode="out-in"
      >
        <div class="swipe-panel" :key="currentIndex">
          <img :src="panels[currentIndex].img" alt="panel image" />
          <h3>{{ panels[currentIndex].title }}</h3>
          <p>{{ panels[currentIndex].text }}</p>
        </div>
      </transition>
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

const currentIndex = ref(0)
const swipeDirection = ref('slide-left')

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
    swipeDirection.value = 'slide-left'
    currentIndex.value = (currentIndex.value + 1) % panels.length
  } else {
    swipeDirection.value = 'slide-right'
    currentIndex.value =
      (currentIndex.value - 1 + panels.length) % panels.length
  }
}
</script>

<style scoped>
.information {
  background: linear-gradient(to bottom, #fff, #fef6f9);
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swipe-container {
  max-width: 480px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swipe-panel {
  width: 100%;
  text-align: center;
  padding: 16px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
}

.swipe-panel img {
  width: 100%;
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 16px;
}

/* Slide left animation */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.4s ease;
}
.slide-left-enter-from {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}

/* Slide right animation */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.4s ease;
}
.slide-right-enter-from {
  transform: translateX(-100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
