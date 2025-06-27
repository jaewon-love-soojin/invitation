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
      <span class="close-btn" @click="closeModal">×</span>
      <img
        class="modal-image"
        :src="fullPath(images[selectedImage].src)"
        :alt="images[selectedImage].alt"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
})

const selectedImage = ref(null)

const openModal = (index) => {
  selectedImage.value = index
}

const closeModal = () => {
  selectedImage.value = null
}

const fullPath = (src) => `${import.meta.env.BASE_URL}${src.replace(/^\/+/, '')}`

// 🔥 Swipe handling
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
    selectedImage.value += 1 // Swipe left → next
  } else if (delta > 0 && selectedImage.value > 0) {
    selectedImage.value -= 1 // Swipe right → prev
  }
}

// 🔁 Optional: desktop arrow key navigation
const onKeydown = (e) => {
  if (selectedImage.value === null) return
  if (e.key === 'ArrowRight' && selectedImage.value < props.images.length - 1) {
    selectedImage.value += 1
  }
  if (e.key === 'ArrowLeft' && selectedImage.value > 0) {
    selectedImage.value -= 1
  }
  if (e.key === 'Escape') {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.gallery-wrapper {
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

/* Modal */
.modal {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-image {
  max-width: 90%;
  max-height: 90%;
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
}
</style>
