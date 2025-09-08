<script>
import Counter from "@/components/Counter.vue";
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Couter: Counter,
    Header: Header,
  },
};
</script>

<template>
  <Header />
  <Couter />
</template>

<style scoped></style>
