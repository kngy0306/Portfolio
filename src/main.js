import Vue from "vue";
import App from "./main/App.vue";
//fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons"; // twitterのfaはbrandsだから

library.add(fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);
//fa end

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
