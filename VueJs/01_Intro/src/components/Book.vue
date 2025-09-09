<template>
  <h1>{{ books }}</h1>
  <h3>{{ isEvenOrOdd() }}</h3>
  <h3>{{ isEvenOrOddCal }}</h3>
  <button @click="addMoreBooks">Add Book</button>
</template>
<script>
export default {
  data() {
    return {
      books: [
        { id: 1, name: "Book 1" },
        { id: 2, name: "Book 2" },
        { id: 3, name: "Book 3" },
        { id: 4, name: "Book 4" },
        { id: 5, name: "Book 5" },
      ],
    };
  },
  computed: {
    isEvenOrOddCal() {
      console.log("Computed called");
      return this.books.length % 2 === 0 ? "Even" : "Odd";
    },
  },
  methods: {
    isEvenOrOdd() {
      console.log("Method called");
      return this.books.length % 2 === 0 ? "Even" : "Odd";
    },
    addMoreBooks() {
      console.log("Add more books");
      this.books.push({ id: 6, name: "Book 6" });
    },
  },
};
</script>
<style></style>
