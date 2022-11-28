<template>
  <div id="HeaderComp">
    <nav class="navbar navbar-expand-sm">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img class="logo-brand" src="../assets/logo-brand.png" alt="">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Beranda</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Layanan Katering
              </a>
              <ul class="dropdown-menu">
                <li><router-link to="/packetservice" class="dropdown-item">Paket Prasmanan</router-link></li>
                <li><router-link to="/menucatering" class="dropdown-item">Menu Katering</router-link></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/galery" class="nav-link">Galeri</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/blog" class="nav-link">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/aboutus" class="nav-link">Tentang Kami</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Kontak</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/signin" class="btn btn-sm mt-1" style="color:#fff; background-color: #46bb33;"> Masuk <i
                  class="fa fa-sign-in" aria-hidden="true"></i></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
};
</script>
