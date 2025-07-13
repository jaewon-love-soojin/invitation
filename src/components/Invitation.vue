<template>
  <div class="invitation">
    <img :src="flowerImg" class="flower-img" />
    <SectionTitle ko="초대합니다."/>
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
  const flowerImg = `${import.meta.env.BASE_URL}images/flower.png`;
  const invitationImg = `${import.meta.env.BASE_URL}images/invitation.jpg`;
</script>

<style scoped>
.invitation {
  position: relative;
  background: linear-gradient(to bottom, #fff, #fef6f9);
  text-align: center;
  padding: 0px 0px;
  overflow: hidden;
}

.flower-img {
  width: 7%;
  height: auto;
  display: block;
  margin: 0 auto 16px;
}

.invitation-img-wrapper {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.invitation-img {
  width: 100%;
  height: auto;
  display: block;
}

</style>

