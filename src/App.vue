<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Wedding Invitation</title>
    <link rel="stylesheet" href="style.css" />
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Open+Sans&display=swap"y>
    <div class="container">
      <h1 class="title">You're Invited!</h1>
      <p class="subtitle">Join us in celebrating our wedding</p>
      <h2 class="names">💑 Hello & World</h2>
      <p class="details">📅 October 12, 2025<br>📍 Seoul, South Korea</p>
      <p class="rsvp-text">Please RSVP below</p>
      <a href="https:///your-rsvp-form" class="btn"></a>
    </div>
  </div>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  background: #fff0f5;
  color: #333;
  text-align: center;
}

.container {
  padding: 30px 20px;
  max-width: 500px;
  margin: auto;
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

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
