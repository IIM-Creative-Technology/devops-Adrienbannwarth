<template>
  <div class="container container-home">
    <router-link to="/about">
      <div ref="profile" class="nav-prolife">About</div>
    </router-link>

    <div class="loader-container">
      <div class="content-text">
        <p>Loading Loading Loading</p>
        <p>Adrien Bannwarth Adrien Bannwarth</p>
        <p>Developer front end Developer front end</p>
        <p>Loading Loading Loading</p>
        <p>Adrien Bannwarth Adrien Bannwarth</p>
        <p>Developer front end Developer front end</p>
      </div>
      <div class="content">
        <h1 class="first-name">Adrien Bannwarth</h1>
        <h1 class="job">Front end developer</h1>
      </div>
    </div>

    <NavProjet />
  </div>
</template>

<script>
import NavProjet from "@/components/NavProjet";
import { TimelineLite, Expo } from "gsap";

export default {
  name: "home",
  components: {
    NavProjet
  },

  mounted() {
    const timeline = new TimelineLite();

    timeline.from(".first-name", 0.5, {
      y: 30,
      opacity: 0,
      delay: 0.5,
      ease: Expo.easeInOut
    });
    timeline.to(".first-name", 0.5, {
      y: 30,
      opacity: 0,
      delay: 0.5,
      ease: Expo.easeInOut
    });

    timeline.from(".job", 0.5, {
      y: 30,
      opacity: 0,
      delay: 0.5,
      ease: Expo.easeInOut
    });
    timeline.to(".job", 0.5, {
      y: 30,
      opacity: 0,
      delay: 0.5,
      ease: Expo.easeInOut
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-prolife {
  color: white !important;
  mix-blend-mode: inherit;
}
</style>