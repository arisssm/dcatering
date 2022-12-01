<template>
    <div id="DetaileventPage">
        <HeaderComp />
        <BreadcrumbComp />
        <div class="container">
            <div class="row">
                <h4 class="mb-5">Katering Acara</h4>
                <img src="../assets/img-cover-event.png" class="img-cover-event" alt="">
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
    name: "DetaileventPage",
    components: {
        HeaderComp,
        BreadcrumbComp,
        DetailserviceComp,
        FooterComp,
    },
};
</script>