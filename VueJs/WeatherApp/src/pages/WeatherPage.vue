<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <h1 class="mb-4 text-2xl font-bold">🌤 Weather App</h1>

    <!-- Search Form -->
    <form @submit.prevent="getWeather" class="mb-4">
      <!-- <input
        v-model="city"
        type="text"
        placeholder="Enter city name"
        class="p-2 border rounded"
      /> -->
      <select v-model="city" class="p-2 border rounded">
        <option value="">Select City</option>
        <option v-for="c in cities" :key="c" :value="c">{{ c }}</option>
      </select>
      <button type="submit" class="p-2 ml-2 text-white bg-blue-500 rounded">
        Search
      </button>
    </form>

    <!-- Conditional Rendering -->
    <WeatherCard v-if="weather" :weather="weather" />

    <p v-if="error" class="mt-2 text-red-500">{{ error }}</p>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import WeatherCard from "../components/WeatherCard.vue";
import { CITIES } from "../constants/city";

const city = ref("");
const cities = CITIES;
const weather = ref(null);
const error = ref("");

const API_KEY = import.meta.env.VITE_WEATHER_API;

async function getWeather() {
  try {
    error.value = "";
    weather.value = null;

    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city.value,
          appid: API_KEY,
          units: "metric",
        },
      }
    );

    weather.value = res.data;
  } catch (err) {
    error.value = "City not found";
  }
}
</script>
