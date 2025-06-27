<template>
  <div class="gallery-wrapper">
    <div class="gallery">
      <div
        v-for="(image, index) in pagedImages"
        :key="index"
        class="gallery-item"
        @click="openModal(currentPage * pageSize + index)"
      >
        <img :src="fullPath(image.src)" :alt="image.alt || 'Gallery Image'" />
      </div>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 0">‹ Prev</button>
        <span>{{ currentPage + 1 }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages - 1">Next ›</button>
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
      <transition :name="transitionDirection || 'fade'" mode="out-in">
        <img
          class="modal-image"
          :key="selectedImage"
          :src="fullPath(images[selectedImage].src)"
          :alt="images[selectedImage].alt"
        />
      </transition>
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

const transitionDirection = ref(null)
const selectedImage = ref(null)

import { computed } from 'vue'

const pageSize = 6
const currentPage = ref(0)
const totalPages = computed(() => Math.ceil(props.images.length / pageSize))

const pagedImages = computed(() =>
  props.images.slice(currentPage.value * pageSize, (currentPage.value + 1) * pageSize)
)

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) currentPage.value++
}
const prevPage = () => {
  if (currentPage.value > 0) currentPage.value--
}

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
    transitionDirection.value = 'left'
    selectedImage.value += 1
  } else if (delta > 0 && selectedImage.value > 0) {
    transitionDirection.value = 'right'
    selectedImage.value -= 1
  }
}

// 🔁 Optional: desktop arrow key navigation
const onKeydown = (e) => {
  if (selectedImage.value === null) return
  if (e.key === 'ArrowRight' && selectedImage.value < props.images.length - 1) {
    transitionDirection.value = 'left'
    selectedImage.value += 1
  }
  if (e.key === 'ArrowLeft' && selectedImage.value > 0) {
    transitionDirection.value = 'right'
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

/* Default fade fallback */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Slide left */
.left-enter-active, .left-leave-active,
.right-enter-active, .right-leave-active {
  transition: all 0.3s ease;
  position: absolute;
  width: 100%;
}
.left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.pagination {
  margin-top: 16px;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
}
.pagination button {
  padding: 6px 12px;
  background: #eee;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.pagination button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
