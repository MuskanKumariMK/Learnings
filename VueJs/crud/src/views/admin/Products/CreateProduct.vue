<template>
  <div class="items-center max-w-2xl p-6 mx-auto justify-content-center">
    <router-link
      :to="{ name: 'GetProducts' }"
      class="px-2 py-1 mb-10 text-xs text-blue-700 bg-green-100 rounded-full"
      >Get
    </router-link>
    <form @submit.prevent="submit">
      <div class="mb-4">
        <label for="name" class="block mb-2 font-bold text-gray-700"
          >Product Name</label
        >
        <input
          type="text"
          id="name"
          v-model="name"
          name="name"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Product Name"
        />

        <label for="price" class="block mb-2 font-bold text-gray-700"
          >Product Price</label
        >
        <input
          type="number"
          id="price"
          v-model="price"
          name="price"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Product Price"
        />

        <label for="category" class="block mb-2 font-bold text-gray-700"
          >Category</label
        >
        <input
          type="text"
          id="category"
          v-model="category"
          name="category"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Product category"
        />

        <label for="inStock" class="block mb-2 font-bold text-gray-700"
          >In Stock</label
        >
        <input
          type="checkbox"
          id="inStock"
          v-model="inStock"
          name="inStock"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Product inStock"
        />
      </div>

      <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "CreateProduct",
  setup() {
    const name = ref("");
    const price = ref("");
    const category = ref("");
    const inStock = ref("");
    const router = useRouter();

    const submit = async () => {
      await fetch("http://localhost:3000/products", {
        method: "POST",
        body: JSON.stringify({
          name: name.value,
          price: price.value,
          category: category.value,
          inStock: inStock.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      router.push("/admin/products/get");
    };

    return {
      name,
      price,
      category,
      inStock,
      submit,
    };
  },
};
</script>
