<template>
  <div>
    <h1>V-For</h1>
    <div>
      <h1>Fruits List</h1>

      <ul class="fruits-list">
        <li class="list-item" v-for="fruit in fruits" :key="fruit">
          {{ fruit }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "V-For",
  data() {
    return {
      fruits: ["Apple", "Banana", "Orange", "Mango", "Grapes"],
    };
  },
};
</script>
<style>
.list-item {
  list-style: none;
  color: blueviolet;
}
.fruits-list {
  background-color: azure;
  border: 2px solid red;
  width: 100px;
}
</style>
