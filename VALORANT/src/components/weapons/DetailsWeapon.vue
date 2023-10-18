<template>
  <dialog
    ref="modal_detail_weapon"
    id="modal-weapons"
    class="bg-white modal-weapon animate__animated animate__zoomIn rounded-md"
  >
    <div v-if="Object.keys(selected).length > 0" class="h-80">
      <div class="flex items-center justify-between text-xl mb-2">
        <span class="font-bold">
          {{ selected.shopData ? selected.shopData.category : "Knife" }}
        </span>

        <button
          type="button"
          class="w-7 rounded-full hover:bg-slate-200 outline-none"
          @click="hide"
        >
          X
        </button>
      </div>
      <!-- Content -->
      <div class="flex flex-row h-full content-weapon gap-2">
        <Skins :selected="selected" />

        <div class="w-full">
          <h2
            class="text-center text-lg uppercase font-semibold text-white p-1 rounded-lg"
            style="background-color: #21354c"
          >
            {{ selected.displayName }}
          </h2>
          <!-- First Row -->
          <div
            class="flex flex-col gap-3 items-center element-detail justify-between max-md:text-xs"
          >
            <!-- price -->
            <p class="font-semibold">
              price:
              <span
                style="background-color: crimson; color: white"
                class="p-1 rounded-lg"
              >
                {{
                  selected.shopData
                    ? selected.shopData.cost == 0
                      ? "FREE"
                      : selected.shopData.cost + "VP"
                    : "FREE"
                }}
              </span>
            </p>
            <!-- category -->
            <p class="font-semibold">
              category:
              <span
                style="background-color: crimson; color: white"
                class="p-1 rounded-lg"
              >
                {{ selected.shopData ? selected.shopData.category : "Knife" }}
              </span>
            </p>
            <!-- fireRate -->
            <p class="font-semibold">
              fireRate:
              <span>
                {{ selected.weaponStats ? selected.weaponStats.fireRate : "" }}
              </span>
            </p>
            <!-- firstBulletAccuracy -->
            <p class="font-semibold">
              firstBulletAccuracy:
              <span>
                {{
                  selected.weaponStats
                    ? selected.weaponStats.firstBulletAccuracy
                    : ""
                }}
              </span>
            </p>
            <!-- magazineSize -->
            <p class="font-semibold">
              magazineSize:
              <span>
                {{
                  selected.weaponStats ? selected.weaponStats.magazineSize : ""
                }}
              </span>
            </p>
            <!-- reloadTimeSeconds -->
            <p class="font-semibold">
              reloadTimeSeconds:
              <span>
                {{
                  selected.weaponStats
                    ? selected.weaponStats.reloadTimeSeconds
                    : ""
                }}
              </span>
            </p>
            <!-- runSpeedMultiplier -->
            <p class="font-semibold">
              runSpeedMultiplier:
              <span>
                {{
                  selected.weaponStats
                    ? selected.weaponStats.runSpeedMultiplier
                    : ""
                }}
              </span>
            </p>
            <!-- shotgunPelletCount -->
            <p class="font-semibold">
              shotgunPelletCount:
              <span>
                {{
                  selected.weaponStats
                    ? selected.weaponStats.shotgunPelletCount
                    : ""
                }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script>
import Skins from "./Skins.vue";
export default {
  name: "DetailsWeapon",
  props: {
    selected: {
      type: Object,
      default: {},
    },
  },
  components: {
    Skins,
  },
  data() {
    return {};
  },
  watch: {
    selected: {
      handler(newVal, oldVal) {
        this.show();
      },
      deep: true,
    },
  },

  methods: {
    show() {
      this.$refs.modal_detail_weapon.showModal();
    },
    hide() {
      const modal = document.getElementById("modal-weapons");
      modal.classList.add("animate__zoomOut");

      setTimeout(() => {
        modal.classList.remove("animate__zoomOut");

        this.$refs.modal_detail_weapon.close();
      }, 500);
      this.$emit("onCloseWeapon", {});
    },
  },
};
</script>

<style scoped>
.scroll-bar::-webkit-scrollbar {
  display: none;
}
.modal-weapon {
  width: 50%;
  max-width: 80%;
  height: 400px;
  outline: none;
}

.element-detail {
  margin-top: 15px;
}

@media (max-width: 768px) {
  .content-weapon {
    flex-wrap: wrap;
  }

  .modal-weapon {
    width: 100%;
  }
}
</style>
