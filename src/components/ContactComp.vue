<template>
    <div id="ContactComp">
        <div class="container-fluid" style="background-color:#d6fae8">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-sm-10">
                        <div class="p-3">
                            <h4 class="mb-3">Kontak</h4>
                            <div class="form-contact">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Nama lengkap</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="nama lengkap">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        placeholder="name@example.com">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Pesan</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div class="text-end">
                                    <router-link to="/" class="btn btn-sm btn-warning" >Kirim Pesan
                                    </router-link>
                                </div>
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
    name: "ContactComp",
};
</script>