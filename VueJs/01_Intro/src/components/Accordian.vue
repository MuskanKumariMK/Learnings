<template>
  <div class="accordian">
    <div class="accordian-header" @click="toggle">
      <h3>{{ title }}</h3>
      <span class="accordian-hide-show">{{ isOpen ? "-" : "+" }}</span>
    </div>
    <div v-if="isOpen" class="accordian-body">
      <slot>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil
        vitae saepe, assumenda molestias, consectetur iste ut facilis eos sequi
        earum numquam id, totam blanditiis reprehenderit sunt error corporis!
        Inventore!
      </slot>
    </div>
  </div>
  <div class="accordian" :class="$attrs.class">
    <div class="accordian-header" @click="toggle">
      <h3>{{ title }}</h3>
      <span class="accordian-hide-show">{{ isOpen ? "-" : "+" }}</span>
    </div>
    <div v-if="isOpen" class="accordian-body">
      <slot>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil
        vitae saepe, assumenda molestias, consectetur iste ut facilis eos sequi
        earum numquam id, totam blanditiis reprehenderit sunt error corporis!
        Inventore!
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Accordian",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
.hide {
  display: none;
}
.accordian {
  border: 2px solid #ff9797;
  border-radius: 4px;
  background-color: rgb(255, 214, 194);
  transition: all 0.4s ease;
  margin: 10px 0;
}
.accordian-hide-show {
  font-size: 44px;
  font-weight: bold;
  padding-right: 40px;
  color: white;
}
.accordian-header {
  background-color: #ff9797;
  padding-left: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.accordian-body {
  padding: 10px;
  border-top: 1px solid #ccc;
}
</style>
