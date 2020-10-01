<template>
  <TemplateProject
    project_name="Samu Social de Paris"
    text_name="ssp3"
    nav_active="02"
    nav_link="nav-link-02"
    nav_next="03"
    link_next="/projet3"
    nav_prev="01"
    link_prev="/projet1"
    text_role="Front end develop"
    text_client="Samu Social de Paris"
    text_website="/"
    text_desc="The SAMU Social de Paris asked us to develop a solution to help them manage easier their visits to hotels. To do so, we created a back office. 
    It permits to manage employees, hotels and have the possibility to create visits.
    In addition to this dashboard, a companion application allows employees to schedule their visit over the week and be able to grade their visits."
    img_bg="projet-2"
    mobile_format="0"
    text_teck="React JS - CSS / SASS - Full Calendar"
  />
</template>

<script>
import TemplateProject from "./TemplateProject";
export default {
  name: "projet2",
  components: {
    TemplateProject
  },
  data() {
    return {};
  }
};
</script>