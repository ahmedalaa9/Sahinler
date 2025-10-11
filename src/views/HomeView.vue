<template>
  <div class="min-h-screen overflow-x-hidden">
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
    >
      <!-- Video Background -->
      <div class="absolute inset-0 z-0">
        <video
          autoplay
          muted
          loop
          playsinline
          class="w-full h-full object-cover"
        >
          <source src="/sahinler-Egypt-home.mp4" type="video/mp4" />
        </video>

        <!-- Modern Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-secondary-800/70 to-primary-800/60"
        ></div>
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
        ></div>
      </div>

      <!-- Main Content Grid -->
      <div class="relative z-20 container-max section-padding w-full">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]"
        >
          <!-- Left Content -->
          <div class="text-white space-y-8">
            <!-- Company Badge -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
              class="inline-flex items-center px-4 py-2 bg-primary-600/90 backdrop-blur-sm rounded-full text-sm font-medium"
            >
              <div
                class="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"
              ></div>
              Since 2006 • Şahinler Group Member
            </div>

            <!-- Main Headline -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible="{
                opacity: 1,
                y: 0,
                transition: { duration: 800, delay: 200 },
              }"
              class="space-y-4"
            >
              <h1
                class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span class="block text-white mb-2">Leading Global</span>
                <span
                  class="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400"
                >
                  Garment
                </span>
                <span
                  class="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-400"
                >
                  Manufacturing
                </span>
              </h1>
            </div>

            <!-- Description -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{
                opacity: 1,
                y: 0,
                transition: { duration: 600, delay: 400 },
              }"
              class="max-w-lg"
            >
              <p class="text-lg lg:text-xl text-white/90 leading-relaxed">
                Şahinler Egypt delivers world-class garment manufacturing with
                cutting-edge technology, sustainable practices, and
                uncompromising quality standards.
              </p>
            </div>

            <!-- Action Buttons -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{
                opacity: 1,
                y: 0,
                transition: { duration: 600, delay: 600 },
              }"
              class="flex flex-col sm:flex-row gap-4"
            >
              <router-link
                to="/gallery"
                class="group inline-flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span>Discover Our Factories</span>
                <span
                  class="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                  >arrow_forward</span
                >
              </router-link>
              <router-link
                to="/contact"
                class="group inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <span class="material-symbols-outlined">play_circle</span>
                <span>Watch Video</span>
              </router-link>
            </div>

            <!-- Bottom Stats -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible="{
                opacity: 1,
                y: 0,
                transition: { duration: 800, delay: 800 },
              }"
              class="grid grid-cols-3 gap-8 pt-8"
            >
              <div class="text-center">
                <div
                  class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3"
                >
                  <span class="material-symbols-outlined text-primary-400"
                    >factory</span
                  >
                </div>
                <div class="text-2xl lg:text-3xl font-bold text-white">50+</div>
                <div class="text-sm text-white/70">Production Lines</div>
              </div>
              <div class="text-center">
                <div
                  class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3"
                >
                  <span class="material-symbols-outlined text-secondary-400"
                    >groups</span
                  >
                </div>
                <div class="text-2xl lg:text-3xl font-bold text-white">
                  2000+
                </div>
                <div class="text-sm text-white/70">Skilled Workers</div>
              </div>
              <div class="text-center">
                <div
                  class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3"
                >
                  <span class="material-symbols-outlined text-primary-300"
                    >public</span
                  >
                </div>
                <div class="text-2xl lg:text-3xl font-bold text-white">25+</div>
                <div class="text-sm text-white/70">Export Countries</div>
              </div>
            </div>
          </div>

          <!-- Right Content - Info Card -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible="{
              opacity: 1,
              x: 0,
              transition: { duration: 800, delay: 400 },
            }"
            class="lg:justify-self-end"
          >
            <div
              class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl max-w-md"
            >
              <!-- Main Feature -->
              <div class="text-center mb-8">
                <div
                  class="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <span
                    class="material-symbols-outlined text-primary-600 text-2xl"
                    >precision_manufacturing</span
                  >
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  Modern Manufacturing
                </h3>
                <p class="text-gray-600">State-of-the-art facilities</p>
              </div>

              <!-- Stats Grid -->
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-primary-50 rounded-2xl p-6 text-center">
                  <div class="text-3xl font-bold text-primary-600 mb-1">
                    98%
                  </div>
                  <div class="text-sm text-primary-700 font-medium">
                    Quality Score
                  </div>
                </div>
                <div class="bg-secondary-50 rounded-2xl p-6 text-center">
                  <div class="text-3xl font-bold text-secondary-800 mb-1">
                    24/7
                  </div>
                  <div class="text-sm text-secondary-800 font-medium">
                    Operations
                  </div>
                </div>
              </div>

              <!-- Additional Info -->
              <div class="mt-8 pt-6 border-t border-gray-200">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-gray-600">Annual Capacity</span>
                  <span class="font-semibold text-gray-900">50M+ Units</span>
                </div>
                <div class="flex items-center justify-between text-sm mt-2">
                  <span class="text-gray-600">Global Ranking</span>
                  <span class="font-semibold text-gray-900">#18 Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 1000 },
        }"
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 z-20"
      >
        <div
          @click="scrollToNext"
          class="flex flex-col items-center cursor-pointer group"
        >
          <span
            class="text-xs mb-3 text-white/50 group-hover:text-white/80 transition-colors duration-300 uppercase tracking-widest"
            >Scroll Down</span
          >
          <div
            class="w-6 h-10 border border-white/30 rounded-full flex justify-center group-hover:border-white/50 transition-colors duration-300"
          >
            <div
              class="w-1 h-2 bg-white/40 rounded-full mt-2 animate-bounce"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Stats Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container-max section-padding">
        <div
          v-motion
          :initial="{ y: 50, opacity: 0 }"
          :visible="{ y: 0, opacity: 1, transition: { duration: 800 } }"
          class="text-center mb-16"
        >
          <h2
            class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-heading"
          >
            Our Global Presence
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            As part of Şahinler Group, we're recognized as the 18th largest
            textile manufacturer worldwide and 3rd in Europe in the
            ready-to-wear sector.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CounterAnimation
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 200 },
            }"
            :value="50"
            label="Million Units"
            suffix="M+"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
          <CounterAnimation
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 400 },
            }"
            :value="18"
            label="Global Ranking"
            suffix=""
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
          <CounterAnimation
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 600 },
            }"
            :value="2006"
            label="Established"
            suffix=""
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
          <CounterAnimation
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 800 },
            }"
            :value="100"
            label="Global Clients"
            suffix="+"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20">
      <div class="container-max section-padding">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            v-motion
            :initial="{ x: -100, opacity: 0 }"
            :visible="{ x: 0, opacity: 1, transition: { duration: 800 } }"
          >
            <h2
              class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-heading"
            >
              Excellence in
              <span class="heading-gradient">Manufacturing</span>
            </h2>
            <p
              class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
            >
              Şahinler Egypt operates as a Private Free Zone company,
              specializing in high-quality ready-to-wear garments including
              sportswear, intimate apparel, and fashion wear for men, women, and
              children.
            </p>
            <p
              class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Our state-of-the-art facilities and experienced workforce ensure
              that every garment meets international quality standards while
              maintaining competitive pricing and reliable delivery schedules.
            </p>
            <router-link
              to="/about"
              class="btn-primary inline-flex items-center space-x-2"
            >
              <span>Learn More About Us</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </router-link>
          </div>

          <div
            v-motion
            :initial="{ x: 100, opacity: 0 }"
            :visible="{
              x: 0,
              opacity: 1,
              transition: { duration: 800, delay: 300 },
            }"
            class="relative"
          >
            <div class="grid grid-cols-2 gap-4">
              <img
                src="/public/gallery/machine-1.jpeg"
                alt="Manufacturing Excellence"
                class="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img
                src="/public/gallery/machine-2.jpeg"
                alt="Quality Control"
                class="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8 h-[250px]"
              />
              <!-- <img
                src="/public/gallery/machine-2.jpeg"
                alt="Quality Control"
                class="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8"
              /> -->
            </div>
            <div
              class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-800 rounded-2xl opacity-20 animate-float"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Preview Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container-max section-padding">
        <div
          v-motion
          :initial="{ y: 50, opacity: 0 }"
          :visible="{ y: 0, opacity: 1, transition: { duration: 800 } }"
          class="text-center mb-16"
        >
          <h2
            class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-heading"
          >
            Our Product Categories
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From premium knitwear to intricate embroidery, we specialize in
            diverse manufacturing capabilities to meet your brand's unique
            requirements.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(category, index) in productCategories"
            :key="category.name"
            v-motion
            :initial="{ y: 50, opacity: 0 }"
            :visible="{
              y: 0,
              opacity: 1,
              transition: { duration: 600, delay: index * 200 },
            }"
            class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift"
          >
            <div class="aspect-square overflow-hidden">
              <img
                :src="category.image"
                :alt="category.name"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div class="p-6">
              <h3
                class="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
              >
                {{ category.name }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                {{ category.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link
            to="/products"
            class="btn-primary inline-flex items-center space-x-2"
          >
            <span>View All Products</span>
            <span class="material-symbols-outlined">arrow_forward</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white"
    >
      <div class="container-max section-padding text-center">
        <div
          v-motion
          :initial="{ scale: 0.9, opacity: 0 }"
          :visible="{ scale: 1, opacity: 1, transition: { duration: 800 } }"
        >
          <h2 class="text-4xl lg:text-5xl font-bold mb-6 font-heading">
            Ready to Start Your Project?
          </h2>
          <p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Partner with us for exceptional quality, reliable delivery, and
            competitive pricing. Let's bring your garment manufacturing vision
            to life.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/contact"
              class="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 hover:scale-105 transform"
            >
              <span>Get a Quote</span>
              <span class="material-symbols-outlined">request_quote</span>
            </router-link>
            <router-link
              to="/gallery"
              class="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200"
            >
              <span>Tour Our Facilities</span>
              <span class="material-symbols-outlined">photo_library</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CounterAnimation from "../components/ui/CounterAnimation.vue";

const scrollToNext = () => {
  const nextSection = document.querySelector("section:nth-child(2)");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};

const productCategories = [
  {
    name: "Knitwear",
    description: "Premium knitted garments with superior comfort and fit",
    image: "/products/product-1.jpeg",
  },
  {
    name: "Woven",
    description: "High-quality woven fabrics for diverse applications",
    image: "/products/product-2.jpeg",
  },
  {
    name: "Embroidery",
    description: "Intricate embroidered designs with precision and artistry",
    image: "/products/product-1.jpeg",
  },
  {
    name: "Sublimation",
    description: "Advanced sublimation printing for vibrant, lasting colors",
    image: "/products/product-2.jpeg",
  },
];
</script>
