<template>
  <h1>Counter</h1>
  <div v-html="heading"></div>
  <div>
    <button @click="increment" class="btn btn-inc">+</button>
    <h2 v-bind:class="counterStyle" class="counts">{{ count }}</h2>
    <button @click="decrement" class="btn btn-dec">-</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0, // Initial count value
      heading: "<h3>Counter Component</h3>",
      counterStyle: "normal",
    };
  },
  methods: {
    increment() {
      this.count++;
      if (this.count > 0) {
        this.counterStyle = "success";
      } else if (this.count === 0) {
        this.counterStyle = "normal";
      }
    },
    decrement() {
      this.count--;
      if (this.count < 0) {
        this.counterStyle = "danger";
      } else if (this.count === 0) {
        this.counterStyle = "normal";
      }
    },
  },
};
</script>
<style>
.btn {
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  margin: 0 1rem;
}
.normal {
  color: blue;
}
.danger {
  color: red;
}
.success {
  color: green;
}
.counts {
  display: inline-block;
  min-width: 3rem;
  text-align: center;
}
</style>
