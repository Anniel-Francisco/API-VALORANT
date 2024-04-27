<template>
  <div class="p-5 relative min-h-screen" style="background-color: #eff1f7">
    <Header title="Maps" :totalElements="data.length" @filter="recivedFilter" />
    <!-- Content -->
    <div class="mt-5">
      <div class="grid grid-cols-4 max-md:grid-cols-1 gap-5">
        <CardMap
          v-for="map of filterMaps"
          :key="map.uuid"
          :icon="map.displayIcon"
          :name="map.displayName"
          @click="selectedMap(map.uuid)"
        />
      </div>

      <div v-if="noMap && filter">
        <span class="text-xl font-semibold">{{ noMap }}</span>
      </div>
    </div>
    <!-- Modal -->
    <DetailsMaps :selected="map" @onCloseMap="closeMap" />
  </div>
</template>

<script>
import DetailsMaps from "../components/maps/DetailsMaps.vue";
import Header from "../components/general/Header.vue";
import CardMap from "../components/cards/CardMap.vue";
//
import ValorantAPI from "../api/ValorantAPI";
export default {
  name: "maps",
  components: { DetailsMaps, CardMap, Header },
  data() {
    return {
      data: [],
      map: {},
      filter: "",
      noMap: "",
    };
  },
  created() {
    this.getMaps();
  },
  methods: {
    async getMaps() {
      try {
        const { data } = await ValorantAPI.getMaps();
        this.data = [...data];
      } catch (error) {
        console.error("Error maps:", error);
      }
    },

    selectedMap(id) {
      const map = this.data.find((item) => item.uuid == id);
      this.map = { ...map };
    },

    closemap(empty) {
      this.map = empty;
    },
    closeMap(val) {
      this.map = val;
    },
    recivedFilter(val) {
      this.filter = val;
    },
  },
  computed: {
    filterMaps() {
      let filterText = this.filter.toLowerCase();
      let filterData = this.data.filter((map) =>
        map.displayName.toLowerCase().includes(filterText)
      );

      if (filterData.length === 0) {
        this.noMap = "No map found";
      } else {
        this.noMap = "";
      }
      return filterData;
    },
  },
};
</script>
