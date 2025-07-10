<template>
  <div class="invitation">
    <h2 class="invitation-text">초대합니다.</h2>
    <p><span>언제나 함께 있을 것 같던 자녀가</span></p>
    <p><span>아름다운 인연을 만나 사랑을 하고</span></p>
    <p><span>이제 평생의 동반자를 만나</span></p>
    <p><span>인생의 새로운 첫걸음을 시작합니다.</span></p>
    <p><span></span></p>
    <p><span>두 사람이 하나가 될 뜻깊은 날</span></p>
    <p><span></span></p>
    <p><span>소중하고 힘찬 내디딤이 될 수 있도록</span></p>
    <p><span>함께 축복해 주시면</span></p>
    <p><span>더없는 기쁨으로 간직하겠습니다.</span></p>
    <div class="invitation-img-wrapper">
      <img :src="invitationImg" alt="invitation" class="invitation-img" />
    </div>
  </div>
</template>

<script setup>
// No script needed unless you want dynamic props later
  const invitationImg = `${import.meta.env.BASE_URL}images/invitation.jpg`;
</script>

<style scoped>
.highlight {
  color: red;
  padding: 0px 0px;
  border-radius: 0px;
}

.invitation {
  position: relative;
  background: linear-gradient(to bottom, #fff, #fef6f9);
  text-align: center;
  padding: 32px 16px;
  overflow: hidden;
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
.invitation-img-wrapper {
  width: 100%;
  max-width: 480px;
  margin: 0 auto 12px;
  overflow: hidden;
}
.invitation-img {
  width: 100%;
  height: auto;
  display: block;
}

.fixed-text {
  display: inline-block;
  width: 55px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
}

</style>

