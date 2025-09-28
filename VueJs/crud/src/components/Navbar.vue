<template>
  <nav class="p-2 bg-gray-200 shadow-md">
    <div class="flex items-center">
      <ul class="flex gap-6">
        <li>
          <router-link to="/" class="font-medium hover:text-blue-600">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="font-medium hover:text-blue-600">
            About
          </router-link>
        </li>
        <li>
          <router-link to="/admin" class="font-medium hover:text-blue-600">
            Admin
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* optional: make active link different color */
.router-link-active {
  color: #1d4ed8; /* Tailwind blue-700 */
  font-weight: 600;
}
</style>
