<script>
import Counter from "@/components/Counter.vue";
import Header from "@/components/Header.vue";
import Accordian from "@/components/Accordian.vue";
import Book from "@/components/Book.vue";
export default {
  name: "App",
  components: {
    Couter: Counter,
    Header: Header,
    Accordian: Accordian,
    Book: Book,
  },
};
</script>

<template>
  <Header />
  <Couter />
  <Accordian title="Hello World" class="hide" />
  <Book />
</template>

<style scoped></style>
