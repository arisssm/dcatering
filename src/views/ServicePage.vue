<template>
    <div id="ServicePage">
        <HeaderComp/>
        <BreadcrumbComp/>
        <div class="container">
            <h3 class="my-3">Paket Prasmanan</h3>
            <div class="row">
                <div class="col">
                    <ServiceComp/>
                </div>
            </div>
        </div>
        <OrdermetodeComp/>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import BreadcrumbComp from '@/components/BreadcrumbComp.vue';
import ServiceComp from '@/components/ServiceComp.vue';
import OrdermetodeComp from '@/components/OrdermetodeComp.vue';
import FooterComp from '@/components/FooterComp.vue';



export default{
    name :"MenuPage",
    components:{
        HeaderComp,
        BreadcrumbComp,
        ServiceComp,
        OrdermetodeComp,
        FooterComp,
    },
};
</script>