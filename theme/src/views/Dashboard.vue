<template>
  <!--begin::Row-->
  <div class="row g-xl-8">
    <!--begin:::Col-->
    <div class="col-xxl-5">
      <KTListWidget3 widget-classes="mb-5 mb-xl-8"></KTListWidget3>

      <KTSliderWidget1 widget-classes="mb-5 mb-xl-8"></KTSliderWidget1>

      <KTListWidget4 widget-classes="mb-5 mb-xl-8"></KTListWidget4>
    </div>
    <!--end:::Col-->

    <!--begin:::Col-->
    <div class="col-xxl-7">
      <!--begin::Row-->
      <div class="row g-xl-8">
        <!--begin:::Col-->
        <div class="col-xl-6">
          <KTEngageWidget1
            widget-classes="card-xl-stretch mb-5 mb-xl-8"
          ></KTEngageWidget1>
        </div>
        <!--end:::Col-->

        <!--begin:::Col-->
        <div class="col-xl-6">
          <KTChartWidget1
            widget-classes="card-xl-stretch mb-5 mb-xl-8"
          ></KTChartWidget1>
        </div>
        <!--end:::Col-->
      </div>
      <!--end::Row-->

      <!--begin::Row-->
      <div class="row g-xl-8">
        <!--begin:::Col-->
        <div class="col">
          <KTTablesWidget1
            widget-classes="card-xxl-stretch mb-5 mb-xl-3"
          ></KTTablesWidget1>
        </div>
        <!--end:::Col-->
      </div>
      <!--end::Row-->

      <!--begin::Row-->
      <div class="row g-xl-8">
        <!--begin:::Col-->
        <div class="col-xl-6">
          <KTListWidget1
            widget-classes="card-xl-stretch mb-5 mb-xl-8"
          ></KTListWidget1>
        </div>
        <!--end:::Col-->

        <!--begin:::Col-->
        <div class="col-xl-6">
          <KTListWidget2
            widget-classes="card-xl-stretch mb-5 mb-xl-8"
          ></KTListWidget2>
        </div>
        <!--end:::Col-->
      </div>
      <!--end::Row-->

      <!--begin::Row-->
      <div class="row g-xl-8">
        <!--begin:::Col-->
        <div class="col">
          <KTChartWidget2
            widget-classes="card-xl-stretch mb-5 mb-xl-8"
          ></KTChartWidget2>
        </div>
        <!--end:::Col-->
      </div>
      <!--end::Row-->
    </div>
    <!--end:::Col-->
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import KTChartWidget1 from "@/components/widgets/charts/Widget1.vue";
import KTChartWidget2 from "@/components/widgets/charts/Widget2.vue";
import KTEngageWidget1 from "@/components/widgets/engage/Widget1.vue";
import KTListWidget1 from "@/components/widgets/lists/Widget1.vue";
import KTListWidget2 from "@/components/widgets/lists/Widget2.vue";
import KTListWidget3 from "@/components/widgets/lists/Widget3.vue";
import KTListWidget4 from "@/components/widgets/lists/Widget4.vue";
import KTSliderWidget1 from "@/components/widgets/sliders/Widget1.vue";
import KTTablesWidget1 from "@/components/widgets/tables/Widget1.vue";

export default defineComponent({
  name: "dashboard",
  components: {
    KTChartWidget1,
    KTChartWidget2,
    KTEngageWidget1,
    KTListWidget1,
    KTListWidget2,
    KTListWidget3,
    KTListWidget4,
    KTSliderWidget1,
    KTTablesWidget1,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Dashboard", ["Dashboards"]);
    });
  },
});
</script>
