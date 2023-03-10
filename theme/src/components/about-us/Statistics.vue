<template>
  <!--begin::Statistics-->
  <div :class="classes" class="card bg-light">
    <!--begin::Body-->
    <div class="card-body py-15">
      <!--begin::Wrapper-->
      <div class="d-flex flex-center">
        <!--begin::Items-->
        <div class="d-flex justify-content-between mb-10 mx-auto w-xl-900px">
          <!--begin::Item-->
          <div class="octagon d-flex flex-center h-200px w-200px bg-white mx-2">
            <!--begin::Content-->
            <div class="text-center">
              <!--begin::Symbol-->
              <span class="svg-icon svg-icon-2tx svg-icon-primary">
                <inline-svg src="media/icons/duotune/general/gen025.svg" />
              </span>
              <!--end::Symbol-->

              <!--begin::Text-->
              <div class="mt-1">
                <!--begin::Animation-->
                <div
                  class="
                    fs-lg-2hx fs-2x
                    fw-bolder
                    text-gray-800
                    d-flex
                    align-items-center
                  "
                >
                  <div class="min-w-70px">
                    <CountTo
                      :startVal="0"
                      :endVal="700"
                      suffix=" +"
                      :duration="3000"
                    ></CountTo>
                  </div>
                </div>
                <!--end::Animation-->

                <!--begin::Label-->
                <span class="text-gray-600 fw-bold fs-5 lh-0">Businesses</span>
                <!--end::Label-->
              </div>
              <!--end::Text-->
            </div>
            <!--end::Content-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="octagon d-flex flex-center h-200px w-200px bg-white mx-2">
            <!--begin::Content-->
            <div class="text-center">
              <!--begin::Symbol-->
              <span class="svg-icon svg-icon-2tx svg-icon-success">
                <inline-svg src="media/icons/duotune/graphs/gra008.svg" />
              </span>
              <!--end::Symbol-->

              <!--begin::Text-->
              <div class="mt-1">
                <!--begin::Animation-->
                <div
                  class="
                    fs-lg-2hx fs-2x
                    fw-bolder
                    text-gray-800
                    d-flex
                    align-items-center
                  "
                >
                  <div class="min-w-50px">
                    <CountTo
                      :startVal="0"
                      :endVal="80"
                      suffix=" K+"
                      :duration="3000"
                    ></CountTo>
                  </div>
                </div>
                <!--end::Animation-->

                <!--begin::Label-->
                <span class="text-gray-600 fw-bold fs-5 lh-0"
                  >Quick Reports</span
                >
                <!--end::Label-->
              </div>
              <!--end::Text-->
            </div>
            <!--end::Content-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="octagon d-flex flex-center h-200px w-200px bg-white mx-2">
            <!--begin::Content-->
            <div class="text-center">
              <!--begin::Symbol-->
              <span class="svg-icon svg-icon-2tx svg-icon-info">
                <inline-svg src="media/icons/duotune/ecommerce/ecm002.svg" />
              </span>
              <!--end::Symbol-->

              <!--begin::Text-->
              <div class="mt-1">
                <!--begin::Animation-->
                <div
                  class="
                    fs-lg-2hx fs-2x
                    fw-bolder
                    text-gray-800
                    d-flex
                    align-items-center
                  "
                >
                  <div class="min-w-50px">
                    <div class="min-w-70px">
                      <CountTo
                        :startVal="0"
                        :endVal="35"
                        suffix=" M+"
                        :duration="3000"
                      ></CountTo>
                    </div>
                  </div>
                </div>
                <!--end::Animation-->

                <!--begin::Label-->
                <span class="text-gray-600 fw-bold fs-5 lh-0">Payments</span>
                <!--end::Label-->
              </div>
              <!--end::Text-->
            </div>
            <!--end::Content-->
          </div>
          <!--end::Item-->
        </div>
        <!--end::Items-->
      </div>
      <!--end::Wrapper-->

      <!--begin::Testimonial-->
      <div class="fs-2 fw-bold text-muted text-center mb-3">
        <span class="fs-1 lh-1 text-gray-700">“</span>

        When you care about your topic, you’ll write about it in a <br /><span
          class="text-gray-700 me-1"
          >more powerful</span
        >, emotionally expressive way

        <span class="fs-1 lh-1 text-gray-700">“</span>
      </div>
      <!--end::Testimonial-->

      <!--begin::Author-->
      <div class="fs-2 fw-bold text-muted text-center">
        <a href="#" class="link-primary fs-4 fw-bolder">Marcus Levy</a>
        <span class="fs-4 fw-bolder text-gray-600">, KeenThemes CEO</span>
      </div>
      <!--end::Author-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Statistics-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CountTo } from "vue3-count-to";

export default defineComponent({
  name: "statistics",
  props: {
    classes: String,
  },
  components: {
    CountTo,
  },
});
</script>
