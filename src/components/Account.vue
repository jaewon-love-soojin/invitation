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
  padding: 16px 12px;
}

.account-cards {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px; /* reduced from 16px */
}

.card {
  background: #f9f9fb;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
}

.card-header {
  padding: 6px 10px; /* reduced vertical padding */
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
  padding: 4px 10px; /* tighter padding inside card body */
  background: white;
}

.account-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0; /* reduced line spacing */
  border-bottom: 1px solid #eee;
}

.info {
  flex: 1;
  padding-right: 8px;
}

.account {
  margin-bottom: 2px;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 4px; /* reduce spacing between buttons */
  align-items: flex-end;
  max-width: 120px;
}

.copy-btn {
  background: gray;
  color: white;
  border: none;
  padding: 4px 6px;
  border-radius: 5px;
  cursor: pointer;
}
.copy-btn:hover {
  background: #9258d6;
}

.kakaopay-btn img {
  width: 50px;
}
.kakaopay-btn {
  display: inline-block;
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
