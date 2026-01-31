<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl'
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md',
    ]"
  >
    <nav class="container-max section-padding">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link
          to="/home"
          class="flex items-center space-x-3 group relative"
          @click="closeMobileMenu"
        >
          <img
            class="w-36 h-16 group-hover:scale-105 transition-all duration-300"
            src="/main-logo2.jpeg"
            alt="Şahinler Egypt Logo"
          />
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <router-link
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.path"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 relative group"
            :class="{
              'text-primary-600 dark:text-primary-400':
                $route.path === item.path,
            }"
          >
            {{ item.name }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"
              :class="{ 'w-full': $route.path === item.path }"
            ></span>
          </router-link>
        </div>

        <!-- Theme Toggle & Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            <span class="material-symbols-outlined text-xl">
              {{ isDark ? "light_mode" : "dark_mode" }}
            </span>
          </button>

          <button
            @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            <span class="material-symbols-outlined text-xl">
              {{ isMobileMenuOpen ? "close" : "menu" }}
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 transform -translate-y-2"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-2"
      >
        <div
          v-if="isMobileMenuOpen"
          class="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-t border-gray-200 dark:border-gray-700"
        >
          <div class="section-padding py-6">
            <nav class="space-y-4">
              <router-link
                v-for="item in navigationItems"
                :key="item.name"
                :to="item.path"
                @click="closeMobileMenu"
                class="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-200"
                :class="{
                  'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20':
                    $route.path === item.path,
                }"
              >
                {{ item.name }}
              </router-link>
            </nav>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useTheme } from "../../composables/useTheme";

const { isDark, toggleTheme } = useTheme();

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navigationItems = [
  { name: "Home", path: "/home" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Gallery", path: "/gallery" },
  { name: "Clients", path: "/clients" },
  { name: "Certificates", path: "/certificates" },
  { name: "Contact", path: "/contact" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
