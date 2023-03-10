<template>
  <!--begin::Chart Widget 1-->
  <div :class="widgetClasses" class="card">
    <!--begin::Body-->
    <div class="card-body p-0 d-flex justify-content-between flex-column">
      <div class="d-flex flex-stack card-p flex-grow-1">
        <!--begin::Icon-->
        <div class="symbol symbol-45px symbol-circle">
          <div class="symbol-label">
            <span class="svg-icon svg-icon-2x">
              <inline-svg src="media/icons/duotune/ecommerce/ecm002.svg" />
            </span>
          </div>
        </div>
        <!--end::Icon-->

        <!--begin::Text-->
        <div class="d-flex flex-column text-end">
          <a href="#" class="fw-boldest text-gray-800 text-hover-primary fs-2"
            >Orders</a
          >
          <span class="text-gray-400 fw-bold fs-6">Sep 1 - Sep 16 2020</span>
        </div>
        <!--end::Text-->
      </div>

      <!--begin::Chart-->
      <div class="pt-1">
        <!--begin::Chart-->
        <apexchart
          class="card-rounded-bottom h-125px"
          type="area"
          height="125"
          :options="chartOptions"
          :series="series"
        ></apexchart>
        <!--end::Chart-->
      </div>
      <!--end::Chart-->
    </div>
  </div>
  <!--end::Chart Widget 1-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "kt-widget-1",
  props: {
    widgetClasses: String,
  },
  components: {},
  setup() {
    const chartOptions = {
      chart: {
        fontFamily: "inherit",
        type: "area",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 1,
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: ["#50CD89"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          style: {
            colors: getCSSVariableValue("--bs-gray-500"),
            fontSize: "12px",
          },
        },
        crosshairs: {
          show: false,
          position: "front",
          stroke: {
            color: getCSSVariableValue("--bs-gray-200"),
            width: 1,
            dashArray: 3,
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        min: 0,
        max: 60,
        labels: {
          show: false,
          style: {
            colors: getCSSVariableValue("--bs-gray-500"),
            fontSize: "12px",
          },
        },
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
      colors: ["#E8FFF3"],
      markers: {
        colors: [getCSSVariableValue("--bs-light-success")],
        strokeColor: [getCSSVariableValue("--bs-success")],
        strokeWidth: 3,
      },
    };

    const series = [
      {
        name: "Net Profit",
        data: [30, 30, 43, 43, 34, 34, 26, 26, 47, 47],
      },
    ];

    return {
      chartOptions,
      series,
    };
  },
});
</script>
