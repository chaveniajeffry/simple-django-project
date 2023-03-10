<template>
  <!--begin::Publications post-->
  <div :class="classes">
    <!--begin::Overlay-->
    <a class="d-block overlay mb-4">
      <!--begin::Image-->
      <div
        class="
          overlay-wrapper
          bgi-no-repeat bgi-position-center bgi-size-cover
          card-rounded
          min-h-175px
        "
        :style="`background-image:url('${image}')`"
      ></div>
      <!--end::Image-->

      <!--begin::Action-->
      <div class="overlay-layer bg-dark card-rounded bg-opacity-25">
        <i class="bi bi-eye-fill fs-2x text-white"></i>
      </div>
      <!--end::Action-->
    </a>
    <!--end::Overlay-->

    <!--begin::Body-->
    <div class="m-0">
      <!--begin::Title-->
      <a
        href="#"
        class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base"
      >
        {{ title }}
      </a>
      <!--end::Title-->

      <!--begin::Text-->
      <div class="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">
        {{ text }}
      </div>
      <!--end::Text-->

      <!--begin::Content-->
      <div class="fs-6 fw-bolder">
        <!--begin::Author-->
        <a href="#" class="text-gray-700 text-hover-primary">{{ name }}</a>
        <!--end::Author-->

        <!--begin::Date-->
        <span class="text-muted">{{ " " + info }}</span>
        <!--end::Date-->
      </div>
      <!--end::Content-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Publications post-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-",
  props: {
    classes: String,
    image: String,
    title: String,
    text: String,
    name: String,
    info: String,
  },
  components: {},
});
</script>
