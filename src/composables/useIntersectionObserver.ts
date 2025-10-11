import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(
  target: () => Element | null,
  options: IntersectionObserverInit = {}
) {
  const isIntersecting = ref(false)
  const isSupported = ref(false)

  let observer: IntersectionObserver | null = null

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  onMounted(() => {
    isSupported.value = window && 'IntersectionObserver' in window

    if (isSupported.value) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isIntersecting.value = entry.isIntersecting
        },
        {
          threshold: 0.1,
          ...options
        }
      )

      const element = target()
      if (element) {
        observer.observe(element)
      }
    }
  })

  onUnmounted(cleanup)

  return {
    isIntersecting,
    isSupported
  }
}