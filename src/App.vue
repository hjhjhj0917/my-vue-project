<template>
  <div class="app">
    <h1>Vue.js 3 Teleport 예제</h1>
    <h2>1. 모달</h2>
    <button @click="showModal = true">모달 열기</button>
    <Teleport to="body">
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <h3>안녕하세요!</h3>
          <p>이것은 Teleport를 사용한 모달입니다.</p>
          <button @click="showModal = false">닫기</button>
        </div>
      </div>
    </Teleport>

    <h2>2. 알림창</h2>
    <button @click="showNotification">알림 표시</button>
    <Teleport to="body">
      <div v-if="notificationVisible" class="notification">
        <p>{{ notificationMessage }}</p>
        <button @click="notificationVisible = false">닫기</button>
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showModal: false,
      notificationVisible: false,
      notificationMessage: ''
    }
  },
  methods: {
    showNotification() {
      this.notificationMessage = '알림: 새로운 메시지가 도착했습니다!'
      this.notificationVisible = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #42b983;
  color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}
</style>
