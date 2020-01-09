<template>
  <v-row align="center" justify="center" class="fill-height">
    <v-col cols="6">
      <v-card dark class="grey darken-1">
        <v-container>
          <v-card-title>Registration</v-card-title>
          <v-card-text>
            <v-form>
              <v-row>
                <v-col cols="6">
                  <v-text-field outlined v-model="Firstname" label="Name"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field outlined v-model="Lastname" label="Lastname"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field :rules="rules1" outlined v-model="email" label="E-mail"></v-text-field>
                  <v-text-field
                    outlined
                    v-model="confirmEmail"
                    label="Confirm E-mail"
                    error-count="3"
                    :rules="emailRules"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="passwordRules"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters and must have one number"
                    error-count="3"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-row justify="center">
              <v-btn outlined>Register</v-btn>
            </v-row>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: null,
      passwordRules: [
        value => !!value || "Required.",
        v => (v && v.length >= 8) || "Min 8 characters",
        v => /(?=.*\d)/.test(v) || "Must have one number"
      ],
      emailRules: [
        () => this.email === this.emailToMatch || "E-mail must match",
        v => !!v || "Confirmation E-mail is required"
      ],
      rules: [value => !!value || "Required."]
    };
  }
};
</script>