<template>
  <div class="account">
    <SectionTitle ko="마음을 전하는 곳" />
    <p><span>참석이 어려우신 분들을 위해 계좌번호를 기재하였습니다.</span></p>
    <p><span>너그러운 마음으로 양해 부탁드립니다.</span></p>

    <div class="account-cards">
      <!-- 신랑측 -->
      <div class="card" @click="toggle('groom')">
        <div class="card-header">
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
                <button class="copy-btn" @click="copyToClipboard(item.account, $event)">
                  복사
                </button>
              <a class="kakaopay-btn" :href="'https://qr.kakaopay.com/Ej8nPNzo6'" target="_blank"><img :src="kakaopayImg"/></a>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- 신부측 -->
      <div class="card" @click="toggle('bride')">
        <div class="card-header">
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
                <button class="copy-btn" @click="copyToClipboard(item.account, $event)">
                  복사
                </button>
                <a class="kakaopay-btn" :href="'https://qr.kakaopay.com/Fdcdi1F4T'" target="_blank"><img :src="kakaopayImg"/></a>
              </div>
            </div>
          </div>
        </transition>
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
  text-align: center;
  padding: 24px 16px;
}

.account-cards {
  width: 100%;
  margin: 32px auto 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card {
  background: #f9f9fb;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
}

.card-header {
  padding: 0px 8px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow {
  transition: transform 0.3s ease;
}
.arrow.open {
  transform: rotate(180deg);
}

.card-body {
  padding: 0px 8px;
  font-size: 15px;
  color: #444;
  background: white;
  text-align: left;
}

.account-line {
  display: flex; /* changed from grid to flex */
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.info {
  min-width: 0;
  flex: 1; /* take all available space */
  padding-right: 12px; /* spacing from buttons */
}

.account {
  font-size: 1rem;
  color: #333;
  margin-bottom: 2px;
}

.name {
  font-size: 0.85rem;
  color: #666;
}

.button-group {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  max-width: 140px;
}

.kakaopay-btn img {
  width: 80px;
  height: auto;
  display: block;
}
.kakaopay-btn {
  width: 100%;
  display: inline-block;
}

.copy-btn {
  white-space: nowrap;
  width: 100%;
}

.copy-btn {
  background: gray;
  color: #f2f3f5;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.copy-btn:hover {
  background: #9258d6;
}

.button-column {
  display: flex;
  flex-direction: column;
  gap: 6px;
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
