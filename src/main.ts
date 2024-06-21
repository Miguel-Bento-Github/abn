import App from "@/App.vue";
import i18n from "@/plugins/i18n";
import { vueQuery } from "@/plugins/queryClient";
import { router } from "@/plugins/router";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "@/styles/boot.scss";

import { createPinia } from "pinia";
import { createApp } from "vue";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App)
  .use(i18n)
  .use(pinia)
  .use(router)
  .use(...vueQuery)
  .mount("#app");
