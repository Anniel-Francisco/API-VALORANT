<template>
  <div class="p-5 relative min-h-screen" style="background-color: #eff1f7">
    <h1
      class="animate__animated animate__fadeInLeftBig text-xl header-agent font-semibold border-b-2 boder-solid border-black"
      style="width: 70%"
    >
      Agents
      <span style="color: #c93742">({{ data.length }})</span>
    </h1>
    <div class="relative">
      <input
        type="search"
        class="animate__animated relative focus:shadow-lg focus:shadow-slate-600-100 animate__fadeInLeftBig rounded-md search p-2 mt-5 outline-none pl-8"
        placeholder="Search"
        style="width: 70%"
        v-model="filter"
      />
      <font-awesome-icon
        class="animate__animated animate__zoomIn absolute top-8 left-2 text-gray-400"
        :icon="['fas', 'search']"
      />
    </div>

    <DetailsAgentsDevice
      @closeModal="closeModal"
      :onDevice="onDevice"
      :data="selectedAgent"
    />
    <div class="grid relative grid-cols-3 wdth gap-5 p-5">
      <DetailsAgents :data="selectedAgent" />
      <div
        v-for="agent of filterAgents"
        :key="agent.uuid"
        class="flex animate__animated animate__flipInX flex-col rounded-2xl active:scale-90 cursor-pointer w-40 h-40 ml-auto items-center justify-center mr-auto text-center transition duration-300 ease-in-out hover:shadow-indigo-500/40 text-white hover:shadow-xl"
        @click="selectAgent(agent.uuid)"
        :style="`background-color: #${agent.backgroundGradientColors[1]}`"
      >
        <img :src="agent.displayIcon" alt="" class="w-20 ml-auto mr-auto" />
        <h2 class="font-bold agent-name">{{ agent.displayName }}</h2>
      </div>
      <div v-if="noAgent != '' && filter != ''">
        <h1 class="text-xl font-semibold">{{ noAgent }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import ValorantAPI from "../api/ValorantAPI";
import DetailsAgents from "../components/agents/DetailsAgents.vue";
import DetailsAgentsDevice from "../components/agents/DetailsAgentsDevice.vue";

export default {
  name: "Agents",
  components: { DetailsAgents, DetailsAgentsDevice },
  data() {
    return {
      data: [],
      selectedAgent: {},
      filter: "",
      noAgent: "",
      onDevice: false,
    };
  },
  created() {
    this.getAgents();
  },
  methods: {
    async getAgents() {
      try {
        const { data } = await ValorantAPI.getAgents();
        this.data = data.filter((item) => item.role != null);
      } catch (error) {
        console.error("Error Agents:", error);
      }
    },

    closeModal(bool) {
      this.onDevice = bool.bool;
      this.selectedAgent = bool.data;
    },
    selectAgent(id) {
      const agent = this.data.find((item) => item.uuid == id);
      const ancho = window.innerWidth;
      if (ancho <= 1024 && Object.keys(agent).length > 0) {
        this.onDevice = true;
        this.selectedAgent = { ...agent };
      } else {
        this.onDevice = false;
        this.selectedAgent = { ...agent };
      }
    },
  },
  computed: {
    filterAgents() {
      let filterText = this.filter.toLowerCase(); // Convertir filtro a minúsculas
      let filterData = this.data.filter((agent) =>
        agent.displayName.toLowerCase().includes(filterText)
      );

      if (filterData.length === 0) {
        setTimeout(() => {
          this.noAgent = "No agent found";
        }, 200);
      } else {
        this.noAgent = "";
      }
      return filterData;
    },
  },
};
</script>

<style scoped>
.wdth {
  width: 70%;
}

@media (max-width: 1024px) {
  .wdth {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  .agent-name {
    font-size: 20px;
  }
  .header-agent,
  .search {
    width: 100% !important;
  }
}
</style>
