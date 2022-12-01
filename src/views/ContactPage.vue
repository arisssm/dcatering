<template>
    <div id="ContactPage">
        <HeaderComp/>
        <ContactComp/>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import ContactComp from '@/components/ContactComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default{
    name :"ContactPage",
    components:{
        HeaderComp,
        ContactComp,
        FooterComp,
    },
};
</script>