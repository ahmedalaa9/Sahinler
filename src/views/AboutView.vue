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
            About
            <span class="heading-gradient">Şahinler Egypt</span>
          </h1>
          <p
            class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Founded by Kemal Şahin in 1982, Şahinler Holding has grown into a
            diversified enterprise operating across 7 sectors in 6 countries.
            Discover how we're leading 71 innovation in garment manufacturing,
            construction, and hospitality from Egypt.1/
          </p>
        </div>
      </div>
    </section>

    <!-- Company Heritage Section -->
    <section class="py-20">
      <div class="container-max section-padding">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            v-motion
            :initial="{ x: -100, opacity: 0 }"
            :visible="{ x: 0, opacity: 1, transition: { duration: 800 } }"
          >
            <div
              class="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
            >
              <span class="material-symbols-outlined text-sm mr-2"
                >history</span
              >
              Since 1982
            </div>
            <h2
              class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-heading"
            >
              Four Decades of
              <span class="heading-gradient">Diversified Excellence</span>
            </h2>
            <p
              class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
            >
              The Şahinler story began in 1982 when Kemal Şahin established
              Santex Germany in Aachen, Germany. What started as a textile
              venture has evolved into a diversified holding company operating
              across multiple sectors including construction, catering, free
              zone administration, ready-made garments, textiles, tourism, and
              sport academies.
            </p>
            <p
              class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Today, Şahinler Holding operates across 6 countries with 10,000
              direct employees and 30,000 indirect employees, serving diverse
              markets through our integrated business model and commitment to
              excellence in every sector.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div
                class="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
              >
                <div
                  class="text-3xl font-bold text-primary-600 dark:text-primary-400"
                >
                  1982
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  Founded
                </div>
              </div>
              <div
                class="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
              >
                <div
                  class="text-3xl font-bold text-secondary-600 dark:text-secondary-400"
                >
                  2006
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  Egypt Operations
                </div>
              </div>
            </div>
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
            <img
              src="/public/Sahinler-about.png"
              alt="Şahinler Heritage"
              class="w-full h-[450px] object-contain rounded-2xl shadow-lg"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"
            ></div>
            <div class="absolute bottom-6 left-6 text-white">
              <h3 class="text-xl font-bold mb-2">
                Global Manufacturing Excellence
              </h3>
              <p class="text-white/90">
                Serving brands worldwide with uncompromising quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Presence Section -->
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
            Global Manufacturing Network
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Şahinler Holding operates across 7 diverse sectors in 6 countries,
            employing 10,000 direct professionals and 30,000 indirect employees,
            serving clients across multiple industries and continents.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 200 },
            }"
            class="text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <div
              class="text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4"
            >
              7
            </div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
            >
              Sectors
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Diversified business operations
            </p>
          </div>
          <div
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 400 },
            }"
            class="text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <div
              class="text-6xl font-bold text-secondary-600 dark:text-secondary-400 mb-4"
            >
              6
            </div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
            >
              Countries
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              International operations
            </p>
          </div>
          <div
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 600 },
            }"
            class="text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <div
              class="text-6xl font-bold text-accent-600 dark:text-accent-400 mb-4"
            >
              40K+
            </div>
            <h3
              class="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
            >
              Total Employees
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              10K direct + 30K indirect employees
            </p>
          </div>
        </div>

        <!-- Global Rankings -->
        <div
          class="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-3xl lg:text-4xl font-bold mb-6">
                Industry Leadership
              </h3>
              <p class="text-xl text-white/90 mb-8 leading-relaxed">
                Recognized as a global leader in textile manufacturing, Şahinler
                Group has earned prestigious rankings that reflect our
                commitment to excellence and innovation.
              </p>
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <div
                    class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center"
                  >
                    <span class="material-symbols-outlined text-white"
                      >emoji_events</span
                    >
                  </div>
                  <div>
                    <div class="font-semibold">18th Largest Globally</div>
                    <div class="text-white/80 text-sm">
                      Among all textile manufacturers worldwide
                    </div>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <div
                    class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center"
                  >
                    <span class="material-symbols-outlined text-white"
                      >military_tech</span
                    >
                  </div>
                  <div>
                    <div class="font-semibold">3rd in Europe</div>
                    <div class="text-white/80 text-sm">
                      Ready-to-wear sector leadership
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-6">
              <CounterAnimation
                :value="18"
                label="Global Ranking"
                suffix=""
                class="text-center"
              />
              <CounterAnimation
                :value="3"
                label="European Ranking"
                suffix=""
                class="text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Egypt Operations Section -->
    <section class="py-20">
      <div class="container-max section-padding">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            v-motion
            :initial="{ x: -100, opacity: 0 }"
            :visible="{ x: 0, opacity: 1, transition: { duration: 800 } }"
            class="relative"
          >
            <img
              src="/Sahinler-eg.png"
              alt="Şahinler Egypt Facility"
              class="w-full h-[500px] object-contain rounded-2xl shadow-lg"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"
            ></div>
            <div class="absolute bottom-6 left-6 text-white">
              <h3 class="text-xl font-bold mb-2">State-of-the-Art Facility</h3>
              <p class="text-white/90">
                10,000 sq meters of modern manufacturing space
              </p>
            </div>
          </div>

          <div
            v-motion
            :initial="{ x: 100, opacity: 0 }"
            :visible="{
              x: 0,
              opacity: 1,
              transition: { duration: 800, delay: 300 },
            }"
          >
            <div
              class="inline-flex items-center px-4 py-2 bg-secondary-100 dark:bg-secondary-900 rounded-full text-secondary-700 dark:text-secondary-300 text-sm font-medium mb-6"
            >
              <span class="material-symbols-outlined text-sm mr-2"
                >location_on</span
              >
              10th of Ramadan City, Egypt
            </div>
            <h2
              class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-heading"
            >
              Our Egypt
              <span class="heading-gradient">Operations</span>
            </h2>
            <p
              class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
            >
              Şahinler Egypt operates from a state-of-the-art facility spanning
              10,000 square meters total area with 6,000 square meters of closed
              production space in the 10th of Ramadan City, strategically
              positioned to serve Middle Eastern, African, and European markets.
            </p>
            <p
              class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Our facility features 30 modern production lines combining
              traditional craftsmanship with cutting-edge technology, delivering
              high-quality garments for leading international brands with
              exceptional efficiency.
            </p>

            <!-- Egypt Facility Stats -->
            <div class="grid grid-cols-3 gap-4">
              <div class="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-xl">
                <div
                  class="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                >
                  10,000m²
                </div>
                <div
                  class="text-sm text-primary-700 dark:text-primary-300 font-medium"
                >
                  Total Area
                </div>
              </div>
              <div
                class="bg-secondary-50 dark:bg-secondary-900/20 p-6 rounded-xl"
              >
                <div
                  class="text-2xl font-bold text-secondary-600 dark:text-secondary-400 mb-2"
                >
                  6,000m²
                </div>
                <div
                  class="text-sm text-secondary-700 dark:text-secondary-300 font-medium"
                >
                  Closed Area
                </div>
              </div>
              <div class="bg-accent-50 dark:bg-accent-900/20 p-6 rounded-xl">
                <div
                  class="text-2xl font-bold text-accent-600 dark:text-accent-400 mb-2"
                >
                  30
                </div>
                <div
                  class="text-sm text-accent-700 dark:text-accent-300 font-medium"
                >
                  Production Lines
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Facility Area Breakdown Section -->
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
            Facility Area
            <span class="heading-gradient">Breakdown</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our 10,000m² facility is strategically designed with 30 production
            lines to maximize efficiency and productivity across all operational
            areas.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Area Breakdown List -->
          <div
            v-motion
            :initial="{ x: -100, opacity: 0 }"
            :visible="{ x: 0, opacity: 1, transition: { duration: 800 } }"
            class="space-y-6"
          >
            <div
              class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center justify-between"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center"
                >
                  <span
                    class="material-symbols-outlined text-blue-600 dark:text-blue-400"
                    >manufacturing</span
                  >
                </div>
                <div>
                  <h3
                    class="text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    Sewing & Ironing & Q.C & Packing Area
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Main production operations
                  </p>
                </div>
              </div>
              <div class="text-right">
                <div
                  class="text-2xl font-bold text-blue-600 dark:text-blue-400"
                >
                  4220m²
                </div>
                <div class="text-sm text-gray-500">65% of facility</div>
              </div>
            </div>

            <div
              class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center justify-between"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center"
                >
                  <span
                    class="material-symbols-outlined text-gray-600 dark:text-gray-400"
                    >business</span
                  >
                </div>
                <div>
                  <h3
                    class="text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    Management
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Administrative offices
                  </p>
                </div>
              </div>
              <div class="text-right">
                <div
                  class="text-2xl font-bold text-gray-600 dark:text-gray-400"
                >
                  1240m²
                </div>
                <div class="text-sm text-gray-500">19% of facility</div>
              </div>
            </div>

            <div
              class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center justify-between"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center"
                >
                  <span
                    class="material-symbols-outlined text-green-600 dark:text-green-400"
                    >local_shipping</span
                  >
                </div>
                <div>
                  <h3
                    class="text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    Shipping Warehouse
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Logistics and distribution
                  </p>
                </div>
              </div>
              <div class="text-right">
                <div
                  class="text-2xl font-bold text-green-600 dark:text-green-400"
                >
                  520m²
                </div>
                <div class="text-sm text-gray-500">8% of facility</div>
              </div>
            </div>

            <div
              class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center justify-between"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center"
                >
                  <span
                    class="material-symbols-outlined text-yellow-600 dark:text-yellow-400"
                    >inventory</span
                  >
                </div>
                <div>
                  <h3
                    class="text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    Accessory Warehouse
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Materials and supplies
                  </p>
                </div>
              </div>
              <div class="text-right">
                <div
                  class="text-2xl font-bold text-yellow-600 dark:text-yellow-400"
                >
                  300m²
                </div>
                <div class="text-sm text-gray-500">4% of facility</div>
              </div>
            </div>

            <div
              class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center justify-between"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center"
                >
                  <span
                    class="material-symbols-outlined text-orange-600 dark:text-orange-400"
                    >precision_manufacturing</span
                  >
                </div>
                <div>
                  <h3
                    class="text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    Machine Warehouse
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Equipment storage
                  </p>
                </div>
              </div>
              <div class="text-right">
                <div
                  class="text-2xl font-bold text-orange-600 dark:text-orange-400"
                >
                  200m²
                </div>
                <div class="text-sm text-gray-500">3% of facility</div>
              </div>
            </div>

            <div
              class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center justify-between"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center"
                >
                  <span
                    class="material-symbols-outlined text-purple-600 dark:text-purple-400"
                    >verified</span
                  >
                </div>
                <div>
                  <h3
                    class="text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    Second Quality Store
                  </h3>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Quality control storage
                  </p>
                </div>
              </div>
              <div class="text-right">
                <div
                  class="text-2xl font-bold text-purple-600 dark:text-purple-400"
                >
                  41m²
                </div>
                <div class="text-sm text-gray-500">1% of facility</div>
              </div>
            </div>
          </div>

          <!-- Visual Summary -->
          <div
            v-motion
            :initial="{ x: 100, opacity: 0 }"
            :visible="{
              x: 0,
              opacity: 1,
              transition: { duration: 800, delay: 300 },
            }"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <h3
              class="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center"
            >
              Facility Overview
            </h3>
            <div class="space-y-4">
              <div
                class="flex justify-between items-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
              >
                <span
                  class="font-semibold text-primary-700 dark:text-primary-300"
                  >Total Area</span
                >
                <span
                  class="text-2xl font-bold text-primary-600 dark:text-primary-400"
                  >10,000m²</span
                >
              </div>
              <div
                class="flex justify-between items-center p-4 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg"
              >
                <span
                  class="font-semibold text-secondary-700 dark:text-secondary-300"
                  >Closed Area</span
                >
                <span
                  class="text-2xl font-bold text-secondary-600 dark:text-secondary-400"
                  >6,000m²</span
                >
              </div>
              <div
                class="flex justify-between items-center p-4 bg-accent-50 dark:bg-accent-900/20 rounded-lg"
              >
                <span class="font-semibold text-accent-700 dark:text-accent-300"
                  >Production Lines</span
                >
                <span
                  class="text-2xl font-bold text-accent-600 dark:text-accent-400"
                  >30</span
                >
              </div>
            </div>
            <div
              class="mt-6 p-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg text-white text-center"
            >
              <p class="text-lg font-semibold">
                Optimized for Maximum Efficiency
              </p>
              <p class="text-sm opacity-90">
                Strategic layout for seamless production flow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Sectors Section -->
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
            Our Diverse
            <span class="heading-gradient">Business Sectors</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Şahinler Holding operates across 7 strategic sectors, leveraging
            synergies and expertise to deliver comprehensive solutions across
            multiple industries.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <!-- Construction Sector -->
          <div
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 200 },
            }"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="material-symbols-outlined text-white text-2xl"
                >construction</span
              >
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Construction
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Infrastructure development and construction projects, building the
              foundation for growth and development.
            </p>
          </div>

          <!-- Catering Sector -->
          <div
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 400 },
            }"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="material-symbols-outlined text-white text-2xl"
                >restaurant</span
              >
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Catering
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Professional catering services and food solutions, delivering
              quality dining experiences across various sectors.
            </p>
          </div>

          <!-- Free Zone Administration -->
          <div
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 600 },
            }"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="material-symbols-outlined text-white text-2xl"
                >admin_panel_settings</span
              >
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Free Zone Administration
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Strategic management and administration of free zone operations,
              facilitating international trade and investment.
            </p>
          </div>

          <!-- Ready Made Garment -->
          <div
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 800 },
            }"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="material-symbols-outlined text-white text-2xl"
                >checkroom</span
              >
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready Made Garment
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              High-quality garment manufacturing for international brands,
              combining traditional craftsmanship with modern technology.
            </p>
          </div>

          <!-- Textile -->
          <div
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 1000 },
            }"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="material-symbols-outlined text-white text-2xl"
                >texture</span
              >
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Textile
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Comprehensive textile production including knitted fabrics and
              dyeing facilities, serving global markets.
            </p>
          </div>

          <!-- Tourism -->
          <div
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 1200 },
            }"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="material-symbols-outlined text-white text-2xl"
                >travel_explore</span
              >
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Tourism
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Tourism and hospitality services, hosting over 1 million tourists
              at Club Megasaray and other destinations.
            </p>
          </div>

          <!-- Sport Academy -->
          <div
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 1400 },
            }"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-1"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="material-symbols-outlined text-white text-2xl"
                >sports_soccer</span
              >
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Sport Academy
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              Professional sports training and development programs, nurturing
              athletic talent and promoting healthy lifestyles.
            </p>
          </div>
        </div>

        <!-- Sector Integration Summary -->
        <div
          class="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div class="text-center">
            <h3 class="text-3xl lg:text-4xl font-bold mb-6">
              Integrated Business Ecosystem
            </h3>
            <p
              class="text-xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto"
            >
              Our diversified portfolio creates synergies across sectors,
              enabling us to provide comprehensive solutions while maintaining
              excellence in each specialized area.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div class="text-4xl font-bold mb-2">7</div>
                <div class="text-lg font-semibold mb-2">Business Sectors</div>
                <div class="text-white/80 text-sm">Diversified operations</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div class="text-4xl font-bold mb-2">6</div>
                <div class="text-lg font-semibold mb-2">Countries</div>
                <div class="text-white/80 text-sm">International presence</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div class="text-4xl font-bold mb-2">40K+</div>
                <div class="text-lg font-semibold mb-2">Employees</div>
                <div class="text-white/80 text-sm">Global workforce</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
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
            Our Purpose & Vision
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Driven by purpose, guided by values, and committed to creating a
            sustainable future for textile manufacturing.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div
            v-motion
            :initial="{ x: -100, opacity: 0 }"
            :visible="{ x: 0, opacity: 1, transition: { duration: 800 } }"
            class="space-y-8"
          >
            <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div class="flex items-center mb-6">
                <div
                  class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4"
                >
                  <span
                    class="material-symbols-outlined text-primary-600 dark:text-primary-400"
                    >flag</span
                  >
                </div>
                <h2
                  class="text-3xl font-bold text-gray-900 dark:text-white font-heading"
                >
                  Our Mission
                </h2>
              </div>
              <p
                class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                Our mission is to build cultural and economic bridge between
                continents and make employees proud to be part of Şahinler Egypt
                which believe in the team work, and to get our customers on the
                whole world more pleased with this high motivation and following
                the market technology.
              </p>
            </div>

            <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div class="flex items-center mb-6">
                <div
                  class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center mr-4"
                >
                  <span
                    class="material-symbols-outlined text-secondary-600 dark:text-secondary-400"
                    >visibility</span
                  >
                </div>
                <h2
                  class="text-3xl font-bold text-gray-900 dark:text-white font-heading"
                >
                  Our Vision
                </h2>
              </div>
              <p
                class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                Our vision is to move our group to the top list of the world by
                presenting our excellent products which put color in our life
                with the best quality and service in most convenient price.
              </p>
            </div>
          </div>

          <div
            v-motion
            :initial="{ x: 100, opacity: 0 }"
            :visible="{
              x: 0,
              opacity: 1,
              transition: { duration: 800, delay: 300 },
            }"
            class="space-y-8"
          >
            <!-- Manufacturing Capabilities -->
            <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Manufacturing Excellence
              </h3>
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <span class="material-symbols-outlined text-primary-500"
                    >check_circle</span
                  >
                  <span class="text-gray-600 dark:text-gray-300"
                    >400,000 pieces monthly production capacity</span
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <span class="material-symbols-outlined text-primary-500"
                    >check_circle</span
                  >
                  <span class="text-gray-600 dark:text-gray-300"
                    >Advanced automation and quality control systems</span
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <span class="material-symbols-outlined text-primary-500"
                    >check_circle</span
                  >
                  <span class="text-gray-600 dark:text-gray-300"
                    >Comprehensive product range from basics to luxury</span
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <span class="material-symbols-outlined text-primary-500"
                    >check_circle</span
                  >
                  <span class="text-gray-600 dark:text-gray-300"
                    >Sustainable and eco-friendly manufacturing processes</span
                  >
                </div>
              </div>
            </div>

            <!-- Strategic Advantages -->
            <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Strategic Advantages
              </h3>
              <div class="space-y-4">
                <div class="flex items-center space-x-3">
                  <span class="material-symbols-outlined text-secondary-500"
                    >location_on</span
                  >
                  <span class="text-gray-600 dark:text-gray-300"
                    >Prime location for Middle East & Africa markets</span
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <span class="material-symbols-outlined text-secondary-500"
                    >schedule</span
                  >
                  <span class="text-gray-600 dark:text-gray-300"
                    >Faster delivery times to key markets</span
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <span class="material-symbols-outlined text-secondary-500"
                    >savings</span
                  >
                  <span class="text-gray-600 dark:text-gray-300"
                    >Competitive cost structure and pricing</span
                  >
                </div>
                <div class="flex items-center space-x-3">
                  <span class="material-symbols-outlined text-secondary-500"
                    >support_agent</span
                  >
                  <span class="text-gray-600 dark:text-gray-300"
                    >Dedicated customer service and support</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2025 Şahinler Priorities Section -->
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
            2025 Strategic
            <span class="heading-gradient">Priorities</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our roadmap for growth, innovation, and operational excellence in
            2025, focusing on expansion, digitalization, and sustainability
            initiatives.
          </p>
        </div>

        <div class="relative">
          <!-- Timeline Line -->
          <div
            class="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full transform -translate-y-1/2"
          ></div>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            <!-- Priority 1 -->
            <div
              v-motion
              :initial="{ y: 50, opacity: 0 }"
              :visible="{
                y: 0,
                opacity: 1,
                transition: { duration: 600, delay: 200 },
              }"
              class="text-center"
            >
              <div class="relative mb-6">
                <div
                  class="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto relative z-10 shadow-lg"
                >
                  01
                </div>
              </div>
              <div
                class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3
                  class="text-lg font-bold mb-3 text-gray-900 dark:text-white"
                >
                  Finalize New Site Construction
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  100% to start operations till end of June 2025 (Done)
                </p>
                <div
                  class="text-xs text-purple-600 dark:text-purple-400 font-semibold"
                >
                  ✓ COMPLETED
                </div>
              </div>
            </div>

            <!-- Priority 2 -->
            <div
              v-motion
              :initial="{ y: 50, opacity: 0 }"
              :visible="{
                y: 0,
                opacity: 1,
                transition: { duration: 600, delay: 400 },
              }"
              class="text-center"
            >
              <div class="relative mb-6">
                <div
                  class="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto relative z-10 shadow-lg"
                >
                  02
                </div>
              </div>
              <div
                class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3
                  class="text-lg font-bold mb-3 text-gray-900 dark:text-white"
                >
                  Accelerate Digitalization
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Project to reach 100% till end of 2025
                </p>
                <div
                  class="text-xs text-red-600 dark:text-red-400 font-semibold"
                >
                  IN PROGRESS
                </div>
              </div>
            </div>

            <!-- Priority 3 -->
            <div
              v-motion
              :initial="{ y: 50, opacity: 0 }"
              :visible="{
                y: 0,
                opacity: 1,
                transition: { duration: 600, delay: 600 },
              }"
              class="text-center"
            >
              <div class="relative mb-6">
                <div
                  class="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto relative z-10 shadow-lg"
                >
                  03
                </div>
              </div>
              <div
                class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3
                  class="text-lg font-bold mb-3 text-gray-900 dark:text-white"
                >
                  Solar Panels Study
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Full implementation study in new site and feasibility in old
                  site
                </p>
                <div
                  class="text-xs text-orange-600 dark:text-orange-400 font-semibold"
                >
                  PLANNING
                </div>
              </div>
            </div>

            <!-- Priority 4 -->
            <div
              v-motion
              :initial="{ y: 50, opacity: 0 }"
              :visible="{
                y: 0,
                opacity: 1,
                transition: { duration: 600, delay: 800 },
              }"
              class="text-center"
            >
              <div class="relative mb-6">
                <div
                  class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto relative z-10 shadow-lg"
                >
                  04
                </div>
              </div>
              <div
                class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3
                  class="text-lg font-bold mb-3 text-gray-900 dark:text-white"
                >
                  Facility Expansion
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Move cutting & all warehouses to new land (4595 m2) beside us
                  and have more space
                </p>
                <div
                  class="text-xs text-purple-600 dark:text-purple-400 font-semibold"
                >
                  PLANNED
                </div>
              </div>
            </div>

            <!-- Priority 5 -->
            <div
              v-motion
              :initial="{ y: 50, opacity: 0 }"
              :visible="{
                y: 0,
                opacity: 1,
                transition: { duration: 600, delay: 1000 },
              }"
              class="text-center"
            >
              <div class="relative mb-6">
                <div
                  class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto relative z-10 shadow-lg"
                >
                  05
                </div>
              </div>
              <div
                class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3
                  class="text-lg font-bold mb-3 text-gray-900 dark:text-white"
                >
                  Complete Renovation
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Complete all renovation in old side for enhanced efficiency
                </p>
                <div
                  class="text-xs text-blue-600 dark:text-blue-400 font-semibold"
                >
                  SCHEDULED
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Strategic Goals Summary -->
        <div
          class="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div class="text-center">
            <h3 class="text-3xl lg:text-4xl font-bold mb-6">
              Strategic Vision 2025
            </h3>
            <p
              class="text-xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto"
            >
              Our comprehensive approach focuses on infrastructure development,
              digital transformation, sustainable energy solutions, and
              operational optimization to position Şahinler Egypt as a leader in
              modern textile manufacturing.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <span class="material-symbols-outlined text-4xl mb-4 block"
                  >construction</span
                >
                <h4 class="text-lg font-semibold mb-2">Infrastructure</h4>
                <p class="text-white/80 text-sm">
                  Expanding facilities and modernizing operations
                </p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <span class="material-symbols-outlined text-4xl mb-4 block"
                  >computer</span
                >
                <h4 class="text-lg font-semibold mb-2">Digitalization</h4>
                <p class="text-white/80 text-sm">
                  100% digital transformation by end of 2025
                </p>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <span class="material-symbols-outlined text-4xl mb-4 block"
                  >solar_power</span
                >
                <h4 class="text-lg font-semibold mb-2">Sustainability</h4>
                <p class="text-white/80 text-sm">
                  Solar energy implementation and green practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Timeline -->
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
            Milestones of Excellence
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Key achievements and strategic developments that have shaped our
            journey from a Turkish textile company to a global manufacturing
            powerhouse.
          </p>
        </div>

        <div class="relative">
          <!-- Timeline Line -->
          <div
            class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"
          ></div>

          <div class="space-y-16">
            <div
              v-for="(milestone, index) in timeline"
              :key="milestone.year"
              v-motion
              :initial="{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }"
              :visible="{
                x: 0,
                opacity: 1,
                transition: { duration: 600, delay: index * 200 },
              }"
              class="relative flex items-center"
              :class="index % 2 === 0 ? 'justify-start' : 'justify-end'"
            >
              <!-- Timeline Node -->
              <div
                class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
              ></div>

              <!-- Content Card -->
              <div
                class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-md hover:shadow-xl transition-shadow duration-300"
                :class="index % 2 === 0 ? 'mr-auto pr-16' : 'ml-auto pl-16'"
              >
                <div class="flex items-center mb-4">
                  <span
                    class="text-3xl font-bold text-primary-600 dark:text-primary-400 mr-4"
                  >
                    {{ milestone.year }}
                  </span>
                  <div
                    class="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center"
                  >
                    <span
                      class="material-symbols-outlined text-primary-600 dark:text-primary-400 text-sm"
                    >
                      {{ milestone.icon }}
                    </span>
                  </div>
                </div>
                <h3
                  class="text-xl font-semibold mb-3 text-gray-900 dark:text-white"
                >
                  {{ milestone.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {{ milestone.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
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
            Values That Drive Us
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our core values form the foundation of everything we do, from daily
            operations to long-term strategic decisions and client
            relationships.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(value, index) in coreValues"
            :key="value.title"
            v-motion
            :initial="{ y: 50, opacity: 0 }"
            :visible="{
              y: 0,
              opacity: 1,
              transition: { duration: 600, delay: index * 200 },
            }"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift group"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="material-symbols-outlined text-white text-2xl">{{
                value.icon
              }}</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ value.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Competitive Advantages Section -->
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
            Why Choose Şahinler Egypt
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the competitive advantages that make us the preferred
            manufacturing partner for leading brands worldwide.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 200 },
            }"
            class="text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="material-symbols-outlined text-white text-2xl"
                >speed</span
              >
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Fast Turnaround
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Industry-leading production speeds with 4-6 week delivery times
            </p>
          </div>
          <div
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 400 },
            }"
            class="text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="material-symbols-outlined text-white text-2xl"
                >verified</span
              >
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Quality Assurance
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Rigorous quality control with 99.5% defect-free delivery rate
            </p>
          </div>
          <div
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 600 },
            }"
            class="text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="material-symbols-outlined text-white text-2xl"
                >savings</span
              >
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Cost Efficiency
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Competitive pricing without compromising on quality or service
            </p>
          </div>
          <div
            v-motion
            :initial="{ scale: 0.8, opacity: 0 }"
            :visible="{
              scale: 1,
              opacity: 1,
              transition: { duration: 600, delay: 800 },
            }"
            class="text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="material-symbols-outlined text-white text-2xl"
                >eco</span
              >
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Sustainability
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Environmentally responsible practices and sustainable
              manufacturing
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const timeline = [
  {
    year: "1982",
    title: "Foundation in Germany",
    description:
      "Kemal Şahin established Santex Germany in Aachen, Germany, laying the foundation for what would become Şahinler Holding.",
    icon: "rocket_launch",
  },
  {
    year: "1990s",
    title: "Business Diversification",
    description:
      "Expansion beyond textiles into construction, catering, and other sectors, building a diversified business portfolio.",
    icon: "trending_up",
  },
  {
    year: "2006",
    title: "Egypt Operations Launch",
    description:
      "Established Şahinler Egypt in 10th of Ramadan City, creating a strategic manufacturing hub for Middle East and African markets.",
    icon: "factory",
  },
  {
    year: "2010s",
    title: "Multi-Sector Growth",
    description:
      "Expanded operations across 7 sectors including free zone administration, tourism, and sport academies across multiple countries.",
    icon: "diversity_3",
  },
  {
    year: "2020",
    title: "Global Workforce Expansion",
    description:
      "Reached 40,000+ employees (10,000 direct, 30,000 indirect) across 6 countries, establishing a truly global presence.",
    icon: "groups",
  },
  {
    year: "2024",
    title: "Facility Modernization",
    description:
      "Completed major facility upgrades in Egypt with 30 production lines and comprehensive area optimization for maximum efficiency.",
    icon: "precision_manufacturing",
  },
  {
    year: "2025",
    title: "Strategic Transformation",
    description:
      "Implementing comprehensive digitalization, sustainability initiatives, and facility expansion to lead the industry's future.",
    icon: "trending_up",
  },
];

const coreValues = [
  {
    title: "Uncompromising Quality",
    description:
      "Every garment undergoes rigorous quality control processes, ensuring we consistently deliver products that exceed international standards and client expectations.",
    icon: "verified",
  },
  {
    title: "Continuous Innovation",
    description:
      "We invest heavily in research, technology, and process improvement to stay ahead of industry trends and provide cutting-edge manufacturing solutions.",
    icon: "lightbulb",
  },
  {
    title: "Environmental Stewardship",
    description:
      "Our commitment to sustainability drives us to implement eco-friendly processes, reduce waste, and minimize our environmental footprint.",
    icon: "eco",
  },
  {
    title: "Ethical Excellence",
    description:
      "We build lasting relationships through transparency, fair business practices, and ethical treatment of all employees and partners.",
    icon: "handshake",
  },
  {
    title: "Client Partnership",
    description:
      "We view every client as a strategic partner, working closely to understand their unique needs and deliver customized solutions.",
    icon: "favorite",
  },
  {
    title: "Operational Excellence",
    description:
      "Through continuous improvement and lean manufacturing principles, we optimize every aspect of our operations for maximum efficiency.",
    icon: "diversity_3",
  },
];
</script>
