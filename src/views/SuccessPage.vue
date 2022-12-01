<template>
    <div id="SuccessPage">
        <HeaderComp/>
        <BreadcrumbComp/>
        <LoginsessionComp/>
        <SuccessComp/>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import BreadcrumbComp from '@/components/BreadcrumbComp.vue';
import LoginsessionComp from '@/components/LoginsessionComp.vue';
import SuccessComp from '@/components/SuccessComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default{
    name :"SuccessPage",
    components:{
        HeaderComp,
        BreadcrumbComp,
        LoginsessionComp,
        SuccessComp,
        FooterComp,
    },
};
</script>