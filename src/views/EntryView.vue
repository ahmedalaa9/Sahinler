<template>
  <!-- Logo Animation Container -->
  <div
    v-if="true"
    class="fixed inset-0 flex items-center justify-center z-50 bg-white"
    :class="logoAnimationClass"
  >
    <div class="relative flex items-center justify-center">
      <!-- Main Logo -->
      <!-- <div class="h-[50vh] bg-white border-2 border-white"> -->
      <video
        autoplay
        muted
        playsinline
        class="w-full h-full object-cover bg-white 0"
      >
        <source src="/entry-logo.mp4" type="video/mp4" />
      </video>
      <!-- </div> -->
    </div>
  </div>
  <div
    v-if="showBackground"
    class="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 flex items-center justify-center overflow-hidden relative"
  >
    <!-- Animated Starfield Background (Hidden during logo animation) -->
    <div v-if="showBackground" class="absolute inset-0">
      <!-- Moving Stars -->
      <div
        v-for="star in stars"
        :key="`star-${star.id}`"
        v-motion
        :initial="{
          opacity: 0,
          scale: 0,
        }"
        :enter="{
          opacity: star.opacity,
          scale: 1,
          transition: {
            duration: 1500,
            ease: 'easeOut',
            delay: star.delay,
          },
        }"
        class="absolute rounded-full animate-twinkle"
        :style="{
          left: star.x + '%',
          top: star.y + '%',
          width: star.size + 'px',
          height: star.size + 'px',
          backgroundColor: star.color,
          animationDelay: star.animationDelay + 's',
          animationDuration: star.twinkleDuration + 's',
        }"
      ></div>

      <!-- Shooting Stars -->
      <div
        v-for="shootingStar in shootingStars"
        :key="`shooting-${shootingStar.id}`"
        v-motion
        :initial="{
          x: -100,
          y: shootingStar.startY,
          opacity: 0,
        }"
        :enter="{
          x: windowWidth,
          y: shootingStar.endY,
          opacity: 1,
          transition: {
            duration: shootingStar.duration,
            ease: 'easeInOut',
            delay: shootingStar.delay,
            repeat: Infinity,
            repeatDelay: shootingStar.repeatDelay,
          },
        }"
        class="absolute w-1 h-1 bg-white rounded-full"
        :style="{
          boxShadow: `0 0 6px 2px ${shootingStar.color}, 0 0 12px 4px ${shootingStar.color}40`,
        }"
      ></div>

      <!-- Floating Particles -->
      <div
        v-for="particle in floatingParticles"
        :key="`particle-${particle.id}`"
        v-motion
        :initial="{
          y: windowHeight,
          opacity: 0,
          scale: 0,
        }"
        :enter="{
          y: -50,
          opacity: particle.opacity,
          scale: 1,
          x: particle.drift,
          transition: {
            duration: particle.duration,
            ease: 'linear',
            delay: particle.delay,
            repeat: Infinity,
            repeatDelay: particle.repeatDelay,
          },
        }"
        class="absolute rounded-full"
        :style="{
          left: particle.x + '%',
          width: particle.size + 'px',
          height: particle.size + 'px',
          backgroundColor: particle.color,
          filter: 'blur(' + particle.blur + 'px)',
        }"
      ></div>

      <!-- Nebula Effect -->
      <div
        v-motion
        :initial="{ scale: 0, opacity: 0 }"
        :enter="{
          scale: 1,
          opacity: 0.15,
          transition: { duration: 4000, ease: 'easeOut' },
        }"
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/20 to-secondary-800/20 rounded-full blur-3xl animate-pulse-slow"
      ></div>

      <div
        v-motion
        :initial="{ scale: 0, opacity: 0 }"
        :enter="{
          scale: 1,
          opacity: 0.12,
          transition: { duration: 4000, ease: 'easeOut', delay: 1000 },
        }"
        class="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-secondary-800/15 to-primary-500/15 rounded-full blur-3xl animate-pulse-slow"
        style="animation-delay: 2s"
      ></div>
    </div>

    <!-- Main Content Container -->
    <div v-if="showMainContent" class="text-center text-white z-10 relative">
      <!-- Logo in Container -->
      <div
        v-motion
        :initial="{ scale: 0, opacity: 0, y: -50 }"
        :enter="{
          scale: 1,
          opacity: 1,
          y: 0,
          transition: {
            duration: 1000,
            ease: 'easeOut',
          },
        }"
        class="mb-6 relative"
      >
        <div class="relative mx-auto">
          <!-- Logo Container with Glassmorphism Background -->
          <div
            v-motion
            :initial="{ scale: 0.8, opacity: 0.5, y: 20 }"
            :enter="{
              scale: 1,
              opacity: 1,
              y: 0,
              transition: {
                duration: 800,
                ease: 'easeOut',
                delay: 200,
              },
            }"
            class="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 mx-auto w-fit hover:bg-white/15 hover:border-white/50 transition-all duration-500 hover:scale-105 group mt-6"
          >
            <!-- Logo Image -->

            <img
              class="w-24 h-auto lg:w-28 lg:h-auto transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 filter drop-shadow-lg relative z-10"
              src="/main-logo.jpeg"
              alt="Şahinler Egypt Logo"
            />

            <!-- Floating Particles Around Logo -->
            <div
              class="absolute -top-2 -left-2 w-2 h-2 bg-white/60 rounded-full animate-bounce opacity-70"
              style="animation-delay: 0s; animation-duration: 2s"
            ></div>
            <div
              class="absolute -top-1 -right-3 w-1.5 h-1.5 bg-primary-300/80 rounded-full animate-bounce opacity-70"
              style="animation-delay: 0.5s; animation-duration: 2.5s"
            ></div>
            <div
              class="absolute -bottom-2 -left-3 w-1.5 h-1.5 bg-secondary-300/80 rounded-full animate-bounce opacity-70"
              style="animation-delay: 1s; animation-duration: 2.2s"
            ></div>
            <div
              class="absolute -bottom-1 -right-2 w-2 h-2 bg-white/60 rounded-full animate-bounce opacity-70"
              style="animation-delay: 1.5s; animation-duration: 2.8s"
            ></div>

            <!-- Subtle Pulse Ring -->
            <!-- <div
              class="absolute inset-0 rounded-xl border border-white/20 animate-ping opacity-20"
              style="animation-duration: 3s"
            ></div> -->
          </div>
        </div>
      </div>

      <!-- Company Name -->
      <div
        v-motion
        :initial="{ y: 30, opacity: 0 }"
        :enter="{
          y: 0,
          opacity: 1,
          transition: { duration: 800, ease: 'easeOut', delay: 500 },
        }"
        class="mb-6"
      >
        <h1 class="text-5xl lg:text-7xl font-bold mb-4 font-heading">
          <span class="text-white">Şahinler</span>
          <span class="text-primary-400 ml-4">Egypt</span>
        </h1>

        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: { duration: 600, delay: 800 },
          }"
          class="relative"
        >
          <p class="text-xl lg:text-2xl text-primary-200 font-medium mb-2">
            An Enterprise of Sahinler holding
          </p>
          <div
            class="w-32 h-1 bg-gradient-to-r from-primary-500 to-secondary-800 mx-auto rounded-full"
          ></div>
        </div>
      </div>

      <!-- Welcome Message -->
      <div
        v-motion
        :initial="{ y: 20, opacity: 0 }"
        :enter="{
          y: 0,
          opacity: 1,
          transition: { duration: 600, delay: 1200 },
        }"
        class="mb-12"
      >
        <div class="max-w-2xl mx-auto">
          <p class="text-lg lg:text-xl text-primary-100 leading-relaxed mb-6">
            Leading Garment Manufacturer in Egypt Since 2006
          </p>

          <!-- Simple Feature Highlights -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div
              v-for="(feature, index) in features"
              :key="feature.title"
              v-motion
              :initial="{ y: 20, opacity: 0 }"
              :enter="{
                y: 0,
                opacity: 1,
                transition: { duration: 500, delay: 1500 + index * 200 },
              }"
              class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 hover:border-primary-400/30 transition-all duration-300"
            >
              <div class="text-2xl mb-3">{{ feature.icon }}</div>
              <h3 class="text-lg font-semibold text-white mb-2">
                {{ feature.title }}
              </h3>
              <p class="text-primary-100 text-sm">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Simple Loading Animation -->
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 400, delay: 2500 } }"
        class="flex flex-col items-center space-y-4"
      >
        <!-- Loading Text -->
        <div class="text-center">
          <p class="text-primary-100 text-lg font-medium">{{ progressText }}</p>
        </div>
      </div>
    </div>

    <!-- Simple Progress Bar -->
    <div
      v-if="showMainContent"
      class="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-80"
    >
      <div class="relative">
        <div class="w-full bg-white/20 rounded-full h-2 overflow-hidden">
          <div
            v-motion
            :initial="{ width: '0%' }"
            :enter="{
              width: '100%',
              transition: { duration: 3000, ease: 'easeInOut', delay: 1000 },
            }"
            class="h-full bg-gradient-to-r from-primary-500 to-secondary-800 rounded-full"
          ></div>
        </div>
      </div>
    </div>

    <!-- Click Hint -->
    <div
      v-if="showMainContent"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 600, delay: 4000 } }"
      class="absolute bottom-6 right-6 text-primary-100 text-sm flex items-center space-x-2"
    >
      <span>Click anywhere to continue</span>
      <div class="w-2 h-2 bg-primary-400 rounded-full animate-ping"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const progressText = ref("Loading...");
const showLogo = ref(true);
const showMainContent = ref(false);
const showBackground = ref(false);
const logoAnimationClass = ref("logo-fade-in");

// Generate stars for the background
interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  delay: number;
  animationDelay: number;
  twinkleDuration: number;
}

interface ShootingStar {
  id: number;
  startY: number;
  endY: number;
  duration: number;
  delay: number;
  repeatDelay: number;
  color: string;
}

interface FloatingParticle {
  id: number;
  x: number;
  size: number;
  opacity: number;
  color: string;
  duration: number;
  delay: number;
  repeatDelay: number;
  drift: number;
  blur: number;
}

const stars = ref<Star[]>([]);
const shootingStars = ref<ShootingStar[]>([]);
const floatingParticles = ref<FloatingParticle[]>([]);

const generateStars = () => {
  const starArray: Star[] = [];
  const colors = ["#ffffff", "#e0f2fe", "#bae6fd", "#7dd3fc", "#38bdf8"];

  for (let i = 0; i < 150; i++) {
    starArray.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2000,
      animationDelay: Math.random() * 4,
      twinkleDuration: Math.random() * 3 + 2,
    });
  }
  stars.value = starArray;
};

const generateShootingStars = () => {
  const shootingArray: ShootingStar[] = [];
  const colors = ["#ffffff", "#0083D5", "#13365C", "#fbbf24"];

  for (let i = 0; i < 5; i++) {
    shootingArray.push({
      id: i,
      startY: Math.random() * 30,
      endY: Math.random() * 30 + 70,
      duration: Math.random() * 2000 + 1500,
      delay: Math.random() * 3000,
      repeatDelay: Math.random() * 8000 + 5000,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }
  shootingStars.value = shootingArray;
};

const generateFloatingParticles = () => {
  const particleArray: FloatingParticle[] = [];
  const colors = ["#0083D5", "#13365C", "#0074c2", "#4b7bab"];

  for (let i = 0; i < 20; i++) {
    particleArray.push({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.4 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)] + "40",
      duration: Math.random() * 15000 + 10000,
      delay: Math.random() * 5000,
      repeatDelay: Math.random() * 3000,
      drift: Math.random() * 100 - 50,
      blur: Math.random() * 2 + 1,
    });
  }
  floatingParticles.value = particleArray;
};

const windowWidth = computed(() => {
  return typeof window !== "undefined" ? window.innerWidth + 100 : 1300;
});

const windowHeight = computed(() => {
  return typeof window !== "undefined" ? window.innerHeight + 50 : 850;
});

const features = [
  {
    icon: "🏭",
    title: "50M+ Units",
    description: "Annual production capacity",
  },
  {
    icon: "🌍",
    title: "Global Reach",
    description: "18th largest manufacturer worldwide",
  },
  {
    icon: "⭐",
    title: "Premium Quality",
    description: "International standards certified",
  },
];

onMounted(() => {
  // Generate background animations
  generateStars();
  generateShootingStars();
  generateFloatingParticles();

  // Logo Animation Sequence
  // Phase 1: Logo Fade In (0-2s)
  setTimeout(() => {
    logoAnimationClass.value = "logo-fade-in-complete";
  }, 2000);

  // Phase 2: Logo Fade Out & Scale Down (2-3.5s)
  setTimeout(() => {
    logoAnimationClass.value = "logo-fade-out";
  }, 5000);

  // Phase 3: Hide Logo & Show Main Content (3.5s)
  setTimeout(() => {
    showLogo.value = false;
    showBackground.value = true;
    showMainContent.value = true;
  }, 5000);

  // Progress text updates
  setTimeout(() => (progressText.value = "Preparing..."), 4500);
  setTimeout(() => (progressText.value = "Almost ready..."), 6000);
  setTimeout(() => (progressText.value = "Welcome!"), 7000);

  // Auto redirect after animations complete
  setTimeout(() => {
    router.push("/home");
  }, 11000);

  // Allow manual navigation by clicking (only after main content shows)
  setTimeout(() => {
    document.addEventListener(
      "click",
      () => {
        router.push("/home");
      },
      { once: true },
    );
  }, 3500);
});
</script>

<style scoped>
/* Logo Animation Classes */
.logo-fade-in {
  animation: logoFadeIn 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.logo-fade-in-complete {
  opacity: 1;
  transform: scale(1);
}

.logo-fade-out {
  animation: logoFadeOut 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Logo Image Sizing */
.logo-image {
  width: 320px;
  height: auto;
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
}

/* CSS Keyframe Animations */
@keyframes logoFadeIn {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes logoFadeOut {
  0% {
    opacity: 1;
    background-color: transparent;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    background-color: transparent;
    transform: scale(0.1);
  }
}

/* Existing animations */
.animate-bounce {
  animation: bounce 1.5s infinite;
}

.animate-twinkle {
  animation: twinkle ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translateY(0);
  }
  40%,
  43% {
    transform: translateY(-8px);
  }
  70% {
    transform: translateY(-4px);
  }
  90% {
    transform: translateY(-2px);
  }
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.05;
    transform: scale(1);
  }
  50% {
    opacity: 0.15;
    transform: scale(1.05);
  }
}

/* Performance Optimizations */
.logo-image,
.logo-fade-in,
.logo-fade-out {
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

/* Responsive Design */
@media (max-width: 768px) {
  .logo-image {
    width: 280px;
  }
}

@media (max-width: 480px) {
  .logo-image {
    width: 240px;
  }
}
</style>
