<template>
  <div class="location">
    <h2 class="title2">LOCATION</h2>
    <h2 class="title2">오시는길</h2>
    <p class="subtitle">📍 엔씨소프트 R&D 센터 지하1층 컨벤션 홀</p>
    <p class="subtitle">경기 성남시 분당구 대왕판교로644번길 12</p>
    <div class="map">
      <div id="map" class="map-container"></div>
    </div>

    <div class="left-text">
      <p>내비게이션</p>
      <p>원하시는 앱을 선택하시면 길안내가 시작됩니다.</p>
    </div>
    <div class="nav-links">
      <a :href="naverLink" target="_blank">🚘 Naver Map</a>
      <a :href="tmapLink" target="_blank">📍 Tmap</a>
      <a :href="kakaoLink" target="_blank">🧭 Kakao Map</a>
    </div>

    <div class="left-text">
      <p class="subtitle">지하철</p>
      <span class="color-circle red"></span> 신분당선,
      <span class="color-circle blue"></span> 경강선 판교역
      <p>﹒4번 출구, 도보 11분</p>
    </div>

    <div class="left-text">
      <p class="subtitle">버스</p>
      <p>NC소프트 하차</p>
      <p><span class="color-circle green"></span> 일반 : 375, 380</p>
      <p><span class="color-circle dark-orange"></span> 급행 : 9007</p>
      <p><span class="color-circle light-green"></span> 마을 : 66, 73, 82, 602-1A, 602-1B, 602-2B</p>
    </div>
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

const lat = 37.3995154
const lng = 127.1083402
const name = '엔씨소프트R&D센터'

// 📍 Naver (Web Link)
const naverLink = `https://map.naver.com/v5/search/${encodeURIComponent(name)}`

// 📍 Tmap (Intent or App URL)
const tmapLink = `tmap://?route?rGoName=${encodeURIComponent(name)}&rGoX=${lng}&rGoY=${lat}`

// 📍 Kakao (Web Link)
const kakaoLink = `kakaomap://route?ep=${lat},${lng}&by=CAR`


</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px;
  margin-top: 2rem;
}

.highlight {
  color: red;
  padding: 0px 0px;
  border-radius: 0px;
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

.nav-links a {
  max-width: 480px;
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

.left-text {
  text-align: left;
}

.color-circle {
  display: inline-block;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 0 4px;
}

.red          { background-color: #e53935; }
.blue         { background-color: #1e88e5; }
.green        { background-color: #43a047; }
.light-green  { background-color: #a5d6a7; }
.dark-orange  { background-color: #f4511e; }
</style>

