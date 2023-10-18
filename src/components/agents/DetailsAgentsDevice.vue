<template>
  <dialog
    ref="modal_details_agent"
    id="modal"
    class="animate__animated animate__fadeInUp details z-30 w-screen bi bottom-0 max-lg:h-screen overflow-auto scroll-bar bg-slate-300 shadow-indigo-500/40 shadow-xl fixed right-0"
    :style="`background-image: url('${data.background}')`"
  >
    <div v-if="Object.keys(data).length > 0">
      <div class="flex justify-between items-center">
        <div>
          <h2
            class="animate__animated text-lg v-color animate__backInLeft p-2 text-white font-semibold"
            :style="`background-color: #${data.backgroundGradientColors[1]};`"
          >
            {{ data.role.displayName }}
          </h2>
        </div>
        <div>
          <button
            type="button"
            @click="hide(false)"
            class="outline-none p-1 w-8 text-md font-medium rounded-full hover:bg-slate-200"
          >
            X
          </button>
        </div>
      </div>
      <img
        :src="data.fullPortrait"
        class="animate__animated animate__fadeInUp"
        alt=""
      />
      <h2
        class="text-center font-bold text-3xl animate__animated animate__fadeInUp"
      >
        {{ data.displayName }}
      </h2>
      <p
        class="text-justify m-5 text-xl animate__animated animate__fadeInUp hover:bg-slate-300 transition-all duration-300"
      >
        {{ data.description }}
      </p>
      <h3
        class="text-center text-2xl mb-1 font-bold animate__animated animate__fadeInUp"
      >
        Abilities
      </h3>
      <div class="flex justify-center mt-2 animate__animated animate__fadeInUp">
        <div
          v-for="abilities of data.abilities"
          :key="abilities.displayName"
          class="text-center w-full"
        >
          <img
            :src="abilities.displayIcon"
            alt=""
            class="ml-auto hover:shadow-xl p-1 active:scale-90 hover:shadow-indigo-500/40 transition duration-300 ease-in-out mr-auto rounded-lg flex flex-wrap w-14 bg-slate-400"
            :style="`background-color: #${data.backgroundGradientColors[1]};`"
          />
          <h3 class="font-medium text-lg">{{ abilities.displayName }}</h3>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script>
export default {
  name: "DetailsAgentsDevice",

  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },

    onDevice: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {};
  },

  watch: {
    onDevice: {
      handler(newVal, oldVal) {
        if (newVal) {
          this.show();
        }
      },
      deep: true,
    },
  },
  methods: {
    show() {
      this.$refs.modal_details_agent.show();
    },

    hide(bool) {
      const modal = document.querySelector("#modal");
      modal.classList.add("animate__fadeOutDown");

      setTimeout(() => {
        this.$emit("closeModal", { bool, data: {} });
        modal.classList.remove("animate__fadeOutDown");
        this.$refs.modal_details_agent.close();
      }, 700);
    },
  },
};
</script>

<style scoped>
.bi {
  background-position: center center;
  background-size: cover;
}
.scroll-bar::-webkit-scrollbar {
  display: none;
}
@media (min-width: 1024px) {
  .details {
    display: none;
  }
}
.v-color {
  background-color: #c93742;
}
</style>
