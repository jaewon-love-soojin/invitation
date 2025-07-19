<template>
  <div class="intro-wrapper">
    <div class="topbar">
      <div class="topbar-img-wrapper">
        <img :src="welcomeImage" alt="Welcome" class="topbar-img" />
      </div>
      <div class="flower-container">
        <div v-for="n in 10" :key="n" class="flower"
         :style="{
           '--i': n,
           '--scale': (Math.random() * 0.2 + 0.5).toFixed(2),
           '--direction': Math.random() > 0.5 ? '1' : '-1'     // spin direction
         }"
          >
        </div>
      </div>
      <SectionTitle en="The wedding of" />
      <p class="main">
        <span class="name">최재원</span>
        <span class="and">그리고</span>
        <span class="name">나수진</span>
      </p>
      <p class="subtitle">2025년 9월 21일 일요일 낮 12시</p>
      <p class="subtitle">엔씨소프트 R&D 센터 컨벤션홀</p>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue';
const welcomeImage = `${import.meta.env.BASE_URL}images/intro.jpg`;
</script>

<style scoped>
/* ✅ Prevent horizontal scroll */
.intro-wrapper {
  overflow-x: hidden;
  position: relative;
  font-family: 'Gowun Dodum', sans-serif;
}

/* Layout */
.main {
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 3.0rem;
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

/* ✅ Flower animation container */
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
  width: calc(18px * var(--scale));
  height: calc(16px * var(--scale));
  background: #f8f3fc;
  animation: flutter 12s linear infinite;
  animation-delay: calc(-1s * var(--i));
  opacity: 0.8;
  transform: rotate(-45deg);
  transform-origin: center;
  box-shadow:
    0 0 2px #cba8f0,
    0 0 6px #e0bbff,
    0 0 10px rgba(216, 180, 248, 0.5);
  border-radius: 0 0 50% 50%;
}

.flower::before,
.flower::after {
  content: "";
  position: absolute;
  width: calc(18px * var(--scale));
  height: calc(16px * var(--scale));
  background: #f8f3fc;
  border-radius: 50%;
}

.flower::before {
  top: calc(-9px * var(--scale));
  left: 0;
}

.flower::after {
  top: 0;
  left: calc(9px * var(--scale));
}

/* Updated animation: scale & spin direction */
@keyframes flutter {
  0% {
    transform: translateY(-20px) rotate(calc(0deg * var(--direction))) scale(var(--scale));
    opacity: 0.8;
  }
  25% {
    transform: translateY(25vh) translateX(-10px) rotate(calc(45deg * var(--direction))) scale(var(--scale));
  }
  50% {
    transform: translateY(50vh) translateX(10px) rotate(calc(90deg * var(--direction))) scale(var(--scale));
  }
  75% {
    transform: translateY(75vh) translateX(-15px) rotate(calc(135deg * var(--direction))) scale(var(--scale));
  }
  100% {
    transform: translateY(120vh) rotate(calc(180deg * var(--direction))) scale(var(--scale));
    opacity: 0;
  }
}

.subtitle {
  font-size: 1.2em;
  text-align: center;
  margin: 4px 0; /* Reduced vertical spacing */
}

.details {
  font-size: 1em;
  margin-bottom: 20px;
}

.name {
  font-size: 1.15em;
  font-weight: bold;
  display: inline-block;
}

.and {
  font-size: 0.8em;
  display: inline-block;
  width: 70px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
}
</style>
