<template>
  <v-container fluid class="container grey darken-3">
    <v-form v-model="valid">
      <v-row justify="center">
        <v-col cols="12" sm="11">
          <v-card class="grey darken-1 pa-8">
            <v-card-title class="white--text">
              <h1>Submit a New Translation</h1>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                  required
                  dark
                  class="grey darken-1"
                  v-model="artist"
                  label="Artist"
                  :rules="[v => !!v || 'Artist is required']"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field dark class="grey darken-1" v-model="song" label="Song Name"
                  :rules="[v => !!v || 'Song name is required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    dark
                    class="grey darken-1"
                    :items="languages"
                    v-model="originalLang"
                    label="Select the original language"
                    required
                    :rules="[v => !!v || 'Original Language is required']"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    dark
                    class="grey darken-1"
                    :items="languages"
                    v-model="currentLang"
                    label="Select the language you're translating"
                    required
                    :rules="[v => !!v || 'Translated Language is required']"
                  ></v-select>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="11">
          <v-card class="grey darken-1">
            <v-card-title class="white--text pa-8">
              <h1>Lyrics for: {{ song }}</h1>
            </v-card-title>
            <v-form>
              <v-row>
                <v-col cols="6">
                  <v-card-title style="color: white; word-break: normal;">{{ originalLang }}</v-card-title>
                  <v-card-text>
                    <v-text-field label="Enter a line" v-for="(line, i) in originalLyrics"
                    :key="i" v-model="originalLyrics[i]" dark class="grey darken-1"
                    required :rules="[v => !!v || 'Line is required']"
                    ></v-text-field>
                  </v-card-text>
                </v-col>
                <v-col cols="6">
                  <v-card-title style="color: white; word-break: normal;">{{ currentLang }}</v-card-title>
                  <v-card-text>
                    <v-text-field label="Enter a line" v-for="(line, i) in currentLyrics"
                    :key="i" v-model="currentLyrics[i]" dark class="grey darken-1"
                    required
                    :rules="[v => !!v || 'Line is required']"
                    ></v-text-field>
                  </v-card-text>
                </v-col>
              </v-row>
              <v-row justify="center" class="text-center">
                <v-col cols="8" md="3">
                  <v-btn @click="addLyric" dark class="grey darken-1">Add Another Line
                  </v-btn>
                </v-col>
                <v-col cols="8" md="3">
                  <v-btn @click="removeLyric" dark class="grey darken-1">Remove A Line
                  </v-btn>
                </v-col>
              </v-row>
              <v-card-actions dark class="pa-8">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <div v-on="on">
                      <v-btn :disabled="!valid || (originalLyrics.length < 5)"
                      dark class="grey darken-1"
                      @click="postSong"
                      >Submit</v-btn>
                    </div>
                  </template>
                  <span>Lyrics must have at least 5 lines</span>
                </v-tooltip>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Submit',
  data: () => ({
      currentLyrics: [null],
      originalLyrics: [null],
      artist: null,
      song: null,
      currentLang: null,
      originalLang: null,
      numLines: 1,
      valid: true,
      languages: [
        'Afrikaans',
        'Albanian',
        'Amharic',
        'Arabic',
        'Aramaic',
        'Armenian',
        'Azerbaijani',
        'Basque',
        'Belarusan',
        'Bengali',
        'Bosnian',
        'Bulgarian',
        'Burmese',
        'Cantonese',
        'Catalan',
        'Chechen',
        'Cherokee',
        'Croatian',
        'Czech',
        'Danish',
        'Dutch',
        'English',
        'Esperanto',
        'Estonian',
        'Finnish',
        'French',
        'Georgian',
        'German',
        'Greek',
        'Haitian',
        'Creole',
        'Hawaiian',
        'Hebrew',
        'Hindi',
        'Hungarian',
        'Icelandic',
        'Indonesian',
        'Irish Gaelic',
        'Italian',
        'Japanese',
        'Kazakh',
        'Korean',
        'Kurdish',
        'Kyrgyz',
        'Lao',
        'Latin',
        'Latvian',
        'Lithuanian',
        'Macedonian',
        'Mandarin',
        'Mongolian',
        'Nahuatl',
        'Norwegian',
        'Persian',
        'Polish',
        'Portuguese',
        'Punjabi',
        'Quechua',
        'Romanian',
        'Russian',
        'Rwanda',
        'Samoan',
        'Sanskrit',
        'Serbian',
        'Slovak',
        'Slovene',
        'Somali',
        'Spanish',
        'Swahili',
        'Swedish',
        'Tagalog',
        'Tajiki',
        'Tatar',
        'Thai',
        'Turkish',
        'Ukrainian',
        'Urdu',
        'Uyghur',
        'Uzbek',
        'Vietnamese',
        'Welsh',
        'Yiddish',
        'Yoruba',
        'Yucatec',
        'Zulu'
      ]
  }),
  methods: {
    addLyric() {
      this.currentLyrics.splice(this.numLines, 0, null)
      this.originalLyrics.splice(this.numLines, 0, null)
      this.numLines++
    },
    removeLyric() {
      this.numLines--
      this.currentLyrics.splice(this.numLines, 1)
      this.originalLyrics.splice(this.numLines, 1)
    },
    postSong: async function() {
      let response = await axios.post('https://lyrics-translate.herokuapp.com/postLyrics',
        { title: this.song, artist: this.artist, originalLanguage: this.originalLang,
          translations: [this.currentLang], originalLyrics: this.originalLyrics,
          currentLyrics: this.currentLyrics
        })
      let id = response.data
      this.$router.push(`/display/${id}`)
    }
  }
};
</script>
