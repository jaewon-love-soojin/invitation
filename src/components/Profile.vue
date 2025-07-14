<template>
  <div class="profile-section">
    <SectionTitle title="Profile" />
    <div class="couple-grid">
      <div class="profile" v-for="(person, index) in couple" :key="index">
        <img :src="person.img" :alt="person.name" />
        <span class="role" :class="person.role === '신랑' ? 'groom' : 'bride'">{{ person.role }}</span>
        <span class="name">{{ person.name }}</span>
        <p class="parent">{{ person.parent}}</p>
        <p class="description" v-html="person.description.replace(/\n/g, '<br>')"></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue';
const jaewonImg = `${import.meta.env.BASE_URL}images/jaewon.jpg`;
const soojinImg = `${import.meta.env.BASE_URL}images/soojin.jpg`;
const couple = [
  {
    name: ' 최재원',
    role: '신랑',
    img: jaewonImg,
    parent: '최인석, 배현숙의 아들',
    description: '든든하고 믿음직한\n남편이 되겠습니다.🤵'
  },
  {
    name: ' 나수진',
    role: '신부',
    img: soojinImg,
    parent: '나택근, 김경희의 딸',
    description: '언제나 밝고 따뜻한\n아내가 되겠습니다.👰🏻‍♀️'
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.couple-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  max-width: 400px;
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
  font-size: 1.0rem;
  font-weight: bold;
  margin: 10;
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

.parent {
  font-size: 0.9rem;
  color: #444;
  margin-top: 4px;
}

.description {
  font-size: 0.9rem;
  color: #444;
  margin-top: 4px;
}
</style>
