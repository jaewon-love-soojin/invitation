<template>
  <div class="section-title">
    <h2 class="en">{{ en }}</h2>
    <h2 class="ko">{{ ko }}</h2>
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
  margin: 0rem 0 0rem;
}
.en {
  font-family: 'Great Vibes', cursive;
  font-size: 1.8rem;
  color: #93729B;
  margin-bottom: 0.0rem;
  margin: 0;
}
.ko {
  font-family: 'Gowun Dodum', sans-serif;
  font-size: 1.2rem;
  color: #93729B;
  margin: 0;
}
</style>
