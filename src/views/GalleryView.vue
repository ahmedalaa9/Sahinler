<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section
      class="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div class="container-max section-padding">
        <div
          v-motion
          :initial="{ y: 100, opacity: 0 }"
          :visible="{ y: 0, opacity: 1, transition: { duration: 1000 } }"
          class="text-center"
        >
          <h1
            class="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white font-heading"
          >
            Photo
            <span class="heading-gradient">Gallery</span>
          </h1>
          <p
            class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Take a behind-the-scenes look at our state-of-the-art manufacturing
            facilities, advanced machinery, and dedicated team members.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section
      class="py-12 bg-white dark:bg-gray-800 sticky top-20 z-40 shadow-md"
    >
      <div class="container-max section-padding">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in galleryCategories"
            :key="category"
            @click="activeFilter = category"
            class="px-6 py-3 rounded-lg font-medium transition-all duration-200"
            :class="
              activeFilter === category
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            "
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-20">
      <div class="container-max section-padding">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(image, index) in filteredImages"
            :key="image.id"
            v-motion
            :initial="{ y: 50, opacity: 0 }"
            :visible="{
              y: 0,
              opacity: 1,
              transition: { duration: 600, delay: index * 100 },
            }"
            class="group cursor-pointer"
          >
            <div
              class="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <img
                :src="image.src"
                :alt="image.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div
                class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <!-- <div class="text-center text-white">
                  <span class="material-symbols-outlined text-4xl mb-2"
                    >zoom_in</span
                  >
                  <p class="font-semibold">{{ image.title }}</p>
                </div> -->
              </div>
              <div class="absolute top-4 left-4">
                <span
                  class="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ image.category }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Factory Statistics -->
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
            Our Facility by Numbers
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            State-of-the-art infrastructure supporting world-class manufacturing
            capabilities.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CounterAnimation
            v-for="(stat, index) in facilityStats"
            :key="stat.label"
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: index * 200 },
            }"
            :value="stat.value"
            :label="stat.label"
            :suffix="stat.suffix"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </div>
    </section>

    <!-- Technology Showcase -->
    <section class="py-20">
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
            Advanced Technology
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cutting-edge machinery and equipment ensuring precision, efficiency,
            and quality in every product.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(machine, index) in machinery"
            :key="machine.name"
            v-motion
            :initial="{ y: 50, opacity: 0 }"
            :visible="{
              y: 0,
              opacity: 1,
              transition: { duration: 600, delay: index * 200 },
            }"
            class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover-lift"
          >
            <div class="aspect-video overflow-hidden">
              <img
                :src="machine.image"
                :alt="machine.name"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div class="p-6">
              <h3
                class="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
              >
                {{ machine.name }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {{ machine.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="spec in machine.specs"
                  :key="spec"
                  class="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-1 rounded text-xs"
                >
                  {{ spec }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
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
            Our Dedicated Team
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Skilled professionals who bring expertise, dedication, and passion
            to every project.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(department, index) in departments"
            :key="department.name"
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: index * 200 },
            }"
            class="text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="material-symbols-outlined text-white text-2xl">{{
                department.icon
              }}</span>
            </div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
            >
              {{ department.name }}
            </h3>
            <p
              class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2"
            >
              {{ department.count }}+
            </p>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              {{ department.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <!-- <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="selectedImage"
        class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        @click="closeLightbox"
      >
        <div class="max-w-4xl max-h-full relative" @click.stop>
          <img
            :src="selectedImage.src"
            :alt="selectedImage.title"
            class="w-full h-full object-contain rounded-lg"
          />
          <button
            @click="closeLightbox"
            class="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
          >
            <span class="material-symbols-outlined">close</span>
          </button>
          <div
            class="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white"
          >
            <h3 class="text-xl font-semibold mb-2">
              {{ selectedImage.title }}
            </h3>
            <p class="text-gray-300">{{ selectedImage.description }}</p>
          </div>
        </div>
      </div>
    </Transition> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import CounterAnimation from "../components/ui/CounterAnimation.vue";

const activeFilter = ref("All");
const selectedImage = ref(null);

const galleryCategories = ["All", "Factory Floor", "Machinery", "Facilities"];

const galleryImages = [
  {
    id: 1,
    src: "/gallery/factory-floor.png",
    title: "Production Line Overview",
    description: "State-of-the-art production line with automated systems",
    category: "Factory Floor",
  },
  {
    id: 154,
    src: "/gallery/factory-floor2.png",
    title: "Production Line Overview",
    description: "State-of-the-art production line with automated systems",
    category: "Factory Floor",
  },
  {
    id: 2,
    src: "/gallery/machine-1.jpeg",
    title: "Cutting Department",
    description: "Precision cutting machines ensuring accurate patterns",
    category: "Machinery",
  },

  {
    id: 7,
    src: "/Sahinler-eg.png",
    title: "Warehouse Facilities",
    description: "Modern warehouse with efficient storage systems",
    category: "Facilities",
  },

  {
    id: 10,
    src: "/gallery/machine-1.jpeg",
    title: "Cutting Department",
    description: "Precision cutting machines ensuring accurate patterns",
    category: "Machinery",
  },
  {
    id: 11,
    src: "/gallery/machine-2.jpeg",
    title: "Cutting Department",
    description: "Precision cutting machines ensuring accurate patterns",
    category: "Machinery",
  },
  {
    id: 12,
    src: "/gallery/machine-3.jpeg",
    title: "Cutting Department",
    description: "Precision cutting machines ensuring accurate patterns",
    category: "Machinery",
  },
  {
    id: 13,
    src: "/gallery/machine-4.jpeg",
    title: "Cutting Department",
    description: "Precision cutting machines ensuring accurate patterns",
    category: "Machinery",
  },
  // {
  //   id: 14,
  //   src: "/gallery/machine-5.jpeg",
  //   title: "Cutting Department",
  //   description: "Precision cutting machines ensuring accurate patterns",
  //   category: "Machinery",
  // },
];

const filteredImages = computed(() => {
  if (activeFilter.value === "All") {
    return galleryImages;
  }
  return galleryImages.filter((image) => image.category === activeFilter.value);
});

const facilityStats = [
  { value: 15000, label: "Square Meters", suffix: "" },
  { value: 500, label: "Employees", suffix: "+" },
  { value: 50, label: "Production Lines", suffix: "" },
  { value: 24, label: "Hours Operations", suffix: "/7" },
];

const machinery = [
  {
    name: "Computer-Controlled Cutting Machines",
    description: "High-precision cutting systems for accurate pattern cutting",
    image: "/gallery/download-1.jpg",
    specs: ["Automated", "High Precision", "Multi-layer"],
  },
  {
    name: "Industrial Sewing Machines",
    description: "High-speed sewing machines for efficient production",
    image: "/gallery/download-2.jpg",
    specs: ["High Speed", "Computer Controlled", "Energy Efficient"],
  },
  {
    name: "Embroidery Equipment",
    description: "Advanced embroidery machines for intricate designs",
    image: "/gallery/download-3.jpg",
    specs: ["Multi-head", "Digital Control", "Custom Designs"],
  },
  {
    name: "Quality Testing Equipment",
    description: "Comprehensive testing equipment for quality assurance",
    image: "/gallery/download-4.jpg",
    specs: ["Fabric Testing", "Color Matching", "Durability Tests"],
  },
  {
    name: "Pressing & Finishing",
    description: "Professional pressing and finishing equipment",
    image: "/gallery/download-5.jpg",
    specs: ["Steam Pressing", "Automated", "Professional Finish"],
  },
  {
    name: "Packaging Systems",
    description: "Automated packaging and labeling systems",
    image: "/gallery/download-6.jpg",
    specs: ["Automated", "Custom Packaging", "Labeling"],
  },
];

const departments = [
  {
    name: "Production",
    count: 350,
    description: "Skilled operators and technicians",
    icon: "manufacturing",
  },
  {
    name: "Quality Control",
    count: 25,
    description: "Quality assurance specialists",
    icon: "verified",
  },
  {
    name: "Design & Development",
    count: 15,
    description: "Creative and technical designers",
    icon: "design_services",
  },
  {
    name: "Management",
    count: 35,
    description: "Leadership and administration",
    icon: "corporate_fare",
  },
];

// const openLightbox = (image) => {
//   selectedImage.value = image;
// };

// const closeLightbox = () => {
//   selectedImage.value = null;
// };
</script>
