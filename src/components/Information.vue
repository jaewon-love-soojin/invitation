<template>
  <div class="information">
    <div
      class="swipe-wrapper"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <div
        class="swipe-track"
        :style="{ transform: `translateX(-${currentIndex * 10}%)` }"
      >
        <div
          v-for="(panel, i) in panels"
          :key="i"
          class="swipe-panel"
          :class="{ active: i === currentIndex }"
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
    currentIndex.value = (currentIndex.value + 1) % panels.length
  } else {
    currentIndex.value = (currentIndex.value - 1 + panels.length) % panels.length
  }
}
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
}

.swipe-track {
  display: flex;
  transition: transform 0.4s ease;
  width: 100%;
}

.swipe-panel {
  flex: 0 0 10%;
  box-sizing: border-box;
  text-align: center;
  padding: 8px 4px;
  opacity: 0.3;
  transform: scale(0.8);
  transition: all 0.3s ease;
  overflow: hidden;
}

.swipe-panel.active {
  flex: 0 0 80%;
  opacity: 1;
  transform: scale(1);
  padding: 16px 8px;
}

.img-wrapper {
  width: 100%;
  height: 120px;
  overflow: hidden;
  border-radius: 10px;
  background: #f5f5f5;
}

.swipe-panel.active .img-wrapper {
  height: 200px;
}

.swipe-panel img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

.swipe-panel h3 {
  font-size: 12px;
  margin: 8px 0 4px 0;
  opacity: 0.7;
}

.swipe-panel.active h3 {
  font-size: 18px;
  margin: 16px 0 8px 0;
  opacity: 1;
}

.swipe-panel p {
  font-size: 10px;
  margin: 0;
  opacity: 0.5;
  line-height: 1.2;
}

.swipe-panel.active p {
  font-size: 14px;
  opacity: 1;
  line-height: 1.4;
}
</style>
