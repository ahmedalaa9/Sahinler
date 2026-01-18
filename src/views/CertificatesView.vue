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
            <span class="heading-gradient">Certificates</span>
          </h1>
          <p
            class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Recognized by international standards and certified for quality,
            sustainability, and ethical manufacturing practices.
          </p>
        </div>
      </div>
    </section>

    <!-- Certificates Grid -->
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
            Quality & Compliance Certifications
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence is validated by prestigious
            international certifications and industry recognitions.
          </p>
        </div>

        <!-- Certificates Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(certificate, index) in certificatesData"
            :key="certificate.certificateId"
            v-motion
            :initial="{ y: 50, opacity: 0 }"
            :visible="{
              y: 0,
              opacity: 1,
              transition: { duration: 600, delay: index * 150 },
            }"
            class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
          >
            <!-- Certificate Thumbnail -->
            <div
              class="relative h-40 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-700 dark:to-gray-600 overflow-hidden flex items-center justify-center"
            >
              <img
                v-if="certificate.thumbUrl"
                :src="certificate.thumbUrl"
                :alt="certificate.title"
                class="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                @error="
                  (e) => ((e.target as HTMLImageElement).style.display = 'none')
                "
              />
              <!-- Fallback Placeholder -->
              <div
                v-show="!certificate.thumbUrl"
                class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-700 dark:to-gray-600"
              >
                <div class="text-center">
                  <span
                    class="material-symbols-outlined text-6xl text-primary-400 dark:text-primary-500 mb-2 block"
                  >
                    card_membership
                  </span>
                  <p
                    class="text-sm text-primary-600 dark:text-primary-300 font-medium"
                  >
                    Certificate
                  </p>
                </div>
              </div>

              <!-- Status Badge -->
              <div class="absolute top-4 right-4 z-10">
                <span
                  class="inline-flex items-center space-x-1 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                >
                  <span class="material-symbols-outlined text-sm"
                    >check_circle</span
                  >
                  <span>{{ certificate.status }}</span>
                </span>
              </div>
            </div>

            <!-- Certificate Details -->
            <div class="p-6 flex flex-col flex-grow">
              <!-- Title & Description -->
              <h3
                class="text-xl font-bold mb-2 text-gray-900 dark:text-white line-clamp-2"
              >
                {{ certificate.title }}
              </h3>
              <p
                class="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed h-12 line-clamp-2"
              >
                {{ certificate.description }}
              </p>

              <!-- Certificate Metadata -->
              <div
                class="space-y-3 mb-6 border-t border-gray-200 dark:border-gray-700 pt-4"
              >
                <div class="flex items-center justify-between text-sm gap-2">
                  <span
                    class="text-gray-500 dark:text-gray-400 flex items-center space-x-1 whitespace-nowrap"
                  >
                    <span class="material-symbols-outlined text-base"
                      >business</span
                    >
                    <span>Issued by:</span>
                  </span>
                  <span
                    class="font-medium text-gray-900 dark:text-white text-right truncate"
                  >
                    {{ certificate.issuedBy }}
                  </span>
                </div>
                <div class="flex items-center justify-between text-sm gap-2">
                  <span
                    class="text-gray-500 dark:text-gray-400 flex items-center space-x-1 whitespace-nowrap"
                  >
                    <span class="material-symbols-outlined text-base"
                      >calendar_today</span
                    >
                    <span>Valid until:</span>
                  </span>
                  <span
                    class="font-medium text-gray-900 dark:text-white truncate"
                  >
                    {{ certificate.validUntil }}
                  </span>
                </div>
                <div class="flex items-center justify-between text-sm gap-2">
                  <span
                    class="text-gray-500 dark:text-gray-400 flex items-center space-x-1 whitespace-nowrap"
                  >
                    <span class="material-symbols-outlined text-base"
                      >fingerprint</span
                    >
                    <span>ID:</span>
                  </span>
                  <span
                    class="font-mono text-xs text-gray-600 dark:text-gray-400 truncate"
                  >
                    {{ certificate.certificateId }}
                  </span>
                </div>
              </div>

              <!-- Footer with Tag and Action -->
              <div
                class="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700"
              >
                <!-- Tag Badge -->
                <span
                  class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                  :class="getTagColor(certificate.tag)"
                >
                  {{ certificate.tag }}
                </span>

                <!-- View PDF Button -->
                <a
                  @click="openPDF(certificate.pdfUrl)"
                  class="inline-flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200 group/btn"
                  :title="`Open ${certificate.title} PDF`"
                >
                  <span
                    class="material-symbols-outlined text-lg group-hover/btn:translate-x-0.5 transition-transform"
                  >
                    open_in_new
                  </span>
                  <span class="text-sm">View</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- No Certificates Message -->
        <div v-if="certificatesData.length === 0" class="text-center py-16">
          <span
            class="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4 block"
          >
            card_membership
          </span>
          <p class="text-gray-600 dark:text-gray-300 text-lg">
            No certificates available at the moment.
          </p>
        </div>
      </div>
    </section>

    <!-- Compliance Standards -->
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
            Compliance Standards
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We adhere to the highest international standards and best practices
            in manufacturing, quality control, and environmental responsibility.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(standard, index) in complianceStandards"
            :key="standard.name"
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
                standard.icon
              }}</span>
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {{ standard.name }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ standard.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Audit Reports -->
    <!-- <section class="py-20">
      <div class="container-max section-padding">
        <div 
          v-motion
          :initial="{ y: 50, opacity: 0 }"
          :visible="{ y: 0, opacity: 1, transition: { duration: 800 } }"
          class="text-center mb-16"
        >
          <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-heading">
            Third-Party Audits
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Independent verification of our manufacturing processes, working conditions, 
            and environmental practices by renowned auditing firms.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div 
            v-for="(audit, index) in auditReports"
            :key="audit.id"
            v-motion
            :initial="{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }"
            :visible="{ x: 0, opacity: 1, transition: { duration: 800, delay: index * 300 } }"
            class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
          >
            <div class="flex items-start space-x-4 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-white">{{ audit.icon }}</span>
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{{ audit.title }}</h3>
                <p class="text-gray-600 dark:text-gray-300">{{ audit.auditor }}</p>
              </div>
            </div>

            <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{{ audit.description }}</p>

            <div class="space-y-4 mb-6">
              <div 
                v-for="metric in audit.metrics"
                :key="metric.name"
                class="flex items-center justify-between"
              >
                <span class="text-gray-700 dark:text-gray-300">{{ metric.name }}</span>
                <div class="flex items-center space-x-2">
                  <div class="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      class="h-2 rounded-full"
                      :class="metric.score >= 90 ? 'bg-green-500' : metric.score >= 80 ? 'bg-yellow-500' : 'bg-red-500'"
                      :style="{ width: `${metric.score}%` }"
                    ></div>
                  </div>
                  <span class="text-sm font-medium text-gray-900 dark:text-white">{{ metric.score }}%</span>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500 dark:text-gray-400">Last Updated: {{ audit.date }}</span>
              <button class="text-primary-600 dark:text-primary-400 hover:text-primary-700 font-medium flex items-center space-x-1">
                <span>View Report</span>
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Environmental Commitment -->
    <!-- <section
      class="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white"
    >
      <div class="container-max section-padding">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            v-motion
            :initial="{ x: -100, opacity: 0 }"
            :visible="{ x: 0, opacity: 1, transition: { duration: 800 } }"
          >
            <h2 class="text-4xl lg:text-5xl font-bold mb-6 font-heading">
              Environmental Responsibility
            </h2>
            <p class="text-xl mb-8 text-white/90 leading-relaxed">
              Our commitment to sustainable manufacturing goes beyond
              compliance. We actively work to minimize our environmental impact
              while maintaining the highest quality standards.
            </p>
            <div class="space-y-4">
              <div
                v-for="commitment in environmentalCommitments"
                :key="commitment"
                class="flex items-center space-x-3"
              >
                <span class="material-symbols-outlined text-green-300"
                  >eco</span
                >
                <span>{{ commitment }}</span>
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
            class="grid grid-cols-2 gap-6"
          >
            <CounterAnimation
              :value="75"
              label="Water Reduction"
              suffix="%"
              class="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center"
            />
            <CounterAnimation
              :value="60"
              label="Energy Savings"
              suffix="%"
              class="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center"
            />
            <CounterAnimation
              :value="90"
              label="Waste Recycled"
              suffix="%"
              class="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center"
            />
            <CounterAnimation
              :value="100"
              label="Renewable Energy"
              suffix="%"
              class="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center"
            />
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup lang="ts">
// import CounterAnimation from "../components/ui/CounterAnimation.vue";

// Certificates Data Structure
interface Certificate {
  title: string;
  description: string;
  issuedBy: string;
  validUntil: string;
  certificateId: string;
  tag: "Quality" | "Environmental" | "Social";
  status: "Active" | "Pending" | "Expired";
  pdfUrl: string;
  thumbUrl?: string;
}

const certificatesData: Certificate[] = [
  {
    title: "ISO 9001:2015",
    description:
      "Quality Management System certification ensuring consistent quality and customer satisfaction across all manufacturing processes.",
    issuedBy: "International Organization for Standardization",
    validUntil: "December 2026",
    certificateId: "ISO-9001-2023-001",
    tag: "Quality",
    status: "Active",
    pdfUrl: "/certificates/_e-cert_9001_2015_EN_sahinler egypt.pdf",
    thumbUrl: "/certificates/_e-cert_9001_2015_EN_sahinler egypt.png",
  },
  // {
  //   title: "ISO 14001:2015",
  //   description:
  //     "Environmental Management System certification for sustainable manufacturing practices and resource efficiency.",
  //   issuedBy: "International Organization for Standardization",
  //   validUntil: "November 2026",
  //   certificateId: "ISO-14001-2023-002",
  //   tag: "Environmental",
  //   status: "Active",
  //   pdfUrl: "/certificates/ISO-14001-2015.pdf",
  //   thumbUrl: "/certificates/ISO-14001-2015.png",
  // },
  {
    title: "WRAP Certification",
    description:
      "Worldwide Responsible Accredited Production certification validating ethical manufacturing and fair labor practices.",
    issuedBy: "Worldwide Responsible Accredited Production",
    validUntil: "August 2025",
    certificateId: "WRAP-2023-004",
    tag: "Social",
    status: "Active",
    pdfUrl: "/certificates/WRAP 10886-CERTIFICATE-20250324.pdf",
    thumbUrl: "/certificates/WRAP 10886-CERTIFICATE-20250324.png",
  },
  {
    title: "GOTS Certification",
    description:
      "Global Organic Textile Standard ensuring organic fiber products meet stringent environmental and social criteria.",
    issuedBy: "Global Organic Textile Standard",
    validUntil: "June 2025",
    certificateId: "GOTS-2023-005",
    tag: "Environmental",
    status: "Active",
    pdfUrl: "/certificates/HIGG FEM 2024 certificate.pdf",
    thumbUrl: "/certificates/HIGG FEM 2024 certificate.png",
  },
  {
    title: "Better Cotton Initiative",
    description:
      "Promoting better standards in cotton farming and supply chain practices across the global textile industry.",
    issuedBy: "Better Cotton Initiative",
    validUntil: "September 2025",
    certificateId: "BCI-2023-006",
    tag: "Environmental",
    status: "Active",
    pdfUrl: "/certificates/GRS - RCS 2025.pdf",
    thumbUrl: "/certificates/GRS - RCS 2025.png",
  },
  {
    title: "Costco Apparel Compliance",
    description:
      "Costco compliance certification for apparel and home textile manufacturing standards and requirements.",
    issuedBy: "Costco",
    validUntil: "May 2026",
    certificateId: "COSTCO-2025-001",
    tag: "Quality",
    status: "Active",
    pdfUrl:
      "/certificates/Costco_Apparel_HomeTextile_FA_Version20_05May2025.pdf",
    thumbUrl:
      "/certificates/Costco_Apparel_HomeTextile_FA_Version20_05May2025.png",
  },
];

// Methods
const getTagColor = (tag: string): string => {
  const colors: Record<string, string> = {
    Quality: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Environmental:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Social:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  };
  return colors[tag] || colors["Quality"];
};

const openPDF = (pdfUrl: string): void => {
  window.open(pdfUrl, "_blank", "noopener,noreferrer");
};

const complianceStandards = [
  {
    name: "Quality Control",
    description:
      "Rigorous quality assurance processes at every stage of production",
    icon: "verified",
  },
  {
    name: "Worker Safety",
    description:
      "Comprehensive safety protocols and training programs for all employees",
    icon: "safety_check",
  },
  {
    name: "Environmental Protection",
    description:
      "Sustainable practices minimizing environmental impact and resource consumption",
    icon: "eco",
  },
  {
    name: "Ethical Manufacturing",
    description:
      "Fair labor practices and ethical business conduct throughout operations",
    icon: "handshake",
  },
];
</script>
