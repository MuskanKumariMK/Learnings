<template>
  <div class="flex flex-col items-center max-w-2xl p-6 mx-auto">
    <form @submit.prevent="submit" class="w-full">
      <div class="mb-4">
        <label for="name" class="block mb-2 font-bold text-gray-700"
          >Product Name</label
        >
        <input
          type="text"
          id="name"
          v-model="name"
          placeholder="Product Name"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />

        <label for="price" class="block mb-2 font-bold text-gray-700"
          >Product Price</label
        >
        <input
          type="number"
          id="price"
          v-model.number="price"
          placeholder="Product Price"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />

        <label for="category" class="block mb-2 font-bold text-gray-700"
          >Category</label
        >
        <input
          type="text"
          id="category"
          v-model="category"
          placeholder="Product category"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />

        <label for="inStock" class="block mb-2 font-bold text-gray-700">
          <input type="checkbox" id="inStock" v-model="inStock" class="mr-2" />
          In Stock
        </label>
      </div>

      <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "EditProduct",
  setup() {
    const name = ref("");
    const price = ref(0);
    const category = ref("");
    const inStock = ref(false);
    const product = ref(null);

    const router = useRouter();
    const route = useRoute();

    onMounted(async () => {
      const res = await fetch(
        `http://localhost:3000/products/${route.params.id}`
      );
      product.value = await res.json();
      name.value = product.value.name;
      price.value = product.value.price;
      category.value = product.value.category;
      inStock.value = product.value.inStock;
    });

    const submit = async () => {
      await fetch(`http://localhost:3000/products/${route.params.id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: name.value,
          price: price.value,
          category: category.value,
          inStock: inStock.value,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      router.push("/admin/products/get");
    };

    return { name, price, category, inStock, submit };
  },
};
</script>
