import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const USERS_URL = 'https://60aeb9365b8c300017deb261.mockapi.io/users'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: []
    },
    actions: {
        // ASYNC/AWAIT
        async getUsers({commit}) {
            try {
                let {data:users} = await axios(USERS_URL)
                commit('getUsers', users)
            }
            catch {
                commit('getUsers',[])
            }
        },

        async postUser({commit}, user) {
            try {
                await axios.post(USERS_URL, user)
                commit('emptyStore', user)
            }
            catch(err) {
                console.log('ERROR', err)
            }
        },

        // THEN/CATCH
        getUsersThenCatch({commit}) {
            axios(USERS_URL)
            .then( respuesta => {
                commit('getUsers', respuesta.data)
            })
            .catch(() => commit('getUsers',[]))
        },

        postUserThenCatch({commit}, user){
            axios.post(USERS_URL, user)
            .then(user => commit('postUser',user))
            .catch(err => {
              console.error('ERROR', err)
            })
        }

    },
    mutations: {
        getUsers(state,users) {
            state.users = users
        },
        postUser(user){
            console.log(user);
        },
        emptyStore(state) {
            state.users = [];
        }
    }
})