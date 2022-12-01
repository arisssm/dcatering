<template>
    <div id="OrderComp">
        <div class="container my-3">
            <h4 class="mb-5">Pesan Katering</h4>
            <div class="form-order">
                <div class="row">
                    <div class="col-lg-3 col-6">
                        <img class="img-packet-order" src="../assets/img-packet-katalog-1.png" alt="img-order-1">
                    </div>
                    <div class="col-lg-3 col-6">
                        <img class="img-packet-order" src="../assets/img-packet-katalog-2.png" alt="img-order-2">
                    </div>
                    <div class="col-lg-3 col-6">
                        <img class="img-packet-order" src="../assets/img-packet-katalog-3.png" alt="img-order-3">
                    </div>
                    <div class="col-lg-3 col-6">
                        <img class="img-packet-order" src="../assets/img-packet-katalog-1.png" alt="img-order-4">
                    </div>
                </div>
                <div class="text-center mt-3">
                    <h6>Silahkan isi formulir pemesanan</h6>
                </div>
                <hr>
                <form class="row g-2" action="">
                    <div class="col-md-6 mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nama</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Salim Zalvan"
                            readonly>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Jenis Layanan</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Prasmanan"
                            readonly>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            placeholder="salimzalvan7@mail.co.id" readonly>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Paket Katering</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Paket A"
                            readonly>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Alamat</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            placeholder="Jalan Apel no.1" readonly>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Jenis Katering</label>
                        <select class="form-select" aria-label="Default select example" disabled>
                            <option selected>Pernikahan</option>
                            <option value="1">Pernikahan</option>
                            <option value="2">Acara</option>
                            <option value="3">Ulang Tahun</option>
                        </select>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="exampleFormControlInput1" class="form-label">No Telepon</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            placeholder="ex: 08xxxxxxxx" readonly>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Pilihan Pembayaran</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>--Pilih--</option>
                            <option value="1">Bank Syariah Indonesia</option>
                            <option value="2">Link Aja</option>
                        </select>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Tanggal Pesan</label>
                        <input type="date" class="form-control" id="exampleFormControlInput1">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Status Pembayaran</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>--Pilih--</option>
                            <option value="1">Belum Bayar</option>
                            <option value="2" disabled>Sudah Bayar</option>
                        </select>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Tanggal Acara</label>
                        <input type="date" class="form-control" id="exampleFormControlInput1">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Estimasi Jumlah Hadir</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Lokasi Acara</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Catatan Pesanan</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="col-md-6">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                            <label class="form-check-label" for="flexCheckChecked">
                                Data yang saya isi sudah benar
                            </label>
                        </div>
                        <div>
                            <router-link to="/confirmation" class="btn btn-sm btn-order">Pesan</router-link>
                            <router-link to="/detailservice" class="btn btn-sm btn-warning">Kembali
                            </router-link>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "OrderComp",
};
</script>