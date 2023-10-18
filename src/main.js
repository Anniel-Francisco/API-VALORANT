import "./style.css";
import "animate.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
// import AOS from "aos";
import "aos/dist/aos.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// createApp(App).use(router).mount("#app");
library.add(faMagnifyingGlass);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

// app.mixin({
//   mounted() {
//     AOS.init();
//   },
// });
