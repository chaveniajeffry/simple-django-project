<template>
  <!--begin::Logo bar-->
  <div class="d-flex d-lg-none align-items-center flex-grow-1">
    <!--begin::Aside Toggle-->
    <div
      class="btn btn-icon btn-circle btn-active-light-primary ms-n2 me-1"
      id="kt_aside_toggle"
    >
      <span class="svg-icon svg-icon-2x">
        <inline-svg src="media/icons/duotune/abstract/abs015.svg" />
      </span>
    </div>
    <!--end::Aside Toggle-->

    <!--begin::Logo-->
    <router-link to="/dashboard" class="d-lg-none">
      <img alt="Logo" src="media/logos/logo-compact.svg" class="max-h-40px" />
    </router-link>
    <!--end::Logo-->
  </div>
  <!--end::Logo bar-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-tablet-and-mobile",
  components: {},
});
</script>
