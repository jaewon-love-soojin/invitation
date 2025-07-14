<template>
  <div class="intro-wrapper">
    <div class="topbar">
      <div class="topbar-img-wrapper">
        <img :src="welcomeImage" alt="Welcome" class="topbar-img" />
      </div>
      <div class="flower-container">
        <div v-for="n in 10" :key="n" class="flower" :style="{ '--i': n }"></div>
      </div>
      <SectionTitle en="The wedding of" />
      <p>
        <span>최재원</span>
        <span class="and">그리고</span>
        <span>나수진</span>
      </p>
      <p class="subtitle">🗓️ 2025년 9월 21일 일요일 낮 12시</p>
      <p class="subtitle">📍 엔씨소프트 R&D 센터 컨벤션 홀</p>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue';
const welcomeImage = `${import.meta.env.BASE_URL}images/1.jpg`;
</script>

<style scoped>
/* ✅ Prevent horizontal scroll */
.intro-wrapper {
  overflow-x: hidden;
  position: relative;
}

/* Layout */
p {
  text-align: center;
}

.topbar-img-wrapper {
  width: 100%;
  max-width: 480px;
  margin: 0 auto 12px;
  overflow: hidden;
  position: relative;
}

.topbar-img-wrapper::before,
.topbar-img-wrapper::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 1;
  pointer-events: none;
}

.topbar-img-wrapper::before {
  top: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
}

.topbar-img-wrapper::after {
  bottom: 0;
  background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
}

.topbar-img {
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  z-index: 0;
}

/* ✅ Prevent flowers from overflowing */
.flower-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.flower {
  position: absolute;
  top: -30px;
  left: calc((100vw - 18px) * var(--i) / 10);
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
