<template>
  <dialog
    ref="modal_details_map"
    id="modal-map"
    class="bg-white modal-map animate__animated animate__zoomIn rounded-md"
  >
    <div
      v-if="Object.keys(selected).length > 0"
      class="flex flex-col justify-center min-h-full"
    >
      <div class="flex items-center justify-between text-xl mb-2">
        <span class="font-bold">
          {{ selected.displayName }}
        </span>

        <button
          type="button"
          class="w-7 rounded-full hover:bg-slate-200 outline-none"
          @click="hide"
        >
          X
        </button>
      </div>

      <div class="flex max-md:flex-wrap grow gap-2 items-center h-full">
        <div>
          <img :src="selected.displayIcon" />
        </div>
        <div>
          <p class="text-lg">
            {{ selected.narrativeDescription }}
          </p>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script>
export default {
  name: "DetailsMap",
  props: {
    selected: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
  watch: {
    selected: {
      handler(newVal, oldVal) {
        this.show();
      },
      deep: true,
    },
  },
  methods: {
    show() {
      this.$refs.modal_details_map.showModal();
    },
    hide() {
      const modal = document.getElementById("modal-map");
      modal.classList.add("animate__zoomOut");

      setTimeout(() => {
        modal.classList.remove("animate__zoomOut");

        this.$refs.modal_details_map.close();
      }, 500);
      this.$emit("onCloseMap", {});
    },
  },
};
</script>

<style scoped>
.modal-map {
  width: 50%;
  max-width: 80%;
  height: 350px;
  outline: none;
}

@media (max-width: 768px) {
  .modal-map {
    width: 95%;
  }
}
</style>
