<template>
  <div>
    <h1>V-If</h1>
    <p v-if="Instock">In Stock</p>
    <p v-else>Out of Stock</p>
    <button @click="toggleStock">Toggle Stock (Current: {{ Instock }})</button>
    <SHowComponent v-if="Instock" />
    <ElseShowComponent v-else />
  </div>
</template>
<script>
import ElseShowComponent from './ExampleComponents/ElseShowComponent.vue';
import SHowComponent from './ExampleComponents/SHowComponent.vue';

export default {
  name: "V-If",
  components:{
    SHowComponent,
    ElseShowComponent,
  },
  data() {
    return {
      Instock: true,
    };
  },
  methods: {
    toggleStock() {
      this.Instock = !this.Instock;
    },
  },
};
</script>
<style scoped>
button {
  margin-top: 10px;
  padding: 6px 12px;
  border: none;
  background-color: rgb(70, 0, 128);
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
button:hover {
  background-color: rgb(100, 50, 180);
}
</style>
