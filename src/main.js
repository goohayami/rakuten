import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios"; //追記
import VueAxios from "vue-axios"; //追記

// Vue.use(Vuex);
// Vue.use(VueAxios)
// , axios);
createApp(App).use(router).use(VueAxios, axios).mount("#app");
