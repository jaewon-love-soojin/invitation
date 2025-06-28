<template>
  <div class="topbar">
    <h2 class="title2">THE NEW BEGINNING</h2>
    <h2 class="topbar-text">최재원 그리고 나수진</h2>
    <div class="topbar-img-wrapper">
      <img :src="welcomeImage" alt="Welcome" class="topbar-img" />
      <div class="wave"></div>
    </div>
    <div class="flower-container">
      <div v-for="n in 10" :key="n" class="flower" :style="{ '--i': n }"></div>
    </div>
    <h1 class="title">We are getting married</h1>
    <p class="subtitle">🗓️ 2025년 9월 21일 일요일 낮 12시</p>
    <p class="subtitle">📍 엔씨소프트 R&D 센터 지하1층 컨벤션 홀</p>
  </div>
</template>

<script setup>
// No script needed unless you want dynamic props later
  const welcomeImage = `${import.meta.env.BASE_URL}images/1.jpg`;
</script>

<style scoped>
.topbar {
  position: relative;
  background: linear-gradient(to bottom, #fff, #fef6f9);
  text-align: center;
  padding: 32px 16px;
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

.wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 40px;
  background: linear-gradient(to top, #fef6f9, transparent);
  mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg"><path d="M0 20 Q 30 0, 60 20 T 120 20 V28 H0 Z" fill="black"/></svg>');
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 120 28\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 20 Q 30 0, 60 20 T 120 20 V28 H0 Z\" fill=\"black\"/></svg>');
  mask-size: 200% 100%;
  -webkit-mask-size: 200% 100%;
  mask-repeat: repeat-x;
  -webkit-mask-repeat: repeat-x;
  animation: waveShift 4s linear infinite;
  z-index: 2;
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
</style>

