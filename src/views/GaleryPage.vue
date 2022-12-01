<template>
    <div id="GaleryPage">
        <HeaderComp/>
        <BreadcrumbComp/>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h4>Galeri Kegiatan</h4>
                </div>
            </div>
        </div>
        <GaleryComp/>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import BreadcrumbComp from '@/components/BreadcrumbComp.vue';
import GaleryComp from '@/components/GaleryComp.vue';
import FooterComp from '@/components/FooterComp.vue';



export default{
    name :"GaleryPage",
    components:{
        HeaderComp,
        BreadcrumbComp,
        GaleryComp,
        FooterComp,
    },
};
</script>