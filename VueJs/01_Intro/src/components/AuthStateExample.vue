<template>
  <div>
    <h1>Auth State Example</h1>

    <p v-if="auth.isLoggedIn">
      Logged in as: {{ auth.user.name }} (Token: {{ auth.token }})
    </p>
    <p v-else>Not logged in</p>

    <button v-if="!auth.isLoggedIn" @click="auth.login">Login</button>
    <button v-else @click="auth.logout">Logout</button>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/store/auth";

const auth = useAuthStore();
</script>

<style scoped>
button {
  margin-top: 10px;
  padding: 6px 12px;
  background-color: rgb(70, 0, 128);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: rgb(100, 50, 180);
}
</style>
