<template>
  <div class="information-section">
    <SectionTitle en="Information" ko="안내 사항" />
    <div class="tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-button', { active: currentTab === index }]"
        @click="currentTab = index"
      >
        {{ tab.title }}
      </button>
    </div>

    <div class="tab-content">
      <img :src="tabs[currentTab].img" :alt="tabs[currentTab].title" />
      <p class="description" v-html="tabs[currentTab].description.replace(/\n/g, '<br>')" </p>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue';
import { ref } from 'vue'

const tabs = [
  {
    title: '연회장 안내',
    img: `${import.meta.env.BASE_URL}images/banquet.jpg`,
    description: '식당과 웨딩홀은 지하 1층에 위치하고 있습니다.\n식사 시간은 오전 11시부터 오후 2시까지 입니다.'
  },
  {
    title: '주차장 이용 안내',
    img: `${import.meta.env.BASE_URL}images/parking.jpg`,
    description: '웨딩홀 지하 3층 주차장이 무료로 이용 가능합니다.\n(오후 6시까지 이용 가능, 주차권 없이 출차 가능)\n\n주차 공간이 여유 있으니,\n천천히 안전하게 오시기 바랍니다.'
  },
]

const currentTab = ref(0)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.information-section {
  margin-top: 5rem;
  max-width: 480px;
  padding: 32px 16px;
  text-align: center;
}

/* Pill-style tab buttons with underline on active */
.tabs {
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #eee;
  margin-top: 16px;
  margin-bottom: 16px;
}

.tab-button {
  background: none;
  border: none;
  outline: none;
  padding: 10px 16px;
  font-size: 1rem;
  color: #777;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
}

.tab-button.active {
  color: #93729B;
  font-weight: 600;
}

.tab-button.active::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #93729B;
  border-radius: 2px;
}

.tab-content img {
  width: 100%;
  height: 200px; /* ✅ Set a consistent height */
  border-radius: 12px;
  object-fit: cover; /* ✅ Crop to fill frame */
  margin-bottom: 12px;
  border: 2px solid #ddd;
}

.description {
  font-size: 0.95rem;
  color: #444;
}
</style>
