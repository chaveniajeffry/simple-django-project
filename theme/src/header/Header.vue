<template>
  <!--begin::Header-->
  <div
    id="kt_header"
    class="header"
    data-kt-sticky="true"
    data-kt-sticky-name="header"
    data-kt-sticky-offset="{default: '200px', lg: '300px'}"
    style="animation-duration: 0.3s"
  >
    <!--begin::Container-->
    <div
      :class="{
        'container-fluid': headerWidthFluid,
        container: !headerWidthFluid,
      }"
      class="d-flex align-items-stretch justify-content-between"
      id="kt_header_container"
    >
      <KTPageTitle :title="pageTitle" :breadcrumbs="breadcrumbs"></KTPageTitle>

      <KTTabletAndMobileLogo></KTTabletAndMobileLogo>

      <KTTopbar></KTTopbar>
    </div>
    <!--end::Container-->
  </div>
  <!--end::Header-->
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import KTTopbar from "@/layout/header/Topbar.vue";
import KTTabletAndMobileLogo from "@/layout/header/TabletAndMobileLogo.vue";
import KTPageTitle from "@/layout/header/PageTitle.vue";
import { headerWidthFluid } from "@/core/helpers/config";
import { StickyComponent } from "@/assets/ts/components";
import { useStore } from "vuex";

export default defineComponent({
  name: "KTHeader",
  components: {
    KTTopbar,
    KTPageTitle,
    KTTabletAndMobileLogo,
  },
  setup() {
    const store = useStore();

    const pageTitle = computed(() => {
      return store.getters.pageTitle;
    });

    const breadcrumbs = computed(() => {
      return store.getters.pageBreadcrumbPath;
    });

    onMounted(() => {
      StickyComponent.bootstrap();
    });

    return {
      headerWidthFluid,
      pageTitle,
      breadcrumbs,
    };
  },
});
</script>
