<template>
  <TemplateProject
    project_name="LaPetitePhoto.C"
    text_name="lapetitephotoc"
    nav_active="01"
    nav_link="nav-link-01"
    nav_next="02"
    link_next="/projet2"
    nav_prev="05"
    link_prev="/projet5"
    text_role="Front end develop"
    text_client="Clara Bourillon"
    text_website="https://lapetitephotoc.com"
    text_desc="Lapetitepho.C is the project of an amateur photographer. On this website, you can find her Portfolio presented as a showcase site. 
    She takes portraits in color, black and white but also pictures of landscapes or animals."
    img_bg="projet-1"
    mobile_format="0"
    text_teck="HTML - CSS / SASS - Javascript"
  />
</template>

<script>
import TemplateProject from "./TemplateProject";
export default {
  name: "projet1",
  components: {
    TemplateProject
  },
  data() {
    return {};
  }
};
</script>