<template>
  <div class="invitation">
    <p class="heart">💜</p>
    <SectionTitle ko="초대합니다." />
    <div class="space"></div>
    <p><span>언제나 함께 있을 것 같던 자녀가</span></p>
    <p><span>아름다운 인연을 만나 사랑을 하고</span></p>
    <p><span>이제 평생의 동반자를 만나</span></p>
    <p><span>인생의 새로운 첫걸음을 시작합니다.</span></p>
    <p>&nbsp;</p>
    <p><span>두 사람이 하나가 될 뜻깊은 날</span></p>
    <p>&nbsp;</p>
    <p><span>소중하고 힘찬 내디딤이 될 수 있도록</span></p>
    <p><span>함께 축복해 주시면</span></p>
    <p><span>더없는 기쁨으로 간직하겠습니다.</span></p>

    <div class="invitation-img-wrapper">
      <img :src="invitationImg" alt="invitation" class="invitation-img" />
    </div>
  </div>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue';
const invitationImg = `${import.meta.env.BASE_URL}images/invitation.jpg`;
</script>

<style scoped>
p {
  margin: 4px 0;
  font-size: 1.1em;
}

.heart {
  text-align: center;
  margin-bottom: 1rem;
}

.space {
  margin-top: 1rem;
}

.invitation {
  margin-top: 3rem;
  position: relative;
  text-align: center;
  padding: 0 16px;
  overflow: hidden;
}

.invitation-img-wrapper {
  width: 100%;
  max-width: 480px;
  aspect-ratio: 9 / 10; /* ✅ Responsive height (480px if width is 384px) */
  margin: 3rem auto 0;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.invitation-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
  display: block;
}
</style>
