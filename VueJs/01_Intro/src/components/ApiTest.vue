<script>
import { watch } from 'vue';

export default {
  name: 'ApiTest',
  data() {
    return {
      question:"",
      answer : "Question ususally contains a question mark. :)",
      loading:false,
    }
},
    watch:{
    question(newQuestion, oldQuestion){
        console.log(newQuestion);
        if(newQuestion.includes("?")){
            this.getAnswer();
        }
    }
}
,

  methods: {
    async getAnswer(){
        this.loading= true;
        this.answer="Thinking..."
       
        try{
            const response=await fetch("https://yesno.wtf/api");
            const data=await response.json();
            this.answer=data.answer;
        }catch(error){
            this.answer="Error! Could not reach the API. "+error;
        }finally{
            this.loading=false;
        }
    }
  },

}
</script>

<template>
  <div class="ApiTest"> 
    <h1>ApiTest</h1>
  <p >Ask a yse/no question</p>
 <input class="question" type="text" v-model="question" :disabled="loading"/>
 <p class="answer" v-if="!loading">Answer : {{answer}}</p>
 </div>
</template>

<style scoped>
.ApiTest{
    text-align: center;
    margin-top: 20px;
}
.question{
    width:300px;
    padding:10px;
    font-size:16px;
    border-radius:5px;
    border:1px solid #ccc;
}
.answer{
    width:300px;
    padding:10px;
    font-size:16px;

    }
</style>