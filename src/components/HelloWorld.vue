<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <a href="#" @click="getAuthorization">Авторизоваться</a>
    <br>
    <p v-if="getAuthorization">mapActions</p>
    <p v-else>mapMutations</p>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      authorize: false,
    };
  },
  methods: {
    ...mapActions({
      getAuthorization: 'auth/getAuthorization',
    }),
    ...mapMutations({
      setAuth: 'auth/setAuth',
    }),
    getStoreInfo(){
      console.log("action");
    },
  },
  computed: {
    ...mapState({
      isAuth: state => state.auth.isAuth,
    }),
    ...mapGetters({
      getAuth: 'auth/getAuth',
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
