<template>
  <v-content class="container grey darken-3">
    <v-container class="container grey darken-3 pl-9 pb-10 container--fluid fill-height">
      <v-row justify="center">
        <v-col cols="12">
          <h2 style="color: white;text-align:center;">Songs on Lyrics-Translate</h2>
        </v-col>
      </v-row>
      <v-row v-if="loading" class="text-center" justify="center">
      <v-col cols="4">
        <v-progress-circular indeterminate :size="70" :width="7" color="indigo"></v-progress-circular>
        <h1 class="white--text">{{ error }} </h1>
      </v-col>
    </v-row>
      <v-row>
        <v-col cols="12" v-if="!loading">
          <v-data-table :headers="headers" :items="songs" class="grey darken-1" dark>
            <template v-slot:item="{ item }">
              <tr
                class="clickable"
                @click="$router.push({name:'display', params:{id: item.id}})"
                :key="item.id"
              >
                <td class="text-xs-left">{{ item.title }}</td>
                <td class="text-xs-center">{{ item.artist }}</td>
                <td class="text-xs-center">{{ item.language }}</td>
              </tr>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";
export default {
  name: "songs",
  data: () => ({
    headers: null,
    songs: null,
    loading: true,
    error: null
  }),
  async created() {
    axios
      .get("https://lyrics-site.herokuapp.com/getSongs")
      .then(response => {
        this.headers = response.data["headers"];
        this.songs = response.data["songs"];
        this.loading = false;
      })
      .catch(error => {
        this.loading = true;
        this.error = error;
      });
  }
};
</script>
  <style scoped>
td {
  color: white;
}
</style>