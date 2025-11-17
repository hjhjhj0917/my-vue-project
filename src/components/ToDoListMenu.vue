<template>
  <div class="menu">
    <button @click="$emit('update:modelValue', 'all')">전체</button>
    <button @click="$emit('update:modelValue', 'completed')">완료</button>
    <button @click="$emit('update:modelValue', 'pending')">미완료</button>
  </div>
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>