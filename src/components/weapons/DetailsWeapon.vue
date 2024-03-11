<template>
  <dialog
    ref="modal_detail_weapon"
    id="modal-weapon"
    class="bg-white modal-weapon animate__animated animate__zoomIn rounded-md"
  >
    <!-- Details -->
    <div v-if="Object.keys(selected).length > 0 && !skins" class="h-80">
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
        <div
          class="flex cursor-pointer justify-center duration-300 hover:shadow-lg hover:shadow-slate-400 items-center rounded-lg"
          :style="`background-color: #cbd5e1;background-image: url('${selected.killStreamIcon}'); background-size: contain;`"
          @click="skins = true"
        >
          <img class="w-full" :src="`${selected.displayIcon}`" alt="" />
        </div>

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
    <!-- Skins -->
    <div
      v-if="skins"
      id="modal-skins"
      class="bg-white modal-skins animate__animated animate__fadeInLeft h-full rounded-md"
    >
      <div class="flex items-center justify-between text-xl mb-2">
        <span class="font-bold"> Skins </span>

        <div
          class="text-4xl font-extrabold md:hover:-translate-x-3 md:duration-300 w-7 cursor-pointer"
          @click="onCloseSkins"
        >
          &larr;
        </div>
      </div>

      <div>
        <div class="flex flex-wrap items-center w-100 scroll-bar h-full">
          <div
            class="p-4 flex max-md:flex-wrap items-center justify-center w-full"
            v-for="(skin, index) in selected.skins"
            :key="index"
          >
            <img class="w-80" :src="skin.displayIcon" alt="" />
            <span
              class="text-xl rounded-lg p-2 text-white max-md:mt-4"
              style="background-color: crimson"
              >{{ skin.displayName }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script>
export default {
  name: "DetailsWeapon",
  props: {
    selected: {
      type: Object,
      default: {},
    },
  },
  components: {},
  data() {
    return {
      skins: false,
    };
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
      const modal = document.getElementById("modal-weapon");
      modal.classList.add("animate__zoomOut");

      setTimeout(() => {
        modal.classList.remove("animate__zoomOut");

        this.$refs.modal_detail_weapon.close();
      }, 500);
      this.$emit("onCloseWeapon", {});
    },

    onCloseSkins() {
      const modal = document.getElementById("modal-skins");
      modal.classList.add("animate__fadeOutLeft");
      setTimeout(() => {
        modal.classList.remove("animate__fadeOutLeft");
        this.skins = false;
      }, 600);
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
