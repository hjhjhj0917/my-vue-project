<template>
  <div class="new-todo">
    <input type="text" v-model="newTodo" @keyup.enter="submitTodo" placeholder="할 일을 입력하세요">
    <button @click="submitTodo">추가</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add'])
const newTodo = ref('')
const submitTodo = () => {
  if (newTodo.value.trim()) {
    emit('add', newTodo.value)
    newTodo.value = ''
  }
}
</script>

<style>
.new-todo {
  display: flex;
  gap: 10px;
}
input {
  flex: 1;
  padding: 5px;
}
</style>