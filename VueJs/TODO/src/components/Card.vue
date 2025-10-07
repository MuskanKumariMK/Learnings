<script>
export default {
  name: 'Card',
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  created() {
    
  }
}
</script>

<template>
  <div>
  <div class="p-4 bg-gray-100 rounded-lg shadow-md mt-4 w-[300px]">
      <h1 class="text-2xl font-bold mb-4">Hello From TODO</h1>
      <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ratione sit esse ipsam
        doloremque labore consectetur voluptate voluptatibus. Expedita qui reiciendis provident sed fugiat ut incidunt
        hic aut ex nemo!</p>
      <div class="mt-4">
        <span class=" text-green-500  py-1 rounded text-xs">Not Completed</span>
      </div>
      <div class="gap-2 mt-4 flex justify-between">
        <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button>
        <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600">Delete</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>