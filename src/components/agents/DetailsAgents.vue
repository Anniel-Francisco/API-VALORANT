<template>
  <div
    class="animate__animated animate__fadeInUp details w-96 pb-5 bgImage overflow-y-auto scroll-bar lg:h-screen bg-slate-300 shadow-indigo-500/40 shadow-xl sticky top-0"
    :style="`background-image: url('${data.background}');`"
    style="width: 400px"
  >
    <div
      v-if="Object.keys(data).length == 0"
      class="flex text-2xl justify-center h-screen items-center"
    >
      <span class="text-center font-bold">Click on one agent</span>
    </div>
    <div v-else>
      <span
        class="animate__animated animate__backInLeft absolute top-0 p-3 text-white font-semibold"
        :style="`background-color: #${data.backgroundGradientColors[1]};`"
      >
        {{ data.role.displayName }}
      </span>
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
          <span class="font-medium">{{ abilities.displayName }}</span>
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
};
</script>

<style scoped>
.bgImage {
  background-position: center center;
  background-size: cover;
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
