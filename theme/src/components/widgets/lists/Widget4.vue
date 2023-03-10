<template>
  <!--begin::List Widget 4-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="fw-boldest text-dark fs-2">Folders</span>
        <span class="text-gray-400 mt-2 fw-bold fs-6">32 Active Folders</span>
      </h3>

      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
          type="button"
          class="
            btn btn-sm btn-icon btn-icon-primary btn-active-light-primary
            me-n3
          "
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/general/gen024.svg" />
          </span>
        </button>
        <Dropdown3></Dropdown3>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-1">
      <template v-for="(item, i) in items" :key="i">
        <!--begin::Item-->
        <div
          :class="`mb-${item.space}`"
          class="d-flex flex-stack item-border-hover px-3 py-2 ms-n4"
        >
          <!--begin::Section-->
          <div class="d-flex align-items-center">
            <!--begin::Symbol-->
            <div class="symbol symbol-40px symbol-circle me-4">
              <span :class="`symbol-label bg-light-${item.color}`">
                <span
                  :class="`svg-icon-${item.color}`"
                  class="svg-icon svg-icon-1"
                >
                  <inline-svg :src="item.icon" />
                </span>
              </span>
            </div>
            <!--end::Symbol-->

            <!--begin::Title-->
            <div class="ps-1 mb-1">
              <a
                href="#"
                class="fs-5 text-gray-800 text-hover-primary fw-boldest"
                >{{ item.title }}</a
              >
              <div class="text-gray-400 fw-bold">
                {{ item.description }}
              </div>
            </div>
            <!--end::Title-->
          </div>
          <!--end::Section-->

          <!--begin::Label-->
          <span class="badge badge-light rounded-pill fs-7 fw-boldest"
            >{{ item.number }} files</span
          >
          <!--end::Label-->
        </div>
        <!--end::Item-->
      </template>

      <!--begin::Alert-->
      <div
        class="
          rounded
          border border-primary
          bg-light-primary
          border-dashed
          px-6
          py-5
        "
      >
        <a href="#" class="link-primary fw-bolder fs-6 me-1"
          >Intive New .NET Collaborators</a
        >
        <span class="text-gray-800 fw-bold fs-6"
          >to creating great outstanding business to business .jsp modular class
          outstanding scripts</span
        >
      </div>
      <!--end::Alert-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 4-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "kt-widget-4",
  props: {
    widgetClasses: String,
  },
  components: {
    Dropdown3,
  },
  setup() {
    const items = [
      {
        title: "Project Alice",
        description: "Phase 1 development",
        number: "43",
        space: "3",
        icon: "media/icons/duotune/technology/teh008.svg",
        color: "primary",
      },
      {
        title: "HR Confidential",
        description: "Confidential staff documents",
        number: "24",
        space: "3",
        icon: "media/icons/duotune/general/gen044.svg",
        color: "danger",
      },
      {
        title: "Project Rider",
        description: "New frontend admin theme",
        number: "75",
        space: "3",
        icon: "media/icons/duotune/files/fil023.svg",
        color: "success",
      },
      {
        title: "Banner Assets",
        description: "Collection of banner images",
        number: "16",
        space: "3",
        icon: "media/icons/duotune/general/gen006.svg",
        color: "info",
      },
      {
        title: "Icon Assets",
        description: "Collection of SVG icons",
        number: "64",
        space: "6",
        icon: "media/icons/duotune/art/art002.svg",
        color: "warning",
      },
    ];

    return {
      items,
    };
  },
});
</script>
