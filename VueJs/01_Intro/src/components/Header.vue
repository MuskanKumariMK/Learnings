<template>
  <div class="flex header">
    <div class="heading">Header</div>
    <ul class="flex header-ul">
      <li class="header-li">
        <router-link to="/">Home</router-link>
      </li>
    
      <li class="header-li" style="padding-right: 10px">
        <router-link to="/learning">Learning</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

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
.header-li a {
  text-decoration: none;
  color: white; /* make link text white */
}
.header-li a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid yellow; /* highlight active route */
}
</style>
