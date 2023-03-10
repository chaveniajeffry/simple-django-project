<template>
  <!--begin::Aside-->
  <div
    id="kt_aside"
    class="aside bg-white"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_toggle"
  >
    <!--begin::Brand-->
    <div class="aside-logo flex-column-auto pt-9 pb-7 px-9" id="kt_aside_logo">
      <!--begin::Logo-->
      <a href="#">
        <img
          alt="Logo"
          src="media/logos/logo-default.svg"
          class="max-h-50px logo-default"
        />
        <img
          alt="Logo"
          src="media/logos/logo-compact.svg"
          class="max-h-50px logo-minimize"
        />
      </a>
      <!--end::Logo-->
    </div>
    <!--end::Brand-->

    <!--begin::Aside menu-->
    <div class="aside-menu flex-column-fluid px-3 px-lg-6">
      <KTMenu></KTMenu>
    </div>
    <!--end::Aside menu-->

    <!--begin::Footer-->
    <div class="aside-footer flex-column-auto px-6 pb-5" id="kt_aside_footer">
      <a
        href="https://keenthemes.com/products/rider-vue-pro"
        class="btn btn-light-primary w-100"
      >
        Upgrade To Pro
      </a>
    </div>
    <!--end::Footer-->
  </div>
  <!--end::Aside-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { DrawerComponent } from "@/assets/ts/components";
import KTMenu from "@/layout/aside/Menu.vue";
import { isDocPage, themeName } from "@/core/helpers/documentation";
import { asideTheme } from "@/core/helpers/config";

export default defineComponent({
  name: "KTAside",
  components: {
    KTMenu,
  },
  props: {
    defaultLogo: String,
    compactLogo: String,
  },
  setup() {
    const { t } = useI18n();

    onMounted(() => {
      DrawerComponent.reinitialization();
    });

    return {
      isDocPage,
      asideTheme,
      t,
      themeName,
    };
  },
});
</script>
