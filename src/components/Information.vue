<template>
  <div class="information">
    <h2 class="title2">INFORMATION</h2>
    <h2 class="information-text">예식정보 및 안내사항</h2>

    <div
      class="tabs-slider"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <div
        class="tabs-track"
        :style="{ transform: `translateX(-${currentTab * 100}%)` }"
      >
        <div v-for="(tab, i) in tabs" :key="i" class="tab-panel" :class="{ active: i === currentTab }">
          <img :src="tab.img" :alt="'Tab ' + i" />
          <p>{{ tab.text }}</p>
          <p>{{ tab.item1 }}</p>
          <p>{{ tab.item2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const currentTab = ref(0)

const tabs = [
  {
    img: `${import.meta.env.BASE_URL}images/parking.jpg`,
    text: '자가용 및 주차 이용',
    item1: '지하 3층 주차장 무료로 이용 가능합니다. (오후 6시까지이용 가능)',
    item2: '주차 공간 여유 있습니다.',

  },
  {
    img: `${import.meta.env.BASE_URL}images/banquet.jpg`,
    text: '연회 & 식사 안내',
    item1: '식당과 웨딩홀은 지하 1층에 위치하고 있습니다.',
    item2: '식사 시간은 오전 11시부터 오후 2시까지 입니다.',
  }
]

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
  if (delta < 0 && currentTab.value < tabs.length - 1) currentTab.value++
  else if (delta > 0 && currentTab.value > 0) currentTab.value--
}
</script>

<style scoped>
.tabs-slider {
  overflow: hidden;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  position: relative;
}

.tabs-track {
  display: flex;
  transition: transform 0.4s ease;
  width: 80%; /* 100% * number of tabs */
}

.tab-panel {
  flex: 0 0 100%;
  padding: 0 12px;
  opacity: 0.4;
  transform: scale(0.92);
  transition: all 0.3s ease;
  text-align: center;
}

.tab-panel.active {
  opacity: 1;
  transform: scale(1);
}

.tab-panel img {
  width: 100%;
  max-width: 480px;
  height: auto;
  display: block;
  border-radius: 10px;
  margin: 0 auto 12px;
}

.highlight {
  color: red;
  padding: 0px 0px;
  border-radius: 0px;
}

.information {
  position: relative;
  background: linear-gradient(to bottom, #fff, #fef6f9);
  text-align: center;
  padding: 32px 16px;
  overflow: hidden;
}
.title {
  font-family: 'Great Vibes', cursive;
  font-size: 2.5em;
  color: #d6336c;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.names {
  font-size: 1.8em;
  color: #6a1b9a;
  margin-bottom: 10px;
}

.details {
  font-size: 1em;
  margin-bottom: 20px;
}
.information-img-wrapper {
  width: 100%;
  max-width: 480px;
  margin: 0 auto 12px;
  overflow: hidden;
}
.information-img {
  width: 100%;
  height: auto;
  display: block;
}

.fixed-text {
  display: inline-block;
  width: 55px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
}

</style>
