<template>
    <div id="TestimonialComp">
        <div class="container mt-5" style="background-color:#d6fae8">
            <div class="row">
                <h4 class="text-center my-3">TESTIMONI DARI PELANGGAN KAMI</h4>
                <hr>
                <div class="col">
                    <div id="testimoni" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row row-cols-1 row-cols-md-2 g-2">
                                    <div class="col my-2">
                                        <div class="card border-0">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <img src="../assets/customer-2.png" class="caraousel-img-profile" alt="">
                                                </div>
                                                <div class="col-md-9 col-12">
                                                    <div class="card-body ms-3">
                                                        <p class="card-text">"Anak saya suka kue ulang tahunnya dan cemilan juga enak. Mau pesen catering ulang tahun di dcatering aja"</p>
                                                        <h6 class="card-title">Ruskaf Balka</h6>
                                                        <h6 class="card-title">Sosial Human Manager di PT. ABC</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col my-2">
                                        <div class="card border-0">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <img src="../assets/customer-1.png" class="caraousel-img-profile" alt="">
                                                </div>
                                                <div class="col-md-9 col-12">
                                                    <div class="card-body ms-3">
                                                        <p class="card-text">"Pemesanan gampang, makanannya juga enak dan teman-teman saya suka. Rekomend untuk acara kalian"</p>
                                                        <h6 class="card-title">dr. Anugerha Medca</h6>
                                                        <h6 class="card-title">Dokter di Klinik ABC</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item active">
                                <div class="row row-cols-1 row-cols-md-2 g-2">
                                    <div class="col my-2">
                                        <div class="card border-0">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <img src="../assets/customer-2.png" class="caraousel-img-profile" alt="">
                                                </div>
                                                <div class="col-md-9 col-12">
                                                    <div class="card-body ms-3">
                                                        <p class="card-text">"Sulit untuk kami membuat makanan sendiri karena kesibukan. Untungnya ada dcatering aja. Tanpa repot terus banyak bonusnya"</p>
                                                        <h6 class="card-title">Giovani Faldan</h6>
                                                        <h6 class="card-title">Kepala Keluarga</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col my-2">
                                        <div class="card border-0">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <img src="../assets/customer-1.png" class="caraousel-img-profile" alt="">
                                                </div>
                                                <div class="col-md-9 col-12">
                                                    <div class="card-body ms-3">
                                                        <p class="card-text">"Tadinya bingung nyari tempat makanan untuk acara ABC. EH di rekomendasikan teman disini. Makanannya juga enak"</p>
                                                        <h6 class="card-title">Yasitha Mudaena</h6>
                                                        <h6 class="card-title">Mahasiswi Universitas ABC</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#testimoni"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#testimoni"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestimonialComp',
};
</script>