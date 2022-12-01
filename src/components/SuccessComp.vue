<template>
    <div id="SuccessComp">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12 text-start">
                    <h3 style="margin-top: 100px;">"Terima kasih sudah melakukan pemesanan. Tunggu tim kami menghubungi anda."</h3>
                    <label for="">Pesanan anda dengan nomor <span><b>00101131222001</b></span> sudah dibuat</label>
                </div>
                <div class="col-lg-6 col-12">
                    <img src="../assets/success-img.png" class="img-success" alt="">
                </div>
            </div>
            <hr>
            <div class="row text-center mb-5">
                <div>Jika ada masukan dan saran silahkan hubungi kami atau kirim 
                    <span>
                        <router-link to="/contact" class="text-decoration-none" style="color:#46bb33">pesan disini</router-link>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SuccessComp",
};
</script>