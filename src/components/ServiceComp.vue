<template>
    <div id="ServiceComp">
        <div class="container-fluid bg-service">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-12">
                        <div class="card card-serv my-3">
                            <img src="../assets/wedding.png" class="card-img-top service-img" alt="Wedding Catering">
                            <div class="card-body">
                                <h6 class="card-title text-center">Katering Pernikahan</h6>
                                <hr>
                                <p>Paket katering pernikahan cocok untuk anda dengan konsep menu higenis dan terjangkau. Yang bisa anda dapatkan di layanan ini:</p>
                                <div class="card-text text-start p-1">
                                    <i class="fa fa-check-circle" style="color:#56fc4a;" aria-hidden="true"></i>
                                    Prasmanan lengkap dengan dekorasi
                                </div>
                                <div class="card-text text-start p-1">
                                    <i class="fa fa-check-circle" style="color:#56fc4a;" aria-hidden="true"></i>
                                    Bonus Menu Spesial
                                </div>
                                <div class="card-text text-start p-1">
                                    <i class="fa fa-check-circle" style="color:#56fc4a;" aria-hidden="true"></i>
                                    Bonus Minuman dan Eskrim
                                </div>
                            </div>
                            <div class="text-end mt-0 mb-2 me-2">
                                <router-link to="/detailwedding" class="btn btn-sm btn-warning" style="color:#fff">
                                    Pesan Sekarang
                                    <i class="fa fa-chevron-right" style="color:#fff" aria-hidden="true"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-12">
                        <div class="card card-serv my-3">
                            <img src="../assets/acara.png" class="card-img-top service-img" alt="Wedding Catering">
                            <div class="card-body">
                                <h6 class="card-title text-center">Katering Acara</h6>
                                <hr>
                                <p>Paket Katering Acara dibuat khusus untuk melayani acara formal dan non formal dan bukan untuk acara pernikahan. Yang bisa anda dapatkan di layanan ini:</p>
                                <div class="card-text text-start p-1">
                                    <i class="fa fa-check-circle" style="color:#56fc4a;" aria-hidden="true"></i>
                                    Paket lengkap
                                </div>
                                <div class="card-text text-start p-1">
                                    <i class="fa fa-check-circle" style="color:#56fc4a;" aria-hidden="true"></i>
                                    Bisa Custom isi Menu
                                </div>
                                <div class="card-text text-start p-1">
                                    <i class="fa fa-check-circle" style="color:#56fc4a;" aria-hidden="true"></i>
                                    Harga terjangkau
                                </div>
                            </div>
                            <div class="text-end mt-0 mb-2 me-2">
                                <router-link to="/detailevent" class="btn btn-sm btn-warning" style="color:#fff">
                                    Pesan Sekarang
                                    <i class="fa fa-chevron-right" style="color:#fff" aria-hidden="true"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-12">
                        <div class="card card-serv my-3">
                            <img src="../assets/birthday.png" class="card-img-top service-img" alt="Wedding Catering">
                            <div class="card-body">
                                <h6 class="card-title text-center">Katering Ulang Tahun</h6>
                                <hr>
                                <p>Kami juga menyediakan paket ulang tahun, khusus untuk anda lengkap dekorasi ulang tahun. Yang bisa anda dapatkan di layanan ini:</p>
                                <div class="card-text text-start p-1">
                                    <i class="fa fa-check-circle" style="color:#56fc4a;" aria-hidden="true"></i>
                                    Paket Menu Kue Ulang Tahun
                                </div>
                                <div class="card-text text-start p-1">
                                    <i class="fa fa-check-circle" style="color:#56fc4a;" aria-hidden="true"></i>
                                    Paket Nasi bonus cemilan
                                </div>
                                <div class="card-text text-start p-1">
                                    <i class="fa fa-check-circle" style="color:#56fc4a;" aria-hidden="true"></i>
                                    Hadiah Menarik
                                </div>
                            </div>
                            <div class="text-end mt-0 mb-2 me-2">
                                <router-link to="/detailbirthday" class="btn btn-sm btn-warning" style="color:#fff">
                                    Pesan Sekarang
                                    <i class="fa fa-chevron-right" style="color:#fff" aria-hidden="true"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServiceComp',
};
</script>