<script>
export default {
data() {
    return {
        count: 0,
        value: ''
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    handleClick(event){
        console.log("Event",event);
        if(this.count>0){
            this.count--;
        }else{
            this.count++;
        }
    },
    say(message,event){
        event.preventDefault();
        console.log(message,event);
    },
    submit(event){
        console.log("Submitted");
        console.log("Value",event.target.value);
    },
    handleInput(value){
        this.value = value;
        console.log("Input Value",value);
    },
    clear(){
        this.value = '';
    }
  },
}
</script>
<template>

    <form action="">
        <button type="button" @click="say('Hello',$event);">Submit</button>
    </form>
  <div>
    <br>
    <button @click.self="console.log('Clicked');">Click Self</button>
    <br>
<input @keyup.enter="submit" />
<br>
<input placeholder="Type Something" @input="(e) => handleInput(e.target.value)" @keyup.alt.enter="clear" :value="value" />
<p>{{ value }}</p>
<hr/>

<button v-on:mouseenter="increment">Entered</button>
<p>{{ count }}</p>
<button v-on:click="handleClick">Clicked</button>
<button v-on:mouseenter="console.log('Entered');">Entered</button>
<button v-on:mousedown="console.log('Mouse Down');">Mouse Down</button>
<button v-on:click="console.log('Clicked');">Clicked</button>
  </div>
</template>



<style scoped>
</style>