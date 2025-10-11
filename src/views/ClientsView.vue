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
            <span class="heading-gradient">Clients</span>
          </h1>
          <p
            class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Trusted by leading brands worldwide for exceptional quality,
            reliable delivery, and innovative manufacturing solutions.
          </p>
        </div>
      </div>
    </section>

    <!-- Client Logos Section -->
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
            Trusted Partners
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We proudly serve some of the world's most recognized brands,
            delivering excellence in every garment we manufacture.
          </p>
        </div>

        <!-- Client Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          <div
            v-for="(client, index) in clientLogos"
            :key="client.name"
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: index * 100 },
            }"
            class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover-lift flex items-center justify-center aspect-square"
          >
            <div class="text-center">
              <div
                class="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300"
              >
                <img :src="client.logo" alt="Client Logo" />
                <!-- {{ client.logo }} -->
              </div>
              <!-- <p class="text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ client.name }}
              </p> -->
            </div>
          </div>
        </div>

        <!-- Client Categories -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(category, index) in clientCategories"
            :key="category.title"
            v-motion
            :initial="{ y: 50, opacity: 0 }"
            :visible="{
              y: 0,
              opacity: 1,
              transition: { duration: 600, delay: index * 200 },
            }"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6"
            >
              <span class="material-symbols-outlined text-white text-2xl">{{
                category.icon
              }}</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ category.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ category.description }}
            </p>
            <ul class="space-y-2">
              <li
                v-for="brand in category.brands"
                :key="brand"
                class="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <span class="material-symbols-outlined text-primary-500 text-sm"
                  >check_circle</span
                >
                <span>{{ brand }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
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
            What Our Clients Say
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience working with
            Şahinler Egypt.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            v-motion
            :initial="{ y: 50, opacity: 0 }"
            :visible="{
              y: 0,
              opacity: 1,
              transition: { duration: 600, delay: index * 200 },
            }"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
          >
            <!-- Quote Icon -->
            <div
              class="absolute top-6 right-6 text-primary-200 dark:text-primary-800"
            >
              <span class="material-symbols-outlined text-4xl"
                >format_quote</span
              >
            </div>

            <!-- Rating -->
            <div class="flex space-x-1 mb-4">
              <span
                v-for="i in 5"
                :key="i"
                class="material-symbols-outlined text-yellow-400 text-lg"
              >
                star
              </span>
            </div>

            <!-- Testimonial Text -->
            <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              "{{ testimonial.text }}"
            </p>

            <!-- Client Info -->
            <div class="flex items-center space-x-4">
              <div
                class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center"
              >
                <span class="text-white font-bold">{{
                  testimonial.initial
                }}</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">
                  {{ testimonial.name }}
                </h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ testimonial.position }}
                </p>
                <p class="text-sm text-primary-600 dark:text-primary-400">
                  {{ testimonial.company }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership Benefits -->
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
            Why Clients Choose Us
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the advantages that make us the preferred manufacturing
            partner for leading brands worldwide.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(benefit, index) in partnershipBenefits"
            :key="benefit.title"
            v-motion
            :initial="{ y: 50, opacity: 0 }"
            :visible="{
              y: 0,
              opacity: 1,
              transition: { duration: 600, delay: index * 200 },
            }"
            class="text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover-lift"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="material-symbols-outlined text-white text-2xl">{{
                benefit.icon
              }}</span>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ benefit.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies Section -->
    <!-- <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container-max section-padding">
        <div 
          v-motion
          :initial="{ y: 50, opacity: 0 }"
          :visible="{ y: 0, opacity: 1, transition: { duration: 800 } }"
          class="text-center mb-16"
        >
          <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-heading">
            Success Stories
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore how we've helped our clients achieve their manufacturing goals and business objectives.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            v-for="(study, index) in caseStudies"
            :key="study.id"
            v-motion
            :initial="{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }"
            :visible="{ x: 0, opacity: 1, transition: { duration: 800, delay: index * 300 } }"
            class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div class="aspect-video overflow-hidden">
              <img 
                :src="study.image" 
                :alt="study.title"
                class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              >
            </div>
            <div class="p-8">
              <div class="flex items-center mb-4">
                <span class="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
                  {{ study.category }}
                </span>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ study.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{{ study.description }}</p>
              <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary-600 dark:text-primary-400">{{ study.metrics.timeline }}</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Timeline</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-secondary-600 dark:text-secondary-400">{{ study.metrics.quantity }}</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Quantity</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-accent-600 dark:text-accent-400">{{ study.metrics.quality }}</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Quality Score</div>
                </div>
              </div>
              <button class="text-primary-600 dark:text-primary-400 hover:text-primary-700 font-medium flex items-center space-x-2">
                <span>Read Full Case Study</span>
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section> -->

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
            Ready to Join Our Success Stories?
          </h2>
          <p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Partner with Şahinler Egypt and experience the difference that
            quality, reliability, and innovation can make for your brand.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/contact"
              class="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 hover:scale-105 transform"
            >
              <span>Start Partnership</span>
              <span class="material-symbols-outlined">handshake</span>
            </router-link>
            <router-link
              to="/products"
              class="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200"
            >
              <span>View Capabilities</span>
              <span class="material-symbols-outlined">visibility</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const clientLogos = [
  { name: "Fashion Brand A", logo: "/clients/client-1.png" },
  { name: "Sportswear Co", logo: "/clients/client-2.png" },
  { name: "Luxury Label", logo: "/clients/client-1 - Copy.png" },
  { name: "Casual Wear", logo: "/clients/client-1 - Copy (2).png" },
  { name: "Athletic Pro", logo: "/clients/client-1 - Copy (3).png" },
  { name: "Fashion House", logo: "/clients/client-1 - Copy (4).png" },
  { name: "Urban Style", logo: "/clients/client-1 - Copy (5).png" },
  { name: "Kids Fashion", logo: "/clients/client-1 - Copy (6).png" },
  { name: "Premium Brand", logo: "/clients/client-1 - Copy (7).png" },
  { name: "Global Apparel", logo: "/clients/client-1 - Copy (8).png" },
  { name: "Retail Chain", logo: "/clients/client-1 - Copy (9).png" },
  { name: "Designer Brand", logo: "/clients/client-1 - Copy (10).png" },
];

const clientCategories = [
  {
    title: "Fashion Retailers",
    description: "Leading retail chains and fashion brands worldwide",
    icon: "storefront",
    brands: [
      "International Fashion Chain",
      "Premium Retail Group",
      "Global Fashion Network",
      "Luxury Department Store",
    ],
  },
  {
    title: "Sportswear Brands",
    description: "Athletic and performance wear manufacturers",
    icon: "fitness_center",
    brands: [
      "Athletic Performance Co",
      "Sports Excellence Brand",
      "Fitness Apparel Group",
      "Active Lifestyle Label",
    ],
  },
  {
    title: "Private Labels",
    description: "Custom manufacturing for private label brands",
    icon: "label",
    brands: [
      "Custom Label Solutions",
      "Private Brand Collective",
      "Exclusive Label Group",
      "Boutique Brand Partners",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    text: "Şahinler Egypt has been our trusted manufacturing partner for over 5 years. Their commitment to quality and on-time delivery is exceptional.",
    name: "Sarah Johnson",
    position: "Sourcing Director",
    company: "Global Fashion Brand",
    initial: "S",
  },
  {
    id: 2,
    text: "The quality of their embroidery work is outstanding. They understand our brand requirements and consistently exceed our expectations.",
    name: "Michael Chen",
    position: "Product Manager",
    company: "Premium Sportswear",
    initial: "M",
  },
  {
    id: 3,
    text: "Working with Şahinler Egypt has streamlined our production process. Their professionalism and expertise are unmatched in the industry.",
    name: "Emma Rodriguez",
    position: "Supply Chain Manager",
    company: "International Retailer",
    initial: "E",
  },
  {
    id: 4,
    text: "Their sustainable manufacturing practices align perfectly with our brand values. Quality and environmental responsibility go hand in hand.",
    name: "David Thompson",
    position: "Brand Director",
    company: "Eco Fashion Label",
    initial: "D",
  },
  {
    id: 5,
    text: "The team at Şahinler Egypt is incredibly responsive and flexible. They adapt to our changing needs and tight deadlines effortlessly.",
    name: "Lisa Wang",
    position: "Operations Manager",
    company: "Fast Fashion Chain",
    initial: "L",
  },
  {
    id: 6,
    text: "From initial design to final delivery, their attention to detail is remarkable. They truly understand the luxury market requirements.",
    name: "James Wilson",
    position: "Creative Director",
    company: "Luxury Fashion House",
    initial: "J",
  },
];

const partnershipBenefits = [
  {
    title: "Quality Assurance",
    description:
      "Rigorous quality control processes ensure every garment meets international standards.",
    icon: "verified",
  },
  {
    title: "On-Time Delivery",
    description:
      "Reliable production schedules and efficient logistics guarantee timely delivery.",
    icon: "schedule",
  },
  {
    title: "Competitive Pricing",
    description:
      "Optimized operations and strategic location provide cost-effective manufacturing solutions.",
    icon: "trending_down",
  },
  {
    title: "Flexible Production",
    description:
      "Adaptable manufacturing capabilities accommodate various order sizes and requirements.",
    icon: "tune",
  },
];

const caseStudies = [
  {
    id: 1,
    title: "Premium Athletic Wear Collection",
    category: "Sportswear",
    description:
      "Successfully delivered a complete athletic wear collection for a leading sports brand, featuring moisture-wicking fabrics and performance enhancements.",
    image:
      "https://images.pexels.com/photos/7256515/pexels-photo-7256515.jpeg?auto=compress&cs=tinysrgb&w=1200",
    metrics: {
      timeline: "6 weeks",
      quantity: "50K units",
      quality: "99.8%",
    },
  },
  {
    id: 2,
    title: "Luxury Fashion Line Launch",
    category: "Fashion",
    description:
      "Partnered with a luxury fashion house to create an exclusive collection featuring intricate embroidery and premium materials.",
    image:
      "https://images.pexels.com/photos/7256508/pexels-photo-7256508.jpeg?auto=compress&cs=tinysrgb&w=1200",
    metrics: {
      timeline: "8 weeks",
      quantity: "25K units",
      quality: "99.9%",
    },
  },
];
</script>
