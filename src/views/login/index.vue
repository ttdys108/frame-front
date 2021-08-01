<template>
  <v-app>
    <v-main>
      <v-container>
        <div>
          Login
          <router-link to="/">back</router-link>
        </div>
      </v-container>
    </v-main>
  </v-app>

</template>

<script lang="ts">
import Vue from 'vue';

const Login = Vue.extend({
  name: 'Login',
  data() {
    return {

    }
  },
  methods: {

  }
})

export default Login;
</script>