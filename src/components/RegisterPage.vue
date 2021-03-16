<template>
  <div class="pt-0">
    <v-row>
      <v-col md="6" sm="12">
        <div class="pt-12">
          <v-card class=" mx-auto login-card pa-4" width="420">
            <v-avatar class="mt-n15 avatar" tile>
              <v-icon dark>
                mdi-account
              </v-icon>
            </v-avatar>

            <h2>Sign up on Ulna</h2>
            <p>Create a free account on Ulna and get started</p>

            <v-form>
              <v-text-field label="Fullname" outlined> </v-text-field>

              <v-text-field label="Email" outlined> </v-text-field>
              <v-text-field
                label="Password"
                :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (value = !value)"
                :type="value ? 'password' : 'text'"
                outlined
              >
              </v-text-field>
              <v-text-field label="Retype Password" outlined> </v-text-field>
              <div class="mt-n8">
                <v-checkbox v-model="checkbox">
                  <template v-slot:label>
                    <div>
                      I have accepted the
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <a
                            target="_blank"
                            href="http://vuetifyjs.com"
                            @click.stop
                            v-on="on"
                          >
                            Terms and Conditions
                          </a>
                        </template>
                        Opens in new window
                      </v-tooltip>
                    </div>
                  </template>
                </v-checkbox>
              </div>
              <v-btn
                x-large
                class="submit-button-container pl-7 pr-7"
                width="100%"
                type="submit"
                >Sign up now</v-btn
              >
            </v-form>
          </v-card>
        </div>
      </v-col>
      <v-col class="secondCol d-none d-md-flex image-right" cols="6">
        <div class="welcome">
          <div class="welcome-contents">
            <h2>Welcome to Ulna</h2>
            <p>Create an account and get free resources</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      checkbox: false,
      value: true
    };
  }
};
</script>

<style scoped>
.secondCol {
  background-color: #42b983;
  height: 100vh;
  background-image: linear-gradient(
      rgba(13, 35, 25, 0.5),
      rgba(13, 35, 25, 0.5)
    ),
    url("../assets/ulnagirls.jpeg");
  background-size: cover;
}
.avatar {
  background: #42b983 !important;
}
.submit-button-container {
  background: #42b983 !important;
  border-radius: 4px !important;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;

  color: #ffffff;
  box-shadow: none !important;
}
.welcome {
  display: flex;
}
.welcome-contents {
  align-self: flex-end;
  margin-bottom: 2rem;
  color: #ffffff;
}
</style>
