<template>
    <div id="FooterComp">
        <div class="container-sm">
            <div class="row">
                <div class="col-lg-6 text-start">
                    <img src="../assets/logo-brand.png" class="brand-footer my-2" alt="dCateringaja-logo">
                    <h6 class="mb-2"><span style="color:#46bb33">dCateringaja</span> adalah platform berbasis website
                        untuk pemesanan katering milik CV d Catering. Kami melayani pemesanan makanan siap saji untuk
                        acara anda baik acara kecil atau besar.</h6>
                    <div>
                        <i class="fa fa-home me-1" style="color:#46bb33" aria-hidden="true"></i> Jl. Kenangan Indah Blok
                        A10 Kenten Palembang
                    </div>
                    <div>
                        <i class="fa fa-phone me-1" style="color:#46bb33" aria-hidden="true"></i> 0877-8810-8840
                    </div>
                    <div>
                        <i class="fa fa-envelope me-1" style="color:#46bb33" aria-hidden="true"></i>
                        dcateringaja@gmail.com
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-4 text-start">
                    <h6 class="mt-5 mb-2">Tentang Kami</h6>
                    <router-link to="/aboutus" class="mb-2 text-decoration-none text-dark">
                        <p>dCateringaja</p>
                    </router-link>
                    <router-link to="/galery" class="mb-2 text-decoration-none text-dark">
                        <p>Galeri</p>
                    </router-link>
                    <router-link to="/menucatering" class="mb-2 text-decoration-none text-dark">
                        <p>Menu Katering</p>
                    </router-link>
                </div>
                <div class="col-lg-2 col-md-4 col-4 text-start">
                    <h6 class="mt-5 mb-2">Service</h6>
                    <router-link to="/packetservice" class="mb-2 text-decoration-none text-dark">
                        <p>Katering Pernikahan</p>
                    </router-link>
                    <router-link to="/packetservice" class="mb-2 text-decoration-none text-dark">
                        <p>Katering Ulang Tahun</p>
                    </router-link>
                    <router-link to="/packetservice" class="mb-2 text-decoration-none text-dark">
                        <p>Katering Acara</p>
                    </router-link>
                </div>
                <div class="col-lg-2 col-md-4 col-4 text-start">
                    <h6 class="mt-5 mb-2">Hubungi Kami</h6>
                    <router-link to="/contact" class="mb-2 text-decoration-none text-dark">
                        <p>Kontak</p>
                    </router-link>
                    <router-link to="/contact" class="mb-2 text-decoration-none text-dark">
                        <p>Email</p>
                    </router-link>
                    <router-link to="/contact" class="mb-2 text-decoration-none text-dark">
                        <p>Lokasi</p>
                    </router-link>
                </div>
            </div>
            <div class="row my-5">
                <div class="col-lg-6 col-md-6 col-7 text-start">
                    <div clas="">All right reserve <i class="fa fa-copyright" style="color:#46bb33"
                            aria-hidden="true"></i> 2022. Made by @arismul
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-5 text-end">
                    <div class="">Follow kami di
                        <img src="../assets/ig.png" class="footer-socmed mx-1" alt="">
                        <img src="../assets/tw.png" class="footer-socmed mx-1" alt="">
                        <img src="../assets/yt.png" class="footer-socmed mx-1" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterComp',
};
</script>