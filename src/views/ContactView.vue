<template>
  <div class="min-h-screen pt-20">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
      <div class="container-max section-padding">
        <div 
          v-motion
          :initial="{ y: 100, opacity: 0 }"
          :visible="{ y: 0, opacity: 1, transition: { duration: 1000 } }"
          class="text-center"
        >
          <h1 class="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white font-heading">
            Get in 
            <span class="heading-gradient">Touch</span>
          </h1>
          <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to start your next project? Contact our team of manufacturing experts 
            and discover how we can bring your vision to life.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info Section -->
    <section class="py-20">
      <div class="container-max section-padding">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div 
            v-motion
            :initial="{ x: -100, opacity: 0 }"
            :visible="{ x: 0, opacity: 1, transition: { duration: 800 } }"
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white font-heading">
              Send us a Message
            </h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="John"
                  >
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Doe"
                  >
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="john.doe@company.com"
                >
              </div>

              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your Company"
                >
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Select a subject</option>
                  <option value="quote">Request a Quote</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="samples">Sample Request</option>
                  <option value="facility">Facility Visit</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  placeholder="Tell us about your project requirements, quantities, timelines, and any specific needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary flex items-center justify-center space-x-2"
                :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
                <span class="material-symbols-outlined">{{ isSubmitting ? 'hourglass_empty' : 'send' }}</span>
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div 
            v-motion
            :initial="{ x: 100, opacity: 0 }"
            :visible="{ x: 0, opacity: 1, transition: { duration: 800, delay: 300 } }"
            class="space-y-8"
          >
            <!-- Contact Details -->
            <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="material-symbols-outlined text-primary-600 dark:text-primary-400">location_on</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Address</h4>
                    <p class="text-gray-600 dark:text-gray-300">
                      10th of Ramadan City<br>
                      Egypt
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="material-symbols-outlined text-secondary-600 dark:text-secondary-400">phone</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                    <p class="text-gray-600 dark:text-gray-300">+20 15 5574 4411</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-accent-100 dark:bg-accent-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="material-symbols-outlined text-accent-600 dark:text-accent-400">email</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                    <p class="text-gray-600 dark:text-gray-300">info@sahinleregypt.com</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="material-symbols-outlined text-green-600 dark:text-green-400">schedule</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white mb-1">Business Hours</h4>
                    <p class="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 8:00 AM - 6:00 PM<br>
                      Saturday: 9:00 AM - 2:00 PM<br>
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Download Company Profile -->
            <div class="bg-gradient-to-br from-primary-500 to-secondary-500 p-8 rounded-2xl shadow-lg text-white">
              <h3 class="text-2xl font-bold mb-4">Company Profile</h3>
              <p class="mb-6 text-white/90">
                Download our comprehensive company profile to learn more about our 
                capabilities, certifications, and manufacturing processes.
              </p>
              <button class="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                <span class="material-symbols-outlined">download</span>
                <span>Download PDF</span>
              </button>
            </div>

            <!-- Quick Response Time -->
            <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Quick Response</h3>
              <div class="flex items-center space-x-4 mb-4">
                <span class="material-symbols-outlined text-green-500 text-3xl">timer</span>
                <div>
                  <p class="text-lg font-semibold text-gray-900 dark:text-white">24-Hour Response Time</p>
                  <p class="text-gray-600 dark:text-gray-300">We respond to all inquiries within 24 hours</p>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Our dedicated customer service team is committed to providing prompt responses 
                to help you with your manufacturing needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container-max section-padding">
        <div 
          v-motion
          :initial="{ y: 50, opacity: 0 }"
          :visible="{ y: 0, opacity: 1, transition: { duration: 800 } }"
          class="text-center mb-12"
        >
          <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-heading">
            Visit Our Facility
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Located in the heart of Egypt's industrial zone, our modern facility 
            is equipped with state-of-the-art technology and ready to serve your needs.
          </p>
        </div>

        <!-- Map Placeholder -->
        <div 
          v-motion
          :initial="{ scale: 0.9, opacity: 0 }"
          :visible="{ scale: 1, opacity: 1, transition: { duration: 800, delay: 300 } }"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
        >
          <div class="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
            <div class="text-center">
              <span class="material-symbols-outlined text-6xl text-primary-600 dark:text-primary-400 mb-4">location_on</span>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Interactive Map</h3>
              <p class="text-gray-600 dark:text-gray-300">10th of Ramadan City, Egypt</p>
              <button class="mt-4 btn-primary">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20">
      <div class="container-max section-padding">
        <div 
          v-motion
          :initial="{ y: 50, opacity: 0 }"
          :visible="{ y: 0, opacity: 1, transition: { duration: 800 } }"
          class="text-center mb-16"
        >
          <h2 class="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-heading">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services, processes, and partnerships.
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <div 
            v-for="(faq, index) in faqs"
            :key="faq.id"
            v-motion
            :initial="{ y: 30, opacity: 0 }"
            :visible="{ y: 0, opacity: 1, transition: { duration: 500, delay: index * 100 } }"
            class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            <button
              @click="toggleFaq(faq.id)"
              class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ faq.question }}</h3>
              <span 
                class="material-symbols-outlined text-primary-600 dark:text-primary-400 transition-transform duration-200"
                :class="{ 'rotate-180': faq.isOpen }"
              >
                expand_more
              </span>
            </button>
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-96"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 max-h-96"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-if="faq.isOpen" class="px-8 pb-6">
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  subject: '',
  message: ''
})

const faqs = ref([
  {
    id: 1,
    question: 'What is your minimum order quantity (MOQ)?',
    answer: 'Our MOQ varies depending on the product category and complexity. Typically, it ranges from 100 to 500 pieces per style per color. We can discuss specific requirements based on your needs.',
    isOpen: false
  },
  {
    id: 2,
    question: 'What is your typical lead time for production?',
    answer: 'Lead times depend on order complexity and quantity. Standard orders typically take 4-6 weeks from sample approval. Rush orders can be accommodated with additional coordination.',
    isOpen: false
  },
  {
    id: 3,
    question: 'Do you provide samples before production?',
    answer: 'Yes, we provide samples for approval before starting bulk production. Sample development typically takes 5-7 business days depending on the complexity of the design.',
    isOpen: false
  },
  {
    id: 4,
    question: 'What certifications do you have?',
    answer: 'We hold various international certifications including ISO 9001:2015, ISO 14001:2015, OEKO-TEX Standard 100, WRAP, GOTS, and Better Cotton Initiative certifications.',
    isOpen: false
  },
  {
    id: 5,
    question: 'Can you handle private label manufacturing?',
    answer: 'Absolutely! We specialize in private label manufacturing and can work with your designs, labels, packaging requirements, and brand specifications.',
    isOpen: false
  },
  {
    id: 6,
    question: 'What payment terms do you offer?',
    answer: 'We offer flexible payment terms including T/T (Telegraphic Transfer), L/C (Letter of Credit), and other mutually agreed arrangements. Terms are typically 30% advance and 70% against shipping documents.',
    isOpen: false
  }
])

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  setTimeout(() => {
    isSubmitting.value = false
    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    // Show success message (you could use a toast notification here)
    alert('Thank you for your message! We will get back to you within 24 hours.')
  }, 2000)
}

const toggleFaq = (id: number) => {
  const faq = faqs.value.find(f => f.id === id)
  if (faq) {
    faq.isOpen = !faq.isOpen
  }
}
</script>