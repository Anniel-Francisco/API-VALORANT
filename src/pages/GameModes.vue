<template>
  <div class="p-5 relative min-h-screen" style="background-color: #eff1f7">
    <h1
      class="animate__animated animate__fadeInLeftBig text-xl header-agent font-semibold border-b-2 boder-solid border-black"
      style="width: 100%"
    >
      Game Modes
      <span style="color: #c93742">({{ data.length }})</span>
    </h1>
    <div class="relative">
      <input
        type="search"
        class="animate__animated relative focus:shadow-lg focus:shadow-slate-600-100 animate__fadeInLeftBig rounded-md search p-2 mt-5 outline-none pl-8"
        placeholder="Search"
        style="width: 100%"
        v-model="filter"
      />
      <font-awesome-icon
        class="animate__animated animate__zoomIn absolute top-8 left-2 text-gray-400"
        :icon="['fas', 'search']"
      />
    </div>
    <DetailsGameModes :selected="gameMode" @onCloseGameMode="closeGameMode" />
    <div class="grid relative grid-cols-3 wdth gap-5 p-5">
      <div
        v-for="gameMode of filterGameModes"
        :key="gameMode.uuid"
        class="flex animate__animated animate__flipInX flex-col rounded-2xl active:scale-90 cursor-pointer w-40 h-40 ml-auto items-center justify-center mr-auto text-center transition duration-300 ease-in-out hover:shadow-indigo-500/40 text-white hover:shadow-xl"
        @click="selectedGameMode(gameMode.uuid)"
        style="background-color: #b7cde7"
      >
        <img :src="gameMode.displayIcon" alt="" class="w-28 ml-auto mr-auto" />
        <h2 class="font-bold gamemode-name text-black">
          {{ gameMode.displayName }}
        </h2>
      </div>
      <div v-if="noGameMode != '' && filter != ''">
        <h1 class="text-xl font-semibold">{{ noGameMode }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import ValorantAPI from "../api/ValorantAPI";
import DetailsGameModes from "../components/gamemodes/DetailsGameModes.vue";
export default {
  name: "GameModes",
  components: { DetailsGameModes },
  data() {
    return {
      data: [],
      gameMode: {},
      filter: "",
      noGameMode: "",
    };
  },
  created() {
    this.getGameModes();
  },
  methods: {
    async getGameModes() {
      try {
        const { data } = await ValorantAPI.getGameModes();
        this.data = [...data];
      } catch (error) {
        console.error("Error gameModes:", error);
      }
    },

    selectedGameMode(id) {
      const gameMode = this.data.find((item) => item.uuid == id);
      this.gameMode = { ...gameMode };
    },

    closeGameMode(val) {
      this.gameMode = val;
    },
  },
  computed: {
    filterGameModes() {
      let filterText = this.filter.toLowerCase();
      let filterData = this.data.filter((gameMode) =>
        gameMode.displayName.toLowerCase().includes(filterText)
      );

      if (filterData.length === 0) {
        this.noGameMode = "No game mode found";
      } else {
        this.noGameMode = "";
      }
      return filterData;
    },
  },
};
</script>

<style scoped>
.wdth {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
}

@media (max-width: 1024px) {
  .wdth {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  .gamemode-name {
    font-size: 20px;
  }
  .header-agent,
  .search {
    width: 100% !important;
  }
}
</style>
