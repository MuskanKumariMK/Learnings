import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("authToken") || "",
    user: JSON.parse(localStorage.getItem("authUser")) || null,
  }),
  actions: {
    login() {
      // Dummy login
      this.token = "dummy-token-123";
      this.user = { name: "Muskan", email: "muskan@example.com" };

      // Save to Local Storage
      localStorage.setItem("authToken", this.token);
      localStorage.setItem("authUser", JSON.stringify(this.user));
    },
    logout() {
      this.token = "";
      this.user = null;

      // Remove from Local Storage
      localStorage.removeItem("authToken");
      localStorage.removeItem("authUser");
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
});
