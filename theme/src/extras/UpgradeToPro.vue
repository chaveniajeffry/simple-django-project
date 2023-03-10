<template>
  <!--begin::Exolore drawer toggle-->
  <button
    id="kt_explore_toggle"
    class="
      explore-toggle
      btn btn-sm
      explore-btn-toggle
      shadow-sm
      position-fixed
      fw-bolder
      zindex-2
      top-50
      px-8
      mt-10
      end-0
      transform-90
      fs-5
      rounded-top-0
    "
    title="Purchase"
    data-bs-toggle="tooltip"
    data-bs-placement="left"
    data-bs-dismiss="click"
    data-bs-trigger="hover"
  >
    <span id="kt_explore_toggle_label"> Upgrade To Pro </span>
  </button>
  <!--end::Exolore drawer toggle-->

  <!--begin::Exolore drawer-->
  <div
    id="kt_explore"
    class="explore bg-white"
    data-kt-drawer="true"
    data-kt-drawer-name="explore"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '440px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_explore_toggle"
    data-kt-drawer-close="#kt_explore_close"
  >
    <!--begin::Card-->
    <div class="card shadow-none w-100">
      <!--begin::Header-->
      <div class="card-header" id="kt_explore_header">
        <h5 class="card-title fw-bold text-gray-600">
          Upgrade To {{ fullName }}
        </h5>

        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon explore-btn-dismiss me-n5"
            id="kt_explore_close"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body" id="kt_explore_body">
        <!--begin::Content-->
        <div
          id="kt_explore_scroll"
          class="scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_explore_body"
          data-kt-scroll-dependencies="#kt_explore_header, #kt_explore_footer"
          data-kt-scroll-offset="5px"
        >
          <div class="mb-5">
            <!--begin::Comparision-->
            <table
              class="
                table table-row-dashed table-row-gray-300
                align-middle
                fs-6
                fw-bold
                text-gray-800
                gs-0
                gy-3
              "
            >
              <tbody>
                <tr class="border-bottom-0">
                  <th class="fw-bolder text-dark fs-3">Pro Version Benefits</th>
                  <th class="text-center">
                    <span class="bg-light py-2 px-4 fw-bold fs-6 rounded"
                      >Free</span
                    >
                  </th>
                  <th class="text-center">
                    <span class="bg-light py-2 px-4 fw-bold fs-6 rounded"
                      >Pro</span
                    >
                  </th>
                </tr>
                <tr>
                  <td>UI Elements</td>
                  <td class="text-center">20</td>
                  <td class="text-center">100</td>
                </tr>
                <tr>
                  <td>In-house Components</td>
                  <td class="text-center">20</td>
                  <td class="text-center">40</td>
                </tr>
                <tr>
                  <td>Crafted Pages</td>
                  <td class="text-center">5</td>
                  <td class="text-center">20</td>
                </tr>
                <tr>
                  <td>Complete Documentation</td>
                  <td class="text-center">
                    <span class="svg-icon svg-icon-2 explore-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </td>
                  <td class="text-center">
                    <span class="svg-icon svg-icon-2 explore-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Product Support</td>
                  <td class="text-center">
                    <span class="svg-icon svg-icon-2 explore-icon-danger">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </td>
                  <td class="text-center">
                    <span class="svg-icon svg-icon-2 explore-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Layout Builder</td>
                  <td class="text-center">
                    <span class="svg-icon svg-icon-2 explore-icon-danger">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </td>
                  <td class="text-center">
                    <span class="svg-icon svg-icon-2 explore-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Email Templates</td>
                  <td class="text-center">
                    <span class="svg-icon svg-icon-2 explore-icon-danger">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </td>
                  <td class="text-center">
                    <span class="svg-icon svg-icon-2 explore-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Chat App</td>
                  <td class="text-center">
                    <span class="svg-icon svg-icon-2 explore-icon-danger">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </td>
                  <td class="text-center">
                    <span class="svg-icon svg-icon-2 explore-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Subscriptions App</td>
                  <td class="text-center">
                    <span class="svg-icon svg-icon-2 explore-icon-danger">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </td>
                  <td class="text-center">
                    <span class="svg-icon svg-icon-2 explore-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Source Vectors</td>
                  <td class="text-center">
                    <span class="svg-icon svg-icon-2 explore-icon-danger">
                      <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
                    </span>
                  </td>
                  <td class="text-center">
                    <span class="svg-icon svg-icon-2 explore-icon-success">
                      <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <!--end::Comparision-->
          </div>
          <a
            href="https://keenthemes.com/products/rider-vue-pro"
            class="btn btn-lg explore-btn-primary w-100"
            >Upgrade to <span class="fw-bolder ms-1">Rider HTML Pro</span></a
          >
        </div>
        <!--end::Content-->
      </div>
      <!--end::Body-->

      <!--begin::Footer-->
      <div class="card-footer py-5 text-center" id="kt_explore_footer">
        <a
          href="https://keenthemes.com/products/rider-vue-free"
          class="btn btn-lg explore-btn-secondary w-100"
          >Download <span class="fw-bolder ms-1">{{ fullName }}</span></a
        >
      </div>
      <!--begin::Footer-->
    </div>
    <!--end::Card-->
  </div>
  <!--end::Exolore drawer-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fullName } from "@/core/helpers/documentation";

export default defineComponent({
  name: "kt-upgrade-to-pro",
  setup() {
    return {
      fullName,
    };
  },
});
</script>
