<template>
  <div>
   <div class="wrapper">
    <h1 class="title">
        {{ book.name }}
    </h1>
    <div class="content">
        <p class="description">{{ book.description }}</p>
    <p >{{ book.price }}</p>
    <p>{{ book.author }}</p>
    </div>
   </div>
  </div>
</template>

<script>
export default {
props: {
    book: {
        type: Object,
       
    }
}
};
</script>

<style scoped>
.wrapper {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    height: 200px;
    background: #000;
    color: #fff;
}
.title {
    font-size: 20px;
    font-weight: bold;

}
.description {
    font-size: 16px;

}
.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
</style>