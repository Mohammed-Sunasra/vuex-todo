import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos'

// Load VueX
Vue.use(Vuex)

// create store
export default new Vuex.Store({
    modules: {
        todos
    }
});