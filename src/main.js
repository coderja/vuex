import Vue from 'vue'
import App from './App.vue'
import store from './store'

import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  Vue,
  dsn: "https://6a303b25eac94036baeecebc085a6421@o919490.ingest.sentry.io/5863888",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
