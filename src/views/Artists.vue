<template>
  <v-container fluid fill-height class="grey darken-3" id="artists">
    <v-row class="text-center" justify="center">
      <v-col cols="12">
        <h2 class="white--text">Artists on Lyrics Translate</h2>
      </v-col>
    </v-row>
    <v-row v-if="loading" class="text-center" justify="center">
      <v-col cols="4">
        <v-progress-circular indeterminate color="indigo"></v-progress-circular>
        <h1 class="white--text">{{ error }}</h1>
      </v-col>
    </v-row>
    <v-row v-if="!loading" class="text-center" justify="center">
      <v-col cols="12">
        <h1 class="white--text">Cards</h1>
      </v-col>
    </v-row>

    <v-row v-if="!loading" class="text-center">
      <v-col cols="12" sm="6" md="4" lg="3" v-for="(artist, i) in artists" :key="i">
        <v-card dark shaped hover color="grey darken-1" class="px-5">
          <v-card-title class="my-0 pb-0">{{ artist.name }}</v-card-title>
          <v-container>
            <v-row>
              <v-col cols="10">
                <v-img height="200" width="200" :src="artist.img"></v-img>
              </v-col>

              <v-col cols="auto" class="text-center pl-0">
                <v-row class="flex-column ma-0 fill-height" justify="center">
                  <v-col class="px-0">
                    <v-btn icon>
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
                  </v-col>

                  <v-col class="px-0">
                    <v-btn icon>
                      <v-icon>mdi-bookmark</v-icon>
                    </v-btn>
                  </v-col>

                  <v-col class="px-0">
                    <v-btn icon>
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "artists",
  data: () => ({
    artists: null,
    loading: true,
    error: null
  }),
  async created() {
    axios
      .get("https://lyrics-translate.herokuapp.com/getArtists")
      .then(response => {
        this.artists = response.data["artists"];
        this.loading = false;
      })
      .catch(error => {
        this.error = error;
        this.loading = true;
      });
  }
};
</script>