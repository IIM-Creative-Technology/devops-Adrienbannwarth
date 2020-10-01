<template>
  <TemplateProject
    project_name="Portrait Chinois"
    text_name="portrait_chinois"
    nav_active="04"
    nav_link="nav-link-04"
    nav_next="05"
    link_next="/projet5"
    nav_prev="03"
    link_prev="/projet3"
    text_role="Front end develop"
    text_client="/"
    text_website="http://portraitchinois.adrienbannwarth.com"
    text_desc="The concept of the Chinese portrait is particularly simple. 
    It consists in detecting certain personality traits or identifying tastes or preferences through a questionnaire entirely based on identifying yourself to objects, 
    elements or people. If you wish to discover my world, I invite you to do so."
    img_bg="projet-4"
    mobile_format="0"
    text_teck="HTML - CSS - javascript"
  />
</template>

<script>
import TemplateProject from "./TemplateProject";
export default {
  name: "projet4",
  components: {
    TemplateProject
  },
  data() {
    return {};
  }
};
</script>