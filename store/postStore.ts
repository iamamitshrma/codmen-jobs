import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const usePostStore = create(persist((set) => ({
  post: [],
  fetch: async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {headers: {"Content-Type": "application/json"}});
    const post = await response.json();
    set({post})
  }
}), {
  name: "post-data",
  storage: createJSONStorage(() => sessionStorage),
}))
