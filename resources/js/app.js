import './bootstrap';
import {createApp, h} from 'vue'
import {createInertiaApp, Link} from '@inertiajs/vue3'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import {form, translate} from "./mixins";


createInertiaApp({
    title: title => `${title} - ${import.meta.env.VITE_APP_NAME}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', {eager: true})
        return pages[`./Pages/${name}.vue`]
    },
    setup({el, App, props, plugin}) {
        const app = createApp({render: () => h(App, props)});
        app.mixin(translate)
            .mixin(form)
            .use(plugin).use(Toast)
            .component('Link', Link)
            .mount(el)

    },
})
