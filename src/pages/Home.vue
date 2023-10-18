<template>
  <div
    class="main w-100 gap-6 flex text-2xl p-4 columns-2 flex-wrap text-center justify-evenly items-center min-h-screen"
  >
    <router-link
      class="card card-agents animate__animated animate__fadeInTopLeft"
      to="/agents"
      >Agents</router-link
    >
    <router-link
      class="card card-gamemodes animate__animated animate__fadeInTopRight"
      to="/gamemodes"
    >
      GameModes
    </router-link>
    <router-link
      class="card card-maps animate__animated animate__fadeInBottomLeft"
      to="maps"
      >Maps</router-link
    >
    <router-link
      class="card card-weapons animate__animated animate__fadeInBottomRight"
      to="/weapons"
    >
      Weapons
    </router-link>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.main {
  background-image: url("../assets/main-background.jpg");
}
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  background-position: center center;
  background-size: cover;
  width: 600px;
  height: 250px;
  align-items: center;
  outline: none;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  overflow: hidden;
}

.card:hover::after {
  transform: translateY(0);
}

.card::after {
  content: "";
  display: grid;
  inset: 0;
  background-position: center center;
  background-size: cover;
  place-items: center;
  position: absolute;
  transform: translateY(-100%);
  transition: transform 0.3s;
}

.card-agents::after {
  background-image: url("/src/assets/fade.avif");
}
/* GameModes */
.card-gamemodes::after {
  background-image: url("/src/assets/gamemodes.webp");
}

/* Weapons */
.card-weapons::after {
  background-image: url("/src/assets/weapons.jpg");
}

/* Maps */
.card-maps::after {
  background-image: url("/src/assets/maps.jpg");
}

@media (max-width: 700px) {
  .card {
    width: 500px;
  }
}
</style>
