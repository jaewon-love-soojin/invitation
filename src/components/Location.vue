<template>
  <div class="location-section" id="location">
    <SectionTitle en="Location" ko="오시는길" />
    <div class="location">
      <p class="subtitle">엔씨소프트 R&D 센터 지하1층 컨벤션홀</p>
      <p class="subtitle">경기 성남시 분당구 대왕판교로644번길 12</p>
      <div class="map">
        <div id="map" class="map-container"></div>
      </div>

      <div class="nav-links-container">
        <div class="nav-links">
          <a :href="naverLink" target="_blank">
            <img :src="naverMap" class="nav-icon" alt="naver" />
            네이버지도
          </a>
          <a :href="tmapLink" target="_blank">
            <img :src="tMap" class="nav-icon" alt="tmap" />
            티맵
          </a>
          <a :href="kakaoLink" target="_blank">
            <img :src="kakaoMap" class="nav-icon" alt="kakao" />
            카카오내비
          </a>
        </div>
      </div>

      <div class="left-text">
        <p class="subtitle">🚇 지하철</p>
        <hr class="divider" />
        <span class="color-circle red"></span> 신분당선,
        <span class="color-circle blue"></span> 경강선 판교역
        <p>﹒1번 또는 4번 출구, 도보 11분</p>
      </div>

      <div class="left-text">
        <p class="subtitle">🚌 버스</p>
        <hr class="divider" />
        <p>NC소프트 하차</p>
        <p><span class="color-circle green"></span> 일반 : 375, 380</p>
        <p class="ncsoft">NC소프트.안랩 하차</p>
        <p class="bus"><span class="color-circle green"></span> 일반 : 101, 375, 380, 390</p>
        <p class="bus"><span class="color-circle dark-orange"></span> 급행 : 9007</p>
        <p class="bus"><span class="color-circle light-green"></span> 마을 : 66, 73, 82, 602-1A, 602-1B, 602-2B</p>
      </div>

      <div class="left-text">
        <p class="subtitle">🚗 자가용 및 주차 이용</p>
        <hr class="divider" />
        <p>내비게이션 엔씨소프트R&D센터 검색</p>
        <p class="item"><span class="color-circle dark-grey"></span>지하 3층 주차장 무료 이용 가능합니다.</p>
        <p class="item"><span class="color-circle dark-grey"></span>주차 공간 여유 있습니다.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue';
import { onMounted } from 'vue'

const naverMap = `${import.meta.env.BASE_URL}images/navermap.webp`;
const kakaoMap = `${import.meta.env.BASE_URL}images/kakaomap.svg`;
const tMap = `${import.meta.env.BASE_URL}images/tmap.webp`;

onMounted(() => {
  const script = document.createElement('script')
  const apiKey = import.meta.env.VITE_X_NCP_APIGW_API_KEY_ID
  script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${apiKey}`

  script.async = true
  script.onload = () => {
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.3995154, 127.1083402),
      zoom: 15,
      draggable: false,
      scrollWheel: false,
      disableDoubleClickZoom: true,
      pinchZoom: false,
      keyboardShortcuts: false,
      zoomControl: false,
      mapDataControl: false,
      scaleControl: false,
      logoControl: false
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
.bus {
  margin-top: -0.8rem;
}

.ncsoft {
  margin-top: 2rem;
}

.item {
  margin: 4px 0;
}

.location-section {
  margin-top: 5rem;
  margin-bottom: 2rem;
  padding: 0px 0px;
  text-align: center;
}

.location {
  margin-top: 2rem;
}

.map-container {
  width: 100%;
  height: 400px;
  margin-top: 2rem;
}

.nav-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  vertical-align: middle;
}

.nav-links-container {
  padding: 0 16px;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.nav-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 10px;
  min-width: 100px;
  white-space: nowrap;
  background: white !important;
  border: 1px solid #ddd;
  border-radius: 6px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 0.9rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  flex: 1 1 auto;
  max-width: 140px;
}

.divider {
  margin: 16px 0 6px;
  border: none;
  height: 1px;
  background-color: #eee;
  width: 100%;
}

.highlight {
  color: red;
  padding: 0px 0px;
  border-radius: 0px;
}

.subtitle {
  font-size: 1.2em;
  margin-bottom: 20px;
  margin: 4px 0; /* Reduced vertical spacing */
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

.left-text {
  text-align: left;
  margin: 6px;
  padding: 8px 20px;
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
.dark-grey    { background-color: #a8aaac; }
</style>

