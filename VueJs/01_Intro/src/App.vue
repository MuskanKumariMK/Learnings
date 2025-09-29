<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<template>
  <div>
    <Header />
    <!-- This is where pages will load -->
    <router-view />
  </div>
</template>

<style scoped></style>
