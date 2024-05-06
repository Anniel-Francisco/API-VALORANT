<template>
  <div class="flex flex-col min-w-full p-10 max-md:p-5 main">
    <div
      class="grid grid-cols-2 justify-center max-md:grid-cols-1 items-center"
      style="height: 100%"
    >
      <div>
        <h1 class="uppercase text-white font-bold text-8xl max-md:text-6xl">
          api valorant
        </h1>
      </div>
      <div style="width: 100%; height: 90%">
        <swiper
          :slides-per-view="1"
          :space-between="10"
          :modules="modules"
          effect="cards"
          :pagination="{ clickable: true }"
          class="swiper-content rounded-lg"
        >
          <swiper-slide
            class="swiper-element rounded-lg relative bg-slate-800 w-full"
            v-for="(page, index) in pages"
            :key="index"
          >
            <div>
              <span
                class="text-white font-semibold p-2 outline-none text-xl absolute top-0 left-0"
                style="background-color: #bd3944"
              >
                {{ page.name }}
              </span>
              <!-- Globe to go to page -->
              <font-awesome-icon
                :icon="['fas', 'globe']"
                title="click"
                size="2xl"
                color="white"
                class="absolute cursor-pointer top-2 right-2"
                @click="goToPage(page.route)"
              />
            </div>
            <div
              v-if="page.image"
              class="flex justify-center"
              style="width: 100%"
            >
              <img :src="page.image" alt="image" />
            </div>
            <div v-else class="flex gap-4 multiple__images">
              <img
                v-for="(image, ind) in page.images"
                :key="ind"
                :src="image"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- Links -->
    <div class="flex justify-end">
      <div
        class="link hover:-translate-y-1 duration-300"
        v-for="(link, index) in links"
        :key="index"
      >
        <a :href="link.path" target="_blank">
          <font-awesome-icon color="white" :icon="link.icon" size="2xl" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { Autoplay, Pagination, A11y, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
//
import AgentImage from "/src/assets/jett.png";
import DeatMatchImage from "/src/assets/Deathmatch.webp";
import EscalationImage from "/src/assets/Escalation.webp";
import SnowballFightImage from "/src/assets/Snowball_Fight.webp";
import MapImage from "/src/assets/map-image.png";
import WeaponImage from "/src/assets/weapon-image.png";

export default {
  name: "Home",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      modules: [Pagination, Autoplay, A11y, EffectCards],
      pages: [
        {
          name: "Agents",
          route: "/agents",
          images: [],
          image: AgentImage,
        },
        {
          name: "GameModes",
          route: "/gamemodes",
          images: [DeatMatchImage, EscalationImage, SnowballFightImage],
        },
        {
          name: "Maps",
          route: "/maps",
          images: [],
          image: MapImage,
        },
        {
          name: "Weapons",
          route: "/weapons",
          images: [],
          image: WeaponImage,
        },
      ],
      links: [
        {
          path: "https://github.com/Anniel-Francisco/API-VALORANT.git",
          icon: ["fab", "github"],
        },
        {
          path: "https://www.linkedin.com/in/anniel-francisco-reyes-javier-b22347274/",
          icon: ["fab", "linkedin"],
        },
      ],
    };
  },
  methods: {
    goToPage(route) {
      this.$router.push({ path: route });
    },
  },
};
</script>
<style scoped>
.main {
  min-height: 100vh;
  background-image: url("../assets/main-background.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.swiper-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 100%;
}
.swiper-element {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-element img {
  width: 70%;
  height: 100%;
}

.swiper-element:last-child img {
  width: 90%;
}

.multiple__images > img {
  width: 120px;
}
.link:first-child {
  margin-right: 10px;
}
@media (max-width: 768px) {
  .swiper-content {
    width: 90%;
  }
  .swiper-element img {
    width: 80%;
  }
  .multiple__images > img {
    width: 80px;
  }
}
</style>
