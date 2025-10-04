<script>
export default {
    props: {
        form: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            acceptTerms: false,
            errors: {},
            skillsArray: ["Frontend", "Backend", "Database"],

        };
    },
    computed:{
        computedCountry(){
            console.log("Computed Country Called");
            return this.dynamicCountry();
        }
    },
    methods: {
        dynamicCountry(){

            return [
                {text:"Select Country", value:""},
                {text:"USA", value:"usa"},
                {text:"UK", value:"uk"},
                {text:"India", value:"india"},
                {text:"Australia", value:"australia"},
                {text:"Canada", value:"canada"},
                {text:"Germany", value:"germany"},
                {text:"Japan", value:"japan"},
                {text:"China", value:"china"},
                {text:"Brazil", value:"brazil"},
                {text:"Russia", value:"russia"},
            ]
        },
        validate() {
            
            this.errors = {};
            let name = this.form.name;
            let email = this.form.email;
            let age = this.form.age;
            let gender = this.form.gender;
            let country = this.form.country;
            let skills = this.form.skills;

            if (!name) {
                // alert("Name is required!");
                this.errors.name = "Name is required!";
                return;
            }
            if (name.length < 8) {
                // alert("Name should be at least 8 characters long!");
                this.errors.name = "Name should be at least 8 characters long!";
                return;
            }
            if (!email) {
               
                // alert("Email is required!");
                this.errors.email = "Email is required!";
                return;
            } if (!exportmail.includes("@")) {
                // alert("Enter a valid email");
                this.errors.email = "Enter a valid email";
                return;
            }
            //  let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            //     if (!regexEmail.test(email)) {
            //         this.errors.email = "Enter a valid email";
            //         return;
            //     }
         
            if (!age) {
                // alert("Age is required!");
                this.errors.age = "Age is required!";
                return;
            }
            if (!gender) {
                // alert("Gender is required!");
                this.errors.gender = "Gender is required!";
                return;
            }
            if (!country) {
                // alert("Country is required!");
                this.errors.country = "Country is required!";
                return;
            } if (!skills.length) {
                // alert("Select at least one skill!");
                this.errors.skills = "Select at least one skill!";
                return;
            } if (!this.acceptTerms) {
                // alert("You must accept the Terms & Conditions!");
                this.errors.acceptTerms = "You must accept the Terms & Conditions!";
                return;
            }

            return Object.keys(this.errors).length === 0;
        },
        submit() {

            // if (this.validate()) {
                console.log("Form Data:", this.form);
                alert("Form submitted successfully!");
            // }
        },
    },
   watch: {
//   "form.email"(newEmail) {
//     // Email regex pattern
//     const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     if (!regexEmail.test(newEmail)) {
//       this.errors.email = "Enter a valid email";
//     } else {
//       this.errors.email = ""; // clear error if valid
//     }
//   }

  form: {
    handler(newForm) {
      this.errors = {}; // reset errors

      let { name, email, age, gender, country, skills } = this.form;

      // Name validation
      if (!name) {
        this.errors.name = "Name is required!";
      } else if (name.length < 8) {
        this.errors.name = "Name should be at least 8 characters long!";
      }

      // Email validation
      if (!email) {
        this.errors.email = "Email is required!";
      } else {
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regexEmail.test(email)) {
          this.errors.email = "Enter a valid email!";
        }
      }

      // Age validation
      if (!age) {
        this.errors.age = "Age is required!";
      }

      // Gender validation
      if (!gender) {
        this.errors.gender = "Gender is required!";
      }

      // Country validation
      if (!country) {
        this.errors.country = "Country is required!";
      }

      // Skills validation
      if (!skills || !skills.length) {
        this.errors.skills = "Select at least one skill!";
      }

      // Terms validation
      if (!this.acceptTerms) {
        this.errors.acceptTerms = "You must accept the Terms & Conditions!";
      }

      // Return validity flag
      return Object.keys(this.errors).length === 0;
    },
    deep: true,
  },

}}
</script>

<template>
    <div class="form">
        <h1>Form</h1>
        <div class="input">
            <label for="">Name</label>
            <input placeholder="Enter Name..." v-model="form.name" />
            <span class="error" v-if="errors.name">{{ errors.name }}</span>
        </div>
        <div class="input">
            <label for="">Email</label>
            <input placeholder="Enter Email..." v-model="form.email" />
            <span class="error" v-if="errors.email">{{ errors.email }}</span>
        </div>
        <div class="input">
            <label for="">Age</label>
            <input v-model="form.age" type="number" />
            <span class="error" v-if="errors.age">{{ errors.age }}</span>
        </div>
        <div class="radio-input">
            <label>Gender</label>
            <div class="radio-options">
                <label>
                    <input type="radio" v-model="form.gender" value="male" />
                    Male
                </label>
                <label>
                    <input type="radio" v-model="form.gender" value="female" />
                    Female
                </label>
            </div>
            <span class="error" v-if="errors.gender">{{ errors.gender }}</span>
        </div>

        <div class="select-input">
            <label for=""> Country</label>
            <select class="select" v-model="form.country">
                <option class="opt" value="">Select Country</option>
                <option class="opt" v-for="data in computedCountry" :value="data.value">{{data.text}}</option>
             
            </select>
            <span class="error" v-if="errors.country">{{ errors.country }}</span>
        </div>
        <div class="skills">
            <h3>Select Skills </h3>
            <p class="skill">You Selected : <span>{{ form.skills.join(", ") }}</span></p>
            
         <div v-for="skill in skillsArray">   
            <input type="checkbox" :value="skill" v-model="form.skills" />
            <label :for="skill">{{skill}}</label></div>
            <!-- <input type="checkbox" id="frontend" value="Frontend" v-model="form.skills" /> -->
            <!-- <label for="frontend">Frontend</label> -->
      
            <!-- <input type="checkbox" id="backend" value="Backend" v-model="form.skills" />
            <label for="backend">Backend</label>

            <input type="checkbox" id="database" value="Database" v-model="form.skills" />
            <label for="database">Database</label> -->
            <span class="error" v-if="errors.skills">{{ errors.skills }}</span>
        </div>
        <div class="checkbox">
            <label>
                <input type="checkbox" v-model="acceptTerms" />
                Accept Terms & Conditions
            </label>
            <span class="error" v-if="errors.acceptTerms">{{ errors.acceptTerms }}</span>
        </div>
        <!-- <div class="input">
      <span>Multiline message is:</span>
      <p style="white-space: pre-line">{{ form.message }}</p>
      <textarea
        v-model="form.message"
        placeholder="add multiple lines"
      ></textarea>
    </div> -->
        <div class="button">
            <button @click="submit">Submit</button>
        </div>
    </div>
</template>

<style scoped>
.form {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 4px;
    max-width: 300px;
    margin: 0 auto;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.error {
    color: red;
    font-size: 13px;
    margin-top: 3px;
    display: block;
}

.input,
.radio-input {
    margin-bottom: 10px;
}

.input label,
.radio-input label {
    display: block;
    margin-bottom: 5px;
}

.input input {
    border: 1px solid #ccc;
    padding: 3px;
    border-radius: 4px;
}

.input input::placeholder {
    color: #999;
}

.input textarea {
    border: 1px solid #ccc;
    padding: 3px;
    border-radius: 4px;
    width: 100%;
    min-height: 60px;
}

.input textarea::placeholder {
    color: #999;
}

.input input:focus,
.select-input select:focus {
    border: 1px solid #007bff;
    outline: none;
}

.button button {
    padding: 8px 16px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.select-input {
    margin-bottom: 10px;
}


.select-input select {
    border: 1px solid #ccc;
    padding: 3px;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 5px;
}

select .opt {
    padding: 5px;
}

.radio-options {
    display: flex;
    gap: 15px;
    align-items: center;
}

.radio-options label {
    font-size: 14px;
    color: #555;
}

.checkbox {
    margin-bottom: 20px;
}

.checkbox input {
    width: 16px;
    height: 16px;
    accent-color: #28a745;
    cursor: pointer;
}

.skills {
    /* border: 1px solid #ccc; */
    padding: 15px 20px;
    border-radius: 8px;
    max-width: 350px;
    margin: 20px auto;
    /* background-color: #f9f9f9; */
    font-family: Arial, sans-serif;
}

.skills h3 {
    margin-bottom: 10px;
    color: #333;
}

.skill {
    margin-bottom: 15px;
    color: #007bff;
}

.skill span {
    font-weight: bold;
    color: #28a745;
}
</style>
