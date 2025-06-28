<template>
  <div class="gallery-wrapper">
    <div class="gallery">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-item"
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
.gallery-wrapper {
  max-width: 480px;
  padding: 20px;
  display: flex;
  justify-content: center;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
  max-width: 800px;
  width: 100%;
}
.gallery-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
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
