<script lang="ts">
import Personnage from '@/types/Personnage';
import router from '@/router/router';

export default {
  /**
   * Name of the component
   */
  name: 'CardComponent',
  props: {
    personnage: {
      type: Personnage,
      required: true
    }
  },

  /**
   * Methods of the component
   * Usable in the template
   */
  methods: {
    aboutButtonHandler: function (id: number) {
      if (id === null || id < 0) {
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
  <div class="col-md-3">
    <div class="card mb-4">
      <img :src="personnage.image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ personnage.name }} {{ personnage.pillar ? '♖' : '' }}</h5>
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
</template>

<style scoped></style>
