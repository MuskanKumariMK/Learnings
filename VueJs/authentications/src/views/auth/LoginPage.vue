<template>
  <div class="flex items-center justify-center h-screen bg-[#e4e4e4]">
    <div class="p-10 text-center bg-white border-green-600">
      <h1 class="text-blue-600">Login</h1>
      <form action="" @submit="submit">
        <div class="mb-4">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your email
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            v-model="email"
            id="email"
            class="border rounded-[6px] p-3 bg-gray-50 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div class="mb-4">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your password
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            v-model="password"
            id="password"
            class="border rounded-[6px] p-3 bg-gray-50 border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div class="mb-4">
          <button
            class="p-3 text-white bg-green-600 rounded-[6px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 boder-green-600 bg-hite bg-greetext-center"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  setup() {
    const email = ref("");
    const password = ref();
    const router = useRoute();
    const submit = async () => {
      await fetch("MY_URL/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      }).then((res) => {
        console.log(res);
        const token = res.token;
        localStorage.setItem("token", token);
      });
      router.push("/admin");
    };
  },
};
</script>

<style></style>
