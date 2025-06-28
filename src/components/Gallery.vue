<template>
  <div class="gallery-mood-wrapper">
    <h2 class="title2">GALLERY</h2>
    <h2 class="title2">웨딩 갤러리</h2>
    <div class="gallery-mood-grid">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-mood-item"
        @click="openModal(index)"
      >
        <img :src="fullPath(image.src)" :alt="image.alt || 'Gallery Image'" />
      </div>
    </div>

    <!-- Modal Preview -->
    <div
      v-if="selectedImage !== null"
      class="modal"
      @click.self="closeModal"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <div
        class="modal-bg"
        :style="{ backgroundImage: `url(${fullPath(images[selectedImage].src)})` }"
      ></div>
      <span class="close-btn" @click="closeModal">×</span>

      <div class="modal-content">
        <transition :name="transitionDirection || 'panorama'" mode="out-in">
          <div class="modal-image-wrapper" :key="selectedImage">
            <img
              class="modal-image"
              :src="fullPath(images[selectedImage].src)"
              :alt="images[selectedImage].alt"
            />
          </div>
        </transition>

        <!-- Dots Pagination -->
        <div class="modal-dots">
          <span
            v-for="(image, i) in images"
            :key="i"
            class="dot"
            :class="{ active: i === selectedImage }"
            @click="selectImage(i)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
})

const selectedImage = ref(null)
const transitionDirection = ref(null)

const openModal = (index) => {
  selectedImage.value = index
}
const closeModal = () => {
  selectedImage.value = null
}
const selectImage = (index) => {
  if (index === selectedImage.value) return
  transitionDirection.value = index > selectedImage.value ? 'panorama-left' : 'panorama-right'
  selectedImage.value = index
}
const fullPath = (src) => `${import.meta.env.BASE_URL}${src.replace(/^\/+/, '')}`

let touchStartX = 0
let touchEndX = 0
const SWIPE_THRESHOLD = 50

const onTouchStart = (e) => {
  touchStartX = e.changedTouches[0].clientX
}
const onTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].clientX
  handleSwipe()
}
const handleSwipe = () => {
  if (selectedImage.value === null) return
  const delta = touchEndX - touchStartX
  if (Math.abs(delta) < SWIPE_THRESHOLD) return
  if (delta < 0 && selectedImage.value < props.images.length - 1) {
    transitionDirection.value = 'panorama-left'
    selectedImage.value++
  } else if (delta > 0 && selectedImage.value > 0) {
    transitionDirection.value = 'panorama-right'
    selectedImage.value--
  }
}

const onKeydown = (e) => {
  if (selectedImage.value === null) return
  if (e.key === 'ArrowRight' && selectedImage.value < props.images.length - 1) {
    transitionDirection.value = 'panorama-left'
    selectedImage.value++
  }
  if (e.key === 'ArrowLeft' && selectedImage.value > 0) {
    transitionDirection.value = 'panorama-right'
    selectedImage.value--
  }
  if (e.key === 'Escape') closeModal()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
watch(selectedImage, (newVal) => {
  document.body.style.overflow = newVal !== null ? 'hidden' : ''
})
</script>

<style scoped>
.gallery-mood-wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}
.gallery-mood-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}
.gallery-mood-item {
  flex: 1 0 30%;
  max-width: 180px;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
}
.gallery-mood-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.gallery-mood-item:hover img {
  transform: scale(1.05);
}
.modal {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  touch-action: none;
  overflow: hidden;
}
.modal-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: blur(24px) brightness(0.3);
  z-index: 0;
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 90vh;
  gap: 16px;
  z-index: 1;
}
.modal-image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 6px;
  box-shadow: 0 0 12px #000;
}
.close-btn {
  position: absolute;
  top: 24px;
  right: 30px;
  font-size: 36px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  z-index: 1001;
}
.modal-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.dot {
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
  opacity: 0.4;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.dot.active {
  opacity: 1;
  transform: scale(1.4);
  background: #fff;
}
/* Panorama-style swipe transitions */
.panorama-left-enter-active,
.panorama-right-leave-active {
  transform: translateX(100%);
}
.panorama-left-leave-active,
.panorama-right-enter-active {
  transform: translateX(-100%);
}
.panorama-left-enter-active,
.panorama-left-leave-active,
.panorama-right-enter-active,
.panorama-right-leave-active {
  transition: transform 0.2s ease-in-out;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
