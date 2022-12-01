<template>
    <div id="MainPage">
        <HeaderComp />
        <!-- <LoginsessionComp/> -->
        <BannerComp />
        <BenefitComp />
        <div class="container mt-5">
            <div class="row">
                <h4 class="text-center">KATERING APA YANG SEDANG KAMU CARI?</h4>
                <hr>
            </div>
        </div>
        <ServiceComp />
        <div class="container mt-5">
            <div class="row">
                <h4 class="text-center">MENU PILIHAN FAVORIT</h4>
                <hr>
            </div>
        </div>
        <MenuComp />
        <TestimonialComp />
        <div class="container mt-5">
            <div class="row">
                <h4 class="text-center">BLOG</h4>
                <p class="text-center">Update seputar resep makanan, makanan sehat dan informasi lainnya.</p>
                <hr>
            </div>
        </div>
        <BlogComp />
        <GetPromoComp />
        <FooterComp />
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
// import LoginsessionComp from '@/components/LoginsessionComp.vue'
import BannerComp from '@/components/BannerComp.vue'
import BenefitComp from '@/components/BenefitComp.vue'
import MenuComp from '@/components/MenuComp.vue'
import ServiceComp from '@/components/ServiceComp.vue'
import TestimonialComp from '@/components/TestimonialComp.vue'
import BlogComp from '@/components/BlogComp.vue'
import GetPromoComp from '@/components/GetPromoComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
    name: "MainPage",
    components: {
        HeaderComp,
        // LoginsessionComp,
        BannerComp,
        BenefitComp,
        MenuComp,
        ServiceComp,
        TestimonialComp,
        BlogComp,
        GetPromoComp,
        FooterComp,
    },
};
</script>