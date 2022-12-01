<template>
    <div id="ConfirmComp">
        <div class="container my-3">
            <div class="row">
                <div class="col-lg-7 col-12">
                    <h5 class="mt-3">Konfirmasi Pesanan</h5>
                    <hr>
                    <div class=" bg-confirm">
                        <table class="table table-responsive table-borderless">
                            <tbody class="">
                                <tr>
                                    <td scope="row">Nama</td>
                                    <td>:</td>
                                    <td>Salim</td>
                                </tr>
                                <tr>
                                    <td scope="row">Email</td>
                                    <td>:</td>
                                    <td>salimzalvan7@gmail.com</td>
                                </tr>
                                <tr>
                                    <td scope="row">Alamat</td>
                                    <td>:</td>
                                    <td>Jalan Apel no.1</td>
                                </tr>
                                <tr>
                                    <td scope="row">No Telepon</td>
                                    <td>:</td>
                                    <td>089922194545</td>
                                </tr>
                                <tr>
                                    <td scope="row">Tanggal Pesan</td>
                                    <td>:</td>
                                    <td>13 Desember 2022</td>
                                </tr>
                                <tr>
                                    <td scope="row">Jenis Layanan</td>
                                    <td>:</td>
                                    <td>Prasmanan</td>
                                </tr>
                                <tr>
                                    <td scope="row">Jenis Katering</td>
                                    <td>:</td>
                                    <td>Katering Pernikahan</td>
                                </tr>
                                <tr>
                                    <td scope="row">Paket Katering</td>
                                    <td>:</td>
                                    <td>Paket A</td>
                                </tr>
                                <tr>
                                    <td scope="row">Lokasi Acara</td>
                                    <td>:</td>
                                    <td>Jalan Kebun Apel No.1 (Sebelah Indomaret)</td>
                                </tr>
                                <tr>
                                    <td scope="row">Tanggal Acara</td>
                                    <td>:</td>
                                    <td>25 Desember 2022</td>
                                </tr>
                                <tr>
                                    <td scope="row">Tanggal Pesan</td>
                                    <td>:</td>
                                    <td>25 Desember 2022</td>
                                </tr>
                                <tr>
                                    <td scope="row">Estimasi Jumlah Hadir</td>
                                    <td>:</td>
                                    <td>100 orang</td>
                                </tr>
                                <tr>
                                    <td scope="row">Pembayaran</td>
                                    <td>:</td>
                                    <td>Transfer Bank BSI</td>
                                </tr>
                                <tr>
                                    <td scope="row">Status Bayar</td>
                                    <td>:</td>
                                    <td>Belum Bayar</td>
                                </tr>
                                <tr>
                                    <td scope="row">Catatan Pesanan</td>
                                    <td>:</td>
                                    <td>Tidak Ada</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="col-md-6">
                            <div class="form-check ms-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Data yang saya isi sudah benar
                                </label>
                            </div>
                            <div class="mb-3">
                                <router-link to="/success" class="btn btn-md btn-order" disabled>Konfirmasi
                                </router-link>
                                <router-link to="/order" class="btn btn-md btn-order-cancel">Kembali</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-12">
                    <h5 class="mt-4">Total Harga Paket: <span><b>Rp.10.000.000</b></span></h5>
                    <div class="bg-transfer p-3">
                        <div class="row">
                            <div class="col">
                                <div>
                                    Pembayaran via transfer
                                </div>
                                <div class="">
                                    <b>Bank Syariah Indonesia</b>
                                </div>
                                <div class="">
                                    <b>011559899</b>
                                </div>
                                <div>
                                    a.n CV d Catering aja
                                </div>
                            </div>
                            <div class="col">
                                <img src="../assets/bsi.png" class="img-bank-logo" alt="">
                            </div>
                        </div>
                        <hr>
                        <div class="text-center"><b>Atau</b></div>
                        <hr>
                        <div class="row">
                            <div class="col">
                                <div>
                                    Pembayaran via transfer
                                </div>
                                <div class="">
                                    <b>E-Money</b>
                                </div>
                                <div class="">
                                    <b>011559899</b>
                                </div>
                                <div>
                                    a.n CV d Catering aja
                                </div>
                            </div>
                            <div class="col">
                                <img src="../assets/linkaja.png" class="img-bank-logo" alt="">
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
    name: "ConfirmComp",
};
</script>