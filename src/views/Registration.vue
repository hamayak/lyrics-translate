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
                  <v-text-field :rules="notBlankRule" outlined v-model="firstName" label="Name"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field :rules="notBlankRule" outlined v-model="lastName" label="Lastname"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field :rules="emailRules" outlined v-model="email" label="E-mail"></v-text-field>
                  <v-text-field
                    outlined
                    v-model="confirmEmail"
                    label="Confirm E-mail"
                    error-count="3"
                    :rules="emailConfirmationRules"
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
      firstName: null,
      lastName: null,
      show1: false,
      confirmEmail: null,
      password: null,
      email: null,
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must have 8 or more characters',
        v => /(?=.*\d)/.test(v) || 'Password must contain at least 1 number'
      ],
      notBlankRule: [
        v => !!v || 'This field is required'
      ]
    }
  },
  computed: {
    emailConfirmationRules () {
      return [
        () => (this.email === this.confirmEmail) || 'E-mail must match',
        v => !!v || 'Confirmation E-mail is required'
      ]
    }
  }
};
</script>
