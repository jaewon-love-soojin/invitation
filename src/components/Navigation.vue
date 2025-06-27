<template>
  <div class="nav-links">
    <a :href="naverLink" target="_blank">🚘 Naver Map</a>
    <a :href="tmapLink" target="_blank">📍 Tmap</a>
    <a :href="kakaoLink" target="_blank">🧭 Kakao Map</a>
  </div>
</template>

<script setup>
const lat = 37.5665
const lng = 126.9780
const name = '엔씨소프트R&D센터'

// 📍 Naver (Web Link)
const naverLink = `https://map.naver.com/v5/search/${encodeURIComponent(name)}`

// 📍 Tmap (Intent or App URL)
const tmapLink = `tmap://?name=${encodeURIComponent(name)}`

// 📍 Kakao (Web Link)
const kakaoLink = `https://map.kakao.com/link/to/${encodeURIComponent(name)},${lat},${lng}`
</script>

<style>
.nav-links a {
  display: inline-block;
  margin: 6px;
  padding: 8px 12px;
  background: #f4f4f4;
  border-radius: 6px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
}
</style>

