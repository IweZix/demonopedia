<script lang="ts">
import { renderPageTitle } from '@/utils/render/render';

export default {
  /**
   * Name of the component
   */
  name: 'AboutPage',

  /**
   * Mounted lifecycle hook
   */
  mounted() {
    renderPageTitle('About');
  }
};
</script>

<template>
  <div class="container mt-4">
    <h1>About Demonopedia</h1>
    <p>
      Déonopedia is an exciting project aimed at bringing together all the characters from the anime
      <strong>Demon Slayer</strong> on one website. Here, you will find detailed information about
      the characters, their appearances, and their roles in the anime. This site was created with
      the goal of learning and mastering a new technology: Vue.js.
    </p>
    <h2>Why This Project?</h2>
    <p>
      As a fan of <strong>Demon Slayer</strong>, I wanted to create a place where fans can find
      detailed information about their favorite characters. This project also allowed me to dive
      into Vue.js, a technology I have wanted to learn for some time. Working on this site has
      allowed me to combine my passion for anime with my desire to acquire new web development
      skills.
    </p>
    <h2>Easter Eggs</h2>
    <p>
      Several Easter eggs are hidden throughout the site. Can you find them? 😉 <br />
      (The GitHub repo is available if you need any hints)
    </p>
    <h2>GitHub Repositories</h2>
    <p>You can find the source codes for the frontend and backend of this project on GitHub:</p>
    <ul>
      <li>
        <a href="https://github.com/IweZix/demonopedia" target="_blank">Frontend Repository</a>
      </li>
      <li>
        <a href="https://github.com/iwezix/deonopedia-backend" target="_blank"
          >Backend Repository</a
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
h1,
h2 {
  color: #2c3e50;
}
p {
  font-size: 1.1em;
  line-height: 1.6;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
a {
  color: #3498db;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
