<template>
  <div ref="scrollIndicator" class="scroll"></div>
</template>

<script>
import { TimelineLite, Power4 } from "gsap";
export default {
  name: "Scroll",
  data() {
    return {};
  },

  mounted() {
    const { scrollIndicator } = this.$refs;
    const timeline3 = new TimelineLite();

    timeline3.from(scrollIndicator, 1, {
      y: 30,
      opacity: 0,
      delay: 1.5,
      ease: Power4.easeInOut
    });
  }
};
</script>