//import axios from "axios";

export const auth = {
    state: () => ({
        isAuth: false,
    }),
    getters: {
        getAuth(state){
            return state.isAuth;
        },
    },
    mutations: {
        setAuth(state) {
            state.isAuth = !state.isAuth;
        }
    },
    actions: {
        getAuthorization({state, commit}) {
            commit("setAuth");
            return state.isAuth;
        }
    },
    namespaced: true
};
