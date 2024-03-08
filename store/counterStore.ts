import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCounterStore = create(persist((set) => ({
  counter: 0,
  increasePopulation: () => set((state: { counter: number }) => ({ counter: state.counter + 1 })),
  resetCounter: () => set({ counter: 0 }),
}), {
  name: "counter-data",
  storage: createJSONStorage(() => sessionStorage),
}))
