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
  name: 'SearchPage',

  /**
   * Data of the component
   */
  data() {
    return {
      personnages: undefined as Personnage[] | undefined,
      sortedPersonnages: undefined as Personnage[] | undefined,
      error: false as boolean,
      isLoading: false as boolean,
      filters: {
        demonsSlayers: false as boolean,
        pillars: false as boolean,
        demons: false as boolean,
        upperMoons: false as boolean,
        lowerMoons: false as boolean
      }
    };
  },

  /**
   * Mounted lifecycle hook
   */
  async mounted() {
    renderPageTitle('Search Page');
    this.isLoading = true;
    this.personnages = await fetchPersonnages();
    if (this.personnages) {
      this.sortedPersonnages = this.personnages;
    }
    if (!this.personnages) {
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
    /**
     * Redirects to the personnage page
     * @param {number} id - The id of the personnage
     */
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
    },

    /**
     * Handler for the input text
     */
    inputTextHandler: function () {
      const searchInput = document.getElementById('searchInput') as HTMLInputElement;
      const searchValue = searchInput.value.toLowerCase();
      if (searchValue.length === 0) {
        this.sortedPersonnages = this.personnages;
      } else {
        if (this.sortedPersonnages) {
          this.sortedPersonnages = this.sortedPersonnages.filter((personnage) => {
            return personnage.name.toLowerCase().includes(searchValue);
          });
        } else {
          if (this.personnages) {
            this.sortedPersonnages = this.personnages.filter((personnage) => {
              return personnage.name.toLowerCase().includes(searchValue);
            });
          }
        }
      }
    },

    /**
     * Handler for the checkboxes
     * if one is checked, filters the personnages and unchecks the others
     * @param {Event} event - The event
     */
    checkBoxHandler: function (event: Event) {
      const target = event.target as HTMLInputElement;
      const value = target.value as keyof typeof this.filters;
      this.filters[value] = target.checked;
      this.sortedPersonnages = this.personnages?.filter((personnage) => {
        if (this.filters.demonsSlayers && !personnage.demon_slayer) {
          return false;
        }
        if (this.filters.pillars && !personnage.pillar) {
          return false;
        }
        if (this.filters.demons && !personnage.demon) {
          return false;
        }
        if (this.filters.upperMoons && !personnage.upper_moon) {
          return false;
        }
        if (this.filters.lowerMoons && !personnage.lower_moon) {
          return false;
        }
        return true;
      });
    },

    /**
     * Resets the filters
     */
    resetFilterHandler: function () {
      // uncheck all checkboxes
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
        (checkbox as HTMLInputElement).checked = false;
      });
      // reset input text
      const searchInput = document.getElementById('searchInput') as HTMLInputElement;
      searchInput.value = '';
      this.filters = {
        demonsSlayers: false,
        pillars: false,
        demons: false,
        upperMoons: false,
        lowerMoons: false
      };
      this.sortedPersonnages = this.personnages;
    }
  }
};
</script>

<template>
  <div class="container">
    <h1 class="text-center my-4 title-search">Search</h1>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Search for a character"
        id="searchInput"
        @change="inputTextHandler"
      />
      <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2">
          <i class="fas fa-search">Search</i>
        </span>
      </div>
    </div>
    <div class="mb-3">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="demonsSlayersCheckBox"
          value="demonsSlayers"
          @change="checkBoxHandler"
        />
        <label class="form-check-label" for="demonsSlayersCheckBox">Demons Slayers</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="pillarsCheckBox"
          value="pillars"
          @change="checkBoxHandler"
        />
        <label class="form-check-label" for="pillarsCheckBox">Pillars</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="demonsCheckBox"
          value="demons"
          @change="checkBoxHandler"
        />
        <label class="form-check-label" for="pillarsCheckBox">Demons</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="upperMoonsCheckBox"
          value="upperMoons"
          @change="checkBoxHandler"
        />
        <label class="form-check-label" for="pillarsCheckBox">Upper moons</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="lowerrMoonsCheckBox"
          value="lowerMoons"
          @change="checkBoxHandler"
        />
        <label class="form-check-label" for="pillarsCheckBox">Lower moons</label>
      </div>
      <div class="form-check-inline">
        <button class="btn btn-danger" @click="resetFilterHandler">Reset</button>
      </div>
    </div>
    <div class="row" id="cardContainer">
      <div v-if="error" class="alert alert-danger" role="alert">
        An error occurred while fetching the data.
      </div>
      <div v-else>
        <div v-if="isLoading" class="text-center my-5">
          <div class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
        <div v-else class="container">
          <div class="row">
            <div v-for="personnage in sortedPersonnages" :key="personnage.id" class="col-md-3">
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

<style>
.card-img-top {
  width: 300;
  height: 300px;
  object-fit: cover;
}
</style>
