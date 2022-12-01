<template>
    <div id="SigninPage">
        <HeaderComp/>
        <SigninComp/>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import SigninComp from '@/components/SigninComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default{
    name :"SigninPage",
    components:{
        HeaderComp,
        SigninComp,
        FooterComp,
    },
};
</script>