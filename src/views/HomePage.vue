<script lang="ts">
import { renderPageTitle } from '@/utils/render/render';
import { fetchPersonnages } from '@/services/personnageService';
import Personnage from '@/types/Personnage';
import VanillaTilt from '@/scripts/vanilla-tilt';
import router from '@/router/router';

export default {
  /**
   * Name of the component
   */
  name: 'HomePage',

  /**
   * Data of the component
   */
  data() {
    return {
      personnages: null as Personnage[] | null,
      error: false as boolean,
      isLoading: false as boolean
    };
  },

  /**
   * Mounted lifecycle hook
   */
  async mounted() {
    renderPageTitle('Home');
    this.isLoading = true;
    try {
      this.personnages = await fetchPersonnages();
      if (!this.personnages) {
        this.error = true;
      }
    } catch (error) {
      this.error = true;
    }
    this.isLoading = false;

    this.$nextTick(() => {
      const tiltElements = document.querySelectorAll('.card');
      if (tiltElements.length > 0) {
        VanillaTilt.init(tiltElements, {
          max: 25,
          speed: 400,
          glare: true,
          'max-glare': 0.5
        });
      }
    });
  },

  /**
   * Methods of the component
   * Usable in the template
   */
  methods: {
    aboutButtonHandler: function (id: number) {
      if (id === null || id < 0 || !this.personnages || id > this.personnages.length) {
        return;
      }
      router.push({
        name: 'Personnage',
        params: {
          id: id
        }
      });
    }
  }
};
</script>

<template>
  <div>
    <h1 class="text-center my-4 title-search">All Characters</h1>
    <div>
      <div v-if="error" class="alert alert-danger" role="alert">
        An error occurred while fetching the data.
      </div>
      <div v-else>
        <div v-if="isLoading" class="text-center my-5">
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
        <div v-else-if="personnages" class="container">
          <div class="row">
            <div v-for="personnage in personnages" :key="personnage.id" class="col-md-3">
              <div class="card mb-4">
                <img :src="personnage.image" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">
                    {{ personnage.name }} {{ personnage.pillar ? '♖' : '' }}
                  </h5>
                  <p class="card-apparition">
                    Season {{ personnage.apparition_season }} episode
                    {{ personnage.apparition_episode }}
                  </p>
                  <button v-on:click="aboutButtonHandler(personnage.id)" class="btn btn-primary">
                    About
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
