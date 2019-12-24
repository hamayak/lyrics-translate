<template>
  <v-app >
    <v-app-bar app color="#242424" dark>
      <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title @click="$router.push('/')">Lyrics App</v-toolbar-title>
      <!-- <v-img src="./assets/flooop.png" /> -->
      <v-spacer></v-spacer>
      <v-text-field append-outer-icon="mdi-magnify"
            v-model="searchText"
            solo clearable hide-details single-line
            placeholder="Search"></v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>Artist</v-btn>
        <v-btn text>Songs</v-btn>
        <v-btn text>Colections</v-btn>
        <v-menu
      origin="center center"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="#242424"
          v-on="on"
        >
        Languages
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      </v-toolbar-items>
    </v-app-bar>


     <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Artist</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list
        dense
        nav
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-music-note</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Songs</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>


      <v-list
        dense
        nav
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon> mdi-library-music</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Colections</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


</v-app>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'English' },
        { title: 'Russian' },
        { title: 'Armenian' },
        { title: 'French' },
      ]
    }),
  }
</script>