<template>
<div>
<v-footer
    dark
    padless
    app
    absolute
  >
    <v-card style="width:100%"
      flat
      tile
      class="indigo white--text"
    >
      <v-card-text class="text-center">
        <v-btn
          v-for="icon in icons"
          :key="icon.link"
          :href="icon.link"
          target="_blank"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0 text-center">
          <v-btn dark text to='/artists'>Artists</v-btn>
          <v-btn dark text to='/songs'>Songs</v-btn>
          <v-btn dark text to='/login'>Login</v-btn>
          <v-btn dark text to='/registration'>Registration</v-btn>
       </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>TRANSLATIONS</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</div>
</template>

<script>
export default {
  name: 'Song',
  props: {
    msg: String
  },
  data: () => ({
    translations: [
      { language: 'English', author: 'Matthew Bofenkamp' },
      {  language: 'Spanish', author: 'Arthur' }
    ],
    icons: [
        {icon: 'mdi-facebook-box', link: 'https://facebook.com'},
        {icon: 'mdi-twitter-box', link: 'https://twitter.com'},
        {icon: 'mdi-linkedin-box', link: 'https://linkedin.com'},
        {icon: 'mdi-instagram', link: 'https://instagram.com'},
      ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    color: #b11f02;
  }
  .hr1{
    width: 63%;
  }
  p, h1, h2,li,.hl, v-card-title{
    color: white;
  }
  .a,b{
    color: #18ffff;
  }
  a{
       text-decoration: none;
  }
  .abouttranslator{
    margin-left: 200px;
    margin-top: -235px;
  }
   ul {
     list-style: none;
}
ul li::before {
  content: "\2022";
  color: #18ffff;
  font-weight: bold;
  display: inline-block; 
  width: 1em;
  margin-left: -1em;
}
</style>