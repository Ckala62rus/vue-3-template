export default function auth1 ({ next, store }){
    console.log(store.state.auth.test)
    console.log("asdasdasdasdsa")
    // if(!store.getters.auth.isAuth){
    //     return next({
    //         name: 'login'
    //     })
    // }
    return next()
}
