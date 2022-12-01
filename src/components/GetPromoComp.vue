<template>
    <div id="GetPromoComp">
        <div class="container-fluid" style="background-color:#d6fae8;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 text-dark">
                        <h3 class="mt-5">SPESIAL PROMO UNTUK ANDA</h3>
                        <p class="mt-3">Tidak ingin ketinggalan sesuatu ? Silahkan kirimkan email anda untuk mendapatkan
                            info dan promo menarik dari kami.
                        </p>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Kirim email anda disini.."
                                aria-label="Username" aria-describedby="basic-addon1">
                            <span class="input-group-text" id="basic-addon1"> <i
                                    class="fa-solid fa-chevron-circle-right" style="color:#46bb33;"
                                    aria-hidden="true"></i> </span>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="clearfix text-end">
                            <div class="col-md-6 float-md-start">
                                <h3 class="mt-5 ms-2">Mau pesan katering sekarang ?</h3>
                                <router-link to="/packetservice" class="btn btn-sm btn-warning mt-2 ms-2"> Pesan
                                    Sekarang
                                </router-link>
                            </div>
                            <img class="col-md-6 float-md-end my-3 me-0 img-promo" src="../assets/promo-img.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GetPromoComp',
};
</script>