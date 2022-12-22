import { ref } from "vue";
import { defineStore } from "pinia";

interface User {
  login: string;
}

export const useUserStore = defineStore("user", () => {
  const user = ref<User>();
  async function logout() {
    user.value = undefined;
  }

  async function login() {
    user.value = { login: "test_login" };
  }

  return { user, logout, login };
});
