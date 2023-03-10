<template>
  <!--begin::About card-->
  <div class="card">
    <!--begin::Body-->
    <div class="card-body p-lg-17">
      <KTAbout classes="mb-18"></KTAbout>
      <KTStatistics classes="mb-18"></KTStatistics>
      <KTPublications classes="mb-16"></KTPublications>
      <KTSocialLinks></KTSocialLinks>
    </div>
    <!--end::Body-->
  </div>
  <!--end::About card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTAbout from "@/components/about-us/About.vue";
import KTStatistics from "@/components/about-us/Statistics.vue";
import KTPublications from "@/components/about-us/Publications.vue";
import KTSocialLinks from "@/components/about-us/SocialLinks.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "about-us",
  components: {
    KTAbout,
    KTStatistics,
    KTPublications,
    KTSocialLinks,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("About Us", ["Pages", "About Us"]);
    });
  },
});
</script>
