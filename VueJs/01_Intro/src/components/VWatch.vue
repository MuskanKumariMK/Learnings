<template>
  <div>
    <h1>VWatch</h1>
    <div>
      <p>Simple watch</p>
      <input type="text" v-model="name" placeholder="Type Your Pretty Name" />
      <p>your name is {{ name }}</p>
    </div>
    <div>
      <p>Counter</p>
      <p>Counter : {{ counter }}</p>
      <button @click="counter++">Increase</button>
      <button @click="counter--">Decrease</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "VWatch",
  data() {
    return {
      name: "",
      counter: 0,
    };
  },
  watch: {
    name(newValue, oldValue) {
      console.log("Name Changed From ", oldValue, "to ", newValue);
    },
    counter(newValue, oldValue) {
      console.log("Counter Changed From ", oldValue, "to ", newValue);
    },
  },
};
</script>
