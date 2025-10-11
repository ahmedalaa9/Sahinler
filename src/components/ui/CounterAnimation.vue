<template>
  <div ref="counterRef" class="text-center">
    <div class="text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
      {{ displayValue }}{{ suffix }}
    </div>
    <div class="text-gray-600 dark:text-gray-400 font-medium">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useIntersectionObserver } from '../../composables/useIntersectionObserver'

interface Props {
  value: number
  label: string
  suffix?: string
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  suffix: '',
  duration: 2000
})

const counterRef = ref<HTMLElement | null>(null)
const displayValue = ref(0)

const { isIntersecting } = useIntersectionObserver(
  () => counterRef.value,
  { threshold: 0.5 }
)

const animateCounter = () => {
  const startTime = Date.now()
  const startValue = 0
  const endValue = props.value

  const updateCounter = () => {
    const now = Date.now()
    const elapsed = now - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    
    displayValue.value = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter)
    } else {
      displayValue.value = endValue
    }
  }
  
  requestAnimationFrame(updateCounter)
}

watch(isIntersecting, (newValue) => {
  if (newValue && displayValue.value === 0) {
    animateCounter()
  }
})
</script>