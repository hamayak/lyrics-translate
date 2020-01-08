<template>
    <v-content class="container grey darken-3">
        <v-container class="container grey darken-3 pl-9 pb-10 container--fluid fill-height">
            <v-row justify="center">
                <v-col cols="12">
                    <h2 style="color: white;text-align:center;">Songs on Lyrics-Translate</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-data-table
                        v-model="selected"
                        :headers="headers"
                        :items="songs"
                        class="elevation-1"
                        dark
                    >
                    </v-data-table>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>

    export default {
        data (){
            return{
        headers: [
          { text: 'Song Title', value: 'song' },
          { text: 'Artist', value: 'artist' },
          { text: 'Language', value: 'language' },
        ],
        songs: [
          {
              song: 'Tun Im Hayreni',
            artist: 'Arabo Ispiryan',
            language: 'Armneian'
          },
          {
              song:'Mi Gna',
            artist: 'Super Sako',
            language: 'Armneian'
          },
          {
              song:'Pregomesh',
            artist: 'Sirusho',
            language: 'Armneian'
          },
          {
              song:'Anapati Arev',
            artist: 'Tata Simonyan',
            language: 'Armneian'
          },
          {
              song:'Masis',
            artist: 'Aram Asatryan',
            language: 'Armneian'
          },
        ],
      }
    },
    
  }

  

</script>
  <style scoped>
    td{
        color: white;
    }
  </style>