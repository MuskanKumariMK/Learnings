<template>
  <div>
    <Bind />
    <hr />

    <VEvents />
    <hr />

    <VIf />
    <hr />
    <VFor />
    <hr />
    <VWatch />
    <hr />
    <VEMit />
    <hr />
    <VComponent />
    <hr />
    <VProps />
    <hr />
    <AuthStateExample />
  </div>
</template>
<script>
import AuthStateExample from "@/components/AuthStateExample.vue";
import Bind from "@/components/Bind.vue";
import VComponent from "@/components/VComponent.vue";
import VEMit from "@/components/VEMit.vue";
import VEvents from "@/components/VEvents.vue";
import VFor from "@/components/VFor.vue";
import VIf from "@/components/VIf.vue";
import VProps from "@/components/VProps.vue";
import VWatch from "@/components/VWatch.vue";
export default {
  name: "Learning",
  components: {
    Bind,
    VIf,
    VFor,
    VWatch,
    VEMit,
    VComponent,
    VProps,
    VEvents,
    AuthStateExample,
  },
};
</script>
