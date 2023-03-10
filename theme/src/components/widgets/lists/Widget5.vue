<template>
  <!--begin::List Widget 5-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder text-dark">Trends</span>

        <span class="text-muted mt-1 fw-bold fs-7">Latest tech trends</span>
      </h3>

      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
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
    <div class="card-body pt-5">
      <template v-for="(item, i) in items" :key="i">
        <!--begin::Item-->
        <div
          :class="['mb-7' && i !== item.length - 1]"
          class="d-flex align-items-sm-center"
        >
          <!--begin::Symbol-->
          <div class="symbol symbol-circle symbol-50px me-5">
            <span class="symbol-label">
              <img :src="item.image" class="h-50 align-self-center" alt="" />
            </span>
          </div>
          <!--end::Symbol-->

          <!--begin::Section-->
          <div class="d-flex align-items-center flex-row-fluid flex-wrap">
            <div class="flex-grow-1 me-2">
              <a
                href="#"
                class="text-gray-800 text-hover-primary fs-6 fw-bolder"
                >{{ item.title }}</a
              >

              <span class="text-muted fw-bold d-block fs-7">{{
                item.text
              }}</span>
            </div>

            <span class="badge badge-light fw-bolder my-2">{{
              item.badge
            }}</span>
          </div>
          <!--end::Section-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 5-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "kt-widget-5",
  props: {
    widgetClasses: String,
  },
  components: {
    Dropdown3,
  },
  setup() {
    const items = [
      {
        image: "media/svg/brand-logos/plurk.svg",
        title: "Top Authors",
        text: "Mark, Rowling, Esther",
        badge: "+82$",
      },
      {
        image: "media/svg/brand-logos/telegram.svg",
        title: "Popular Authors",
        text: "Randy, Steve, Mike",
        badge: "+280$",
      },
      {
        image: "media/svg/brand-logos/vimeo.svg",
        title: "New Users",
        text: "John, Pat, Jimmy",
        badge: "+4500$",
      },
      {
        image: "media/svg/brand-logos/bebo.svg",
        title: "Active Customers",
        text: "Mark, Rowling, Esther",
        badge: "+4500$",
      },
      {
        image: "media/svg/brand-logos/kickstarter.svg",
        title: "Bestseller Theme",
        text: "Disco, Retro, Sports",
        badge: "+4500$",
        space: "",
      },
      {
        image: "media/svg/brand-logos/fox-hub.svg",
        title: "Fox Broker App",
        text: "Finance, Corporate, Apps",
        badge: "+4500$",
      },
    ];

    return {
      items,
    };
  },
});
</script>
