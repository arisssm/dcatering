<template>
    <div id="MenuPage">
        <HeaderComp/>
        <BreadcrumbComp/>
        <div class="container">
            <h3 class="my-5">Menu Katering</h3>
            <h5><i class="fa fa-cutlery" aria-hidden="true" style="color:#46bb33;"></i> Menu Prasmanan</h5>
            <MenuComp/>
            <hr>
            <h5><i class="fa fa-cutlery" aria-hidden="true" style="color:#46bb33;"></i> Menu Seafood</h5>
            <MenuComp/>
            <hr>
            <h5><i class="fa fa-cutlery" aria-hidden="true" style="color:#46bb33;"></i> Menu Paket Nasi</h5>
            <MenuComp/>
            <hr>
            <h5><i class="fa fa-cutlery" aria-hidden="true" style="color:#46bb33;"></i> Menu Kue Cemilan</h5>
            <MenuComp/>
            <hr>
            <h5><i class="fa fa-coffee" aria-hidden="true" style="color:#46bb33;"></i> Menu Minuman</h5>
            <MenuComp/>
        </div>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import BreadcrumbComp from '@/components/BreadcrumbComp.vue';
import MenuComp from '@/components/MenuComp.vue';
import FooterComp from '@/components/FooterComp.vue';



export default{
    name :"MenuPage",
    components:{
        HeaderComp,
        BreadcrumbComp,
        MenuComp,
        FooterComp,
    },
};
</script>