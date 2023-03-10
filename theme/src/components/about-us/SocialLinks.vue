<template>
  <!--begin::Card-->
  <div :class="classes" class="card bg-light text-center">
    <!--begin::Body-->
    <div class="card-body py-12">
      <!--begin::Icon-->
      <a href="#" class="mx-4">
        <img
          src="media/svg/brand-logos/facebook-4.svg"
          class="h-30px my-2"
          alt=""
        />
      </a>
      <!--end::Icon-->

      <!--begin::Icon-->
      <a href="#" class="mx-4">
        <img
          src="media/svg/brand-logos/instagram-2-1.svg"
          class="h-30px my-2"
          alt=""
        />
      </a>
      <!--end::Icon-->

      <!--begin::Icon-->
      <a href="#" class="mx-4">
        <img
          src="media/svg/brand-logos/github.svg"
          class="h-30px my-2"
          alt=""
        />
      </a>
      <!--end::Icon-->

      <!--begin::Icon-->
      <a href="#" class="mx-4">
        <img
          src="media/svg/brand-logos/behance.svg"
          class="h-30px my-2"
          alt=""
        />
      </a>
      <!--end::Icon-->

      <!--begin::Icon-->
      <a href="#" class="mx-4">
        <img
          src="media/svg/brand-logos/pinterest-p.svg"
          class="h-30px my-2"
          alt=""
        />
      </a>
      <!--end::Icon-->

      <!--begin::Icon-->
      <a href="#" class="mx-4">
        <img
          src="media/svg/brand-logos/twitter.svg"
          class="h-30px my-2"
          alt=""
        />
      </a>
      <!--end::Icon-->

      <!--begin::Icon-->
      <a href="#" class="mx-4">
        <img
          src="media/svg/brand-logos/dribbble-icon-1.svg"
          class="h-30px my-2"
          alt=""
        />
      </a>
      <!--end::Icon-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "social-links",
  props: {
    classes: String,
  },
  components: {},
});
</script>
