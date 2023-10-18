<template>
  <div
    class="flex cursor-pointer justify-center duration-300 hover:shadow-xl hover:shadow-slate-400 items-center rounded-lg"
    :style="`background-color: #cbd5e1;background-image: url('${selected.killStreamIcon}'); background-size: contain;`"
    @click="show"
  >
    <img class="w-full" :src="`${selected.displayIcon}`" alt="" />
  </div>

  <dialog
    ref="modal_skins"
    id="modal-skins"
    class="bg-white modal-skins animate__animated animate__fadeInUp h-full rounded-md"
  >
    <div class="flex items-center justify-between text-xl mb-2">
      <span class="font-bold"> Skins </span>

      <button
        type="button"
        class="w-7 rounded-full hover:bg-slate-200 outline-none"
        @click="hide"
      >
        X
      </button>
    </div>

    <div>
      <div class="flex flex-wrap items-center w-100 scroll-bar h-full">
        <div
          class="p-4 flex max-md:flex-wrap items-center justify-center w-full"
          v-for="(skin, index) in selected.skins"
          :key="index"
        >
          <img class="w-80" :src="skin.displayIcon" alt="" />
          <span
            class="text-xl rounded-lg p-2 text-white max-md:mt-4"
            style="background-color: crimson"
            >{{ skin.displayName }}</span
          >
        </div>
      </div>
    </div>
  </dialog>
</template>

<script>
export default {
  name: "Skins",
  props: {
    selected: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
  methods: {
    show() {
      this.$refs.modal_skins.showModal();
    },
    hide() {
      const modal = document.getElementById("modal-skins");
      modal.classList.add("animate__fadeOutDown");
      setTimeout(() => {
        modal.classList.remove("animate__fadeOutDown");

        this.$refs.modal_skins.close();
      }, 500);
    },
  },
};
</script>

<style scoped>
.modal-skins {
  width: 50%;
  max-width: 80%;
  height: 400px;
  outline: none;
}
@media (max-width: 768px) {
  .modal-skins {
    width: 100%;
  }
}
</style>
