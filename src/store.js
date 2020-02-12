import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        set_user: (state, user) => state.user = user
    },
    actions: {
        get_user_login: ({ commit }) => Axios
            .post('http://localhost:5000/mobile/getUserLogin')
            .then(res => commit('set_user', res.data))
    }
})