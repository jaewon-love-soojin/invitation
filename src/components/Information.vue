<template>
  <div class="wrapper">
    <h2 class="title2">INFORMATION</h2>
    <h2 class="invitation-text">예식정보 및 안내사항</h2>
    <div class="information">
      <div
        class="swipe-container"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >
        <transition-group
          name="slide"
          tag="div"
          class="swipe-track"
        >
          <div class="swipe-panel" :key="currentIndex">
            <img :src="panels[currentIndex].img" alt="panel image" />
            <h3>{{ panels[currentIndex].title }}</h3>
            <p>{{ panels[currentIndex].text }}</p>
          </div>
        </transition-group>
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
    // swipe left
    currentIndex.value = (currentIndex.value + 1) % panels.length
  } else {
    // swipe right
    currentIndex.value =
      (currentIndex.value - 1 + panels.length) % panels.length
  }
}
</script>

<style scoped>
.information {
  background: linear-gradient(to bottom, #fff, #fef6f9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.swipe-container {
  max-width: 480px;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.swipe-track {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.swipe-panel {
  width: 100%;
  text-align: center;
  padding: 16px;
  box-sizing: border-box;
}

.swipe-panel img {
  width: 100%;
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 16px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease;
  position: absolute;
  width: 100%;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
