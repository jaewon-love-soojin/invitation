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
  <div class="countdown">
    <h3>Countdown to the Big Day 💍</h3>
    <p>
      {{ timeLeft.days }}d {{ timeLeft.hours }}h {{ timeLeft.minutes }}m {{ timeLeft.seconds }}s
    </p>
  </div>
</template>

<style scoped>
.countdown {
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #6a1b9a;
}
</style>

