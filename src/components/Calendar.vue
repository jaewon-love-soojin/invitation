<template>
  <div class="calendar-section">
    <SectionTitle en="Calendar" ko="SEPTEMBER" />
    <div class="calendar-wrapper">
      <div class="calendar-container">
        <div class="calendar">
          <div
            v-for="(d, i) in daysOfWeek"
            :key="d"
            :class="['header', i === 0 ? 'sunday' : '']"
          >
            {{ d }}
          </div>
          <div
            v-for="blank in firstDayOfMonth"
            :key="'b' + blank"
            class="day"
          ></div>
          <div
            v-for="day in daysInMonth"
            :key="day"
            :class="['day', isSunday(day) ? 'sunday' : '', pinnedDay === day ? 'pinned-day' : '']"
          >
            <template v-if="pinnedDay === day">
              <div class="svg-heart-wrapper">
                <svg viewBox="0 0 32 29.6" class="svg-heart" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23.6,0c-3.1,0-5.9,2-7.6,4.1C14.3,2,11.5,0,8.4,0C3.8,0,0,3.8,0,8.4
                      c0,9.3,16,21.2,16,21.2s16-11.9,16-21.2C32,3.8,28.2,0,23.6,0z"
                    fill="#a678e2"
                  />
                </svg>
                <span class="heart-text">{{ day }}</span>
              </div>
            </template>
            <template v-else>{{ day }}</template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue';
import { computed } from 'vue';

const props = defineProps({
  year: { type: Number, default: 2025 },
  month: { type: Number, default: 8 }, // 0 = Jan, so 8 = September
  pinnedDay: { type: Number, default: 21 }
});

const isSunday = (day) => {
  const date = new Date(props.year, props.month, day);
  return date.getDay() === 0;
};

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const firstDayOfMonth = computed(() =>
  new Date(props.year, props.month, 1).getDay()
);

const daysInMonth = computed(() =>
  new Date(props.year, props.month + 1, 0).getDate()
);
</script>

<style scoped>
.calendar-section {
  margin-top: 5rem;
  padding: 0 16px; /* ✅ Add padding for better spacing */
}

.calendar-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px; /* Add side spacing */
}

.calendar-container {
  text-align: center;
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px; /* Prevent overflow on mobile */
  margin: 0 auto;
}

.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  max-width: 100%;           /* ✅ control grid width */
  width: fit-content;         /* ✅ shrink to fit */
  margin: 0 auto;             /* ✅ center inside container */
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 12px 0;
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
.sunday {
  color: red;
}

/* ✅ SVG heart container */
.svg-heart-wrapper {
  position: relative;
  width: 32px;
  height: 30px;
  margin: auto;
}

/* ✅ SVG heart shape */
.svg-heart {
  width: 100%;
  height: 100%;
}

/* ✅ Number inside heart */
.heart-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  pointer-events: none;
}
</style>

