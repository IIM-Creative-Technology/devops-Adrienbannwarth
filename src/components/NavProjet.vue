<template>
  <div class="container">
    <CustomCursor />
    <div class="nav-projet">
      <router-link class="nav-projet-link nav-project-link-hover" to="/projet1">
        <div ref="nav1" @mouseover="hover1 = true" @mouseleave="hover1 = false">01</div>
        <span ref="navTitle1" class="nav-name">LaPetitePhoto.C</span>
      </router-link>
      <router-link class="nav-projet-link nav-project-link-hover" to="/projet2">
        <div ref="nav2" @mouseover="hover2 = true" @mouseleave="hover2 = false">02</div>
        <span ref="navTitle2" class="nav-name">Samu Social de Paris</span>
      </router-link>
      <router-link class="nav-projet-link nav-project-link-hover" to="/projet3">
        <div ref="nav3" @mouseover="hover3 = true" @mouseleave="hover3 = false">03</div>
        <span ref="navTitle3" class="nav-name">Referemdoom</span>
      </router-link>
      <router-link class="nav-projet-link nav-project-link-hover" to="/projet4">
        <div ref="nav4" @mouseover="hover4 = true" @mouseleave="hover4 = false">04</div>
        <span ref="navTitle4" class="nav-name">Portrait chinois</span>
      </router-link>
      <router-link class="nav-projet-link nav-project-link-hover" to="/projet5">
        <div ref="nav5" @mouseover="hover5 = true" @mouseleave="hover5 = false">05</div>
        <span ref="navTitle5" class="nav-name">BellyBump</span>
      </router-link>
    </div>

    <div class="container-img">
      <div class="d-none header-page projet-1" :class="{hover: hover1}"></div>
      <div class="d-none header-page projet-2" :class="{hover: hover2}"></div>
      <div class="d-none header-page projet-3" :class="{hover: hover3}"></div>
      <div class="d-none header-page projet-4" :class="{hover: hover4}"></div>
      <div class="d-none header-page projet-5" :class="{hover: hover5}"></div>
    </div>
  </div>
</template>

<script>
import CustomCursor from "./CustomCursor";
import { TimelineLite, Back } from "gsap";
// import { EventBus } from "../event-bus";

export default {
  components: {
    CustomCursor
  },
  name: "NavProjet",
  props: {
    msg: String
  },
  data() {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false
    };
  },
  mounted() {
    const {
      nav1,
      nav2,
      nav3,
      nav4,
      nav5,
      navTitle1,
      navTitle2,
      navTitle3,
      navTitle4,
      navTitle5
    } = this.$refs;
    const timeline2 = new TimelineLite({
      // paused: true
    });
    // EventBus.$emit("animation", timeline2);

    // 01
    timeline2.from(nav1, 1, {
      y: 30,
      opacity: 0,
      delay: 1,
      ease: Back.easeInOut
    });
    timeline2.from(
      navTitle1,
      1,
      {
        y: 30,
        opacity: 0,
        delay: 0.2,
        ease: Back.easeInOut
      },
      "-=1.3"
    );

    // 02
    timeline2.from(
      nav2,
      1,
      {
        y: 30,
        opacity: 0,
        delay: 0.2,
        ease: Back.easeInOut
      },
      "-=1.3"
    );
    timeline2.from(
      navTitle2,
      1,
      {
        y: 30,
        opacity: 0,
        delay: 0.3,
        ease: Back.easeInOut
      },
      "-=1.3"
    );

    // 03
    timeline2.from(
      nav3,
      1,
      {
        y: 30,
        opacity: 0,
        delay: 0.3,
        ease: Back.easeInOut
      },
      "-=1.3"
    );
    timeline2.from(
      navTitle3,
      1,
      {
        y: 30,
        opacity: 0,
        delay: 0.4,
        ease: Back.easeInOut
      },
      "-=1.3"
    );

    // 04
    timeline2.from(
      nav4,
      1,
      {
        y: 30,
        opacity: 0,
        delay: 0.4,
        ease: Back.easeInOut
      },
      "-=1.3"
    );
    timeline2.from(
      navTitle4,
      1,
      {
        y: 30,
        opacity: 0,
        delay: 0.5,
        ease: Back.easeInOut
      },
      "-=1.3"
    );

    // 05
    timeline2.from(
      nav5,
      1,
      {
        y: 30,
        opacity: 0,
        delay: 0.5,
        ease: Back.easeInOut
      },
      "-=1.3"
    );
    timeline2.from(
      navTitle5,
      1,
      {
        y: 30,
        opacity: 0,
        delay: 0.6,
        ease: Back.easeInOut
      },
      "-=1.3"
    );
  }
};
</script>
