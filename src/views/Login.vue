<template>
  <v-row align="center" justify="center" class="fill-height">
    <v-col cols="12" md="8">
      <v-container>
        <div class="text-center">
          <v-card dark class="grey darken-1">
              <v-container class="pa-10">
              <v-card-title>
                Login
              </v-card-title>
              <v-card-text>
                <v-form>
                    <v-text-field v-model="email" label="E-mail"></v-text-field>
                    <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters and must have one number"
                    error-count="3"
                    counter
                    @click:append="show1 = !show1"
                    ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn outlined>Login</v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      email: null,
      password: null
    };
  }
};
</script>
