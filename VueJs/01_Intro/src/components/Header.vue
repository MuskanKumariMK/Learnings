<template>
  <div class="flex header">
    <div class="heading">Header</div>
    <ul class="flex header-ul">
      <li class="header-li">Home</li>
      <li class="header-li">Contact</li>
      <li style="padding-right: 10px" class="header-li">About</li>
    </ul>
  </div>
</template>
<script></script>
<style>
.header {
  background-color: rgb(70, 0, 128);
  color: rgb(255, 255, 255);
  margin: 0;
}
.heading {
  font-size: 20px;
  padding: 20px;
  font-weight: bold;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-ul {
  list-style-type: none;
  gap: 30px;
}
.header-li {
  cursor: pointer;
  padding: 2px;
  font-size: 18px;
}
</style>
