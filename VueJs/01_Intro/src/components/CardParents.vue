<template>
  <div>
    <h1>Card Parents Component</h1>
    <Card :book="book" />
  </div>
</template>

<script>
import Card from './ExampleComponents/Card.vue';  

export default {
  name: 'CardParents',
  components: {  
    Card
  },
  data() {
    return {
      book: {
        name: "The Great Gatsby",
        description: "A novel written by American author F. Scott Fitzgerald.",
        price: "$10.99",
        author: "F. Scott Fitzgerald",
      }
    }
  }
}
</script>
