<template>
  <!-- <div class="scroll-section" ref="scrollSections"> -->
  <div>
    <div class="container-projet">
      <CustomCursor />
      <BtnBack />
      <header data-scroll-speed="5" class="header-projet" :class="img_bg">
        <Scroll />
        <a class="nav-projet-link" :class="nav_link">{{nav_active}}</a>
      </header>
      <router-link class="nav-next" :to="link_next">{{nav_next}}</router-link>
      <router-link class="nav-prev" :to="link_prev">{{nav_prev}}</router-link>

      <div class="bg-white">
        <h2 data-scroll-speed="7" class="col-12 title-parallax title-parallax-01">{{project_name}}</h2>

        <section class="container-details-projet">
          <div class="flex">
            <div class="col-4 pd-20">
              <p class="title-desc">Role</p>
              <p class="p-desc">{{text_role}}</p>
              <br />
              <p class="title-desc">Client</p>
              <p class="p-desc">{{text_client}}</p>
              <br />
              <p class="title-desc">Website</p>
              <p class="p-desc">{{text_website}}</p>
              <br />
              <p class="title-desc">Tech</p>
              <p class="p-desc">{{text_teck}}</p>
            </div>
            <div class="col-4 pd-20">
              <p class="p-desc">{{text_desc}}</p>
            </div>

            <div
              v-scrollanimation
              class="col-12"
              v-bind:class="`${mobile_format == 1 ? 'box-mobile' : 'box'}`"
            >
              <img :src="require(`@/assets/img/${text_name}-1.jpg`)" :alt="text_name" />
              <div class="overlay"></div>
            </div>

            <div
              v-scrollanimation
              class="col-12"
              v-bind:class="`${mobile_format == 1 ? 'box-mobile' : 'box'}`"
            >
              <img :src="require(`@/assets/img/${text_name}-2.jpg`)" :alt="text_name" />
              <div class="overlay"></div>
            </div>

            <div
              v-scrollanimation
              class="col-12"
              v-bind:class="`${mobile_format == 1 ? 'box-mobile' : 'box'}`"
            >
              <img :src="require(`@/assets/img/${text_name}-3.jpg`)" :alt="text_name" />
              <div class="overlay"></div>
            </div>
            <!-- 
            <div
              v-scrollanimation
              class="col-12"
              v-bind:class="`${mobile_format = true ? 'box-mobile' : 'box'}`"
            >
              <img :src="require(`@/assets/img/${text_name}-4.jpg`)" :alt="text_name" />
              <div class="overlay"></div>
            </div>-->
          </div>
        </section>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import BtnBack from "../components/BtnBack";
import Footer from "../components/FooterProjet";
import CustomCursor from "../components/CustomCursor";
import Scroll from "../components/Scroll";
import JQuery from "jquery";
let $ = JQuery;
import { TimelineMax, Power4 } from "gsap";
// import locomotiveScroll from "locomotive-scroll";
/* eslint-disable no-unused-vars */

export default {
  name: "TemplateProject",
  props: [
    "project_name",
    "text_name",
    "nav_active",
    "nav_link",
    "nav_next",
    "link_next",
    "nav_prev",
    "link_prev",
    "text_role",
    "text_client",
    "text_website",
    "text_desc",
    "img_bg",
    "mobile_format",
    "text_teck"
  ],
  components: {
    BtnBack,
    Footer,
    CustomCursor,
    Scroll
  },
  data() {
    return {
      // scrollIns: null
    };
  },

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
    // const _self = this;
    // this.$nextTick(function() {
    //   _self.initLocoScroll();
    // });
    var animateIn = new TimelineMax();
    animateIn.fromTo(
      ".overlay",
      2,
      {
        skewX: 30,
        scale: 1.5
      },
      {
        skewX: 0,
        xPercent: 100,
        transformOrigin: "0% 100%",
        ease: Power4.easeOut
      }
    );
  },
  methods: {
    // initLocoScroll() {
    //   const _self = this;
    //   this.scroll = new locomotiveScroll({
    //     el: _self.$refs["scrollSections"],
    //     smooth: true,
    //     smoothMobile: true,
    //     getDirection: true
    //   });
    // }
  }
};
</script>