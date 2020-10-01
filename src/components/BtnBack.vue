<template>
  <router-link to="/home">
    <div ref="back" class="nav-back">Back</div>
  </router-link>
</template>

<script>
import { TimelineLite, Back } from "gsap";
export default {
  mounted() {
    const { back } = this.$refs;
    const timeline = new TimelineLite();

    timeline.from(back, 1, {
      y: 30,
      opacity: 0,
      delay: 0.9,
      ease: Back.easeInOut
    });
  }
};
</script>