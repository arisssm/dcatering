<template>
    <div id="BannerComp">
        <div class="container-fluid bg-banner mt-2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 text-start banner-sp">
                        <h4 class="">Ciptakan suasana harmonis acara anda dengan pelayanan katering dari kami</h4>
                        <p class="">Kami berusaha memberikan pelayanan yang terbaik untuk acara anda</p>
                        <router-link to="/packetservice" class="btn btn-sm btn-banner text-decoration-none">Ayo Pesan</router-link>
                    </div>
                    <div class="col-lg-8 text-end">
                        <img class="cover-img mb-4" src="../assets/cover-img.png" alt="Cover-Banner-dCateringaja">
                    </div>    
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'BannerComp',
};
</script>
  