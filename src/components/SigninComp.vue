<template>
    <div id="SigninComp">
        <div class="container" style="background-color:#d6fae8;">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md col-12">
                    <div class="p-3">
                        <h4 class="mb-3">Sign In</h4>
                        <div class="form-signin">
                                <form>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1"
                                            placeholder="emailL@example.com">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1"
                                            placeholder="*******">
                                    </div>
                                    <div class="">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch"
                                                id="flexSwitchCheckDefault">
                                            <label class="form-check-label" for="flexSwitchCheckDefault">ini adalah
                                                saya</label>
                                        </div>
                                        <router-link to="/packetservice" class="btn btn-warning my-2">
                                            Masuk
                                        </router-link>
                                    </div>
                                </form>
                        </div>
                        <div class="mt-3">
                            Jika belum punya akun, silahkan daftar <span style="color:#fff">
                                <router-link to="/registration" class="text-decoration-none">Disini</router-link>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-7">

                </div> -->
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SigninComp',
};
</script>
  