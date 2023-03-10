<template>
  <!--begin::Section-->
  <div :class="classes">
    <!--begin::Top-->
    <div class="text-center mb-12">
      <!--begin::Title-->
      <h3 class="fs-2hx text-dark mb-5">Publications</h3>
      <!--end::Title-->

      <!--begin::Text-->
      <div class="fs-5 text-muted fw-bold">
        Our goal is to provide a complete and robust theme solution <br />to
        boost all of our customer’s project deployments
      </div>
      <!--end::Text-->
    </div>
    <!--end::Top-->

    <!--begin::Row-->
    <div class="row g-10">
      <!--begin::Col-->
      <div class="col-md-4">
        <KTPost
          classes="card-xl-stretch me-md-6"
          name="Jane Miller"
          image="media/stock/600x400/img-73.jpg"
          info="on Mar 21 2021"
          title="Bootstrap Admin - How To Started the Dashboard Tutorial"
          text="We’ve been focused on making a the from also not been
        afraid to and step away been focused create eye"
        ></KTPost>
      </div>
      <!--end::Col-->

      <!--begin::Col-->
      <div class="col-md-4">
        <KTPost
          classes="card-xl-stretch mx-md-3"
          name="Cris Morgan"
          image="media/stock/600x400/img-74.jpg"
          info="on Apr 14 2021"
          title="Bootstrap Admin - How To Started the Dashboard Tutorial"
          text="We’ve been focused on making the from v4 to v5 but we
        have also not been afraid to step away been focused"
        ></KTPost>
      </div>
      <!--end::Col-->

      <!--begin::Col-->
      <div class="col-md-4">
        <KTPost
          classes="card-xl-stretch ms-md-6"
          name="Carles Nilson"
          image="media/stock/600x400/img-47.jpg"
          info="on May 14 2021"
          title="Bootstrap Admin - How To Started the Dashboard Tutorial"
          text="
        We’ve been focused on making the from v4 to v5
        but we’ve also not been afraid to step away been focused
        "
        ></KTPost>
      </div>
      <!--end::Col-->
    </div>
    <!--end::Row-->
  </div>
  <!--end::Section-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTPost from "@/components/about-us/posts/Post.vue";

export default defineComponent({
  name: "publications",
  props: {
    classes: String,
  },
  components: {
    KTPost,
  },
});
</script>
