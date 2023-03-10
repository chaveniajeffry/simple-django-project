<template>
  <!--begin::Engage widget 1-->
  <div :class="widgetClasses" class="card">
    <!--begin::Card body-->
    <div class="card-body d-flex">
      <!--begin::Wrapper-->
      <div class="me-2 flex-grow-1">
        <!--begin::Title-->
        <div class="fw-boldest fs-3 mb-2">Quick Start Project</div>
        <!--end::Title-->

        <!--begin::Description-->
        <div class="fw-bold fs-6 text-gray-400 mb-7">Earn $200 bonus now</div>
        <!--end::Description-->

        <!--begin::Link-->
        <a
          href="#"
          :class="`btn-${currentColor}`"
          class="btn btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_create_account"
          >Quick Start</a
        >
        <!--end::Link-->
      </div>
      <!--end::Wrapper-->

      <!--begin::Wrapper-->
      <div
        class="
          d-flex
          justify-content-end
          align-items-end
          w-75px
          me-n5 me-lg-n10
        "
      >
        <img
          src="media/illustrations/dozzy-1/3.png"
          class="h-125px h-lg-150px"
          alt=""
        />
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Engage widget 1-->
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";

export default defineComponent({
  name: "kt-widget-1",
  props: {
    widgetClasses: String,
    color: String,
  },
  components: {},
  setup(props) {
    const color = ref(props.color);

    const currentColor = computed(() => {
      return color.value ? color.value : "primary";
    });

    return {
      currentColor,
    };
  },
});
</script>
