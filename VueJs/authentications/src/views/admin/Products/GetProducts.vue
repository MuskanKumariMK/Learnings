<template>
  <div class="p-6">
    <h2 class="mb-4 text-2xl font-bold text-gray-800">Product List</h2>
    <div>
      <router-link
        :to="{ name: 'CreateProduct' }"
        class="px-2 py-1 text-xs text-blue-700 bg-green-100 rounded-full"
      >
        Add Product
      </router-link>
    </div>

    <div class="overflow-x-auto bg-white rounded-lg shadow-md">
      <table class="min-w-full border border-gray-200">
        <thead class="bg-gray-100 border-b">
          <tr>
            <th class="px-4 py-2 text-left text-gray-600">ID</th>
            <th class="px-4 py-2 text-left text-gray-600">Name</th>
            <th class="px-4 py-2 text-left text-gray-600">Price</th>
            <th class="px-4 py-2 text-left text-gray-600">Category</th>
            <th class="px-4 py-2 text-left text-gray-600">In Stock</th>
            <th class="px-4 py-2 text-center text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in products"
            :key="product.id"
            class="transition duration-200 border-b hover:bg-gray-50"
          >
            <td class="px-4 py-2">{{ product.id }}</td>
            <td class="px-4 py-2">{{ product.name }}</td>
            <td class="px-4 py-2">{{ product.price }}</td>
            <td class="px-4 py-2">{{ product.category }}</td>
            <td class="px-4 py-2">
              <span
                class="px-2 py-1 text-xs text-green-700 bg-green-100 rounded-full"
              >
                Yes
              </span>
            </td>
            <td class="px-4 py-2 text-center">
              <router-link
                :to="{ name: 'EditProduct', params: { id: product.id } }"
              >
                <button
                  class="px-3 py-1 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              </router-link>
              <button
                @click="del(product.id)"
                class="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "GetProducts",
  setup() {
    const products = ref([]);
    onMounted(async () => {
      const res = await fetch("http://localhost:3000/products");
      console.log(res);
      products.value = await res.json();
      console.log(products.value);
    });
    const del = async (id) => {
      console.log(id);
      await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      products.value = products.value.filter((product) => product.id !== id);
    };
    return { products, del };
  },
};
</script>
