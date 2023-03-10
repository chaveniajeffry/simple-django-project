<template>
  <!--begin::My apps-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column w-100 w-sm-350px"
    id="kt-quick-links-menu"
    data-kt-menu="true"
  >
    <!--begin::Card-->
    <div class="card">
      <!--begin::Card header-->
      <div class="card-header">
        <!--begin::Card title-->
        <div class="card-title">My Apps</div>
        <!--end::Card title-->

        <!--begin::Card toolbar-->
        <div class="card-toolbar">
          <!--begin::Menu-->
          <!--begin::Menu-->
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n3"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/general/gen019.svg" />
            </span>
          </button>
          <Dropdown1></Dropdown1>
          <!--end::Menu-->
          <!--end::Menu-->
        </div>
        <!--end::Card toolbar-->
      </div>
      <!--end::Card header-->

      <!--begin::Card body-->
      <div class="card-body py-5">
        <!--begin::Scroll-->
        <div class="mh-450px scroll-y me-n5 pe-5">
          <!--begin::Row-->
          <div class="row g-2">
            <template v-for="(item, i) in apps" :key="i">
              <!--begin::Col-->
              <div class="col-4">
                <a
                  href="#"
                  class="
                    d-flex
                    flex-column flex-center
                    text-center text-gray-800 text-hover-primary
                    bg-hover-light
                    rounded
                    p-3
                    mb-3
                  "
                >
                  <img :src="item.icon" class="w-25px h-25px mb-2" alt="" />
                  <span class="fw-boldest">{{ item.title }}</span>
                </a>
              </div>
              <!--end::Col-->
            </template>
          </div>
          <!--end::Row-->
        </div>
        <!--end::Scroll-->
      </div>
      <!--end::Card body-->
    </div>
    <!--end::Card-->
  </div>
  <!--end::My apps-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";

export default defineComponent({
  name: "kt-my-apps",
  components: {
    Dropdown1,
  },
  setup() {
    const apps = [
      {
        icon: "media/svg/brand-logos/amazon-icon-1.svg",
        title: "AWS",
      },
      {
        icon: "media/svg/brand-logos/angular-icon-1.svg",
        title: "AngularJS",
      },
      {
        icon: "media/svg/brand-logos/atica.svg",
        title: "Atica",
      },
      {
        icon: "media/svg/brand-logos/beats-electronics.svg",
        title: "Music",
      },
      {
        icon: "media/svg/brand-logos/codeigniter.svg",
        title: "Codeigniter",
      },
      {
        icon: "media/svg/brand-logos/bootstrap-4.svg",
        title: "Bootstrap",
      },
      {
        icon: "media/svg/brand-logos/google-tag-manager.svg",
        title: "GTM",
      },
      {
        icon: "media/svg/brand-logos/disqus.svg",
        title: "Disqus",
      },
      {
        icon: "media/svg/brand-logos/dribbble-icon-1.svg",
        title: "Dribble",
      },
      {
        icon: "media/svg/brand-logos/google-play-store.svg",
        title: "Play Store",
      },
      {
        icon: "media/svg/brand-logos/google-podcasts.svg",
        title: "Podcasts",
      },
      {
        icon: "media/svg/brand-logos/figma-1.svg",
        title: "Figma",
      },
      {
        icon: "media/svg/brand-logos/github.svg",
        title: "Github",
      },
      {
        icon: "media/svg/brand-logos/gitlab.svg",
        title: "Gitlab",
      },
      {
        icon: "media/svg/brand-logos/instagram-2-1.svg",
        title: "Instagram",
      },
      {
        icon: "media/svg/brand-logos/pinterest-p.svg",
        title: "Pinterest",
      },
    ];

    return {
      apps,
    };
  },
});
</script>
