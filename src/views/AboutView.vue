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
            Established in 2006, expansion with second factory in 2025 in
            Alexandria- Egypt, 19 years experience in the field. <br />
            Private Free Zone company, duty free to USA with QIZ, Europe with
            Euro-1 & Euro-Med, Africa with Comesa agreement.<br />
            Serving US & Europe markets by leveraging Egypt’s strong advantages
            as strategic geographic location, access to major markets,
            competitive & skilled and young labor workforce, reliable and
            improving energy supply, stable & supportive government policies.<br />
            Monthly capacity is 900K ( Knit & Woven )<br />
            60 minutes to Alexandria Port, 20 minutes to Borg Al-Arab Airport
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
            <!-- <div
              class="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
            >
              <span class="material-symbols-outlined text-sm mr-2"
                >history</span
              >
              Since 1982
            </div> -->
            <h2
              class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-heading"
            >
              Four Decades of
              <span class="heading-gradient">Diversified Excellence</span>
            </h2>
            <!-- <p
              class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
            >
              The Şahinler story began in 1982 when Kemal Şahin established
              Santex Germany in Aachen, Germany. What started as a textile
              venture has evolved into a diversified holding company operating
              across multiple sectors including construction, catering, free
              zone administration, ready-made garments, textiles, tourism, and
              sport academies.
            </p> -->
            <p
              class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              <!-- Today, Şahinler Holding operates across 6 countries with 10,000
              direct employees and 30,000 indirect employees, serving diverse
              markets through our integrated business model and commitment to
              excellence in every sector. -->
              <!-- Established in 2006, expansion with second factory in 2025 in
              Alexandria- Egypt, 19 years experience in the field. <br />
              Private Free Zone company, duty free to USA with QIZ, Europe with
              Euro-1 & Euro-Med, Africa with Comesa agreement. <br />
              Serving US & Europe markets by leveraging Egypt’s strong
              advantages as strategic geographic location, access to major
              markets, competitive & skilled and young labor workforce, reliable
              and improving energy supply, stable & supportive government
              policies. <br />
              Monthly capacity is 900K ( Knit & Woven ) <br />
              60 minutes to Alexandria Port, 20 minutes to Borg Al-Arab Airport. -->
            </p>

            <ul class="space-y-3 mb-8">
              <li
                class="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
              >
                <span class="material-symbols-outlined text-lg"> check </span>
                <span>
                  Established in 2006, expansion with second factory in 2025 in
                  Alexandria- Egypt, 19 years experience in the field.</span
                >
              </li>
              <li
                class="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
              >
                <span class="material-symbols-outlined text-lg"> check </span>
                <span>
                  Private Free Zone company, duty free to USA with QIZ, Europe
                  with Euro-1 & Euro-Med, Africa with Comesa agreement.</span
                >
              </li>
              <li
                class="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
              >
                <span class="material-symbols-outlined text-lg"> check </span>
                <span>
                  Serving US & Europe markets by leveraging Egypt’s strong
                  advantages as strategic geographic location, access to major
                  markets, competitive & skilled and young labor workforce,
                  reliable and improving energy supply, stable & supportive
                  government policies.</span
                >
              </li>
              <li
                class="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
              >
                <span class="material-symbols-outlined text-lg"> check </span>
                <span> Monthly capacity is 900K ( Knit & Woven )</span>
              </li>
              <li
                class="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
              >
                <span class="material-symbols-outlined text-lg"> check </span>
                <span>
                  60 minutes to Alexandria Port, 20 minutes to Borg Al-Arab
                  Airport.</span
                >
              </li>
            </ul>
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
              src="/public/Sahinler-about3.png"
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
            <!-- <div
              class="inline-flex items-center px-4 py-2 bg-secondary-100 dark:bg-secondary-900 rounded-full text-secondary-700 dark:text-secondary-300 text-sm font-medium mb-6"
            >
              <span class="material-symbols-outlined text-sm mr-2"
                >location_on</span
              >
              10th of Ramadan City, Egypt
            </div> -->
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
              production space , strategically positioned to serve Middle
              Eastern, African, and European markets.
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
      <!-- Main Factory Area -->
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
            Main Factory Area
            <span class="heading-gradient">Breakdown</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            (30 production line)
          </p>
        </div>

        <!-- Key Metrics -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto"
        >
          <div
            class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center"
          >
            <div
              class="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1"
            >
              Total area
            </div>
            <div class="text-2xl font-bold text-gray-900 dark:text-white">
              10,000 m²
            </div>
          </div>
          <div
            class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center"
          >
            <div
              class="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1"
            >
              Closed area
            </div>
            <div class="text-2xl font-bold text-gray-900 dark:text-white">
              6,000 m²
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <!-- Pie Chart Section -->
          <div
            v-motion
            :initial="{ x: -100, opacity: 0 }"
            :visible="{ x: 0, opacity: 1, transition: { duration: 800 } }"
            class="flex justify-center"
          >
            <img src="/public/Sahinler-about-breakdown.png" alt="" />
          </div>

          <!-- Facility Details List -->
          <div
            v-motion
            :initial="{ x: 100, opacity: 0 }"
            :visible="{
              x: 0,
              opacity: 1,
              transition: { duration: 800, delay: 200 },
            }"
            class="space-y-4"
          >
            <!-- Sewing & Ironing -->
            <div
              class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div class="flex items-center gap-4 p-5">
                <div
                  class="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-orange-500 rounded-lg"
                >
                  <span class="material-symbols-outlined text-white text-2xl"
                    >checkroom</span
                  >
                </div>
                <div class="flex-1">
                  <h4
                    class="text-base font-semibold text-gray-900 dark:text-white"
                  >
                    Sewing & Ironing & Q.C & Packing Area
                  </h4>
                </div>
                <div class="text-right flex-shrink-0">
                  <div class="text-lg font-bold text-orange-500">4220 m²</div>
                </div>
              </div>
            </div>

            <!-- Accessory Warehouse -->
            <div
              class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div class="flex items-center gap-4 p-5">
                <div
                  class="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-yellow-400 rounded-lg"
                >
                  <span class="material-symbols-outlined text-white text-2xl"
                    >checkroom</span
                  >
                </div>
                <div class="flex-1">
                  <h4
                    class="text-base font-semibold text-gray-900 dark:text-white"
                  >
                    Accessory Warehouse
                  </h4>
                </div>
                <div class="text-right flex-shrink-0">
                  <div class="text-lg font-bold text-yellow-400">300 m²</div>
                </div>
              </div>
            </div>

            <!-- Shipping Warehouse -->
            <div
              class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div class="flex items-center gap-4 p-5">
                <div
                  class="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-green-500 rounded-lg"
                >
                  <span class="material-symbols-outlined text-white text-2xl"
                    >local_shipping</span
                  >
                </div>
                <div class="flex-1">
                  <h4
                    class="text-base font-semibold text-gray-900 dark:text-white"
                  >
                    Shipping Warehouse
                  </h4>
                </div>
                <div class="text-right flex-shrink-0">
                  <div class="text-lg font-bold text-green-500">520 m²</div>
                </div>
              </div>
            </div>

            <!-- Management -->
            <div
              class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div class="flex items-center gap-4 p-5">
                <div
                  class="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-blue-600 rounded-lg"
                >
                  <span class="material-symbols-outlined text-white text-2xl"
                    >settings</span
                  >
                </div>
                <div class="flex-1">
                  <h4
                    class="text-base font-semibold text-gray-900 dark:text-white"
                  >
                    Management
                  </h4>
                </div>
                <div class="text-right flex-shrink-0">
                  <div class="text-lg font-bold text-blue-600">1240 m²</div>
                </div>
              </div>
            </div>

            <!-- Machine Warehouse -->
            <div
              class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div class="flex items-center gap-4 p-5">
                <div
                  class="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-amber-700 rounded-lg"
                >
                  <span class="material-symbols-outlined text-white text-2xl"
                    >precision_manufacturing</span
                  >
                </div>
                <div class="flex-1">
                  <h4
                    class="text-base font-semibold text-gray-900 dark:text-white"
                  >
                    Machine Warehouse
                  </h4>
                </div>
                <div class="text-right flex-shrink-0">
                  <div class="text-lg font-bold text-amber-700">200 m²</div>
                </div>
              </div>
            </div>

            <!-- Second Quality Store -->
            <div
              class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div class="flex items-center gap-4 p-5">
                <div
                  class="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-gray-600 rounded-lg"
                >
                  <span class="material-symbols-outlined text-white text-2xl"
                    >inventory_2</span
                  >
                </div>
                <div class="flex-1">
                  <h4
                    class="text-base font-semibold text-gray-900 dark:text-white"
                  >
                    Second Quality Store
                  </h4>
                </div>
                <div class="text-right flex-shrink-0">
                  <div class="text-lg font-bold text-gray-600">41 m²</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>

      <!-- Second Factory Area Breakdown Section -->
      <section class="py-20 bg-white dark:bg-gray-900">
        <div class="container-max section-padding">
          <div
            v-motion
            :initial="{ y: 50, opacity: 0 }"
            :visible="{ y: 0, opacity: 1, transition: { duration: 800 } }"
            class="text-center mb-8"
          >
            <h2
              class="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white font-heading"
            >
              Second Factory Area
              <span class="heading-gradient">Breakdown</span>
            </h2>
            <p
              class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              (30 production line)
            </p>

            <!-- Key Metrics -->
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto"
            >
              <div
                class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center"
              >
                <div
                  class="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1"
                >
                  Total area
                </div>
                <div class="text-2xl font-bold text-gray-900 dark:text-white">
                  10,908 m²
                </div>
              </div>
              <div
                class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center"
              >
                <div
                  class="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1"
                >
                  Closed area
                </div>
                <div class="text-2xl font-bold text-gray-900 dark:text-white">
                  15,000 m²
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <!-- Pie Chart Placeholder -->
            <div
              v-motion
              :initial="{ x: -100, opacity: 0 }"
              :visible="{ x: 0, opacity: 1, transition: { duration: 800 } }"
              class="flessx justify-centers"
            >
              <img
                src="/public/Sahinler-about-breakdown2.png"
                alt="Second factory pie chart placeholder"
                class="w-full h-[420pxs] object-contain rounded-2xl shadow-lg"
              />
            </div>

            <!-- Facility Details List (matches attached design) -->
            <div
              v-motion
              :initial="{ x: 100, opacity: 0 }"
              :visible="{
                x: 0,
                opacity: 1,
                transition: { duration: 800, delay: 200 },
              }"
              class="space-y-4"
            >
              <!-- Item template: colored icon, title, value pill -->
              <div
                class="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md p-4"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500"
                  >
                    <span class="material-symbols-outlined text-white"
                      >inventory</span
                    >
                  </div>
                  <div>
                    <h4
                      class="text-base font-semibold text-gray-900 dark:text-white"
                    >
                      Fabric Warehouse
                    </h4>
                  </div>
                </div>
                <div
                  class="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                >
                  687 m²
                </div>
              </div>

              <div
                class="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md p-4"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500"
                  >
                    <span class="material-symbols-outlined text-white"
                      >content_cut</span
                    >
                  </div>
                  <div>
                    <h4
                      class="text-base font-semibold text-gray-900 dark:text-white"
                    >
                      Cutting
                    </h4>
                  </div>
                </div>
                <div
                  class="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full"
                >
                  3284 m²
                </div>
              </div>

              <div
                class="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md p-4"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-500"
                  >
                    <span class="material-symbols-outlined text-white"
                      >checkroom</span
                    >
                  </div>
                  <div>
                    <h4
                      class="text-base font-semibold text-gray-900 dark:text-white"
                    >
                      Sewing & Ironing & Q.C. & Packing Area
                    </h4>
                  </div>
                </div>
                <div
                  class="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
                >
                  4893 m²
                </div>
              </div>

              <div
                class="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md p-4"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400"
                  >
                    <span class="material-symbols-outlined text-white"
                      >shopping_bag</span
                    >
                  </div>
                  <div>
                    <h4
                      class="text-base font-semibold text-gray-900 dark:text-white"
                    >
                      Accessory Warehouse
                    </h4>
                  </div>
                </div>
                <div
                  class="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full"
                >
                  576 m²
                </div>
              </div>

              <div
                class="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md p-4"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-400"
                  >
                    <span class="material-symbols-outlined text-white"
                      >print</span
                    >
                  </div>
                  <div>
                    <h4
                      class="text-base font-semibold text-gray-900 dark:text-white"
                    >
                      Printing House
                    </h4>
                  </div>
                </div>
                <div
                  class="text-sm bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full"
                >
                  1000 m²
                </div>
              </div>

              <div
                class="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md p-4"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 flex items-center justify-center rounded-full bg-green-500"
                  >
                    <span class="material-symbols-outlined text-white"
                      >local_shipping</span
                    >
                  </div>
                  <div>
                    <h4
                      class="text-base font-semibold text-gray-900 dark:text-white"
                    >
                      Shipping Warehouse
                    </h4>
                  </div>
                </div>
                <div
                  class="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full"
                >
                  1073 m²
                </div>
              </div>

              <div
                class="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md p-4"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-900"
                  >
                    <span class="material-symbols-outlined text-white"
                      >manage_accounts</span
                    >
                  </div>
                  <div>
                    <h4
                      class="text-base font-semibold text-gray-900 dark:text-white"
                    >
                      Management
                    </h4>
                  </div>
                </div>
                <div
                  class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                >
                  600 m²
                </div>
              </div>

              <div
                class="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md p-4"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 flex items-center justify-center rounded-full bg-amber-700"
                  >
                    <span class="material-symbols-outlined text-white"
                      >build</span
                    >
                  </div>
                  <div>
                    <h4
                      class="text-base font-semibold text-gray-900 dark:text-white"
                    >
                      Machine Warehouse
                    </h4>
                  </div>
                </div>
                <div
                  class="text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full"
                >
                  269 m²
                </div>
              </div>

              <div
                class="flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md p-4"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-600"
                  >
                    <span class="material-symbols-outlined text-white"
                      >delete</span
                    >
                  </div>
                  <div>
                    <h4
                      class="text-base font-semibold text-gray-900 dark:text-white"
                    >
                      Rubbish Store
                    </h4>
                  </div>
                </div>
                <div
                  class="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
                >
                  126 m²
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- /////////////////////////////////////////////////////////////// -->
    </section>

    <!-- Business Sectors Section -->
    <!-- <section class="py-20 bg-gray-50 dark:bg-gray-900"> -->
    <!-- <div class="container-max section-padding">
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
        </div> -->

    <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
        </div> -->

    <!-- Sector Integration Summary -->
    <!-- <div
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
        </div> -->
    <!-- </div> -->
    <!-- </section> -->

    <!-- Mission & Vision Section -->
    <section
      class="py-20 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800"
    >
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
            Vision, Mission
            <span class="heading-gradient">&amp; Values</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence, innovation, and sustainable growth
            across all our operations.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <!-- Vision Card -->
          <div
            v-motion
            :initial="{ x: -100, opacity: 0 }"
            :visible="{ x: 0, opacity: 1, transition: { duration: 800 } }"
            class="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-700 dark:to-teal-700 rounded-2xl p-8 lg:p-12 text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-start gap-8">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm"
                >
                  <span class="material-symbols-outlined text-white text-3xl"
                    >visibility</span
                  >
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-3xl lg:text-4xl font-bold mb-4">Vision</h3>
                <p class="text-lg text-white/95 leading-relaxed">
                  Our vision is to move our group to the top list of the world
                  by presenting our excellent products which put color in our
                  life with the best quality and service in most convenient
                  price.
                </p>
              </div>
            </div>
          </div>

          <!-- Mission Card -->
          <div
            v-motion
            :initial="{ x: -100, opacity: 0 }"
            :visible="{
              x: 0,
              opacity: 1,
              transition: { duration: 800, delay: 200 },
            }"
            class="bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-700 dark:to-cyan-700 rounded-2xl p-8 lg:p-12 text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-start gap-8">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm"
                >
                  <span class="material-symbols-outlined text-white text-3xl"
                    >flag</span
                  >
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-3xl lg:text-4xl font-bold mb-4">Mission</h3>
                <p class="text-lg text-white/95 leading-relaxed">
                  Our mission is to build cultural and economic bridge between
                  continents and make employees proud to be part of Şahinler
                  Egypt which believe in the team work, and to get our customers
                  on the whole world more pleased with this high motivation and
                  following the market technology.
                </p>
              </div>
            </div>
          </div>

          <!-- Values Card -->
          <div
            v-motion
            :initial="{ x: -100, opacity: 0 }"
            :visible="{
              x: 0,
              opacity: 1,
              transition: { duration: 800, delay: 400 },
            }"
            class="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-700 dark:to-blue-700 rounded-2xl p-8 lg:p-12 text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-start gap-8">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm"
                >
                  <span class="material-symbols-outlined text-white text-3xl"
                    >public</span
                  >
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-3xl lg:text-4xl font-bold mb-4">Values</h3>
                <p class="text-lg text-white/95 leading-relaxed">
                  We are committed to conducting our business with transparency,
                  fairness and integrity, demonstrating diligence, efficiency
                  and discipline, fostering respect and positive communication,
                  promoting teamwork and adaptability, prioritizing our
                  customers, embracing environmental responsibility and
                  collaborating with partners to create a lasting, positive
                  impact on our planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2026 Şahinler Egypt Priorities Section -->
    <section
      class="py-20 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div class="container-max section-padding">
        <div
          v-motion
          :initial="{ y: 50, opacity: 0 }"
          :visible="{ y: 0, opacity: 1, transition: { duration: 800 } }"
          class="text-center mb-20"
        >
          <h2
            class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-heading"
          >
            2026 Şahinler Egypt
            <span class="heading-gradient">Priorities</span>
          </h2>
        </div>

        <!-- Timeline -->
        <div class="relative w-full pb-8">
          <svg
            class="w-full h-auto min-h-96"
            viewBox="0 0 1200 350"
            preserveAspectRatio="xMidYMid meet"
          >
            <!-- Connecting bars -->
            <g class="connecting-bars">
              <!-- Bar 1-2 (Purple) -->
              <rect x="140" y="145" width="160" height="20" fill="#A855F7" />
              <!-- Bar 2-3 (Red) -->
              <rect x="340" y="145" width="160" height="20" fill="#EF4444" />
              <!-- Bar 3-4 (Orange) -->
              <rect x="540" y="145" width="160" height="20" fill="#F97316" />
              <!-- Bar 4-5 (Purple) -->
              <rect x="740" y="145" width="160" height="20" fill="#A855F7" />
              <!-- Bar 5-6 (Yellow) -->
              <rect x="940" y="145" width="160" height="20" fill="#FBBF24" />
            </g>

            <!-- Circle 1 -->
            <g class="priority-item">
              <circle
                cx="140"
                cy="155"
                r="35"
                fill="white"
                stroke="#A855F7"
                stroke-width="4"
              />
              <text
                x="140"
                y="165"
                text-anchor="middle"
                font-size="28"
                font-weight="bold"
                fill="#6B7280"
              >
                01
              </text>
            </g>

            <!-- Circle 2 -->
            <g class="priority-item">
              <circle
                cx="340"
                cy="155"
                r="35"
                fill="white"
                stroke="#EF4444"
                stroke-width="4"
              />
              <text
                x="340"
                y="165"
                text-anchor="middle"
                font-size="28"
                font-weight="bold"
                fill="#6B7280"
              >
                02
              </text>
            </g>

            <!-- Circle 3 -->
            <g class="priority-item">
              <circle
                cx="540"
                cy="155"
                r="35"
                fill="white"
                stroke="#F97316"
                stroke-width="4"
              />
              <text
                x="540"
                y="165"
                text-anchor="middle"
                font-size="28"
                font-weight="bold"
                fill="#6B7280"
              >
                03
              </text>
            </g>

            <!-- Circle 4 -->
            <g class="priority-item">
              <circle
                cx="740"
                cy="155"
                r="35"
                fill="white"
                stroke="#A855F7"
                stroke-width="4"
              />
              <text
                x="740"
                y="165"
                text-anchor="middle"
                font-size="28"
                font-weight="bold"
                fill="#6B7280"
              >
                04
              </text>
            </g>

            <!-- Circle 5 -->
            <g class="priority-item">
              <circle
                cx="940"
                cy="155"
                r="35"
                fill="white"
                stroke="#60A5FA"
                stroke-width="4"
              />
              <text
                x="940"
                y="165"
                text-anchor="middle"
                font-size="28"
                font-weight="bold"
                fill="#6B7280"
              >
                05
              </text>
            </g>

            <!-- Text 1 -->
            <text
              x="140"
              y="240"
              text-anchor="middle"
              font-size="14"
              font-weight="600"
              fill="#1F2937"
              class="priority-text"
            >
              <tspan x="140" dy="0">Finish basement</tspan>
              <tspan x="140" dy="16">construction and move</tspan>
              <tspan x="140" dy="16">all warehouses to the</tspan>
              <tspan x="140" dy="16">land (4595 m2) beside</tspan>
              <tspan x="140" dy="16">us to have more</tspan>
              <tspan x="140" dy="16">space for decreasing</tspan>
              <tspan x="140" dy="16">the overload</tspan>
            </text>

            <!-- Text 2 -->
            <text
              x="340"
              y="240"
              text-anchor="middle"
              font-size="14"
              font-weight="600"
              fill="#1F2937"
              class="priority-text"
            >
              <tspan x="340" dy="0">After moving the</tspan>
              <tspan x="340" dy="16">warehouses to the</tspan>
              <tspan x="340" dy="16">land beside us, to</tspan>
              <tspan x="340" dy="16">increase production</tspan>
              <tspan x="340" dy="16">lines as +10 in main</tspan>
              <tspan x="340" dy="16">factory</tspan>
            </text>

            <!-- Text 3 -->
            <text
              x="540"
              y="240"
              text-anchor="middle"
              font-size="14"
              font-weight="600"
              fill="#1F2937"
              class="priority-text"
            >
              <tspan x="540" dy="0">Accelerate</tspan>
              <tspan x="540" dy="16">Digitalization</tspan>
              <tspan x="540" dy="16">Project to</tspan>
              <tspan x="540" dy="16">reach 100% till</tspan>
              <tspan x="540" dy="16">end of 2026</tspan>
              <tspan x="540" dy="16">(in process)</tspan>
            </text>

            <!-- Text 4 -->
            <text
              x="740"
              y="240"
              text-anchor="middle"
              font-size="14"
              font-weight="600"
              fill="#1F2937"
              class="priority-text"
            >
              <tspan x="740" dy="0">Full Study for</tspan>
              <tspan x="740" dy="16">Solar Panels</tspan>
              <tspan x="740" dy="16">implementation</tspan>
              <tspan x="740" dy="16">in the new site</tspan>
            </text>

            <!-- Text 5 -->
            <text
              x="940"
              y="240"
              text-anchor="middle"
              font-size="14"
              font-weight="600"
              fill="#1F2937"
              class="priority-text"
            >
              <tspan x="940" dy="0">Complete all</tspan>
              <tspan x="940" dy="16">the renovation</tspan>
              <tspan x="940" dy="16">in main side</tspan>
            </text>
          </svg>
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
    <!-- <section class="py-20">
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
              <div
                class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
              ></div>

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
    </section> -->

    <!-- Values Section -->
    <!-- <section class="py-20 bg-gray-50 dark:bg-gray-900">
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
    </section> -->

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
// const timeline = [
//   {
//     year: "1982",
//     title: "Foundation in Germany",
//     description:
//       "Kemal Şahin established Santex Germany in Aachen, Germany, laying the foundation for what would become Şahinler Holding.",
//     icon: "rocket_launch",
//   },
//   {
//     year: "1990s",
//     title: "Business Diversification",
//     description:
//       "Expansion beyond textiles into construction, catering, and other sectors, building a diversified business portfolio.",
//     icon: "trending_up",
//   },
//   {
//     year: "2006",
//     title: "Egypt Operations Launch",
//     description:
//       "Established Şahinler Egypt in 10th of Ramadan City, creating a strategic manufacturing hub for Middle East and African markets.",
//     icon: "factory",
//   },
//   {
//     year: "2010s",
//     title: "Multi-Sector Growth",
//     description:
//       "Expanded operations across 7 sectors including free zone administration, tourism, and sport academies across multiple countries.",
//     icon: "diversity_3",
//   },
//   {
//     year: "2020",
//     title: "Global Workforce Expansion",
//     description:
//       "Reached 40,000+ employees (10,000 direct, 30,000 indirect) across 6 countries, establishing a truly global presence.",
//     icon: "groups",
//   },
//   {
//     year: "2024",
//     title: "Facility Modernization",
//     description:
//       "Completed major facility upgrades in Egypt with 30 production lines and comprehensive area optimization for maximum efficiency.",
//     icon: "precision_manufacturing",
//   },
//   {
//     year: "2025",
//     title: "Strategic Transformation",
//     description:
//       "Implementing comprehensive digitalization, sustainability initiatives, and facility expansion to lead the industry's future.",
//     icon: "trending_up",
//   },
// ];

// const coreValues = [
//   {
//     title: "Uncompromising Quality",
//     description:
//       "Every garment undergoes rigorous quality control processes, ensuring we consistently deliver products that exceed international standards and client expectations.",
//     icon: "verified",
//   },
//   {
//     title: "Continuous Innovation",
//     description:
//       "We invest heavily in research, technology, and process improvement to stay ahead of industry trends and provide cutting-edge manufacturing solutions.",
//     icon: "lightbulb",
//   },
//   {
//     title: "Environmental Stewardship",
//     description:
//       "Our commitment to sustainability drives us to implement eco-friendly processes, reduce waste, and minimize our environmental footprint.",
//     icon: "eco",
//   },
//   {
//     title: "Ethical Excellence",
//     description:
//       "We build lasting relationships through transparency, fair business practices, and ethical treatment of all employees and partners.",
//     icon: "handshake",
//   },
//   {
//     title: "Client Partnership",
//     description:
//       "We view every client as a strategic partner, working closely to understand their unique needs and deliver customized solutions.",
//     icon: "favorite",
//   },
//   {
//     title: "Operational Excellence",
//     description:
//       "Through continuous improvement and lean manufacturing principles, we optimize every aspect of our operations for maximum efficiency.",
//     icon: "diversity_3",
//   },
// ];
</script>
