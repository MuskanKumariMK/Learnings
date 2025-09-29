<template>
  <div>
    <h1>V-Events</h1>

    <div>
      <h4>V-On</h4>

      <div>
        <button @click="click">Click Me</button>
      </div>
    </div>
    <div>
      <h4>V-Input</h4>
      <div>
        <input type="text" v-on:input="inputCount++" />
        <p>{{ `Input Events is Occured : ` + inputCount }}</p>
      </div>
    </div>
    <div>
      <h4>V-Mouse Move</h4>
      <div>
        <p class="mouse-move">Move the mouse Pointer over the box below</p>
        <div
          v-on:mouseover="colorVal = Math.floor(Math.random() * 360)"
          v-bind:style="{ backgroundColor: 'hsl(' + colorVal + ',80%,80%)' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VEvents",
  data() {
    return {
      inputCount: 0,
      colorVal: 50,
    };
  },
  methods: {
    click() {
      alert("Button Is Clicked");
    },
  },
};
</script>

<style>
h1 {
  color: burlywood;
}
.mouse-move {
  color: red;
  font-size: 20px;
  text-align: center;
}
</style>
