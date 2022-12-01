<template>
    <div id="AboutusPage">
        <HeaderComp />
        <BreadcrumbComp />
        <div class="container">
            <h4 class="my-3">Tentang Kami</h4>
            <div class="row">
                <div class="col">
                    <div class="mb-2">
                        <img src="../assets/img-2-about-us.png" class="img-aboutus" alt="">
                    </div>
                </div>
            </div>
        </div>
        <AboutusComp />
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="my-1">
                        <img src="../assets/img-1-about-us.png" class="img-aboutus" alt="">
                    </div>
                </div>
            </div>
        </div>
        <FooterComp />
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import BreadcrumbComp from '@/components/BreadcrumbComp.vue';
import AboutusComp from '@/components/AboutusComp.vue';
import FooterComp from '@/components/FooterComp.vue';



export default {
    name: "AboutusPage",
    components: {
        HeaderComp,
        BreadcrumbComp,
        AboutusComp,
        FooterComp,
    },
};
</script>