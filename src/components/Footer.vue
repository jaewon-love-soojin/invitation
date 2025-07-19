<template>
  <footer class="wed-footer">
    <div class="image-overlay-wrapper">
      <img :src="footerImg" alt="footer" />
      <div class="overlay-text">
        <p>장담하건대, 세상이 다 겨울이어도</p>
        <p>우리 사랑은 늘 봄처럼 따뜻하고</p>
        <p>간혹, 여름처럼 뜨거울 겁니다.</p>
        <p>이수동, 사랑가</p>
      </div>
    </div>

    <div class="footer-line"></div>

    <div class="footer-text">
      <p class="footer-names">💍 Jaewon & Soojin</p>
      <p class="footer-date">September 21, 2025 · Pangyo</p>
    </div>

    <div class="footer-links">
      <a href="#gallery">📸 Gallery</a>
      <a href="#location">🗺️ Map</a>
    </div>
  </footer>
</template>

<script setup>
  const footerImg = `${import.meta.env.BASE_URL}images/footer.jpg`;
</script>

<style scoped>
.image-overlay-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 480px;
}

.image-overlay-wrapper img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  display: block;
}

.overlay-text {
  position: absolute;
  bottom: 16px;
  left: 16px;
  transform: none;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.4;
  text-align: left;
}

.wed-footer {
  padding: 24px 16px;
  background-color: #fdfdfd;
  text-align: center;
  font-size: 14px;
  color: #444;
  margin-top: 48px;
}

.footer-line {
  width: 60px;
  height: 2px;
  background-color: #d8a9a9;
  margin: 0 auto 12px;
}

.footer-names {
  font-weight: bold;
  font-size: 16px;
  margin: 0;
}

.footer-date {
  margin: 4px 0 12px;
  color: #888;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-links a {
  text-decoration: none;
  color: #555;
  font-weight: 500;
}
.footer-links a:hover {
  text-decoration: underline;
}

html {
  scroll-behavior: smooth;
}
</style>

