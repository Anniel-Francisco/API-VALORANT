<template>
  <div
    class="flex justify-between min-h-screen min-w-full"
    style="background-color: #eff1f7"
  >
    <div class="p-5 w-full">
      <Header
        title="Agents"
        :totalElements="data.length"
        @filter="recivedFilter"
      />
      <!-- Content -->
      <div class="mt-5">
        <div class="grid grid-cols-4 max-md:grid-cols-1 gap-5">
          <CardAgent
            v-for="agent of filterAgents"
            :key="agent.uuid"
            :name="agent.displayName"
            :icon="agent.displayIcon"
            :bgColor="agent.backgroundGradientColors[1]"
            @click="selectAgent(agent.uuid)"
          />
        </div>
        <div v-if="noAgent && filter">
          <span class="text-xl font-semibold">{{ noAgent }}</span>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <DetailsAgents :data="selectedAgent" />
    </div>

    <!-- Modal -->
    <DetailsAgentsDevice
      @closeModal="closeModal"
      :onDevice="onDevice"
      :data="selectedAgent"
    />
  </div>
</template>

<script>
import DetailsAgents from "../components/agents/DetailsAgents.vue";
import DetailsAgentsDevice from "../components/agents/DetailsAgentsDevice.vue";
import CardAgent from "../components/cards/CardAgent.vue";
import Header from "../components/general/Header.vue";
//
import ValorantAPI from "../api/ValorantAPI";
export default {
  name: "Agents",
  components: { DetailsAgents, DetailsAgentsDevice, CardAgent, Header },
  data() {
    return {
      data: [],
      selectedAgent: {},
      noAgent: "",
      filter: "",
      onDevice: false,
    };
  },
  mounted() {
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

    recivedFilter(val) {
      this.filter = val;
    },
  },
  computed: {
    filterAgents() {
      let filterText = this.filter.toLowerCase();
      let filterData = this.data.filter((agent) =>
        agent.displayName.toLowerCase().includes(filterText)
      );

      if (filterData.length === 0) {
        this.noAgent = "No agent found";
      } else {
        this.noAgent = "";
      }
      return filterData;
    },
  },
};
</script>
