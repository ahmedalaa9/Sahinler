<template>
  <div id="app" class="overflow-x-hidden">
    <Header v-if="$route.name !== 'Entry'" />
    <router-view />
    <Footer v-if="$route.name !== 'Entry'" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import { useTheme } from './composables/useTheme'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<style>
#app {
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
}
</style>