<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Top Navbar -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-1 p-4 bg-gray-50">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="p-4 text-center text-gray-500 bg-gray-200">
      © 2025 My Vue App
    </footer>
  </div>
</template>
