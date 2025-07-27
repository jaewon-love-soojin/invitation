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
            <span class="account-number">신랑측 계좌번호</span>
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
            <span class="account-number">신부측 계좌번호</span>
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
  margin-top: 3rem;
  text-align: center;
  padding: 0 16px;
}

.account-section {
  margin-top: 1.5rem;
  font-size: 0.85em;
}

.account-section p {
  margin: 2px 0;
}

.account-cards {
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.account-number {
  flex: 1;
  text-align: center;
}

/* ───────────────────────────────────────────── */
/* 🟣 Compact Card Styling */
.card {
  background: #fdfdfd;
  border: 1px solid #e0dfe4;
  border-radius: 5px;
  overflow: hidden;
  font-size: 1.0em;
  line-height: 1.2;
  padding: 0;
  transition: box-shadow 0.2s ease;
}

/* Header – Clickable Area */
.card-header {
  padding: 14px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f6fa;
  cursor: pointer;
}

.card-header span {
  margin: 0;
  line-height: 1.2;
}

.arrow {
  transition: transform 0.3s ease;
}
.arrow.open {
  transform: rotate(180deg);
}

/* Expanded Body Section */
.card-body {
  padding: 8px 10px;
}

.account-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
}

.info {
  flex: 1;
  padding-right: 8px;
}

.account {
  margin: 0;
}

.name {
  margin: 2px 0 0 0;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-end;
  min-width: 88px;
}

.copy-btn {
  background: gray;
  color: white;
  border: none;
  padding: 3px 5px;
  border-radius: 4px;
  cursor: pointer;
  width: 48px;
  font-size: 0.75em;
  box-sizing: border-box;
}
.copy-btn:hover {
  background: #9258d6;
}

.kakaopay-btn {
  display: inline-block;
  width: 48px;
}
.kakaopay-btn img {
  width: 100%;
  display: block;
  object-fit: contain;
}

/* Slide Transition */
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
