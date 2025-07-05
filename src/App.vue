<script setup>
import BgMusic from './components/BgMusic.vue'
import LandingOverlay from './components/LandingOverlay.vue'
import TopBar from './components/TopBar.vue'
import Invitation from './components/Invitation.vue'
import FallingFlowers from './components/FallingFlowers.vue'
import Gallery from './components/Gallery.vue'
import Calendar from './components/Calendar.vue'
import Countdown from './components/Countdown.vue'
import Location from './components/Location.vue'
import Information from './components/Information.vue'
import Account from './components/Account.vue'
import Footer from './components/Footer.vue'

const images = [
  { src: '/images/2.jpg', alt: 'Image 2' },
  { src: '/images/3.jpg', alt: 'Image 3' },
  { src: '/images/4.jpg', alt: 'Image 4' },
  { src: '/images/5.jpg', alt: 'Image 5' },
  { src: '/images/6.jpg', alt: 'Image 6' },
  { src: '/images/7.jpg', alt: 'Image 7' },
  { src: '/images/8.jpg', alt: 'Image 8' },
  { src: '/images/9.jpg', alt: 'Image 9' },
  { src: '/images/10.jpg', alt: 'Image 10' },
  { src: '/images/11.jpg', alt: 'Image 11' },
  { src: '/images/12.jpg', alt: 'Image 12' },
  { src: '/images/13.jpg', alt: 'Image 13' },
]
const weddingDate = new Date('2025-09-21T12:00:00')
</script>

<template>
  <!--
  <LandingOverlay />
  -->
  <FallingFlowers />
  <div class="container">
    <BgMusic />
    <TopBar />
    <Invitation />
    <Gallery :images="images" />
    <Calendar :year="2025" :month="8" :pinned-day="21" />
    <Countdown :targetDate="weddingDate" />
    <Location />
    <Information />
    <Account />
    <Footer />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Open+Sans&display=swap');

.container {
  max-width: 480px;         /* typical mobile max */
  margin: 0 auto;
  width: 100%;
  background: white;        /* optional background */
}
</style>
