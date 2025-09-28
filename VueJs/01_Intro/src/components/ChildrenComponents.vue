<template>
  <div>
    <button @click="$emit('btn-clicked')">Click Me</button>
    <div>
      <p>{{ message }}</p>
    </div>
    <div>
      <h4>Increments</h4>
      <button @click="$emit('increment', 1)">Add +1</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildrenComponents",
  props: {
    message: String,
  },
};
</script>
