import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            isLoggedIn: false,
            authUser: {},
            isOpen: false,
        }
    },
    mutations: {
        setIsLoggedIn(state, payload){
            state.isLoggedIn = payload;
        },
        setAuthUser(state, userPayload){
            state.authUser = userPayload;
        }
    }
})

export default store;