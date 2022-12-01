<template>
    <div id="RegistPage">
        <HeaderComp/>
        <RegistrationComp/>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import RegistrationComp from '@/components/RegistrationComp.vue';
import FooterComp from '@/components/FooterComp.vue';



export default{
    name :"RegistPage",
    components:{
        HeaderComp,
        RegistrationComp,
        FooterComp,
    },
};
</script>