<template>
  <div
    class="animate__animated animate__fadeInUp details w-96 pb-5 bgImage overflow-y-auto scroll-bar lg:h-screen bg-slate-300 shadow-indigo-500/40 shadow-xl sticky top-0"
    :style="`background-image: url('${data.background}')`"
    style="width: 400px"
  >
    <div
      v-if="loading"
      class="flex text-2xl justify-center h-screen items-center"
    >
      <!-- Muestra el loader mientras se cargan los datos -->
      <div class="loader"></div>
    </div>
    <div v-else>
      <div
        v-if="Object.keys(data).length == 0"
        class="flex text-2xl justify-center h-screen items-center"
      >
        <h1 class="text-center font-bold">Click on one agent</h1>
      </div>
      <div v-else>
        <h2
          class="animate__animated animate__backInLeft absolute top-0 p-3 v-color text-white font-semibold"
          :style="`background-color: #${data.backgroundGradientColors[1]};`"
        >
          {{ data.role.displayName }}
        </h2>
        <img
          :src="data.fullPortrait"
          class="animate__animated animate__fadeInUp"
          alt=""
        />
        <h2
          class="text-center font-bold text-2xl animate__animated animate__fadeInUp"
        >
          {{ data.displayName }}
        </h2>
        <p
          class="text-justify m-5 text-base animate__animated animate__fadeInUp hover:bg-slate-300 transition-all duration-300"
        >
          {{ data.description }}
        </p>
        <h3
          class="text-center text-lg mb-1 font-bold animate__animated animate__fadeInUp"
        >
          Abilities
        </h3>
        <div class="flex justify-center animate__animated animate__fadeInUp">
          <div
            v-for="abilities of data.abilities"
            :key="abilities.displayName"
            class="text-center w-full"
          >
            <img
              :src="abilities.displayIcon"
              alt=""
              :style="`background-color: #${data.backgroundGradientColors[1]};`"
              class="ml-auto hover:shadow-xl p-1 active:scale-90 hover:shadow-indigo-500/40 transition duration-300 ease-in-out mr-auto rounded-lg flex flex-wrap w-14 bg-slate-400"
            />
            <h3 class="font-medium">{{ abilities.displayName }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsAgenst",
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
  data() {
    return { loading: false };
  },
  watch: {
    data: {
      handler(newVal, oldVale) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        });
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.v-color {
  background-color: #c93742;
}
.bgImage {
  background-position: center center;
  background-size: contain;
}
.scroll-bar::-webkit-scrollbar {
  display: none;
}
@media (max-width: 1024px) {
  .details {
    display: none;
  }
}
</style>
