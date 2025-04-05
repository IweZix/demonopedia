<script lang="ts">
import song from '@/assets/sounds/song.mp3';

export default {
  name: 'NavbarComponent',
  mounted() {
    const demonopediaLogo = document.getElementById('demonopediaLogo') as HTMLElement;
    let nbClicks: number = 0;
    demonopediaLogo.addEventListener('click', () => {
      nbClicks++;
      if (nbClicks === 5) {
        const audioElement = document.querySelector('audio') as HTMLAudioElement;
        if (audioElement) {
          audioElement.remove();
        } else {
          handleEastereEgg();
        }
        nbClicks = 0;
      }
    });

    const darkModeToggle = document.getElementById('darkModeToggle') as HTMLInputElement;
    darkModeToggle.addEventListener('change', (): void => {
      // Toggle dark mode
    });
  },

  methods: {
    darkModeHandler: function (event: Event): void {
      const darkModeToggle = event.target as HTMLInputElement;
      if (darkModeToggle.checked) {
        alert('This feature is not implemented yet');
      } else {
        alert('This feature is not implemented yet');
      }
    }
  }
};

/**
 * Handle the easter egg when the Demonopedia logo is clicked 5 times
 */
const handleEastereEgg = (): void => {
  const audioElement = document.createElement('audio') as HTMLAudioElement;
  audioElement.setAttribute('src', song);
  audioElement.setAttribute('autoplay', 'autoplay');
  audioElement.setAttribute('loop', 'loop');
  audioElement.setAttribute('volume', '0.1');
  document.body.appendChild(audioElement);
};
</script>

<template>
  <div class="p-4" id="navbarWrapper">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand nav-link" id="demonopediaLogo"
          >Demonopedia</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/search" class="nav-link">Search</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="darkModeToggle"
              @change="darkModeHandler"
            />
            <label class="form-check-label" for="darkModeToggle">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav {
  background-color: #f8f9fa;
  padding: 10px;
}
</style>
