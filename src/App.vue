<template>
  <div class="container">
    <TodoListNew @add="addTodo" />
    <TodoListMenu v-model="filterType" />
    <TodoListMain :todos="filteredTodos" @toggle="toggleTodo" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import TodoListNew from "./components/ToDoListNew.vue";
import TodoListMenu from "./components/ToDoListMenu.vue";
import TodoListMain from "./components/ToDoListMain.vue";

const todos = ref([
  { id: 1, text: 'Vue 공부하기', completed: false },
  { id: 2, text: '운동하기', completed: true }
])

const filterType = ref('all')

const addTodo = (text) => {
  todos.value.push({ id: Date.now(), text, completed: false })
}

const toggleTodo = (id) => {
  const todo = todos.value.find(t => t.id === id)
  todo.completed = !todo.completed
}

const filteredTodos = computed(() => {
  if (filterType.value === 'completed') {
    return todos.value.filter(t => t.completed)
  } else if (filterType.value === 'pending') {
    return todos.value.filter(t => !t.completed)
  }
  return todos.value
})
</script>

<style>
.container {
  width: 500px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px #ddd;
}
</style>
