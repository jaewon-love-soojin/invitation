<script setup>
import { ref, onMounted, watch } from 'vue'
import { toRaw } from 'vue'

const props = defineProps({
  targetDate: {
    type: Date,
    required: true
  }
})

const timeLeft = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })

const updateCountdown = () => {
  const now = new Date()
  const diff = props.targetDate - now

  if (diff <= 0) {
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return
  }

  timeLeft.value = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

onMounted(() => {
  updateCountdown()
  setInterval(updateCountdown, 1000)
})
</script>

<template>
  <div>
    <div class="timer-container">
      <div class="timer-grid">
        <div class="timer-col-header">DAYS</div>
        <div class="timer-col-header">HOURS</div>
        <div class="timer-col-header">MIN</div>
        <div class="timer-col-header">SEC</div>

        <div class="timer-value">{{ timeLeft.days }}</div>
        <div class="timer-value">{{ timeLeft.hours }}</div>
        <div class="timer-value">{{ timeLeft.minutes }}</div>
        <div class="timer-value">{{ timeLeft.seconds }}</div>
      </div>
    </div>
    <p>
      재원, 수진의 결혼식이<span class="highlight">{{ timeLeft.days  + 1}}</span>일 남았습니다.
    </p>
  </div>
</template>

<style scoped>
.highlight {
  color: red;
  padding: 0px 1px;
  border-radius: 4px;
}
.timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Courier New', monospace;
  margin: 20px 0;
}

.timer-grid {
  display: grid;
  grid-template-columns: repeat(4, 70px); /* 4 equal columns */
  gap: 10px;
  justify-content: center;
  text-align: center;
  font-family: 'Courier New', monospace;
}

.timer-col-header {
  font-size: 14px;
  font-weight: bold;
  color: #555;
}

.timer-value {
  font-size: 22px;
  font-weight: bold;
  border-radius: 6px;
  padding: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
}
</style>
