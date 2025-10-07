<template>
  <h1>Counter</h1>
  <div v-html="heading"></div>
  <div>
    <button @click="increment" class="btn btn-inc">+</button>
    <h2 v-bind:class="counterStyle" class="counts">{{ count }}</h2>
    <button @click="decrement" class="btn btn-dec">-</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0, // Initial count value
      heading: "<h3>Counter Component</h3>",
      counterStyle: "normal",
    };
  },
  methods: {
    increment() {
      this.count++;
      if (this.count > 0) {
        this.counterStyle = "success";
      } else if (this.count === 0) {
        this.counterStyle = "normal";
      }
    },
    decrement() {
      this.count--;
      if (this.count < 0) {
        this.counterStyle = "danger";
      } else if (this.count === 0) {
        this.counterStyle = "normal";
      }
    },
  },
  
  // ---------------- Lifecycle Hooks ----------------
  beforeCreate() {
    // Called BEFORE data and methods are initialized
    // Use this to debug component initialization, but you can't access reactive data here yet.
    // Don't Use data or methods here
    // Used for : Plugins initialization, global event listeners, setting up external libraries
    console.log('Before Create - Counter');
  },
  created() {
    // Called AFTER data and methods are initialized
    // Data and methods are reactive here, but DOM is NOT yet mounted
    // Use this to fetch initial data, set default values, or run setup code
    // Can use data and events
    // Reactive data is initialised 
    // Use  for :
    // APi Call
    // Data initialization 
    // Event listeners
    // Setup code
    // Complex Computation 
    console.log('Created - Counter');
  },
  beforeMount() {
    // Called BEFORE the template is rendered and mounted to DOM
    // You can access template elements via $refs but DOM is not yet available
    // Template i scompiled but not yet added to the DOM
    // Use this for last-minute preparations before rendering
    // Used for  : 
    // last minyute cjheck dom 
    // pre mounting setup 
    console.log('Before Mount - Counter');
  },
  mounted() {
    // Called AFTER the component is mounted to the DOM
    // Use this for DOM-dependent operations like manipulating elements, focus, or integrating with third-party libraries
    console.log('Mounted - Counter');
    // cCan access dom 
    // Use for : DOM manipulation, 
    // third-party library integration,
    //  event listeners that require DOM
    // Api call that requires DOM
    //Iniital data fetching 
  },
  beforeUpdate() {
    // Called BEFORE reactive data changes are applied to the DOM
    // Use this for things like caching values before update
    // data changed but not yet reflected in the DOM
    // Used for ; 
    // Capturing current DOM state
    // pre-update calculations
    console.log('Before Update - Counter');
  },
  updated() {
    // Called AFTER reactive data changes are reflected in the DOM
    // Use this for DOM-based updates or side effects triggered by data changes
    // Dom has been rendered with updated data
// Use for : DOM-dependent updates,
// Chiled update that depend on parent 
// Third-party library updates
    console.log('Updated - Counter');
  },
  beforeUnmount() {
    // Called BEFORE the component is unmounted and removed from the DOM
    // Use this for cleanup tasks like removing event listeners or cancelling timers
    // Component is about to be removed from the DOM
    // Use for : Cleanup tasks, removing event listeners, cancelling timers, saving state
    console.log('Before Unmount - Counter');
  },
  unmounted() {
    // Called AFTER the component has been removed from the DOM
  // Use this for final cleanup tasks
    // Component has been removed from the DOM
    // Use for : Final cleanup tasks, freeing resources, logging
    console.log('Unmounted - Counter');
  }
};
</script>
<style>
.btn {
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  margin: 0 1rem;
}
.normal {
  color: blue;
}
.danger {
  color: red;
}
.success {
  color: green;
}
.counts {
  display: inline-block;
  min-width: 3rem;
  text-align: center;
}
</style>
