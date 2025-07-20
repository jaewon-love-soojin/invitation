<template>
  <footer class="wed-footer">
    <div class="image-overlay-wrapper">
      <img :src="footerImg" alt="footer" />
      <div class="overlay-text">
        <p class="text">장담하건대, 세상이 다 겨울이어도</p>
        <p class="text">우리 사랑은 늘 봄처럼 따뜻하고</p>
        <p class="text">간혹, 여름처럼 뜨거울 겁니다.</p>
        <p class="writer">이수동, 사랑가</p>
      </div>
    </div>

    <button class="kakao-share-btn" @click="shareKakao">
      <img :src="kakaoIcon" alt="카카오톡 아이콘" />
      <span class="kakao-text">카카오톡으로 공유하기</span>
    </button>

    <div class="footer-line"></div>
    <div class="footer-text">
      <p class="footer-names">Jaewon 💜 Soojin</p>
      <p class="footer-date">September 21, 2025 · Pangyo</p>
    </div>

    <div class="footer-links">
      <a href="#gallery">📸 Gallery</a>
      <a href="#location">🗺️ Map</a>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue'

const footerImg = `${import.meta.env.BASE_URL}images/footer.jpg`;
const kakaoIcon = `${import.meta.env.BASE_URL}images/kakao.png`;

const initializeKakao = () => {
  const kakaoKey = import.meta.env.VITE_KAKAO_KEY
  if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init(kakaoKey);
  }
};

const shareKakao = () => {
  if (!window.Kakao || !window.Kakao.Share) {
    alert('Kakao SDK not loaded');
    return;
  }

  const siteUrl = import.meta.env.VITE_SITE_URL;
  const name = '엔씨소프트R&D센터'
  const naverLink = `https://map.naver.com/v5/search/${encodeURIComponent(name)}`
  const sharingImg = 'https://raw.githubusercontent.com/hellojaewon/wed/d8f4de79054ee64509040151c0456b1367d397af/public/images/sharing.jpg';

  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '저희 아들❤️딸이 결혼합니다',
      description: '2025년 9월 21일 일요일 낮 12시, 엔씨소프트R&D센터 컨벤션홀',
      imageUrl: sharingImg,
      link: {
        mobileWebUrl: siteUrl,
        webUrl: siteUrl,
      },
    },
    buttons: [
      {
        title: '청첩장 보기',
        link: {
          mobileWebUrl: siteUrl,
          webUrl: siteUrl,
        },
      },
      {
        title: '위치 보기',
        link: {
          mobileWebUrl: naverLink,
          webUrl: naverLink,
        },
      },
    ],
  });
};

onMounted(() => {
  // Retry until Kakao SDK is ready (up to 2 seconds)
  let retry = 0;
  const interval = setInterval(() => {
    if (window.Kakao) {
      initializeKakao();
      clearInterval(interval);
    }
    retry++;
    if (retry > 20) clearInterval(interval); // Stop after 2s
  }, 100);
});
</script>

<style scoped>
.kakao-text {
  color: black;
}

.kakao-share-btn {
  background: none;
  border: none;
  padding: 6px 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  margin-bottom: 2rem;
}

.kakao-share-btn img {
  width: 20px;
  height: 20px;
  display: block;
}

p {
  margin: 4px 0;
}
p.writer {
  margin-top: 8px;
  margin-left: 2rem;
}
p.text {
  margin-left: 2rem;
}

.image-overlay-wrapper {
  width: 100%;
  max-width: 480px;
  margin: 0 auto 12px;
  overflow: hidden;
  position: relative;
  margin-bottom: 3rem; /* Adjusted for better spacing */
}

.image-overlay-wrapper::before,
.image-overlay-wrapper::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 1;
  pointer-events: none;
}

.image-overlay-wrapper::before {
  top: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
}

.image-overlay-wrapper::after {
  bottom: 0;
  background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
}

.image-overlay-wrapper img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  display: block;
}

.overlay-text {
  position: absolute;
  width: 100%;
  bottom: 50px;
  transform: none;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 14px;
  line-height: 1.4;
  text-align: left;
}

.wed-footer {
  margin-top: 5rem;
  background-color: #fdfdfd;
  text-align: center;
  font-size: 14px;
  color: #444;
}

.footer-line {
  width: 60px;
  height: 2px;
  background-color: #93729B;
  margin-top: 5rem;
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

