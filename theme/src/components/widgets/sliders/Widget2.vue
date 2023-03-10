<template>
  <!--begin::Slider widget 2-->
  <div :class="widgetClasses" class="card">
    <!--begin::Body-->
    <div class="card-body pt-5">
      <!--begin::Carousel-->
      <div
        id="kt_stats_widget_9_carousel"
        class="carousel carousel-custom carousel-stretch slide"
        data-bs-ride="carousel"
        data-bs-interval="8000"
      >
        <!--begin::Nav-->
        <div class="d-flex flex-stack flex-wrap">
          <span class="text-gray-400 fw-boldest fs-4 pe-2"
            >Today’s Schedule</span
          >

          <!--begin::Carousel Indicators-->
          <ol class="p-0 m-0 carousel-indicators carousel-indicators-dots">
            <li
              data-bs-target="#kt_stats_widget_9_carousel"
              data-bs-slide-to="0"
              class="ml-1 active"
            ></li>
            <li
              data-bs-target="#kt_stats_widget_9_carousel"
              data-bs-slide-to="1"
              class="ml-1"
            ></li>
            <li
              data-bs-target="#kt_stats_widget_9_carousel"
              data-bs-slide-to="2"
              class="ml-1"
            ></li>
            <li
              data-bs-target="#kt_stats_widget_9_carousel"
              data-bs-slide-to="3"
              class="ml-1"
            ></li>
          </ol>
          <!--end::Carousel Indicators-->
        </div>
        <!--end::Nav-->

        <!--begin::Items-->
        <div class="carousel-inner pt-8">
          <!--begin::Item-->
          <div class="carousel-item active">
            <div class="carousel-wrapper">
              <!--begin::Title-->
              <div class="flex-grow-1">
                <a
                  href=""
                  class="fs-2 text-gray-800 text-hover-primary fw-boldest"
                  >UI/UX Design Updates</a
                >

                <p class="text-primary fs-1 fw-boldest pt-5 mb-0">
                  11:15AM - 12:30PM
                </p>
              </div>
              <!--end::Title-->

              <!--begin::Info-->
              <div class="d-flex flex-stack pt-7">
                <span class="text-gray-400 fs-6 fw-bold pe-2"
                  >234 E St. Broadwey NY..</span
                >

                <a
                  href="#"
                  class="
                    btn btn-light btn-sm
                    fs-7
                    btn-color-muted
                    fw-boldest
                    px-5
                  "
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_create_account"
                  >Apply</a
                >
              </div>
              <!--end::Info-->
            </div>
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="carousel-item">
            <div class="carousel-wrapper">
              <!--begin::Title-->
              <div class="flex-grow-1">
                <a
                  href=""
                  class="fs-2 text-gray-800 text-hover-primary fw-boldest"
                  >UI/UX Design Updates</a
                >

                <p class="text-primary fs-1 fw-boldest pt-5 mb-0">
                  11:15AM - 12:30PM
                </p>
              </div>
              <!--end::Title-->

              <!--begin::Info-->
              <div class="d-flex flex-stack pt-7">
                <span class="text-gray-400 fs-6 fw-bold pe-2"
                  >256 R St. Manhattan NY..</span
                >

                <a
                  href="#"
                  class="
                    btn btn-light btn-sm
                    fs-7
                    btn-color-muted
                    fw-boldest
                    px-5
                  "
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_create_account"
                  >Apply</a
                >
              </div>
              <!--end::Info-->
            </div>
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="carousel-item">
            <div class="carousel-wrapper">
              <!--begin::Title-->
              <div class="flex-grow-1">
                <a
                  href=""
                  class="fs-2 text-gray-800 text-hover-primary fw-boldest"
                  >UI/UX Design Updates</a
                >

                <p class="text-primary fs-1 fw-boldest pt-5 mb-0">
                  16:15AM - 11:20PM
                </p>
              </div>
              <!--end::Title-->

              <!--begin::Info-->
              <div class="d-flex flex-stack pt-7">
                <span class="text-gray-400 fs-6 fw-bold pe-2"
                  >745 R St. Romance DR..</span
                >

                <a
                  href="#"
                  class="
                    btn btn-light btn-sm
                    fs-7
                    btn-color-muted
                    fw-boldest
                    px-5
                  "
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_create_account"
                  >Apply</a
                >
              </div>
              <!--end::Info-->
            </div>
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="carousel-item">
            <div class="carousel-wrapper">
              <!--begin::Title-->
              <div class="flex-grow-1">
                <a
                  href=""
                  class="fs-2 text-gray-800 text-hover-primary fw-boldest"
                  >UI/UX Design Updates</a
                >

                <p class="text-primary fs-1 fw-boldest pt-5 mb-0">
                  13:15AM - 14:30PM
                </p>
              </div>
              <!--end::Title-->

              <!--begin::Info-->
              <div class="d-flex flex-stack pt-7">
                <span class="text-gray-400 fs-6 fw-bold pe-2"
                  >123 R St. Soulard NY..</span
                >

                <a
                  href="#"
                  class="
                    btn btn-light btn-sm
                    fs-7
                    btn-color-muted
                    fw-boldest
                    px-5
                  "
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_create_account"
                  >Apply</a
                >
              </div>
              <!--end::Info-->
            </div>
          </div>
          <!--end::Item-->
        </div>
        <!--end::Items-->
      </div>
      <!--end::Carousel-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Slider widget 2-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-widget-2",
  props: {
    widgetClasses: String,
  },
  components: {},
});
</script>
