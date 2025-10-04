<script>
export default {
    name: 'TimerCounter',
    data() {
        return {
            time: 0,
            timer: null,
            isRunning: false
        }
    },
    methods: {
startTimer(){
    if(!this.isRunning){
        this.timer = setInterval(() => {
            this.time++;
        }, 1000);
    }
    console.log(this.timer);
    this.isRunning = true;
},
pauseTimer(){
    clearInterval(this.timer);
    this.isRunning = false;
},
resetTimer(){
    this.time = 0;
    this.pauseTimer();
}
    },
    computed: {
        min(){
            let minutes = String(Math.floor(this.time /60)).padStart(2,'0');
            return minutes;
        },
        sec(){
            let seconds = String(this.time % 60).padStart(2,'0');
            return seconds;
        }
    }
}
</script>

<template>
    <div class="timer-counter">
        <h2>Stopwatch Timer</h2>
        <p>{{ min }} : {{ sec }}</p>
        <div class="btn-group">
            <button @click="startTimer"  class="btn btn-primary">Start</button><button @click="pauseTimer" class="btn btn-danger">Pause</button><button @click="resetTimer" class="btn btn-success">Reset</button>
        </div>

    </div>
</template>

<style scoped>

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

.btn-success {
    background-color: green;
    color: white;
}

.timer-counter {
    text-align: center;
    margin-top: 20px;
}
.timer-counter p {
    font-size: 50px;
    margin: 20px 0;
}
.timer-counter h2 {
    font-size: 30px;
}
</style>