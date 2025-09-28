<template>
  <div>
    <h1>Emit</h1>

    <ChildrenComponents @btn-clicked="btnClicked" @increment="increaseCount" />

    <p>Counter: {{ count }}</p>
  </div>
</template>

<script>
import ChildrenComponents from "./ChildrenComponents.vue";

export default {
  name: "Emit",
  components: { ChildrenComponents },
  data() {
    return { count: 0 };
  },
  methods: {
    btnClicked() {
      console.log("Button is Clicked in Emit Component");
      alert("Button Clicked");
    },
    increaseCount(value) {
      this.count += value;
    },
  },
};
</script>
