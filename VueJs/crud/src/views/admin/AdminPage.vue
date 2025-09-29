<template>
  <div class="flex">
    <!-- Sidebar -->
    <SideBar />

    <!-- Main content -->
    <main class="flex-1 min-h-screen p-6 bg-gray-100">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import SideBar from "../../components/SideBar.vue";
</script>
