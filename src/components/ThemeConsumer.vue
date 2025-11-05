<template>
  <div class="consumer-container">
    <h3>중간 컴포넌트</h3>
    <ThemeGrandChild />
  </div>
</template>

<script>
import ThemeGrandChild from './ThemeGrandChild.vue'

export default {
  name: 'ThemeConsumer',
  components: {
    ThemeGrandChild
  }
}
</script>

<style scoped>
.consumer-container {
  padding: 15px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>