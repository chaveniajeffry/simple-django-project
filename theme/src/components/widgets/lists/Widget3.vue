<template>
  <!--begin::List Widget 3-->
  <div :class="widgetClasses" class="card card-flush">
    <!--begin::Card header-->
    <div class="card-header">
      <!--begin::Card title-->
      <h3 class="card-title fw-boldest">Latest Authors Sales</h3>
      <!--end::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Icon-->
        <a
          class="
            btn
            btn-sm
            btn-icon
            btn-circle
            btn-icon-success
            btn-active-light-success
          "
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_create_account"
        >
          <span
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            title="Add New User"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/general/gen035.svg" />
            </span>
          </span>
        </a>
        <!--end::Icon-->

        <!--begin::Icon-->
        <a
          class="
            btn
            btn-sm
            btn-icon
            btn-circle
            btn-icon-primary
            btn-active-light-primary
          "
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_new_card"
        >
          <span
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            title="Add New Card"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/general/gen006.svg" />
            </span>
          </span>
        </a>
        <!--end::Icon-->

        <div class="d-flex align-items-center">
          <!--begin::Icon-->
          <a
            class="
              btn
              btn-sm
              btn-icon
              btn-circle
              btn-icon-danger
              btn-active-light-danger
            "
            href="#"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/general/gen023.svg" />
            </span>
          </a>
          <Dropdown1></Dropdown1>
          <!--end::Icon-->
        </div>
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Body-->
    <div class="card-body pt-1">
      <!--begin::Tabs-->
      <ul
        class="
          nav
          rounded-pill
          flex-center
          bg-light
          overflow-auto
          flex-nowrap
          p-2
          mb-8
        "
      >
        <!--begin::Tab nav-->
        <li class="nav-item flex-equal">
          <a
            class="
              nav-link
              btn btn-active-white btn-color-gray-500 btn-active-color-gray-700
              py-2
              px-4
              fs-6
              fw-bold
              active
            "
            data-bs-toggle="tab"
            href="#kt_lists_widget_3_tab_pane_1"
          >
            Exclusive Authors
          </a>
        </li>
        <!--end::Tab nav-->

        <!--begin::Tab nav-->
        <li class="nav-item flex-equal mx-1">
          <a
            class="
              nav-link
              btn btn-active-white btn-color-gray-500 btn-active-color-gray-700
              py-2
              px-4
              fs-6
              fw-bold
            "
            data-bs-toggle="tab"
            href="#kt_lists_widget_3_tab_pane_2"
          >
            Statistics
          </a>
        </li>
        <!--end::Tab nav-->

        <!--begin::Tab nav-->
        <li class="nav-item flex-equal">
          <a
            class="
              nav-link
              btn btn-active-white btn-color-gray-500 btn-active-color-gray-700
              py-2
              px-4
              fs-6
              fw-bold
            "
            data-bs-toggle="tab"
            href="#kt_lists_widget_3_tab_pane_3"
          >
            Recent Trends
          </a>
        </li>
        <!--end::Tab nav-->
      </ul>
      <!--end::Tabs-->

      <!--begin:Tab content-->
      <div class="tab-content">
        <!--begin::Tab pane-->
        <div
          class="tab-pane fade active show"
          id="kt_lists_widget_3_tab_pane_1"
        >
          <!--begin::Section-->
          <div class="mb-7">
            <!--begin::Heading-->
            <div class="fw-bold fs-4 text-gray-400 mb-5">24 Sep, 2021</div>
            <!--end::Heading-->

            <!--begin::Items-->
            <div class="overflow-auto mb-10">
              <template v-for="(item, i) in authors1" :key="i">
                <!--begin::Item-->
                <div
                  :class="[i !== authors1.length - 1 && 'mb-7']"
                  class="d-flex align-items-center"
                >
                  <!--begin::Avatar-->
                  <div class="symbol symbol-40px symbol-circle me-4">
                    <img v-if="item.user.src" alt="Pic" :src="item.user.src" />
                    <span
                      v-else
                      :class="`bg-light-${item.user.state} text-${item.user.state}`"
                      class="symbol-label fw-boldest"
                    >
                      {{ item.user.initials }}
                    </span>
                  </div>
                  <!--end::Avatar-->

                  <!--begin::List content-->
                  <div class="d-flex flex-column min-w-150px me-4">
                    <a
                      href="#"
                      class="fw-boldest text-gray-800 text-hover-primary fs-4"
                      >{{ item.title }}</a
                    >

                    <div class="fw-bold fs-6 text-gray-400">
                      {{ item.subtitle }}
                    </div>
                  </div>
                  <!--end::List content-->

                  <!--begin::Price-->
                  <div
                    class="
                      ms-auto
                      rounded-pill
                      bg-light
                      fw-bolder
                      text-gray-600
                      py-1
                      px-3
                    "
                  >
                    {{ item.price }}
                  </div>
                  <!--end::Price-->
                </div>
                <!--end::Item-->
              </template>
            </div>
            <!--end::Items-->
          </div>
          <!--end::Section-->

          <!--begin::Section-->
          <div class="mb-7">
            <!--begin::Heading-->
            <div class="fw-bold fs-4 text-gray-400 mb-5">30 Sep, 2021</div>
            <!--end::Heading-->

            <!--begin::Items-->
            <div class="overflow-auto">
              <template v-for="(item, i) in authors2" :key="i">
                <!--begin::Item-->
                <div
                  :class="[i !== authors2.length - 1 && 'mb-7']"
                  class="d-flex align-items-center"
                >
                  <!--begin::Avatar-->
                  <div class="symbol symbol-40px symbol-circle me-4">
                    <img v-if="item.user.src" alt="Pic" :src="item.user.src" />
                    <span
                      v-else
                      :class="`bg-light-${item.user.state} text-${item.user.state}`"
                      class="symbol-label fw-boldest"
                    >
                      {{ item.user.initials }}
                    </span>
                  </div>
                  <!--end::Avatar-->

                  <!--begin::List content-->
                  <div class="d-flex flex-column min-w-150px me-4">
                    <a
                      href="#"
                      class="fw-boldest text-gray-800 text-hover-primary fs-4"
                      >{{ item.title }}</a
                    >

                    <div class="fw-bold fs-6 text-gray-400">
                      {{ item.subtitle }}
                    </div>
                  </div>
                  <!--end::List content-->

                  <!--begin::Price-->
                  <div
                    class="
                      ms-auto
                      rounded-pill
                      bg-light
                      fw-bolder
                      text-gray-600
                      py-1
                      px-3
                    "
                  >
                    {{ item.price }}
                  </div>
                  <!--end::Price-->
                </div>
                <!--end::Item-->
              </template>
            </div>
            <!--end::Items-->
          </div>
          <!--end::Section-->
        </div>
        <!--end::Tab pane-->

        <!--begin::Tab pane-->
        <div class="tab-pane fade" id="kt_lists_widget_3_tab_pane_2">
          <!--begin::Chart-->
          <apexchart
            type="bar"
            height="350"
            :options="chartOptions"
            :series="series"
          ></apexchart>
          <!--end::Chart-->
        </div>
        <!--end::Tab pane-->

        <!--begin::Tab pane-->
        <div class="tab-pane fade" id="kt_lists_widget_3_tab_pane_3">
          <!--begin::Items-->
          <div class="mb-0">
            <template v-for="(item, i) in trends" :key="i">
              <!--begin::Item-->
              <div
                :class="[i !== trends.length - 1 && 'mb-7']"
                class="d-flex align-items-sm-center"
              >
                <!--begin::Symbol-->
                <div class="symbol symbol-50px symbol-circle me-5">
                  <span class="symbol-label">
                    <img
                      :src="item.image"
                      class="h-50 align-self-center"
                      alt=""
                    />
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
          <!--end::Items-->
        </div>
        <!--end::Tab pane-->
      </div>
      <!--end:Tab content-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 3-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";

export default defineComponent({
  name: "kt-widget-3",
  props: {
    widgetClasses: String,
  },
  components: {
    Dropdown1,
  },
  setup() {
    const authors1 = [
      {
        user: { initials: "A", state: "primary" },
        title: "Piper Aerostar",
        subtitle: "iper-aircraft-class.jsp",
        price: "2,040.00$",
      },
      {
        user: { src: "media/avatars/150-3.jpg" },
        title: "Cirrus SR22",
        subtitle: "cirrus-aircraft.jsp",
        price: "280.00$",
      },
      {
        user: { initials: "S", state: "success" },
        title: "Beachcraft Baron",
        subtitle: "beachcraft-class.jsp",
        price: "4,500.00$",
      },
      {
        user: { src: "media/avatars/150-7.jpg" },
        title: "Cessna SF150",
        subtitle: "cessna-aircraft-class.jsp",
        price: "1,050.00$",
      },
    ];

    const authors2 = [
      {
        user: { initials: "T", state: "danger" },
        title: "Roadshow Tesla",
        subtitle: "roadshow-tesla.jsp",
        price: "730.00$",
      },
      {
        user: { initials: "R", state: "info" },
        title: "Landmark RH100",
        subtitle: "landmark-class-jsp",
        price: "850.00$",
      },
      {
        user: { src: "media/avatars/150-5.jpg" },
        title: "Space Jump",
        subtitle: "space-jump-module.jsp",
        price: "2,300.00$",
      },
      {
        user: { src: "media/avatars/150-12.jpg" },
        title: "Flight Carrier",
        subtitle: "flight-module.jsp",
        price: "3,150.00$",
      },
    ];

    const trends = [
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
        image: "media/svg/brand-logos/treva.svg",
        title: "Premium Themes",
        text: "Alex, Kate, Dave",
        badge: "+1500$",
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

    const labelColor = getCSSVariableValue("--bs-gray-500");
    const borderColor = getCSSVariableValue("--bs-gray-200");

    const baseColor = getCSSVariableValue("--bs-primary");
    const secondaryColor = getCSSVariableValue("--bs-info");

    const chartOptions = {
      chart: {
        fontFamily: "inherit",
        type: "bar",
        stacked: true,
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ["12%"],
          endingShape: "rounded",
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        min: -80,
        max: 80,
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
      },
      colors: [baseColor, secondaryColor],
      grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
    };

    const series = [
      {
        name: "Net Profit",
        data: [40, 50, 65, 70, 50, 30],
      },
      {
        name: "Revenue",
        data: [-30, -40, -55, -60, -40, -20],
      },
    ];

    return {
      authors1,
      authors2,
      trends,
      chartOptions,
      series,
    };
  },
});
</script>
