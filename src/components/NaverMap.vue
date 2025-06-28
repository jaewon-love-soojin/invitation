<template>
  <div>
    <h2 class="title2">LOCATION</h2>
    <h2 class="title2">오시는길</h2>
    <p class="subtitle">📍 엔씨소프트 R&D 센터 지하1층 컨벤션 홀</p>
    <p class="subtitle">경기 성남시 분당구 대왕판교로644번길 12</p>
    <div id="map" class="map-container"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  const apiKey = import.meta.env.VITE_X_NCP_APIGW_API_KEY_ID
  script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${apiKey}`

  script.async = true
  script.onload = () => {
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.3995154, 127.1083402),
      zoom: 15
    })

    new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3995154, 127.1083402),
      map: map
    })
  }
  document.head.appendChild(script)
})
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 300px;
  margin-top: 2rem;
}
</style>
