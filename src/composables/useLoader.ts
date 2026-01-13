import { ref } from 'vue'

const isVisible = ref(false)

export const useLoader = () => {
  const open = () => (isVisible.value = true)
  const close = () => (isVisible.value = false)
  const toggle = () => (isVisible.value = !isVisible.value)

  return { isVisible, open, close, toggle }
}
