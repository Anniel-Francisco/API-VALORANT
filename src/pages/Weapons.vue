<template>
  <div class="p-5 relative min-h-screen" style="background-color: #eff1f7">
    <Header
      title="Weapons"
      :totalElements="data.length"
      @filter="recivedFilter"
    />
    <!-- Content -->
    <div class="mt-5">
      <div class="grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-4 gap-5">
        <Card
          v-for="weapon of filterWeapons"
          :key="weapon.uuid"
          :icon="weapon.displayIcon"
          :name="weapon.displayName"
          @click="selectedWeapon(weapon.uuid)"
          style="background-color: #b7cde7"
        />
      </div>
      <div v-if="noWeapon && filter">
        <span class="text-xl font-semibold">{{ noWeapon }}</span>
      </div>
    </div>
    <!-- Modal -->
    <DetailsWeapon :selected="weapon" @onCloseWeapon="closeWeapon" />
  </div>
</template>

<script>
import DetailsWeapon from "../components/weapons/DetailsWeapon.vue";
import Card from "../components/cards/Card.vue";
import Header from "../components/general/Header.vue";
//
import ValorantAPI from "../api/ValorantAPI";
export default {
  name: "Weapons",
  components: {
    DetailsWeapon,
    Header,
    Card,
  },
  data() {
    return {
      data: [],
      weapon: {},
      filter: "",
      noWeapon: "",
    };
  },
  created() {
    this.getWeapons();
  },
  methods: {
    async getWeapons() {
      try {
        const { data } = await ValorantAPI.getWeapons();
        this.data = [...data];
      } catch (error) {
        console.error("Error Weapons:", error);
      }
    },

    selectedWeapon(id) {
      const weapon = this.data.find((item) => item.uuid == id);
      this.weapon = { ...weapon };
    },

    closeWeapon(empty) {
      this.weapon = empty;
    },
    recivedFilter(val) {
      this.filter = val;
    },
  },
  computed: {
    filterWeapons() {
      let filterText = this.filter.toLowerCase();
      let filterData = this.data.filter((weapon) =>
        weapon.displayName.toLowerCase().includes(filterText)
      );

      if (filterData.length === 0) {
        this.noWeapon = "No weapon found";
      } else {
        this.noWeapon = "";
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

  .weapon-name {
    font-size: 20px;
  }
  .header-agent,
  .search {
    width: 100% !important;
  }
}
</style>
