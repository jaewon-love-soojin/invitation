<script setup>
import BgMusic from './components/BgMusic.vue'
import LandingOverlay from './components/LandingOverlay.vue'
import Intro from './components/Intro.vue'
import Invitation from './components/Invitation.vue'
import Profile from './components/Profile.vue'
import Gallery from './components/Gallery.vue'
import Location from './components/Location.vue'
import Calendar from './components/Calendar.vue'
import Countdown from './components/Countdown.vue'
import Information from './components/Information.vue'
import Account from './components/Account.vue'
import Footer from './components/Footer.vue'

const images = [
  `${import.meta.env.BASE_URL}images/1.jpg`,
  `${import.meta.env.BASE_URL}images/2.jpg`,
  `${import.meta.env.BASE_URL}images/3.jpg`,
  `${import.meta.env.BASE_URL}images/4.jpg`,
  `${import.meta.env.BASE_URL}images/5.jpg`,
  `${import.meta.env.BASE_URL}images/6.jpg`,
  `${import.meta.env.BASE_URL}images/7.jpg`,
  `${import.meta.env.BASE_URL}images/8.jpg`,
  `${import.meta.env.BASE_URL}images/9.jpg`,
  `${import.meta.env.BASE_URL}images/10.jpg`,
  `${import.meta.env.BASE_URL}images/11.jpg`,
  `${import.meta.env.BASE_URL}images/12.jpg`,
  `${import.meta.env.BASE_URL}images/13.jpg`,
  `${import.meta.env.BASE_URL}images/14.jpg`,
  `${import.meta.env.BASE_URL}images/15.jpg`,
  `${import.meta.env.BASE_URL}images/16.jpg`,
  `${import.meta.env.BASE_URL}images/17.jpg`,
  `${import.meta.env.BASE_URL}images/18.jpg`,
  `${import.meta.env.BASE_URL}images/19.jpg`,
  `${import.meta.env.BASE_URL}images/20.jpg`,
  `${import.meta.env.BASE_URL}images/21.jpg`,
  `${import.meta.env.BASE_URL}images/22.jpg`,
]
const weddingDate = new Date('2025-09-21T12:00:00')

import { onMounted } from 'vue';

const handleOverlayHide = () => {
  window.scrollTo(0, 0)
}
</script>

<template>
  <LandingOverlay @hide="handleOverlayHide" />
  <div class="container">
    <BgMusic />
    <Intro />
    <Invitation />
    <Profile />
    <Gallery :images="images" />
    <Location />
    <Calendar :year="2025" :month="8" :pinned-day="21" />
    <Countdown :targetDate="weddingDate" />
    <Information />
    <Account />
    <Footer />
  </div>
</template>

<style scoped>
.container {
  font-family: 'Gowun Dodum', sans-serif;
  max-width: 480px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  background: white;
  overflow-x: hidden;
}

/* fallback for wider screens */
@media (min-width: 600px) {
  .container {
    border-radius: 1rem;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
  }
}

</style>
