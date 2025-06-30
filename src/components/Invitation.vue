<template>
  <div class="invitation">
    <h2 class="title2">INVITATION</h2>
    <h2 class="invitation-text">소중한 분들을 초대합니다</h2>
    <p><span class="highlight">재</span>잘거리던 동료였던 우리가</p>
    <p><span class="highlight">원</span>앤온리로 서로의 마음에 자리 잡았고</p>
    <p><span class="highlight">수</span>줍게 시작한 연애는</p>
    <p><span class="highlight">진</span>심 어린 약속이 되어 결혼으로 이어졌습니다.</p>
    <p><span>🖤</span></p>
    <p><span>어릴적 그려왔던 턱시도를 입은 신랑과</span></p>
    <p><span>웨딩드레스를 입은 신부가</span></p>
    <p><span>서로의 손을 잡고 걷는 시간에 함께 오셔서</span></p>
    <p><span>예쁜 풍경 속의 한 켠을 채워주신다면</span></p>
    <p><span>함께 잡은 두 손 놓지 않겠습니다.</span></p>
    <div class="invitation-img-wrapper">
      <img :src="invitationImg" alt="invitation" class="invitation-img" />
    </div>
    <p>
      <span>최인석﹒배현숙</span>
      <span class="fixed-text">의 아들</span>
      <span>최재원</span>
    </p>
    <p>
      <span>나택근﹒김경희</span>
      <span class="fixed-text">의 딸</span>
      <span>나수진</span>
    </p>
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

