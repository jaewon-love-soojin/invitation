<!-- Calendar.vue -->
<template>
  <div class="calendar-wrapper">
    <div class="calendar-container">
      <h2>{{ year }}.{{ monthName }} {{ date }}</h2>
      <div class="calendar">
        <div v-for="(d, i) in daysOfWeek" :key="d" :class="['header', i === 0 ? 'sunday' : '']" > {{ d }} </div>
        <div v-for="blank in firstDayOfMonth" :key="'b' + blank" class="day"></div>
        <div v-for="day in daysInMonth"
          :key="day"
          :class="[ 'day', isSunday(day) ? 'sunday' : '', pinnedDay == day ? 'pinned' : '' ]"
        >
          {{ day }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  year: { type: Number, default: 2025 },
  month: { type: Number, default: 8 }, // 0 = January, 5 = June
  pinnedDay: { type: Number, default: 21 }
})

const isSunday = (day) => {
  const date = new Date(props.year, props.month, day)
  return date.getDay() === 0
}

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토']

const firstDayOfMonth = computed(() =>
  new Date(props.year, props.month, 1).getDay()
)

const daysInMonth = computed(() =>
  new Date(props.year, props.month + 1, 0).getDate()
)

const monthName = computed(() =>
  new Date(props.year, props.month).toLocaleString('default', { month: 'long' })
)
const date = computed(() => {
  props.pinnedDay[0]
})
</script>

<style scoped>
.calendar-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.calendar-container {
  font-family: sans-serif;
  text-align: center;
  padding: 16px;
  border-radius: 8px;
  max-width: 360px;
}
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  width: fit-content;
}
.header,
.day {
  padding: 10px;
  text-align: center;
  border-radius: 4px;
}
.header {
  font-weight: bold;
}
.pinned {
  background-color: #ffecb3;
  font-weight: bold;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.sunday {
  color: red;
}

</style>

