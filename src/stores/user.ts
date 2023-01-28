import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const login = ref(true)

  return { login }
})
