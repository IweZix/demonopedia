<script lang="ts">
import { renderPageTitle } from '@/utils/render/render';
import { fetchPersonnageById } from '@/services/personnageService';
import Personnage from '@/types/Personnage';
import router from '@/router/router';

export default {
  name: 'PersonnagePage',
  data() {
    return {
      id: null as number | null,
      personnage: null as Personnage | null,
      isLoading: false as boolean,
      error: false as boolean
    };
  },
  async mounted() {
    renderPageTitle('Personnage');
    this.isLoading = true;
    this.id = parseInt(this.$route.params.id.toString());
    try {
      const personnage = await fetchPersonnageById(this.id);
      if (personnage) {
        this.personnage = personnage;
      } else {
        router.push({
          name: 'NotFound'
        });
      }
    } catch (error) {
      this.error = true;
    }
    this.isLoading = false;
  },
  methods: {
    goBack: function () {
      this.$router.go(-1);
    }
  }
};
</script>

<template>
  <div class="container mt-5">
    <div v-if="isLoading" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-center text-danger">Error</div>
    <div v-else>
      <button class="btn btn-primary" @click="goBack">Go back</button>
      <div class="text-center">
        <h1>{{ personnage?.name }}</h1>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="text-center mb-4">
            <h2>Appearance</h2>
          </div>
          <div class="text-center">
            <img
              :src="personnage?.image"
              alt="Personnage image"
              class="img-fluid"
              height="500"
              width="500"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-4">
            <div class="text-center">
              <h2>Detail</h2>
            </div>
            <div>
              <table>
                <tr>
                  <td><strong>Demon</strong></td>
                  <td><strong>Pillar</strong></td>
                  <td><strong>Demon Slayer</strong></td>
                  <td><strong>Lower moon</strong></td>
                  <td><strong>Upper moon</strong></td>
                </tr>
                <tr>
                  <td>{{ personnage?.demon ? '✅' : '❌' }}</td>
                  <td>{{ personnage?.pillar ? '✅' : '❌' }}</td>
                  <td>{{ personnage?.demon_slayer ? '✅' : '❌' }}</td>
                  <td>{{ personnage?.lower_moon ? '✅' : '❌' }}</td>
                  <td>{{ personnage?.upper_moon ? '✅' : '❌' }}</td>
                </tr>
              </table>
            </div>
            <div class="text-center mt-4">
              <h2>Description</h2>
            </div>
            <p>{{ personnage?.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mb-4 > div > table {
  margin-left: auto;
  margin-right: auto;
}

table,
th,
td {
  border: 1px solid;
}

table td {
  padding: 10px;
  text-align: center;
}

h2 {
  text-decoration: underline;
}
</style>
