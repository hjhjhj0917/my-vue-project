<template>
  <li>{{ todo }}</li>
  <button @click="removeTodo">삭제</button>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    removeTodo() {
      this.$emit('remove', this.todo);
    }
  }
}
</script>

<style scoped>
li {
  color: #333;
}
</style>