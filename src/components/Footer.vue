<template>
  <v-container  class="grey darken-3">
    <v-row>
      <v-col cols="12">
          <v-card class="grey darken-3">
              <v-row>
                <v-col cols="3">
                    <v-card-title>
                        TRANSLATIONS
                    </v-card-title>
                    <v-card-text>
                        <div style="display: inline-block; margin-right:50px;"><a href="#">Artists</a></div>
                        <div style="display: inline-block; margin-right:50px;"><a href="#">Songs</a></div>
                        <div style="display: inline-block; margin-right:50px;"><a href="#">Translation</a></div>
                        <div style="display: inline-block; margin-right:50px;"><a href="#">Sing In</a></div>
                        <div style="display: inline-block; margin-right:50px;"><a href="#">Sign Up</a></div>
                    </v-card-text>
                </v-col>
            </v-row>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
  
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