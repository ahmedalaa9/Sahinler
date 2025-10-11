<template>
  <footer class="bg-gray-900 text-white">
    <!-- Main Footer Content -->
    <div class="container-max section-padding py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            <div
              class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center"
            >
              <span class="text-white font-bold text-xl">Ş</span>
            </div>
            <div>
              <div class="text-2xl font-bold">Şahinler Egypt</div>
              <div class="text-sm text-gray-400">Member of Şahinler Group</div>
            </div>
          </div>
          <p class="text-gray-300 mb-6 max-w-md leading-relaxed">
            Leading garment manufacturer in Egypt since 2006, producing over 50
            million units of high-quality ready-to-wear garments for global
            brands.
          </p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="flex items-center p-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
              aria-label="YouTube"
            >
              <span>
                <svg
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  />
                </svg>
              </span>
            </a>
            <a
              href="#"
              class="flex items-center p-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
              aria-label="Facebook"
            >
              <div>
                <svg
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
                <!-- <p class="text-gray-300">Egypt</p> -->
              </div>
            </a>
            <a
              href="#"
              class="flex items-center p-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
              aria-label="Instagram"
            >
              <div>
                <svg
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <router-link
                :to="link.path"
                class="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
              >
                <span class="material-symbols-outlined text-sm"
                  >chevron_right</span
                >
                <span>{{ link.name }}</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Contact Info</h3>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <span class="material-symbols-outlined text-primary-400 mt-1"
                >location_on</span
              >
              <div>
                <p class="text-gray-300">10th of Ramadan City</p>
                <p class="text-gray-300">Egypt</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <span class="material-symbols-outlined text-primary-400"
                >phone</span
              >
              <p class="text-gray-300">+20 15 5574 4411</p>
            </div>
            <div class="flex items-center space-x-3">
              <span class="material-symbols-outlined text-primary-400"
                >email</span
              >
              <p class="text-gray-300">info@sahinleregypt.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter Section -->
    <!-- <div class="border-t border-gray-800">
      <div class="container-max section-padding py-8">
        <div
          class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <div>
            <h3 class="text-lg font-semibold mb-2">Stay Updated</h3>
            <p class="text-gray-400">
              Subscribe to get the latest news and updates
            </p>
          </div>
          <form
            @submit.prevent="handleNewsletterSubmit"
            class="flex space-x-2 w-full md:w-auto"
          >
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
              class="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
            />
            <button
              type="submit"
              class="px-6 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div> -->

    <!-- Bottom Footer -->
    <div class="border-t border-gray-800">
      <div class="container-max section-padding py-6">
        <div
          class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} Şahinler Egypt. All rights reserved.
          </p>
          <div class="flex space-x-6 text-sm">
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const email = ref("");
const currentYear = computed(() => new Date().getFullYear());

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Gallery", path: "/gallery" },
  { name: "Clients", path: "/clients" },
  { name: "Certificates", path: "/certificates" },
  { name: "Contact", path: "/contact" },
];

const handleNewsletterSubmit = () => {
  if (email.value) {
    // Here you would handle the newsletter subscription
    console.log("Newsletter subscription:", email.value);
    email.value = "";
    // You could show a success message here
  }
};
</script>
