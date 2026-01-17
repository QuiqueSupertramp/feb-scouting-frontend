import { ref } from 'vue'

const isVisible = ref(false)
const firstTime = ref(true)

export const useLoader = () => {
  const open = () => (isVisible.value = true)
  const close = () => {
    if (!firstTime.value) return (isVisible.value = false)

    setTimeout(() => {
      isVisible.value = false
      firstTime.value = false
    }, 500)
  }

  return { isVisible, firstTime, open, close }
}
