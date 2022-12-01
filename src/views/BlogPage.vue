<template>
    <div id="BlogPage">
        <HeaderComp/>
        <BreadcrumbComp/>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h4 class="my-3">Artikel Blog</h4>
                </div>
            </div>
        </div>
        <ArticleblogComp/>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import BreadcrumbComp from '@/components/BreadcrumbComp.vue';
import ArticleblogComp from '@/components/ArticleblogComp.vue';
import FooterComp from '@/components/FooterComp.vue';



export default{
    name :"BlogPage",
    components:{
        HeaderComp,
        BreadcrumbComp,
        ArticleblogComp,
        FooterComp,
    },
};
</script>