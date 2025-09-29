<template>
  <aside class="w-64 h-screen text-white bg-gray-900 shadow-md">
    <div class="p-4 text-2xl font-bold border-b border-gray-700">
      Admin Panel
    </div>
    <nav class="mt-4">
      <ul class="flex flex-col gap-2 p-2">
        <li>
          <router-link
            to="/admin"
            class="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link
            to="/admin/products/create"
            class="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Create Product
          </router-link>
        </li>
        <li>
          <router-link
            to="/admin/products/get"
            class="block px-4 py-2 rounded hover:bg-gray-700"
          >
            View Products
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
/* Optional: make active route link highlighted */
.router-link-active {
  background-color: #374151; /* Tailwind gray-700 */
}
</style>
