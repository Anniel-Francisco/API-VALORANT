import "./style.css";
import "animate.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedin, faGithub, faGlobe, faMagnifyingGlass);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
