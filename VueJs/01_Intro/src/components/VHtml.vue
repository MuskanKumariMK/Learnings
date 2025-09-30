<template>
  <div>
    <h1>VHtml</h1>
    <div>
      <p>Using text interpolation: {{ rawHtml }}</p>
      <p>
        Using v-html directive:
        <span v-html="rawHtml"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VHtml",
  data() {
    return {
      rawHtml: '<span style="color: red;">This should be red.</span>'
    }
  }
}
</script>

<style scoped>
</style>
