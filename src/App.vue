<template>
  <div id="app">
    <router-link to="/">
      <img class="logo" src="/static/logo.png" alt="logo" />
    </router-link>
    <!-- <div class="nav-lang">
      <input type="radio" id="one" value="fr" v-model="$i18n.locale" />
      <label for="one">FR</label>
      <br />
      <input type="radio" id="two" value="en" v-model="$i18n.locale" />
      <label for="two">EN</label>
    </div>-->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <div class="border border-top"></div>
    <div class="border border-bottom"></div>
    <div class="border border-left"></div>
    <div class="border border-right"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      // animationState: false
    };
  },

  mounted() {},

  methods() {
    // if (this.animationState !== true) {
    // }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";

#app {
  text-align: center;
}
</style>
