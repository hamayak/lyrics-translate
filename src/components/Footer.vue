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
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
          <div style="display: inline-block; margin-right:50px;"><a href="#">Artists</a></div>
                        <div style="display: inline-block; margin-right:50px;"><a style="color: white" href="#">Songs</a></div>
                        <div style="display: inline-block; margin-right:50px;"><a style="color: white" href="#">Translation</a></div>
                        <div style="display: inline-block; margin-right:50px;"><a style="color: white" href="#">Sing In</a></div>
                        <div style="display: inline-block; margin-right:50px;"><a style="color: white" href="#">Sign Up</a></div>
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
        'mdi-facebook-box',
        'mdi-twitter-box',
        'mdi-linkedin-box',
        'mdi-instagram',
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