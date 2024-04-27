<template>
  <div class="p-5 relative min-h-screen" style="background-color: #eff1f7">
    <Header
      title="Game Modes"
      :totalElements="data.length"
      @filter="recivedFilter"
    />
    <!-- Content -->
    <div class="mt-5">
      <div class="grid grid-cols-4 max-md:grid-cols-1 gap-5">
        <CardGameMode
          v-for="gameMode of filterGameModes"
          :key="gameMode.uuid"
          :name="gameMode.displayName"
          :icon="gameMode.displayIcon"
          @click="selectedGameMode(gameMode.uuid)"
        />
      </div>
      <div v-if="noGameMode != '' && filter != ''">
        <span class="text-xl font-semibold">{{ noGameMode }}</span>
      </div>
    </div>
    <!-- Modal -->
    <DetailsGameModes :selected="gameMode" @onCloseGameMode="closeGameMode" />
  </div>
</template>

<script>
import Header from "../components/general/Header.vue";
import DetailsGameModes from "../components/gamemodes/DetailsGameModes.vue";
import CardGameMode from "../components/cards/CardGameMode.vue";
//
import ValorantAPI from "../api/ValorantAPI";
export default {
  name: "GameModes",
  components: { DetailsGameModes, Header, CardGameMode },
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
    recivedFilter(val) {
      this.filter = val;
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
