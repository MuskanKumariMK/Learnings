<script>
export default {
    data() {
        return {
            text: "",
            form: {
                name: "",                
            }
        }
    },
    methods: {
        transformText()
        {
            this.form.name = this.form.name.toUpperCase();
            console.log("Transformed Text: ", this.form.name);
        }
    }
}
</script>
<template>
    <div>
        <h1>V Model </h1>
        <div>
            {{ form }}
            <input type="text" v-model="form.name">
            <button @click="transformText">Transform</button>
        </div>
        <br />

        <div>
            {{ text }}
            <br>
            <input type="text" class="input-text" :value="text" @input="(e) => (text = e.target.value)">
        </div>
    </div>
</template>


<style scoped>
.input-text {
    border: 1px solid #ccc;
    padding: 8px;
    border-radius: 4px;
}
</style>