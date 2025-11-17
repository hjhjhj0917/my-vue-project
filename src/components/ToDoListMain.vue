<template>
  <ul>
    <li v-for="todo in todos" :key="todo.in">
      <input type="checkbox" :checked="todo.completed" @change="$emit('toggle', todo.id)">
      <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none'}">
        {{ todo.text }}
      </span>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  todos: Array
})
defineEmits(['toggle'])
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 8px 0;
}
</style>