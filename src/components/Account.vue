<template>
  <div class="account">
    <h2 class="title2">마음을 전하는 곳</h2>
    <p><span>참석이 어려우신 분들을 위해 계좌번호를 기재하였습니다.</span></p>
    <p><span>너그러운 마음으로 양해 부탁드립니다.</span></p>

    <div class="menu-page">
      <!-- First Menu -->
      <Menu as="div" class="menu-block" v-slot="{ open }">
        <MenuButton class="menu-button">
          <span>신랑측</span>
          <span class="arrow" :class="{ open }">▼</span>
        </MenuButton>
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform scale-y-0 opacity-0"
          enter-to-class="transform scale-y-100 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="transform scale-y-100 opacity-100"
          leave-to-class="transform scale-y-0 opacity-0"
        >
          <MenuItems class="menu-items">
            <MenuItem v-slot="{ active }">
              <button :class="['menu-item', { active }]">카카오뱅크 3333-05-4626401</button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>

      <!-- Second Menu -->
      <Menu as="div" class="menu-block" v-slot="{ open }">
        <MenuButton class="menu-button">
          <span>신부측</span>
          <span class="arrow" :class="{ open }">▼</span>
        </MenuButton>
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform scale-y-0 opacity-0"
          enter-to-class="transform scale-y-100 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="transform scale-y-100 opacity-100"
          leave-to-class="transform scale-y-0 opacity-0"
        >
          <MenuItems class="menu-items">
            <MenuItem v-slot="{ active }">
              <button :class="['menu-item', { active }]">카카오뱅크 3333-04-8945160</button>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>

<style scoped>
.menu-page {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 300px;
  margin: 40px auto;
  font-family: sans-serif;
}

.menu-block {
  position: relative;
}

.menu-button {
  padding: 10px 16px;
  background: #f3f4f6;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow {
  transition: transform 0.2s ease;
  display: inline-block;
  margin-left: 8px;
}

.arrow.open {
  transform: rotate(180deg);
}

.menu-items {
  transform-origin: top;
  position: absolute;
  top: 110%;
  left: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.menu-item {
  display: block;
  width: 100%;
  padding: 10px 16px;
  text-align: left;
  background: white;
  border: none;
  font-size: 14px;
  cursor: pointer;
}

.menu-item.active,
.menu-item:hover {
  background: #e5e7eb;
}
</style>

