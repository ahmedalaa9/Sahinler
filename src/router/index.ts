import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Entry',
      component: () => import('../views/EntryView.vue'),
      meta: {
        title: 'Welcome to Şahinler Egypt',
        description: 'Leading garment manufacturer in Egypt, member of Şahinler Group'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'Şahinler Egypt - Leading Garment Manufacturer',
        description: 'Şahinler Egypt is a leading garment manufacturer and member of Şahinler Group, producing over 50 million units annually'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About Us - Şahinler Egypt',
        description: 'Learn about our history, mission, and vision as a leading textile manufacturer since 1982'
      }
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/ProductsView.vue'),
      meta: {
        title: 'Products - Şahinler Egypt',
        description: 'Explore our diverse range of products including knitwear, woven, embroidery, and sublimation'
      }
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: () => import('../views/GalleryView.vue'),
      meta: {
        title: 'Photo Gallery - Şahinler Egypt',
        description: 'Take a look inside our state-of-the-art manufacturing facilities and meet our team'
      }
    },
    {
      path: '/clients',
      name: 'Clients',
      component: () => import('../views/ClientsView.vue'),
      meta: {
        title: 'Our Clients - Şahinler Egypt',
        description: 'Trusted by leading brands worldwide for quality garment manufacturing'
      }
    },
    {
      path: '/certificates',
      name: 'Certificates',
      component: () => import('../views/CertificatesView.vue'),
      meta: {
        title: 'Certificates - Şahinler Egypt',
        description: 'Our quality certifications and industry accreditations'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: 'Contact Us - Şahinler Egypt',
        description: 'Get in touch with our team for business inquiries and partnerships'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  // Update document title and meta tags
  document.title = to.meta.title as string || 'Şahinler Egypt'
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description as string || '')
  }
  
  next()
})

export default router