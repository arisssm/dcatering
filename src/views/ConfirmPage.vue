<template>
    <div id="ConfirmPage">
        <HeaderComp/>
        <LoginsessionComp/>
        <BreadcrumbComp/>
        <ConfirmComp/>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import BreadcrumbComp from '@/components/BreadcrumbComp.vue';
import LoginsessionComp from '@/components/LoginsessionComp.vue';
import ConfirmComp from '@/components/ConfirmComp.vue';
import FooterComp from '@/components/FooterComp.vue';



export default{
    name :"ConfirmPage",
    components:{
        HeaderComp,
        BreadcrumbComp,
        LoginsessionComp,
        ConfirmComp,
        FooterComp,
    },
};
</script>