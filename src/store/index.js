import { createStore } from 'vuex';

import cats from '../data/cats';
import dogs from '../data/dogs';

const store = createStore({
    state(){
        return {
            isLoggedIn: false,
            authUser: {},
            isOpen: false,
            cats,
            dogs,
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