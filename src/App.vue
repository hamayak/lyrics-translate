<template>
  <v-app>
    <Menu/>
    <v-content style="background-color:#757575">
      <router-view></router-view>
    </v-content>
      

    <Footer/>
  </v-app>
</template>

<script>
import Menu from './components/Menu';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Menu,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
