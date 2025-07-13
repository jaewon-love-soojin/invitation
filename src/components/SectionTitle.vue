<template>
  <div class="section-title">
    <h2 class="en">{{ en }}</h2>
    <h3 class="ko">{{ ko }}</h3>
  </div>
</template>

<script setup>
defineProps({
  en: String,
  ko: String,
})
</script>

<style scoped>
.section-title {
  text-align: center;
  margin: 2rem 0 1rem;
}
.en {
  font-family: 'Great Vibes', cursive;
  font-size: 1.8rem;
  color: #BA68C8;
  margin-bottom: 0.2rem;
}
.ko {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.2rem;
  color: #BA68C8;
}
</style>
