<template>
  <footer class="footer text-center text-lg-start text-muted">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">Demonopedia</h5>
          <p>Your favorite encyclopedia about demons.</p>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0 muted">
          <h5 class="text-uppercase">Link</h5>
          <ul class="list-unstyled mb-0">
            <li>
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li>
              <router-link to="/search" class="nav-link">Search</router-link>
            </li>
            <li>
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0 muted">
          <h5 class="text-uppercase">project</h5>
          <ul class="list-unstyled mb-0">
            <li>
              <a href="https://github.com/IweZix/demonopedia" class="">Frontend</a>
            </li>
            <li>
              <a href="https://github.com/IweZix/demonopedia/api" class="">API</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center p-3 footer-year" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2024-2025 Demonopédia
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'FooterComponent',
  mounted() {}
};
</script>

<style scoped>
nav {
  background-color: #f8f9fa;
  padding: 10px;
}

.footer {
  background-color: #f8f9fa;
  margin-top: 5%;
}
</style>
