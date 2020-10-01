<template>
  <div class="slider">
    <!-- <transition-group name="" tag="div"> -->
    <div v-for="i in [currentIndex]" :key="i">
      <img :src="currentImg" />
    </div>

    <div class="btn-prev" @click="prev"></div>
    <div class="btn-next" @click="next"></div>
    <!-- </transition-group> -->

    <div class="details-slider">
      <p class="count-slider">{{(currentIndex % this.images.length) +1}} / {{this.images.length}}</p>
      <div v-for="i in [currentIndex]" :key="i">
        <p class="text-slider">{{currentText}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["images", "texts"],
  name: "Slider",
  data() {
    return {
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    // startSlide: function() {
    //   this.timer = setInterval(this.next, 4000);
    // },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },

    currentText: function() {
      return this.texts[Math.abs(this.currentIndex) % this.texts.length];
    }
  }
};
</script>