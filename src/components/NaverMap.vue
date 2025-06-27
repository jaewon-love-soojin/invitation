<template>
  <div id="map" class="map-container">
    <img :src="imagePath()" />
  </div>
</template>

<script setup>
const imagePath = () => {
return `https://maps.apigw.ntruss.com/map-static/v2/raster-cors?w=300&h=300&center=127.1083402,37.3995154&level=16&X-NCP-APIGW-API-KEY-ID=${import.meta.env.VITE_X_NCP_APIGW_API_KEY_ID}`;
};
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 300px;
  margin-top: 2rem;
}
</style>
