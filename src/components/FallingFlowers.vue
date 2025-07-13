<template>
  <div class="flower-wrapper">
    <div class="flower" style="left: 50%; font-size: 32px; animation-delay: 0s; animation-duration: 6s;">
      🌸
    </div>
    <div
      v-for="flower in flowers"
      :key="flower.id"
      class="flower"
      :style="flower.style"
    >
      🌸
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const flowers = ref([])

onMounted(() => {
  const total = 15
  for (let i = 0; i < total; i++) {
    const delay = Math.random() * 10
    const duration = 6 + Math.random() * 4
    const left = Math.random() * 100
    const size = 24 + Math.random() * 16

    flowers.value.push({
      id: i,
      style: {
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        fontSize: `${size}px`
      }
    })
  }
})
</script>

<style scoped>
.flower-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1; /* Behind content */
}

.flower {
  position: absolute;
  top: -10%;
  animation-name: fall, flutter;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes fall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(110vh) rotate(360deg);
    opacity: 0.3;
  }
}

@keyframes flutter {
  0%, 100% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(20px);
  }
}
</style>

