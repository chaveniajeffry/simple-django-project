<template>
  <!--begin::Slider Widget 1-->
  <div :class="widgetClasses" class="card">
    <!--begin::Body-->
    <div class="card-body pt-5">
      <div
        id="kt_stats_widget_8_carousel"
        class="carousel carousel-custom carousel-stretch slide"
        data-bs-ride="carousel"
        data-bs-interval="8000"
      >
        <!--begin::Heading-->
        <div class="d-flex flex-stack flex-wrap">
          <span class="fs-4 text-gray-400 fw-boldest pe-2">Announcements</span>

          <!--begin::Carousel Indicators-->
          <ol class="p-0 m-0 carousel-indicators carousel-indicators-dots">
            <li
              data-bs-target="#kt_stats_widget_8_carousel"
              data-bs-slide-to="0"
              class="ms-1 active"
            ></li>
            <li
              data-bs-target="#kt_stats_widget_8_carousel"
              data-bs-slide-to="1"
              class="ms-1"
            ></li>
            <li
              data-bs-target="#kt_stats_widget_8_carousel"
              data-bs-slide-to="2"
              class="ms-1"
            ></li>
            <li
              data-bs-target="#kt_stats_widget_8_carousel"
              data-bs-slide-to="3"
              class="ms-1"
            ></li>
          </ol>
          <!--end::Carousel Indicators-->
        </div>
        <!--end::Heading-->

        <!--begin::Carousel-->
        <div class="carousel-inner pt-6">
          <!--begin::Item-->
          <div class="carousel-item active">
            <div class="carousel-wrapper">
              <div
                class="d-flex flex-column justify-content-between flex-grow-1"
              >
                <a
                  href=""
                  class="fs-2 text-gray-800 text-hover-primary fw-boldest"
                  >Rider Admin Launch Day</a
                >

                <p class="text-gray-600 fs-6 fw-bold pt-4 mb-0">
                  To start a blog, think of a topic about and first brainstorm
                  ways to write details
                </p>
              </div>

              <!--begin::Info-->
              <div class="d-flex flex-stack pt-8">
                <span class="badge badge-light-primary fs-7 fw-boldest me-2"
                  >OCT 05, 10</span
                >

                <a
                  href="#"
                  class="
                    btn btn-light btn-sm btn-color-muted
                    fs-7
                    fw-boldest
                    px-5
                  "
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_create_account"
                  >Join</a
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
              <div
                class="d-flex flex-column justify-content-between flex-grow-1"
              >
                <a
                  href=""
                  class="fs-2 text-gray-800 text-hover-primary fw-boldest"
                  >Rider Dashboard Launch</a
                >

                <p class="text-gray-600 fs-6 fw-bold pt-4 mb-0">
                  To start a blog, think of a topic about and first brainstorm
                  ways to write details
                </p>
              </div>
              <!--end::Title-->

              <!--begin::Info-->
              <div class="d-flex flex-stack pt-8">
                <span class="badge badge-light-primary fs-7 fw-boldest me-2"
                  >DEC 03, 20</span
                >

                <a
                  href="#"
                  class="
                    btn btn-light btn-sm btn-color-muted
                    fs-7
                    fw-boldest
                    px-5
                  "
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_create_account"
                  >Join</a
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
              <div
                class="d-flex flex-column justify-content-between flex-grow-1"
              >
                <a
                  href=""
                  class="fs-2 text-gray-800 text-hover-primary fw-boldest"
                  >Reached 50,000 Sales</a
                >

                <p class="text-gray-600 fs-6 fw-bold pt-4 mb-0">
                  To start a blog, think of a topic about and first brainstorm
                  ways to write details
                </p>
              </div>
              <!--end::Title-->

              <!--begin::Info-->
              <div class="d-flex flex-stack pt-8">
                <span class="badge badge-light-primary fs-7 fw-boldest me-2"
                  >NOV 06, 23</span
                >

                <a
                  href="#"
                  class="
                    btn btn-light btn-sm btn-color-muted
                    fs-7
                    fw-boldest
                    px-5
                  "
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_create_account"
                  >Join</a
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
              <div
                class="d-flex flex-column justify-content-between flex-grow-1"
              >
                <a
                  href=""
                  class="fs-2 text-gray-800 text-hover-primary fw-boldest"
                  >Reached 50,000 Sales</a
                >

                <p class="text-gray-600 fs-6 fw-bold pt-4 mb-0">
                  To start a blog, think of a topic about and first brainstorm
                  ways to write details
                </p>
              </div>
              <!--end::Title-->

              <!--begin::Info-->
              <div class="d-flex flex-stack pt-8">
                <span class="badge badge-light-primary fs-7 fw-boldest me-2"
                  >AUG 01, 13</span
                >

                <a
                  href="#"
                  class="
                    btn btn-light btn-sm btn-color-muted
                    fs-7
                    fw-boldest
                    px-5
                  "
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_create_account"
                  >Join</a
                >
              </div>
              <!--end::Info-->
            </div>
          </div>
          <!--end::Item-->
        </div>
        <!--end::Carousel-->
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Slider Widget 1-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-widget-1",
  props: {
    widgetClasses: String,
  },
  components: {},
});
</script>
