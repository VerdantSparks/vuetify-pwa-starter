import Vue from 'vue';
import Vuetify, {VCard, VBtn} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VCard, VBtn,
  },
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
