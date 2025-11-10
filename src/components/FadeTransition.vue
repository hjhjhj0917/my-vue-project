<template>
  <div>
    <button @click="show = !show">
      {{ show ? '숨기기' : '보이기' }}
    </button>
    <transition name="fade">
      <p v-if="show" class="fade-target">
        이 텍스트는 페이드 인/아웃됩니다!
      </p>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const show = ref(true);
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-form, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-form {
  opacity: 1;
}
</style>