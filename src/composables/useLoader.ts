import { ref } from 'vue'

const isVisible = ref(false)
const firstTime = ref(true)

export const useLoader = () => {
  const open = () => (isVisible.value = true)
  const close = () => {
    isVisible.value = false
    if (!firstTime.value) return

    setTimeout(() => {
      firstTime.value = false
    }, 500)
  }

  return { isVisible, firstTime, open, close }
}
