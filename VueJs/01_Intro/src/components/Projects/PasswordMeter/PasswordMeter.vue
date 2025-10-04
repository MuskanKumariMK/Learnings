<script>
export default {
  name: 'PasswordMeter',
  data() {
    return {
      password: '',
      strength: 0,
      show : false,
      error : '',
      color : ''
    }
  },
  methods: {
    
  },
  created() {
    
  }, computed: {
    strengthLabel() {
      if(this.strength === 0) return "Very Weak";
      if(this.strength === 1) return "Weak";
      if(this.strength === 2) return "Medium";
      if(this.strength === 3) return "Strong";
      return "";
    }
  },
  watch:{
    password(newVal ,oldVal){
        let weak = /^.{4,}$/; // at least 4 characters long
        let medium = /^(?=.*[a-z])(?=.*[A-Z])(?=.{6,})/; // at least 6 characters, one lowercase and one uppercase letter
let strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
// at least 8 characters, one lowercase, one uppercase, one number and one special character
         if(strong.test(newVal)){
          this.strength = 3;
          this.error = ' Strong password';
          this.color = 'green';
      }else if(medium.test(newVal)){
          this.strength = 2;
          this.error = ' Add a number & special character to make it stronger';
          this.color = 'orange';
      }else if(weak.test(newVal)){
          this.strength = 1;
          this.error = ' Use uppercase & lowercase letters, min 6 chars';
          this.color = 'red';
      }else{
          this.strength = 0;
          if(newVal.length > 0){
              this.error = ' Password too short (min 4 characters)';
              this.color = 'red';
          }else{
              this.error = '';
              this.color = '';
          }
      }
  }
}
}
</script>
<template>
  <div class="password-meter">
    <label for="password" class="password-label">Password</label>
    <input  
      class="password-input" 
      :type="show ? 'text' : 'password'" 
      id="password"   
      v-model="password" 
      placeholder="Enter Password"  
    />

    <span :style="{ color: color, fontWeight: 'bold' }">
      {{ strengthLabel }}
    </span>
    <span :style="{ color: color }">{{ error }}</span>

    
    <button class="btn btn-primary" type="button" @click="show = !show">
      {{ show ? "Hide" : "Show" }}
    </button>
    <div class="strength-bar">
  <div :style="{ width: (strength * 33) + '%', background: color, height: '6px' }"></div>
</div>

  </div>
</template>


<style scoped>
.password-meter {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.password-label {
  font-weight: bold;
  margin-bottom: 10px;
}
.btn{
    margin-top: 10px;
    width: 100px;
    height: 35px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 14px;
}
.btn-primary {
  background-color: #007bff;
  color: #fff;
}
.strength-bar {
  width: 300px;
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  margin-top: 10px;
}
.password-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  margin-bottom: 10px;
}
</style>