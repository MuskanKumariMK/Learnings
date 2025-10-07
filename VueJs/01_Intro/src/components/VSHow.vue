<template>
  <div>
    <button @click="toggleStock">Show Component</button>
<SHowComponent v-show="isShow" />

<!-- <HideComponent v-show="isShow" /> -->
<
  </div>
</template>

<script>
import HideComponent from './ExampleComponents/HideComponent.vue';

import SHowComponent from './ExampleComponents/SHowComponent.vue';

export default {
 components:{
    SHowComponent,
HideComponent },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    toggleStock() {
      this.isShow = !this.isShow;
    }
  },
  created() {
    
  }
}
</script>

<style scoped>
</style>