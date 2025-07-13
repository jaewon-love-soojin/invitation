<template>
  <div class="topbar">
    <div class="topbar-img-wrapper">
      <img :src="welcomeImage" alt="Welcome" class="topbar-img" />
    </div>
    <div class="flower-container">
      <div v-for="n in 10" :key="n" class="flower" :style="{ '--i': n }"></div>
    </div>
    <SectionTitle en="The wedding of"/>
    <p>
      <span>최재원</span>
      <span class="and">그리고</span>
      <span>나수진</span>
    </p>
    <p class="subtitle">🗓️ 2025년 9월 21일 일요일 낮 12시</p>
    <p class="subtitle">📍 엔씨소프트 R&D 센터 컨벤션 홀</p>
  </div>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue';
const welcomeImage = `${import.meta.env.BASE_URL}images/1.jpg`;
</script>

<style scoped>
.topbar {
  position: relative;
  background: linear-gradient(to bottom, #fff, #fef6f9);
  text-align: center;
  padding: 0px 0px;
  overflow: hidden;
}
.topbar-img-wrapper {
  width: 100%;
  max-width: 480px;
  margin: 0 auto 12px;
  overflow: hidden;
  border-top-left-radius: 240px;
  border-top-right-radius: 240px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.topbar-img {
  width: 100%;
  height: auto;
  display: block;
}
.flower-container {
  pointer-events: none;
}
.flower {
  position: absolute;
  top: -30px;
  left: calc(100% * var(--i) / 10);
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  opacity: 0.8;
  animation: flutter 8s linear infinite;
  animation-delay: calc(-1s * var(--i));
  box-shadow:
    0 0 2px #ccc,
    0 0 6px #eee,
    0 0 10px rgba(255, 255, 255, 0.5);
}
@keyframes flutter {
  0% { transform: translateY(-20px) translateX(0px) rotate(0deg); opacity: 0.8; }
  25% { transform: translateY(25vh) translateX(-10px) rotate(45deg); }
  50% { transform: translateY(50vh) translateX(10px) rotate(90deg); }
  75% { transform: translateY(75vh) translateX(-15px) rotate(135deg); }
  100% { transform: translateY(120vh) translateX(0px) rotate(180deg); opacity: 0; }
}
@keyframes waveShift {
  0% { background-position-x: 0%; }
  100% { background-position-x: 100%; }
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

.and {
  display: inline-block;
  width: 55px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
}
</style>

