<template>
  <!--begin::Team-->
  <div :class="classes">
    <!--begin::Heading-->
    <div class="text-center mb-12">
      <!--begin::Title-->
      <h3 class="fs-2hx text-dark mb-5">Our Great Team</h3>
      <!--end::Title-->

      <!--begin::Sub-title-->
      <div class="fs-5 text-muted fw-bold">
        It’s no doubt that when a development takes longer to complete,
        additional costs to<br />
        integrate and test each extra feature creeps up and haunts most of us.
      </div>
      <!--end::Sub-title--->
    </div>
    <!--end::Heading-->

    <!--begin::Slider-->
    <div class="tns tns-default mb-10">
      <!--begin::Wrapper-->
      <div
        data-tns="true"
        data-tns-loop="true"
        data-tns-swipe-angle="false"
        data-tns-speed="2000"
        data-tns-autoplay="true"
        data-tns-autoplay-timeout="18000"
        data-tns-controls="true"
        data-tns-nav="false"
        data-tns-items="1"
        data-tns-center="false"
        data-tns-dots="false"
        data-tns-prev-button="#kt_team_slider_prev"
        data-tns-next-button="#kt_team_slider_next"
        data-tns-responsive="{1200: {items: 3}, 992: {items: 2}}"
      >
        <template v-for="(item, i) in items" :key="i">
          <!--begin::Item-->
          <div class="text-center">
            <!--begin::Photo-->
            <div
              class="
                octagon
                mx-auto
                mb-5
                d-flex
                w-200px
                h-200px
                bgi-no-repeat bgi-size-contain bgi-position-center
              "
              :style="`background-image:url('${item.photo}')`"
            ></div>
            <!--end::Photo-->

            <!--begin::Person-->
            <div class="mb-0">
              <!--begin::Name-->
              <a href="#" class="text-dark fw-bolder text-hover-primary fs-3">{{
                item.name
              }}</a>
              <!--end::Name-->

              <!--begin::Position-->
              <div class="text-muted fs-6 fw-bold mt-1">
                {{ item.position }}
              </div>
              <!--begin::Position-->
            </div>
            <!--end::Person-->
          </div>
          <!--end::Item-->
        </template>
      </div>
      <!--end::Wrapper-->

      <!--begin::Button-->
      <button
        class="btn btn-icon btn-active-color-primary"
        id="kt_team_slider_prev"
      >
        <span class="svg-icon svg-icon-3x">
          <inline-svg src="media/icons/duotune/arrows/arr074.svg" />
        </span>
      </button>
      <!--end::Button-->

      <!--begin::Button-->
      <button
        class="btn btn-icon btn-active-color-primary"
        id="kt_team_slider_next"
      >
        <span class="svg-icon svg-icon-3x">
          <inline-svg src="media/icons/duotune/arrows/arr071.svg" />
        </span>
      </button>
      <!--end::Button-->
    </div>
    <!--end::Items-->
  </div>
  <!--end::Team-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "team",
  props: {
    classes: String,
  },
  components: {},
  setup() {
    const items = [
      {
        photo: "media/avatars/150-2.jpg",
        name: "Paul Miles",
        position: "Development Lead",
      },
      {
        photo: "media/avatars/150-3.jpg",
        name: "Melisa Marcus",
        position: "Creative Director",
      },
      {
        photo: "media/avatars/150-4.jpg",
        name: "David Nilson",
        position: "Python Expert",
      },

      {
        photo: "media/avatars/150-5.jpg",
        name: "Anne Clarc",
        position: "Project Manager",
      },
      {
        photo: "media/avatars/150-6.jpg",
        name: "Ricky Hunt",
        position: "Art Director",
      },
      {
        photo: "media/avatars/150-7.jpg",
        name: "Alice Wayde",
        position: "Marketing Manager",
      },
      {
        photo: "media/avatars/150-8.jpg",
        name: "Carles Puyol",
        position: "QA Managers",
      },
    ];

    return {
      items,
    };
  },
});
</script>
