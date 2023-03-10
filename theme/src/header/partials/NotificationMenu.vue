<template>
  <!--begin::Menu-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column w-350px"
    data-kt-menu="true"
    id="kt-notification-menu"
  >
    <!--begin::Card-->
    <div class="card">
      <!--begin::Card header-->
      <div class="card-header">
        <h3 class="card-title">
          Notifications
          <span class="badge badge-light-success fs-7 fw-500 ms-3"
            >24 reports</span
          >
        </h3>
      </div>
      <!--end::Card header-->

      <!--begin::Card body-->
      <div class="card-body p-0">
        <!--begin::Notifications-->
        <div class="mh-350px scroll-y py-3">
          <template v-for="(item, i) in notifications" :key="i">
            <!--begin::Item-->
            <div class="d-flex align-items-center bg-hover-lighten py-3 px-9">
              <!--begin::Symbol-->
              <div class="symbol symbol-40px symbol-circle me-5">
                <span :class="`bg-light-${item.color}`" class="symbol-label">
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
              <div class="mb-1 pe-3 flex-grow-1">
                <a href="#" class="fs-6 text-dark text-hover-primary fw-bold">{{
                  item.title
                }}</a>
                <div class="text-gray-400 fw-bold fs-7">
                  {{ item.info }}
                </div>
              </div>
              <!--end::Title-->
            </div>
            <!--end::Item-->
          </template>
        </div>
        <!--end::Notifications-->
      </div>
      <!--end::Card header-->

      <!--begin::Card footer-->
      <div class="card-footer text-center py-5">
        <a href="#" class="btn btn-light btn-active-light-primary btn-sm"
          >All Notifications</a
        >
      </div>
      <!--end::Card footer-->
    </div>
    <!--end::Card-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-notification-menu",
  components: {},
  setup() {
    const notifications = [
      {
        icon: "media/icons/duotune/abstract/abs027.svg",
        title: "Developer Library added",
        info: "2 hours ago",
        color: "warning",
      },
      {
        icon: "media/icons/duotune/finance/fin002.svg",
        title: "Credit card expired",
        info: "1 day ago",
        color: "danger",
      },
      {
        icon: "media/icons/duotune/ecommerce/ecm002.svg",
        title: "New Order placed",
        info: "5 days ago",
        color: "primary",
      },
      {
        icon: "media/icons/duotune/communication/com006.svg",
        title: "New user library added",
        info: "2 weeks ago",
        color: "info",
      },
      {
        icon: "media/icons/duotune/general/gen030.svg",
        title: "Mark Simpson liked your page",
        info: "1 month ago",
        color: "primary",
      },
      {
        icon: "media/icons/duotune/files/fil016.svg",
        title: "New project saved",
        info: "2 hours ago",
        color: "success",
      },
      {
        icon: "media/icons/duotune/coding/cod001.svg",
        title: "Review privacy policy",
        info: "1 day ago",
        color: "warning",
      },
      {
        icon: "media/icons/duotune/general/gen027.svg",
        title: "Order deleted",
        info: "5 days ago",
        color: "danger",
      },
      {
        icon: "media/icons/duotune/arrows/arr029.svg",
        title: "System update reminder",
        info: "2 weeks ago",
        color: "primary",
      },
      {
        icon: "media/icons/duotune/finance/fin002.svg",
        title: "Credit card expiring",
        info: "1 week ago",
        color: "warning",
      },
    ];

    return {
      notifications,
    };
  },
});
</script>
