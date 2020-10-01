<template>
  <div>
    <div class="cursor"></div>
    <div class="cursor-follower"></div>
  </div>
</template>

<script>
import JQuery from "jquery";
let $ = JQuery;
import { TweenMax } from "gsap";
export default {
  mounted() {
    var cursor = $(".cursor"),
      follower = $(".cursor-follower");

    var posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;

    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
          css: {
            left: posX - 20,
            top: posY - 20
          }
        });

        TweenMax.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY
          }
        });
      }
    });

    $(document).on("mousemove", function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // NAV LINK

    $(".nav-project-link-hover").on("mouseenter", function() {
      cursor.addClass("active");
      follower.addClass("active");
    });

    $(".nav-project-link-hover").on("mouseleave", function() {
      cursor.removeClass("active");
      follower.removeClass("active");
    });

    // BTN PREV

    $(".btn-prev").on("mouseenter", function() {
      cursor.addClass("cursor-prev");
      follower.addClass("active");
    });

    $(".btn-prev").on("mouseleave", function() {
      cursor.removeClass("cursor-prev");
      follower.removeClass("active");
    });

    // BTN NEXT

    $(".btn-next").on("mouseenter", function() {
      cursor.addClass("cursor-next");
      follower.addClass("active");
    });

    $(".btn-next").on("mouseleave", function() {
      cursor.removeClass("cursor-next");
      follower.removeClass("active");
    });
  },
  name: "CustomCursor"
};
</script>