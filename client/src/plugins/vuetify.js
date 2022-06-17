import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

const opts = {
    icons: {
        iconfont: 'mdi',
    }
};
export default new Vuetify(opts);
