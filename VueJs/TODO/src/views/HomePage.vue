<script>
export default {
  name: "Home",
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Learn Vue",
          completed: false,
          status: "Started",
          description: "Learn Vue from the official documentation and build some projects to practice."
        }
      ],
      status: ["Started","Completed", "Pending", "Active","Not Started"],
      form: {
        name: "",
        description: "",
        completed: false
      },
      showModal: false,
      isEdit: false,
    }
  },
  created() {
    this.getTasks();
  },
  methods: {
    AddTask() {
      console.log("Form Submitted", this.form);
      this.tasks.push({
        id: this.tasks.length + 1,
        name: this.form.name,
        description: this.form.description,
        completed: this.form.completed,
        status: this.form.status || "Started"
      });
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      this.form = {
        name: "",
        description: "",
        completed: false,
        status: "Started"
      }
      this.closeModal();
    },
    getTasks() {
      const tasks = localStorage.getItem('tasks');
      console.log(tasks);
      if (tasks) {
        this.tasks = JSON.parse(tasks);
      }
    },
    editTask(task) {
      this.isEdit = true;
      this.form = { ...task };
      this.showModal = true;
    },
    updateTask() {
      const index = this.tasks.findIndex((t) => t.id === this.form.id);
      if (index !== -1) {
        this.tasks[index] = { ...this.form };
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      }
      this.resetForm();
      this.closeModal();
      this.isEdit = false;
    },
    deleteTask(task) {
      alert(`Delete Task: ${task.name}`);
      this.tasks = this.tasks.filter(t => t.id !== task.id);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    closeModal() {
      this.showModal = false;
    },
    submit() {
      if (this.isEdit) {
        this.updateTask();
      } else {
        this.AddTask();
      }
    },
    resetForm() {
      this.form = { id: null, name: "", description: "", completed: false,status: "Started" };
    },

  }
};
</script>
<template>
  <nav class="bg-gray-800 p-4 text-white">
    <button class="border-2 border-white text-white p-2 rounded hover:bg-blue-600" @click="showModal = true">Add New
      Task</button>
  </nav>
  <div class="flex flex-wrap justify-center gap-4 mt-4 ">
    <div class="p-4 bg-gray-100 rounded-lg shadow-md mt-4 w-[300px]" v-for="task in tasks" :key="task.id">
      <h1 class="text-2xl font-bold mb-4">{{ task.name }}</h1>
      <p class="text-gray-600">{{ task.description }}</p>
      <div class="mt-4">
        <!-- <span class=" text-green-500  py-1 rounded text-xs"> {{ task.completed ? 'Completed' : 'Not Completed' }}</span> -->
        <span class=" text-blue-500  py-1 rounded text-xs ml-2">Status: {{ task.status }}</span>
      </div>
      <div class="gap-2 mt-4 flex justify-between">
        <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          @click="editTask(task)">Edit</button>
        <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          @click="deleteTask(task)">Delete</button>
      </div>
    </div>
  </div>

  <!-- Modal Background -->
  <div v-if="showModal"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto">
    <!-- Modal Container -->
    <div class="relative bg-white  rounded-2xl shadow-2xl w-full max-w-2xl mx-4 animate-fadeIn">
      <!-- Header -->
      <div class="flex justify-between items-center border-b border-gray-200 px-6 py-4">
        <h2 class="text-lg font-semibold  ">  <h2 class="text-lg font-semibold">
          {{ isEdit ? "Edit Task" : "Add New Task" }}
        </h2></h2>
        <button class="  transition" @click="closeModal()" aria-label="Close">
          ✕
        </button>
      </div>

      <!-- Modal Content -->
      <div class="p-6">
        <form @submit.prevent="submit" action="" class="space-y-6">
   
          <div>
            <label for="taskName" class="block mb-2 text-sm font-medium ">
              Task Name
            </label>
            <input type="text" id="taskName" v-model="form.name"
              class="w-full border y-300border-gra dark:border-gray-600  rounded-lg p-2.5 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter task name" required />
          </div>

      
          <div>
            <label for="taskDesc" class="block mb-2 text-sm font-medium ">
              Task Description
            </label>
            <textarea id="taskDesc" rows="4" v-model="form.description"
              class="w-full border border-gray-300 dark:border-gray-600  rounded-lg p-2.5 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter task description"></textarea>
          </div>

      
          <div class="flex items-center">
            <input id="completed" type="checkbox" v-model="form.completed"
              class="w-4 h-4  border-gray-300 rounded focus:ring-indigo-500" />
            <label for="completed" class="ml-2 text-sm ">Completed</label>
          </div>

          <div>
            <label for="status" class="block mb-2 text-sm font-medium ">
              Status
            </label>
            <select id="status" v-model="form.status"
              class="w-full border border-gray-300 dark:border-gray-600  rounded-lg p-2.5 focus:ring-indigo-500 focus:border-indigo-500">
              <option v-for="stat in status" :key="stat" :value="stat">{{ stat }}</option>
            </select>
          </div>
        
          <div class="pt-4">
            <button type="submit"
              class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg py-2.5 transition duration-150 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800">
                {{ isEdit ? "Save Changes" : "Add Task" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>
