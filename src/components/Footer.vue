<template>
  <footer class="wed-footer">
    <div class="footer-line"></div>

    <div class="footer-text">
      <p class="footer-names">💍 Jaewon & Soojin</p>
      <p class="footer-date">September 21, 2025 · Pangyo</p>
    </div>

    <div class="footer-links">
      <a href="#gallery">📸 Gallery</a>
      <a href="#map">🗺️ Map</a>
    </div>
  </footer>
</template>

<style scoped>
.wed-footer {
  padding: 24px 16px;
  background-color: #fdfdfd;
  text-align: center;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 14px;
  color: #444;
  border-top: 1px solid #ddd;
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

