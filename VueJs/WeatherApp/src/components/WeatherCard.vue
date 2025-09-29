<template>
  <div class="w-64 p-4 bg-white border rounded shadow">
    <h2 class="text-lg font-bold">{{ weather.name }}</h2>
    <p class="text-gray-600">🌡 Temp: {{ weather.main.temp }} °C</p>
    <p class="text-gray-600">💧 Humidity: {{ weather.main.humidity }}%</p>
    <p class="text-gray-600">☁️ {{ weather.weather[0].description }}</p>
  </div>
</template>

<script setup>
defineProps({
  weather: Object,
});
</script>
