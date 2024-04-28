<template>
  <div
    class="main w-100 gap-6 flex text-2xl p-4 columns-2 flex-wrap text-center justify-evenly items-center min-h-screen"
  >
    <CardHome
      v-for="(page, index) in pages"
      :key="index"
      :name="page.name"
      :route="page.route"
    />
  </div>
</template>

<script>
import CardHome from "../components/cards/CardHome.vue";
//
export default {
  name: "Home",
  components: {
    CardHome,
  },
  data() {
    return {
      pages: [
        {
          name: "Agents",
          route: "/agents",
        },
        {
          name: "GameModes",
          route: "/gamemodes",
        },
        {
          name: "Maps",
          route: "/maps",
        },
        {
          name: "Weapons",
          route: "/weapons",
        },
      ],
    };
  },
};
</script>
<style scoped>
.main {
  background-image: url("../assets/main-background.jpg");
}
</style>
