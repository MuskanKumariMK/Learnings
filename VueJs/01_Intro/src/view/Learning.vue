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
    <hr/>
    <VSHow />
    <hr/>
    <CardParents />
    <hr/>
    <Von />
    <hr/>
    <VModel/>
    <hr><Watcher/>
    <hr/>
    <ApiTest/>
    <hr>
    <PasswordMeter/>
    <hr>
    <TimerCounter/>
    <hr>
    <button  @click="show = !show">{{show ? 'Hide' : 'Show'}}</button>
    <Counter v-if="show"/>
  </div>
</template>
<script>
import ApiTest from "@/components/ApiTest.vue";
import AuthStateExample from "@/components/AuthStateExample.vue";
import Bind from "@/components/Bind.vue";
import CardParents from "@/components/CardParents.vue";
import Counter from "@/components/Counter.vue";
import PasswordMeter from "@/components/Projects/PasswordMeter/PasswordMeter.vue";
import TimerCounter from "@/components/Projects/TimerCountDown/TimerCounter.vue";
import VComponent from "@/components/VComponent.vue";
import VEMit from "@/components/VEMit.vue";
import VEvents from "@/components/VEvents.vue";
import VFor from "@/components/VFor.vue";
import VIf from "@/components/VIf.vue";
import VModel from "@/components/VModel.vue";
import Von from "@/components/Von.vue";
import VProps from "@/components/VProps.vue";
import VSHow from "@/components/VSHow.vue";
import VWatch from "@/components/VWatch.vue";
import Watcher from "@/components/Watcher.vue";

export default {
  name: "Learning",
  data(){
    return{
      show : false
    }
  },
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
    VSHow
,CardParents ,
VModel,Watcher,
ApiTest,
PasswordMeter,
Counter,
TimerCounter,
Von },
};
</script>
