<template>
    <div id="DetailservicePage">
        <HeaderComp />
        <BreadcrumbComp />
        <div class="container">
            <div class="row">
                <h4 class="mb-5">Katering Pernikahan</h4>
                <img src="../assets/img-cover-wedding.png" class="img-cover-wedding" alt="">
            </div>
        </div>
        <DetailserviceComp />
        <FooterComp />
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import BreadcrumbComp from '@/components/BreadcrumbComp.vue';
import DetailserviceComp from '@/components/DetailserviceComp.vue';
import FooterComp from '@/components/FooterComp.vue';



export default {
    name: "DetailservicePage",
    components: {
        HeaderComp,
        BreadcrumbComp,
        DetailserviceComp,
        FooterComp,
    },
};
</script>