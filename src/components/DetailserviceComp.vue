<template>
    <div id="DetailserviceComp">
        <div class="container bg-packet my-3">
            <div class="row">
                <div class="col">
                    <div class="row my-3 p-3">
                        <div class="col-md-10">
                            <h4>Deskripsi</h4>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat illum minima ut culpa ab,
                            laudantium laboriosam quas porro eaque doloribus?
                        </div>
                        <div class="col-md-2">
                            <img class="img-desc-wedding" src="../assets/promo-img.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container bg-packet">
            <div class="row p-3">
                <div class="col-md-6 text-start p-1">
                    <b>Paket A</b>
                </div>
                <div class="col-md-6 text-end">
                    Harga: <span class="mx-2"><b>Rp.10.000.000</b></span>
                    <router-link to="/order" class="btn btn-md btn-danger"> Pesan </router-link>
                </div>
                <hr class="my-1">
            </div>
            <div class="row text-center">
                <div class="col-lg-3 col-6">
                    <img class="img-packet-katalog" src="../assets/img-packet-katalog-1.png" alt="">
                </div>
                <div class="col-lg-3 col-6">
                    <img class="img-packet-katalog" src="../assets/img-packet-katalog-2.png" alt="">
                </div>
                <div class="col-lg-3 col-6">
                    <img class="img-packet-katalog" src="../assets/img-packet-katalog-3.png" alt="">
                </div>
                <div class="col-lg-3 col-6">
                    <img class="img-packet-katalog" src="../assets/img-packet-katalog-1.png" alt="">
                </div>
            </div>
            <div class="row justify-content-start mt-3">
                <div class="col-md-3">
                    <h6>Menu Paket:</h6>
                    <ul class="">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h6>Keterangan:</h6>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, cum.</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h6>Fasilitas:</h6>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, tempora.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container bg-packet my-3">
            <div class="row p-3">
                <div class="col-md-6 text-start p-1">
                    <b>Paket B</b>
                </div>
                <div class="col-md-6 text-end">
                    Harga: <span class="mx-2"><b>Rp.5.000.000</b></span>
                    <router-link to="/order" class="btn btn-md btn-danger"> Pesan </router-link>
                </div>
                <hr class="my-1">
            </div>
            <div class="row text-center">
                <div class="col-lg-3 col-6">
                    <img class="img-packet-katalog" src="../assets/img-packet-katalog-1.png" alt="">
                </div>
                <div class="col-lg-3 col-6">
                    <img class="img-packet-katalog" src="../assets/img-packet-katalog-2.png" alt="">
                </div>
                <div class="col-lg-3 col-6">
                    <img class="img-packet-katalog" src="../assets/img-packet-katalog-3.png" alt="">
                </div>
                <div class="col-lg-3 col-6">
                    <img class="img-packet-katalog" src="../assets/img-packet-katalog-1.png" alt="">
                </div>
            </div>
            <div class="row justify-content-start mt-3">
                <div class="col-md-3">
                    <h6>Menu Paket:</h6>
                    <ul class="">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h6>Keterangan:</h6>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, cum.</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h6>Fasilitas:</h6>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, tempora.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailserviceComp",
};
</script>