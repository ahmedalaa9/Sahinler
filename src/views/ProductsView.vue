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
            Our
            <span class="heading-gradient">Products</span>
          </h1>
          <p
            class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Discover our comprehensive range of high-quality garments
            manufactured with precision, innovation, and attention to detail.
          </p>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-20">
      <div class="container-max section-padding">
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
        >
          <div
            v-for="(product, index) in products"
            :key="product.id"
            v-motion
            :initial="{ y: 50, opacity: 0 }"
            :visible="{
              y: 0,
              opacity: 1,
              transition: { duration: 600, delay: index * 100 },
            }"
            class="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
          >
            <div class="w-full h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden">
              <img
                :src="product.image"
                alt="Product Image"
                class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Export Destinations Map -->
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
            Global Export Destinations
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our products reach customers across multiple continents, serving
            diverse markets with consistent quality and reliability.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div
            v-for="(region, index) in exportRegions"
            :key="region.name"
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: index * 200 },
            }"
            class="text-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
          >
            <div class="text-4xl mb-4">{{ region.flag }}</div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
            >
              {{ region.name }}
            </h3>
            <!-- <p class="text-gray-600 dark:text-gray-300 text-sm">
              {{ region.countries }} Countries
            </p> -->
          </div>
        </div>

        <!-- World Map Illustration -->
        <!-- <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <div
            class="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center"
          >
            <div class="text-center">
              <span
                class="material-symbols-outlined text-6xl text-primary-600 dark:text-primary-400 mb-4"
                >public</span
              >
              <p class="text-lg text-gray-600 dark:text-gray-300">
                Interactive World Map
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Showcasing our global reach
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </section>

    <!-- Capabilities Section -->
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
            Manufacturing Capabilities
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced technology and skilled craftsmanship combine to deliver
            exceptional results across all product categories.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(capability, index) in capabilities"
            :key="capability.title"
            v-motion
            :initial="{ y: 50, opacity: 0 }"
            :visible="{
              y: 0,
              opacity: 1,
              transition: { duration: 600, delay: index * 200 },
            }"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover-lift"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="material-symbols-outlined text-white text-2xl">{{
                capability.icon
              }}</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ capability.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {{ capability.description }}
            </p>
            <ul class="space-y-2">
              <li
                v-for="feature in capability.features"
                :key="feature"
                class="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <span class="material-symbols-outlined text-primary-500 text-sm"
                  >check_circle</span
                >
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const products = [
  { id: 1, image: "/products/11.jpeg" },
  { id: 2, image: "/products/22.jpeg" },
  { id: 3, image: "/products/33.jpeg" },
  { id: 4, image: "/products/44.jpeg" },
  { id: 5, image: "/products/55.jpeg" },
  { id: 6, image: "/products/66.jpeg" },
  { id: 7, image: "/products/77.jpeg" },
  { id: 8, image: "/products/88.jpeg" },
  { id: 9, image: "/products/99.jpeg" },
  { id: 10, image: "/products/111.jpeg" },
  { id: 11, image: "/products/222.jpeg" },
  { id: 12, image: "/products/333.jpeg" },
  { id: 13, image: "/products/444.jpeg" },
  { id: 14, image: "/products/555.jpeg" },
  { id: 122, image: "/products/tshirt-1.png" },
  { id: 222, image: "/products/tshirt-1-Copy.png" },
  { id: 322, image: "/products/tshirt-1-Copy(2).png" },
  { id: 422, image: "/products/tshirt-1-Copy(3).png" },
  { id: 522, image: "/products/tshirt-1-Copy(4).png" },
  { id: 622, image: "/products/tshirt-1-Copy(5).png" },
  { id: 722, image: "/products/tshirt-1-Copy(2).png" },
  { id: 822, image: "/products/tshirt-1-Copy(6).png" },
  { id: 922, image: "/products/tshirt-1-Copy(7).png" },
  { id: 1022, image: "/products/tshirt-1-Copy(8).png" },
  { id: 1122, image: "/products/tshirt-1-Copy(9).png" },
  { id: 1222, image: "/products/tshirt-1-Copy(10).png" },
];

const exportRegions = [
  { name: "Europe", flag: "🇪🇺", countries: "25+" },
  { name: "North America", flag: "🇺🇸", countries: "3" },
  { name: "Middle East", flag: "🇸🇦", countries: "15+" },
  { name: "Africa", flag: "🌍", countries: "20+" },
];

const capabilities = [
  {
    title: "Advanced Machinery",
    description:
      "State-of-the-art equipment ensuring precision and efficiency in every production stage.",
    icon: "precision_manufacturing",
    features: [
      "Computer-controlled cutting",
      "Automated stitching systems",
      "Quality inspection technology",
      "Finishing equipment",
    ],
  },
  {
    title: "Skilled Workforce",
    description:
      "Experienced professionals dedicated to maintaining the highest quality standards.",
    icon: "engineering",
    features: [
      "Trained operators",
      "Quality control specialists",
      "Pattern makers",
      "Technical designers",
    ],
  },
  {
    title: "Quality Assurance",
    description:
      "Comprehensive quality control processes at every stage of production.",
    icon: "verified",
    features: [
      "Fabric inspection",
      "In-line quality checks",
      "Final inspection",
      "Testing protocols",
    ],
  },
  {
    title: "Sustainable Practices",
    description:
      "Environmentally responsible manufacturing with focus on sustainability.",
    icon: "eco",
    features: [
      "Water conservation",
      "Energy efficiency",
      "Waste reduction",
      "Eco-friendly materials",
    ],
  },
  {
    title: "Fast Turnaround",
    description:
      "Efficient production processes ensuring timely delivery of orders.",
    icon: "speed",
    features: [
      "Streamlined workflow",
      "Flexible scheduling",
      "Rush order capability",
      "On-time delivery",
    ],
  },
  {
    title: "Custom Solutions",
    description:
      "Tailored manufacturing solutions to meet specific client requirements.",
    icon: "tune",
    features: [
      "Custom designs",
      "Private labeling",
      "Packaging options",
      "Special finishes",
    ],
  },
];
</script>
