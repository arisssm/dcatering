<template>
    <div id="BreadcrumbComp">
        <div class="container my-5">
                <ol class="breadcrumb text-start">
                    <li><router-link to="/" ><i style="color:#46bb33;" class="fa fa-home me-2" aria-hidden="true"></i></router-link></li>
                    <li class="breadcrumb-item"><router-link to="/" class="text-decoration-none" style="color:#000;">Beranda</router-link></li>
                    <li class="breadcrumb-item"><router-link to="/" class="text-decoration-none" style="color:#000;">Sub Page</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Halaman saat ini</li>
                </ol> 
        </div>
    </div>
</template>

<script>
export default{
    name:"BreadcrumbComp",
};
</script>