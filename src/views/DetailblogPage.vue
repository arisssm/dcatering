<template>
    <div id="DetailblogPage">
        <HeaderComp/>
        <BreadcrumbComp/>
        <DetailblogComp/>
        <div class="container mt-3">
            <div class="text-start">
                <h5>Artikel Lainnya</h5>
            </div>
        </div>
        <BlogComp/>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import BreadcrumbComp from '@/components/BreadcrumbComp.vue';
import DetailblogComp from '@/components/DetailblogComp.vue';
import BlogComp from '@/components/BlogComp.vue';
import FooterComp from '@/components/FooterComp.vue';



export default{
    name :"DetailblogPage",
    components:{
        HeaderComp,
        BreadcrumbComp,
        DetailblogComp,
        BlogComp,
        FooterComp,
    },
};
</script>