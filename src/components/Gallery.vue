<template>
  <div class="gallery-section" id="gallery">
    <SectionTitle en="Gallery" />
    <div
      class="gallery-wrapper"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
    >
      <div
        class="gallery-track"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div class="gallery-slide" v-for="(img, index) in images" :key="index">
          <img :src="img" alt="gallery image" />
        </div>
      </div>

      <!-- ⬅ Arrow Left -->
      <button class="arrow left" @click="goPrev" :disabled="currentIndex === 0">
        ‹
      </button>

      <!-- ➡ Arrow Right -->
      <button class="arrow right" @click="goNext" :disabled="currentIndex === images.length - 1">
        ›
      </button>
    </div>

    <div class="gallery-indicator">
      {{ currentIndex + 1 }} / {{ images.length }}
    </div>
  </div>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue';
import { ref } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

const currentIndex = ref(0);

const goNext = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++;
  }
};

const goPrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

let touchStartX = 0;
let touchStartY = 0;
let isSwiping = false;

const onTouchStart = (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
  isSwiping = false;
};

const onTouchMove = (e) => {
  const deltaX = e.touches[0].clientX - touchStartX;
  const deltaY = e.touches[0].clientY - touchStartY;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    e.preventDefault(); // 🚫 prevent vertical scroll
    isSwiping = true;
  }
};

const onTouchEnd = (e) => {
  if (!isSwiping) return;
  const touchEndX = e.changedTouches[0].clientX;
  handleSwipe(touchEndX - touchStartX);
};

const onMouseDown = (e) => {
  touchStartX = e.clientX;
};

const onMouseUp = (e) => {
  const touchEndX = e.clientX;
  handleSwipe(touchEndX - touchStartX);
};

const SWIPE_THRESHOLD = 50;
const handleSwipe = (deltaX) => {
  if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
  deltaX < 0 ? goNext() : goPrev();
};
</script>

<style scoped>
.gallery-section {
  margin-top: 5rem;
  padding: 0;
  text-align: center;
}

.gallery-wrapper {
  margin-top: 2rem;
  overflow: hidden;
  width: 100%;
  position: relative;
  cursor: grab;
  touch-action: pan-y; /* ✅ allow vertical scroll when not swiping horizontally */
}

.gallery-track {
  display: flex;
  transition: transform 0.4s ease;
}

.gallery-slide {
  flex: 0 0 100%;
  box-sizing: border-box;
  padding: 0;
}

.gallery-slide img {
  width: 100%;
  object-fit: cover;
  display: block;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  font-size: 2rem;
  padding: 4px 12px;
  cursor: pointer;
  z-index: 10;
  background: none;
  color: grey;
}

.arrow.left {
  left: 10px;
}
.arrow.right {
  right: 10px;
}

.arrow:disabled {
  opacity: 0.4;
  cursor: default;
}

.gallery-indicator {
  margin-top: 12px;
  font-size: 0.95rem;
  font-weight: 500;
}
</style>
