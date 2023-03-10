<template>
  <!--begin::Layout -->
  <div class="d-flex flex-column flex-xl-row">
    <!--begin::Sidebar-->
    <div class="flex-column flex-lg-row-auto w-100 w-xl-325px mb-10">
      <!--begin::Card-->
      <div
        class="card card-flush"
        data-kt-sticky="true"
        data-kt-sticky-name="account-navbar"
        data-kt-sticky-offset="{default: false, xl: '80px'}"
        data-kt-sticky-width="{lg: '250px', xl: '325px'}"
        data-kt-sticky-left="auto"
        data-kt-sticky-top="90px"
        data-kt-sticky-animation="false"
        data-kt-sticky-zindex="95"
      >
        <!--begin::Card header-->
        <div class="card-header justify-content-end">
          <!--begin::Toolbar-->
          <div class="card-toolbar">
            <button
              class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-flip="top-end"
            >
              <i class="bi bi-three-dots fs-3"></i>
            </button>
            <Dropdown3></Dropdown3>
          </div>
          <!--end::Toolbar-->
        </div>
        <!--end::Card header-->

        <!--begin::Card body-->
        <div class="card-body pt-0 p-10">
          <!--begin::Summary-->
          <div class="d-flex flex-center flex-column mb-10">
            <!--begin::Avatar-->
            <div class="symbol mb-3 symbol-100px symbol-circle">
              <img alt="Pic" src="media/avatars/150-1.jpg" />
            </div>
            <!--end::Avatar-->
            <!--begin::Name-->
            <a
              href="#"
              class="fs-2 text-gray-800 text-hover-primary fw-bolder mb-1"
            >
              Emma Smith
            </a>
            <!--end::Name-->

            <!--begin::Position-->
            <div class="fs-6 fw-bold text-gray-400 mb-2">Art Director</div>
            <!--end::Position-->

            <!--begin::Actions-->
            <div class="d-flex flex-center">
              <router-link
                to="/chat/private-chat"
                class="btn btn-sm btn-light-primary py-2 px-4 fw-bolder me-2"
                >Send Message</router-link
              >
            </div>
            <!--end::Actions-->
          </div>
          <!--end::Summary-->

          <!--begin::Menu-->
          <ul
            class="
              menu
              menu-column
              menu-pill
              menu-title-gray-700
              menu-bullet-gray-300
              menu-state-bg
              menu-state-bullet-primary
              fw-bolder
              fs-5
              mb-10
            "
          >
            <li class="menu-item mb-1">
              <!--begin::Menu link-->
              <router-link
                class="menu-link px-6 py-4"
                to="overview"
                active-class="active"
              >
                <span class="menu-bullet"><span class="bullet"></span></span>
                <span class="menu-title"> Overview </span>
              </router-link>
              <!--end::Menu link-->
            </li>

            <li class="menu-item mb-1">
              <!--begin::Menu link-->
              <router-link
                class="menu-link px-6 py-4"
                to="settings"
                active-class="active"
              >
                <span class="menu-bullet"><span class="bullet"></span></span>
                <span class="menu-title"> Settings </span>
              </router-link>
              <!--end::Menu link-->
            </li>

            <li class="menu-item mb-1">
              <!--begin::Menu link-->
              <router-link
                class="menu-link px-6 py-4"
                to="security"
                active-class="active"
              >
                <span class="menu-bullet"><span class="bullet"></span></span>
                <span class="menu-title"> Security </span>
              </router-link>
              <!--end::Menu link-->
            </li>

            <li class="menu-item mb-1">
              <!--begin::Menu link-->
              <router-link
                class="menu-link px-6 py-4"
                to="audit-logs"
                active-class="active"
              >
                <span class="menu-bullet"><span class="bullet"></span></span>
                <span class="menu-title"> Audit Logs </span>
              </router-link>
              <!--end::Menu link-->
            </li>

            <li class="menu-item mb-1">
              <!--begin::Menu link-->
              <router-link
                class="menu-link px-6 py-4"
                active-class="active"
                to="activity"
              >
                <span class="menu-bullet"><span class="bullet"></span></span>
                <span class="menu-title"> Activity </span>
              </router-link>
              <!--end::Menu link-->
            </li>
          </ul>
          <!--end::Menu-->

          <!--begin::Account info-->
          <div
            class="
              border border-dashed border-gray-300
              bg-lighten
              card-rounded
              p-6
            "
          >
            <!--begin::Title-->
            <h5 class="mb-4">Account Status</h5>
            <!--end::Title-->

            <!--begin::Package-->
            <div class="mb-3">
              <!--begin::Plan-->
              <span class="badge bg-success me-2 card-rounded"
                >Basic Bundle</span
              >
              <!--end::Plan-->

              <!--begin::Price-->
              <span class="fw-bold text-gray-600">$149.99 / Year</span>
              <!--end::Price-->
            </div>
            <!--end::Package-->

            <a
              href="#"
              class="text-link fs-7 fw-bolder"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_upgrade_plan"
              >Upgrade to Pro</a
            >
          </div>
          <!--end::Account info-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Card-->
    </div>
    <!--end::Sidebar-->

    <!--begin::Content-->
    <div class="flex-lg-row-fluid ms-lg-10">
      <router-view></router-view>
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout -->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { StickyComponent } from "@/assets/ts/components";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "account-layout",
  components: {
    Dropdown3,
  },
  setup() {
    onMounted(() => {
      StickyComponent.reInitialization();
    });
  },
});
</script>
