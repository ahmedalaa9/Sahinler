<template>
  <div class="flex items-center justify-center" :class="containerClass">
    <div 
      class="loading-spinner border-4 border-gray-200 dark:border-gray-700 border-t-primary-600 rounded-full"
      :class="spinnerClass"
    ></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg'
  containerClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  containerClass: ''
})

import { computed } from 'vue'

const spinnerClass = computed(() => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }
  return sizes[props.size]
})
</script>