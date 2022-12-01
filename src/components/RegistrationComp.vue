<template>
    <div id="RegistrationComp">
        <div class="container my-3" style="background-color: #d6fae8">
            <div class="row justify-content-center">
                <!-- <div class="col-lg-5">

                </div> -->
                <div class="col-lg-7 col-md-10 col-sm-12">
                    <div class="p-3">
                        <h4 class="mb-3">Daftar Akun</h4>
                        <div class="form-regist">
                            <form class="row g-3">
                                <div class="col-md-4">
                                    <label for="validationDefault01" class="form-label">First name</label>
                                    <input type="text" class="form-control" id="validationDefault01" placeholder="Salim"
                                        required>
                                </div>
                                <div class="col-md-4">
                                    <label for="validationDefault02" class="form-label">Last name</label>
                                    <input type="text" class="form-control" id="validationDefault02"
                                        placeholder="Zalvan" required>
                                </div>
                                <div class="col-md-12">
                                    <label for="validationDefault03" class="form-label">Email Aktif</label>
                                    <input type="text" class="form-control" id="validationDefault03"
                                        placeholder="email@example.com" required>
                                </div>
                                <div class="col-md-12">
                                    <label for="validationDefault03" class="form-label">Alamat Rumah</label>
                                    <input type="text" class="form-control" id="validationDefault03"
                                        placeholder="Jl.Ir.H.Juanda No.10" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="validationDefault04" class="form-label">Jenis Kelamin</label>
                                    <select class="form-select" id="validationDefault04" required>
                                        <option selected disabled value="">Pilih</option>
                                        <option>Laki-Laki</option>
                                        <option>Perempuan</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="validationDefault03" class="form-label">No Telepon</label>
                                    <input type="text" class="form-control" id="validationDefault03"
                                        placeholder="+6289977553310" required>
                                </div>
                                <div class="col-md-12">
                                    <label for="formFile" class="form-label">Upload Identitas</label>
                                    <input class="form-control" type="file" id="formFile">
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2"
                                            required>
                                        <label class="form-check-label" for="invalidCheck2">
                                            saya setuju kesepakatan dan syarat
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <router-link to="/signin" class="btn btn-sm btn-warning" type="submit">Daftar</router-link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'RegistrationComp',
};
</script>
  