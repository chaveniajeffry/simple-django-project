<template>
  <!--begin::List Widget 2-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="fw-boldest text-dark fs-2">My Agents</span>
        <span class="text-gray-400 mt-2 fw-bold fs-6"
          >More than 400+ new members</span
        >
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
        <Dropdown2></Dropdown2>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-5">
      <template v-for="(item, i) in items" :key="i">
        <!--begin::Item-->
        <div :class="`mb-${item.space}`" class="d-flex flex-stack">
          <!--begin::Section-->
          <div class="d-flex align-items-center">
            <!--begin::Symbol-->
            <div class="symbol symbol-circle symbol-40px me-4">
              <img :src="item.image" alt="" />
            </div>
            <!--end::Symbol-->

            <!--begin::Title-->
            <div class="ps-1">
              <a
                href="#"
                class="fs-6 text-gray-800 text-hover-primary fw-boldest"
                >{{ item.name }}</a
              >
              <div class="fs-7 text-gray-400 fw-bold mt-1">
                {{ item.text }}
              </div>
            </div>
            <!--end::Title-->
          </div>
          <!--end::Section-->

          <!--begin::Label-->
          <a
            href="#"
            class="btn btn-light btn-color-muted fw-boldest btn-sm px-5"
            >Details</a
          >
          <!--end::Label-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 2-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";

export default defineComponent({
  name: "kt-widget-2",
  props: {
    widgetClasses: String,
  },
  components: {
    Dropdown2,
  },
  setup() {
    const items = [
      {
        image: "media/avatars/150-3.jpg",
        name: "Anne Clarc",
        text: "HTML, CSS, Laravel",
        space: "7",
      },
      {
        image: "media/avatars/150-2.jpg",
        name: "Brad Simmons",
        text: "HTML, JS, ReactJS",
        space: "7",
      },
      {
        image: "media/avatars/150-4.jpg",
        name: "Randy Trent",
        text: "C#, ASP.NET, MS SQL",
        space: "7",
      },
      {
        image: "media/avatars/150-5.jpg",
        name: "Ricky Hunt",
        text: "PHP, Laravel, VueJS",
        space: "7",
      },
      {
        image: "media/avatars/150-6.jpg",
        name: "Jessie Clarcson",
        text: "ReactJS",
        space: "",
      },
    ];

    return {
      items,
    };
  },
});
</script>
