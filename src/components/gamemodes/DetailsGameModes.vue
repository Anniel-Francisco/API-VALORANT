<template>
  <dialog
    ref="modal_details_game"
    id="modal-game"
    class="bg-white modal-game animate__animated animate__zoomIn rounded-md"
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

      <div
        class="flex max-md:flex-wrap justify-center grow gap-2 items-center h-full"
      >
        <div class="bg-blue-300">
          <img
            style="width: 150px; height: 150px"
            :src="selected.displayIcon"
          />
        </div>
        <div>
          <p class="text-lg">
            <span class="font-semibold"> Duration: </span>
            {{ selected.duration }}
          </p>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script>
export default {
  name: "DetailsGameMode",
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
      this.$refs.modal_details_game.showModal();
    },
    hide() {
      const modal = document.getElementById("modal-game");
      modal.classList.add("animate__zoomOut");

      setTimeout(() => {
        modal.classList.remove("animate__zoomOut");

        this.$refs.modal_details_game.close();
      }, 500);
      this.$emit("onCloseGameMode", {});
    },
  },
};
</script>

<style scoped>
.modal-game {
  width: 30%;
  max-width: 80%;
  height: 250px;
  outline: none;
}
</style>
