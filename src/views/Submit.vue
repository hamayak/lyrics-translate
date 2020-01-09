<template>
  <v-content class="container grey darken-3">
    <v-container>
      <v-form>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field dark class="grey darken-1" v-model="artist" label="Artist" filled></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field dark class="grey darken-1" v-model="song" label="Song" filled></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              dark
              class="grey darken-1"
              v-model="song"
              label="Original language"
              filled
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field dark class="grey darken-1" v-model="song" label="Current language" filled></v-text-field>
          </v-col>
          <v-row>
            <v-col>
              <v-card class="grey darken-1">
                <v-row>
                  <v-col cols="6">
                    <v-card-title style="color: white;">Original language</v-card-title>
                    <v-card-text>
                      <v-list>
                        <v-list-item v-for="(line, i) in originalLang" :key="i">
                           <v-text-field v-model="originalLang[i]" dark class="grey darken-1"></v-text-field>
                        </v-list-item>
                      </v-list>
                    </v-card-text>
                  </v-col>
                  <v-col cols="6">
                    <v-card-title style="color: white;">Current language</v-card-title>
                    <v-card-text>
                      <v-list>
                        <v-list-item v-for="(line, i) in currentLang" :key="i">
                           <v-text-field v-model="currentLang[i]" dark class="grey darken-1"></v-text-field>
                        </v-list-item>
                      </v-list>
                    </v-card-text>
                    <v-btn>
                      <v-icon @click="addLyric" dark class="grey darken-1">mdi-plus</v-icon>
                    </v-btn>
                    <v-card-action dark>
                      <v-row justify="start">
                        <v-col>
                          <v-btn dark class="grey darken-1">Submit</v-btn>
                        </v-col>
                      </v-row>
                    </v-card-action>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-row>
      </v-form>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "songs",
  data: () => ({
      currentLang: [""],
      originalLang: [""]
  }),
  methods: {
    addLyrics() {
        this.currentLang.push[""]
        this.originalLang.push[""]
    }
  }
};
