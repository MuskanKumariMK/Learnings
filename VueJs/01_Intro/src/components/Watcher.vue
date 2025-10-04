<script>
export default {
    data() {
        return {
            count: 0,
            colour: "blue"
        }
    },
    methods: {
        increment() {
            this.count++;
            // if(this.count<0){
            //         this.colour="red"
            //     }else if(this.count>0){
            //         this.colour="green"
            //     }else{
            //         this.colour="blue"
            //     }
            // if (this.count % 2 == 0) { console.log("The number is dividible By 2") }
        },
        decrement() {
            this.count--;
            // if(this.count<0){
            //     this.colour="red"
            // }else if(this.count>0){
            //     this.colour="green"
            // }else{
            //     this.colour="blue"
            // }
            //  if (this.count % 2 == 0) { console.log("The number is dividible By 2") }
        }

    },
    // watch: {
    //     count(newVal, oldVal) {
    //         // console.log("New Value: "+newVal);
    //         // console.log("Old Value: "+oldVal);
    //         if (newVal % 2 == 0) {
    //             console.log("The number is dividible By 2")
    //         }
    //         if (newVal < 0) {
    //             this.colour = "red"
    //         } else if (newVal > 0) {
    //             this.colour = "green"
    //         } else {
    //             this.colour = "blue"
    //         }
    //     }
    // }
    // computed: {
    //     colour() {
    //         if (this.count % 2 == 0) {
    //             console.log("The number is dividible By 2")
    //         }
    //         if (this.count < 0) {
    //             this.color=  "red"
    //         } else if (this.count > 0) {
    //             this.color= "green"
    //         } else {
    //             this.color=  "blue"
    //         }
    //     }
    // }
}
</script>

<template>


    <div class="watcher">
        <h1>Watcher</h1>
        <p>Count: <span :style="{ color: colour }">{{ count }}</span></p>
        <div class="btn-group"><button class="btn btn-primary" @click="increment">Increment</button>
            <button class="btn btn-danger" @click="decrement"> Decrement</button>
        </div>
    </div>
</template>

<style scoped>
.watcher {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 30px;
}

.watcher p {
    font-size: 40px;
}

.btn {
    width: 200px;
    font-size: 20px;
    border: none;
    padding: 10px;
    border-radius: 5px;
}

.btn:hover {
    cursor: pointer;
}

.btn:focus {
    outline: none;
}

.btn-primary {
    background-color: green;
    color: white;
}

.btn-danger {
    background-color: red;
    color: white;
}

.btn-group {
    display: flex;
    gap: 20px;
}
</style>