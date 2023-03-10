<template>
  <!--begin::List Widget 1-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-5">
      <!--begin::Heading-->
      <h3 class="card-title align-items-start flex-column">
        <span class="fw-boldest text-dark fs-2">My Competitors</span>
        <span class="text-gray-400 mt-2 fw-bold fs-6"
          >More than 400+ new members</span
        >
      </h3>
      <!--end::Heading-->

      <!--begin::Toolbar-->
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
        <Dropdown1></Dropdown1>
        <!--end::Menu-->
      </div>
      <!--end::Toolbar-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-5">
      <template v-for="(item, i) in items" :key="i">
        <!--begin::Item-->
        <div :class="`mb-${item.space}`" class="d-flex">
          <!--begin::Symbol-->
          <div class="symbol symbol-60px symbol-2by3 me-4">
            <img :src="item.image" class="mw-100" alt="" />
          </div>
          <!--end::Symbol-->

          <!--begin::Section-->
          <div
            class="
              d-flex
              align-items-center
              flex-wrap flex-grow-1
              mt-n2 mt-lg-n1
            "
          >
            <!--begin::Title-->
            <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
              <a
                href="#"
                class="fs-5 text-gray-800 text-hover-primary fw-boldest"
                >{{ item.title }}</a
              >

              <span class="text-gray-400 fw-bold fs-7 my-1">{{
                item.description
              }}</span>

              <span class="text-gray-400 fw-bold fs-7">
                By:
                <a href="#" class="text-primary fw-bold">{{ item.text }}</a>
              </span>
            </div>
            <!--end::Title-->

            <!--begin::Info-->
            <div class="text-end py-lg-0 py-2">
              <span class="text-gray-800 fw-boldest fs-3">{{
                item.number
              }}</span>

              <span class="text-gray-400 fs-7 fw-bold d-block">Sales</span>
            </div>
            <!--end::Info-->
          </div>
          <!--end::Section-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 1-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";

export default defineComponent({
  name: "kt-widget-1",
  props: {
    widgetClasses: String,
  },
  components: {
    Dropdown1,
  },
  setup() {
    const items = [
      {
        image: "media/stock/600x400/img-17.jpg",
        title: "Cup & Green",
        description: "Study highway types",
        text: "CoreAd",
        number: "24,900",
        space: "6",
      },
      {
        image: "media/stock/600x400/img-10.jpg",
        title: "Yellow Hearts",
        description: "Study highway types",
        text: "KeenThemes",
        number: "70,380",
        space: "6",
      },
      {
        image: "media/stock/600x400/img-1.jpg",
        title: "Nike & Blue",
        description: "Study highway types",
        text: "Invision Inc.",
        number: "7,200",
        space: "6",
      },
      {
        image: "media/stock/600x400/img-9.jpg",
        title: "Red Boots",
        description: "Study highway types",
        text: "Figma Studio",
        number: "36,450",
        space: "",
      },
    ];

    return {
      items,
    };
  },
});
</script>
