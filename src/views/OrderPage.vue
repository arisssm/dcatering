<template>
    <div id="Orderpage">
        <HeaderComp/>
        <LoginsessionComp/>
        <BreadcrumbComp/>
        <OrderComp/>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import BreadcrumbComp from '@/components/BreadcrumbComp.vue';
import LoginsessionComp from '@/components/LoginsessionComp.vue';
import OrderComp from '@/components/OrderComp.vue';
import FooterComp from '@/components/FooterComp.vue';



export default{
    name :"OrderPage",
    components:{
        HeaderComp,
        BreadcrumbComp,
        LoginsessionComp,
        OrderComp,
        FooterComp,
    },
};
</script>