<template>
  <div>
    <h1>V-Props</h1>
    <ChildrenComponents message="Hello Worlds" />
  </div>
</template>
<script>
import ChildrenComponents from "./ChildrenComponents.vue";

export default {
  name: "V-Props",
  components: { ChildrenComponents },
};
</script>
