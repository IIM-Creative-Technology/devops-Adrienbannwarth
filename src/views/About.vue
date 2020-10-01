<template>
  <div class="container-about">
    <CustomCursor />
    <BtnBack />
    <div class="container-spotify flex-center">
      <img ref="spotifyContent" class="spotify" :src="require(`@/assets/img/svg_spotify.png`)" />
      <a
        href="https://open.spotify.com/playlist/78YQbRSP9ANHff1qpQdvay?si=fL2AqpXgRtWJY__ApiGXbg"
        target="_blank"
      >
        <img ref="spotifyLogo" class="spotify-logo" :src="require(`@/assets/img/spotify-logo.png`)" />
      </a>
    </div>
    <div class="header-page header-profil">
      <div class="h-v-center">
        <h1 data-scroll-speed="9" ref="titleProfile" class="h1-profil">Adrien</h1>
        <h2 ref="subtitleProfile" class="h2-profil">Front end developer</h2>
      </div>
      <Scroll />
    </div>

    <section v-scrollanimation class="p-details">
      <h2>About</h2>
      <div>
        <div :style="cursorCircle" :class="{newCursor: cursorIsHidden}" class="cursor-about"></div>Hello, I am
        <!-- <span
          @mouseover="cursorIsHidden = true"
          @mouseleave="cursorIsHidden = false"
          class="span"
        >Adrien</span> -->
        Adrien
        and currently in my third year at HETIC. At the meantime, I work as front-end developer for the company Invoxia.
        I had a similar experience at Vingt-cinq. I create solutions to make ideas better and projects matter ;)
        I code with a special interest in interactivity and design. Want to work with me? Feel free to contact me!
      </div>
    </section>
    <section class="p-details">
      <h2>Skills</h2>
      <div class="row-column">
        <p v-scrollanimation class="p-skill">Vue JS</p>
        <p v-scrollanimation class="p-skill">React JS</p>
        <p v-scrollanimation class="p-skill">React native</p>
        <p v-scrollanimation class="p-skill">GSAP</p>
        <p v-scrollanimation class="p-skill">SASS</p>
        <p v-scrollanimation class="p-skill">Wordpress</p>
        <p v-scrollanimation class="p-skill">Node JS</p>
        <p v-scrollanimation class="p-skill">Github</p>
        <p v-scrollanimation class="p-skill">SEO</p>
      </div>
    </section>

    <section class="flex">
      <h2 data-scroll-speed="7" class="col-12 title-parallax">My passion</h2>
      <br />
      <div class="container-polaroid">
        <div class="polaroid col-12">
          <Slider
            v-bind:images="
          [
         '/static/img/polaroid-1.jpg',
         '/static/img/polaroid-2.jpg',
         '/static/img/polaroid-3.jpg'
           ]"
            v-bind:texts="
          [
         'Festivals',
         'Ski',
         'Travels'
           ]"
          />
        </div>
      </div>
    </section>
    <FooterProfil />
  </div>
</template>

<script>
import BtnBack from "../components/BtnBack";
import FooterProfil from "../components/FooterProfil";
import Slider from "../components/Slider";
import CustomCursor from "../components/CustomCursor";
import { TimelineLite, Back } from "gsap";
import Scroll from "../components/Scroll";
import JQuery from "jquery";
let $ = JQuery;

export default {
  components: {
    BtnBack,
    CustomCursor,
    FooterProfil,
    Slider,
    Scroll
  },
  data() {
    return {
      cursorIsHidden: false,
      cursorIsHidden2: false,
      xPage: 0,
      yPage: 0,
      hideCursor: true,
      scrolled: 100
    };
  },

  computed() {},
  methods() {},

  mounted() {
    $.fn.moveIt = function() {
      var $window = $(window);
      var instances = [];

      $(this).each(function() {
        instances.push(new moveItItem($(this)));
      });

      window.addEventListener(
        "scroll",
        function() {
          var scrollTop = $window.scrollTop();
          instances.forEach(function(inst) {
            inst.update(scrollTop);
          });
        },
        { passive: true }
      );
    };

    var moveItItem = function(el) {
      this.el = $(el);
      this.speed = parseInt(this.el.attr("data-scroll-speed"));
    };

    moveItItem.prototype.update = function(scrollTop) {
      this.el.css(
        "transform",
        "translateY(" + -(scrollTop / this.speed) + "px)"
      );
    };

    // Initialization
    $(function() {
      $("[data-scroll-speed]").moveIt();
    });

    document.addEventListener("mousemove", this.moveCursor);
    window.addEventListener("scroll", this.scrollbar);

    const {
      titleProfile,
      subtitleProfile,
      spotifyContent,
      spotifyLogo
    } = this.$refs;
    const timeline = new TimelineLite();

    timeline.from(titleProfile, 1, {
      y: 30,
      opacity: 0,
      delay: 1.5,
      ease: Back.easeInOut
    });
    timeline.from(
      subtitleProfile,
      1,
      {
        y: 30,
        opacity: 0,
        delay: 1.5,
        ease: Back.easeInOut
      },
      "-=2"
    );
    timeline.from(
      spotifyContent,
      1,
      {
        y: 30,
        opacity: 0,
        delay: 1.5,
        ease: Back.easeInOut
      },
      "-=2"
    );
    timeline.from(
      spotifyLogo,
      1,
      {
        opacity: 0,
        delay: 1.5,
        ease: Back.easeInOut
      },
      "-=2"
    );
  }
};
</script>