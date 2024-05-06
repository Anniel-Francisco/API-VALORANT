<template>
  <div>
    <!-- Head -->
    <h1
      class="animate__animated animate__fadeInLeftBig text-xl min-w-full font-semibold border-b-2 boder-solid border-black"
    >
      {{ title }}
      <span style="color: #c93742">({{ totalElements }})</span>
    </h1>
    <!-- Search -->
    <div class="relative">
      <input
        type="search"
        class="animate__animated w-full relative focus:shadow-lg focus:shadow-slate-600-100 animate__fadeInLeftBig rounded-md p-2 mt-5 outline-none pl-8"
        placeholder="Search"
        @input="onChange"
        v-model="filter"
      />
      <font-awesome-icon
        class="animate__animated animate__zoomIn absolute top-8 left-2 text-gray-400"
        :icon="['fas', 'search']"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: true,
    },
    totalElements: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      filter: "",
    };
  },
  methods: {
    onChange(e) {
      this.$emit("filter", this.filter);
    },
  },
};
</script>
