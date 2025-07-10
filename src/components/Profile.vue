<template>
  <div class="couple-grid">
    <div class="profile" v-for="(person, index) in couple" :key="index">
      <img :src="person.img" :alt="person.name" />
      <h3 class="name">{{ person.name }}</h3>
      <p class="role" :class="person.role === '신랑' ? 'groom' : 'bride'">
        {{ person.role }}
      </p>
      <p class="description">{{ person.description}}</p>
    </div>
  </div>
</template>

<script setup>
const jaewonImg = `${import.meta.env.BASE_URL}images/jaewon.jpg`;
const soojinImg = `${import.meta.env.BASE_URL}images/soojin.jpg`;
const couple = [
  {
    name: '최재원',
    role: '신랑',
    description: '',
    img: jaewonImg
  },
  {
    name: '나수진',
    role: '신부',
    description: '',
    img: soojinImg
  }
]
</script>

<style scoped>
.couple-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 640px;
  margin: 0 auto;
  padding: 16px;
}

.profile {
  text-align: center;
}

.profile img {
  width: 100%;
  max-width: 240px;
  aspect-ratio: 3 / 4; /* more natural portrait */
  border-radius: 12px; /* rounded corners */
  object-fit: cover;
  margin: 0 auto 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.name {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}

.role {
  font-size: 1rem;
  color: #666;
  margin: 4px 0 0;
}

.role.groom {
  color: #3478f6; /* blue for 신랑 */
}

.role.bride {
  color: #e94e77; /* pink for 신부 */
}
</style>
