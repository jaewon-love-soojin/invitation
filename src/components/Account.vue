<template>
  <div class="account">
    <SectionTitle ko="마음을 전하는 곳" />
    <div class="account-section">
      <p>참석이 어려우신 분들을 위해 계좌번호를 기재하였습니다.</p>
      <p>너그러운 마음으로 양해 부탁드립니다.</p>

      <div class="account-cards">
        <!-- 신랑측 -->
        <div class="card">
          <div class="card-header" @click="toggle('groom')" role="button">
            <span>신랑측 계좌번호</span>
            <span class="arrow" :class="{ open: openSection === 'groom' }">▼</span>
          </div>
          <transition name="slide">
            <div class="card-body" v-if="openSection === 'groom'" @click.stop>
              <div class="account-line" v-for="item in groomAccounts" :key="item.account">
                <div class="info">
                  <p class="account">{{ item.account }}</p>
                  <p class="name">{{ item.name }}</p>
                </div>
                <div class="button-group">
                  <button class="copy-btn" @click="copyToClipboard(item.account, $event)">복사</button>
                  <a class="kakaopay-btn" :href="'https://qr.kakaopay.com/Ej8nPNzo6'" target="_blank">
                    <img :src="kakaopayImg" />
                  </a>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!-- 신부측 -->
        <div class="card">
          <div class="card-header" @click="toggle('bride')" role="button">
            <span>신부측 계좌번호</span>
            <span class="arrow" :class="{ open: openSection === 'bride' }">▼</span>
          </div>
          <transition name="slide">
            <div class="card-body" v-if="openSection === 'bride'" @click.stop>
              <div class="account-line" v-for="item in brideAccounts" :key="item.account">
                <div class="info">
                  <p class="account">{{ item.account }}</p>
                  <p class="name">{{ item.name }}</p>
                </div>
                <div class="button-group">
                  <button class="copy-btn" @click="copyToClipboard(item.account, $event)">복사</button>
                  <a class="kakaopay-btn" :href="'https://qr.kakaopay.com/Fdcdi1F4T'" target="_blank">
                    <img :src="kakaopayImg" />
                  </a>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from './SectionTitle.vue'

const kakaopayImg = `${import.meta.env.BASE_URL}images/kakaopay.svg`;

const openSection = ref(null)
const toggle = (section) => {
  openSection.value = openSection.value === section ? null : section
}

const groomAccounts = [
  { name: '최재원', account: '카카오뱅크 3333-05-4626401' },
]

const brideAccounts = [
  { name: '나수진', account: '카카오뱅크 3333-04-8945160' },
]

const copyToClipboard = async (text, event) => {
  try {
    await navigator.clipboard.writeText(text)
    const btn = event.currentTarget
    const original = btn.innerText
    btn.innerText = '복사됨'
    setTimeout(() => {
      btn.innerText = original
    }, 1200)
  } catch (err) {
    alert('복사에 실패했습니다.')
  }
}
</script>

<style scoped>
.account {
  margin-top: 2rem;
  text-align: center;
  padding: 0 16px;
}

.account-section {
  margin-top: 2rem;
  font-size: 0.9em;
}

.account-section p {
  margin: 4px 0;
}

.account-cards {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card {
  background: #f3eff5;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
}

.card-header {
  padding: 0px 10px; /* reduced from 6px */
  min-height: 2px;  /* optional: define exact height */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header span {
  line-height: 0;
  margin: 0;
}

.arrow {
  transition: transform 0.3s ease;
}
.arrow.open {
  transform: rotate(180deg);
}

.card-body {
  padding: 20px 10px;
}

.account-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0;
  border-bottom: 1px solid #eee;
}

.info {
  flex: 1;
  padding-right: 8px;
}

.name {
  margin: 2px 0 0 0;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
  min-width: 100px; /* same min width for both buttons */
}

.copy-btn {
  background: gray;
  color: white;
  border: none;
  padding: 4px 6px;
  border-radius: 4px;
  cursor: pointer;
  width: 50px;
  box-sizing: border-box;
}
.copy-btn:hover {
  background: #9258d6;
}

.kakaopay-btn {
  display: inline-block;
  width: 50px;
}
.kakaopay-btn img {
  width: 100%;
  display: block;
  object-fit: contain;
}

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
  transform: scaleY(0.95);
}
.slide-enter-to,
.slide-leave-from {
  max-height: 500px;
  opacity: 1;
  transform: scaleY(1);
}
</style>
