<template>
    <div id="HomePage">
        <HeaderComp/>
        <BannerComp/>
        <BenefitComp/>
        <ServiceComp/>
        <MenuComp/>
        <TestimonialComp/>
        <BlogComp/>
        <GetPromoComp/>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import BannerComp from '@/components/BannerComp.vue'
import BenefitComp from '@/components/BenefitComp.vue'
import MenuComp from '@/components/MenuComp.vue'
import ServiceComp from '@/components/ServiceComp.vue'
import TestimonialComp from '@/components/TestimonialComp.vue'
import BlogComp from '@/components/BlogComp.vue'
import GetPromoComp from '@/components/GetPromoComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default{
    name :"HomePage",
    components:{
        HeaderComp, 
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