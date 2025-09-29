<template>
  <div>
    <h1>V-Bind</h1>
    <h1 :title="message">Hover to see message</h1>
    <div>
      <a v-bind:href="link">Visit Website</a>
      <div><button :disabled="isDisable">Click Me</button></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Bind",
  data() {
    return {
      link: "https://www.google.com",
      message: "Hello World",
      isDisable: true,
    };
  },
};
</script>
