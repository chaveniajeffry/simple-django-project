<template>
  <!--begin::Table Widget 1-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5 pb-3">
      <!--begin::Card title-->
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-boldest text-gray-800 fs-2"
          >Teams Progress</span
        >
        <span class="text-gray-400 fw-bold mt-2 fs-6">890,344 Sales</span>
      </h3>
      <!--end::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Search-->
        <div class="position-relative pe-6 my-1">
          <span
            class="
              svg-icon svg-icon-3 svg-icon-gray-500
              position-absolute
              top-50
              translate-middle
              ms-6
            "
          >
            <inline-svg src="media/icons/duotune/general/gen021.svg" />
          </span>
          <input
            type="text"
            placeholder="Search"
            class="
              w-150px
              form-control form-control-sm form-control-solid
              ps-10
            "
          />
        </div>
        <!--end::Search-->

        <div class="my-1">
          <!--begin::Select-->
          <select
            class="
              form-select form-select-sm form-select-solid
              fw-bolder
              w-125px
            "
            data-control="select2"
            data-placeholder="All Users"
            data-hide-search="true"
          >
            <option value="1" selected>All Users</option>
            <option value="2">Active users</option>
            <option value="3">Pending users</option>
          </select>
          <!--end::Select-->
        </div>
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-0">
      <!--begin::Table-->
      <div class="table-responsive">
        <table
          class="table align-middle table-row-bordered table-row-dashed gy-5"
          id="kt_table_widget_1"
        >
          <!--begin::Table body-->
          <tbody>
            <!--begin::Table row-->
            <tr class="text-start text-gray-400 fw-boldest fs-7 text-uppercase">
              <th class="w-20px ps-0">
                <div
                  class="
                    form-check form-check-sm form-check-custom form-check-solid
                    me-5
                  "
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="all"
                  />
                </div>
              </th>
              <th class="min-w-200px px-0">Authors</th>
              <th class="min-w-125px">Company</th>
              <th class="min-w-125px">Progress</th>
              <th class="text-end pe-2 min-w-70px">Action</th>
            </tr>
            <!--end::Table row-->

            <template v-for="(item, i) in items" :key="i">
              <!--begin::Table row-->
              <tr>
                <!--begin::Checkbox-->
                <td class="p-0">
                  <div
                    class="
                      form-check
                      form-check-sm
                      form-check-custom
                      form-check-solid
                    "
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :checked="all"
                      value="1"
                    />
                  </div>
                </td>
                <!--end::Checkbox-->

                <!--begin::Author--->
                <td class="p-0">
                  <div class="d-flex align-items-center">
                    <!--begin::Logo-->
                    <div class="symbol symbol-circle symbol-50px me-2">
                      <span class="symbol-label">
                        <img alt="" class="w-25px" :src="item.logo" />
                      </span>
                    </div>
                    <!--end::Logo-->

                    <div class="ps-3">
                      <a
                        href="#"
                        class="
                          text-gray-800
                          fw-boldest
                          fs-5
                          text-hover-primary
                          mb-1
                        "
                        >{{ item.name }}</a
                      >
                      <span class="text-gray-400 fw-bold d-block">{{
                        item.tools
                      }}</span>
                    </div>
                  </div>
                </td>
                <!--end::Author--->

                <!--begin::Company--->
                <td>
                  <span class="text-gray-800 fw-boldest fs-5 d-block">
                    {{ item.company }}
                  </span>
                  <span class="text-gray-400 fw-bold">
                    {{ item.skills }}
                  </span>
                </td>
                <!--end::Company--->

                <!--begin::Progress--->
                <td>
                  <div class="d-flex flex-column w-100 me-2 mt-2">
                    <span class="text-gray-400 me-2 fw-boldest mb-2">
                      {{ item.progress }}
                    </span>

                    <div class="progress bg-light-danger w-100 h-5px">
                      <div
                        :class="`bg-${item.color}`"
                        class="progress-bar"
                        role="progressbar"
                        :style="`width: ${item.progress}`"
                      ></div>
                    </div>
                  </div>
                </td>
                <!--end::Company--->

                <!--begin::Action--->
                <td class="pe-0 text-end">
                  <a
                    href="#"
                    class="btn btn-light text-muted fw-boldest btn-sm px-5"
                    >View</a
                  >
                </td>
                <!--end::Action--->
              </tr>
              <!--end::Table row-->
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
      </div>
      <!--end::Table-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Table Widget 1-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "kt-widget-1",
  props: {
    widgetClasses: String,
  },
  components: {},
  setup() {
    const all = ref<boolean>(false);
    const items = [
      {
        logo: "media/svg/brand-logos/aven.svg",
        name: "Brad Simmons",
        tools: "HTML, JS, ReactJS",
        company: "Intertico",
        skills: "Web, UI/UX Design",
        progress: "65%",
        color: "danger",
      },
      {
        logo: "media/svg/brand-logos/leaf.svg",
        name: "Jessie Clarcson",
        tools: "C#, ASP.NET, MS SQL ",
        company: "Agoda",
        skills: "Houses & Hotels",
        progress: "85%",
        color: "primary",
      },
      {
        logo: "media/svg/brand-logos/atica.svg",
        name: "Lebron Wayde",
        tools: "PHP, Laravel, VueJS",
        company: "RoadGee",
        skills: "Transportation",
        progress: "40%",
        color: "success",
      },
      {
        logo: "media/svg/brand-logos/volicity-9.svg",
        name: "Natali Trump",
        tools: "Python, ReactJS",
        company: "The Hill",
        skills: "Insurance",
        progress: "71%",
        color: "info",
      },
      {
        logo: "media/svg/brand-logos/aven.svg",
        name: "Brad Simmons",
        tools: "HTML, JS, ReactJS",
        company: "Intertico",
        skills: "Web, UI/UX Design",
        progress: "65%",
        color: "danger",
      },
    ];

    return {
      items,
      all,
    };
  },
});
</script>
