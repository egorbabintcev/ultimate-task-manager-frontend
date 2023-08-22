import { createApp } from 'vue';
import { router, store, components } from '@/app/providers';
import AppComponent from './index.vue';

const app = createApp(AppComponent);

app.use(router);
app.use(store);
app.use(components);

app.mount('#app');

export default app;
