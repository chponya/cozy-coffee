<template> 
    <div>
        <Navbar />

        <HeroSection />
        <FeaturesSection />
        <PopularProducts />
        
        <Footer />
    </div>
</template>

<script setup lang="ts">
    import Navbar from '../components/layout/Navbar.vue'
    import Footer from '../components/layout/Footer.vue'

    import HeroSection from '../components/home/HeroSection.vue'
    import FeaturesSection from '../components/home/FeaturesSection.vue'
    import PopularProducts from '../components/home/PopularProducts.vue'
</script>


