<script setup>
import BgMusic from './components/BgMusic.vue'
import LandingOverlay from './components/LandingOverlay.vue'
import FallingFlowers from './components/FallingFlowers.vue'
import Gallery from './components/Gallery.vue'
import Calendar from './components/Calendar.vue'
import Countdown from './components/Countdown.vue'
import NaverMap from './components/NaverMap.vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

const images = [
  { src: '/images/1.jpg', alt: 'Image 1' },
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
  <LandingOverlay />
  <FallingFlowers />
  <div class="container">
    <h1 class="title">You're Invited!</h1>
    <p class="subtitle">Join us in celebrating our wedding</p>
    <h2 class="names">💑 Hello & World</h2>
    <p class="details">📅 September 21, 2025<br>📍 Seoul, South Korea</p>
    <p class="rsvp-text">Please RSVP below</p>
    <a href="https:///your-rsvp-form" class="btn"></a>
    <BgMusic />
    <Gallery :images="images" />
    <Calendar :year="2025" :month="8" :pinned-day="21" />
    <Countdown :targetDate="weddingDate" />
    <NaverMap />
    <Navigation />
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

.title {
  font-family: 'Great Vibes', cursive;
  font-size: 2.5em;
  color: #d6336c;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.names {
  font-size: 1.8em;
  color: #6a1b9a;
  margin-bottom: 10px;
}

.details {
  font-size: 1em;
  margin-bottom: 20px;
}

.rsvp-text {
  font-size: 1.1em;
  margin-bottom: 10px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #d6336c;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #c2185b;
}
</style>
