<template>
  <div class="pt-0">
    <v-row>
      <v-col md="6" sm="12">
        <div class="pt-12">
          <v-card class=" mx-auto login-card pa-4" width="420">
            <h2>Log into your account</h2>
            <p>Don't have an account? <a href="/register">Sign up</a></p>
            <v-form>
              <v-text-field label="Email" outlined> </v-text-field>
              <v-text-field
                label="Password"
                :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (value = !value)"
                :type="value ? 'password' : 'text'"
                outlined
              >
              </v-text-field>
              <v-btn
                x-large
                class="submit-button-container pl-7 pr-7"
                width="100%"
                type="submit"
                >Log in</v-btn
              >
            </v-form>
            <p @click="view = !view"><a>Forgot Password?</a></p>

            <div v-if="!view">
              <v-card>
                <h2>Reset your password</h2>

                <v-text-field label=" Your Email" outlined> </v-text-field>
                <v-btn
                  x-large
                  class="submit-button-container pl-7 pr-7"
                  width="100%"
                  type="submit"
                  >Send password reset email</v-btn
                >
              </v-card>
            </div>
          </v-card>
        </div>
      </v-col>
      <v-col class="secondCol d-none d-md-flex image-right" cols="6">
        <!--        <div class="welcome">-->
        <!--          <div class="welcome-contents">-->
        <!--            <h2>Welcome to Ulna</h2>-->
        <!--            <p>Create an account and get free resources</p>-->
        <!--          </div>-->
        <!--        </div>-->
        <v-carousel
          :show-arrows="false"
          cycle
          height="640"
          interval="2000"
          hide-delimiter-background
        >
          <v-carousel-item
            class="carousel"
            v-for="(item, i) in items"
            :key="i"
            :style="{
              'background-image': `linear-gradient(rgba(13, 35, 25, 0.5),rgba(13, 35, 25, 0.5)), url(${item.src})`,
              'background-size': 'cover'
            }"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      view: false,
      items: [
        {
          src: require("../assets/carousels/andrea.jpeg")
        },
        {
          src: require("../assets/carousels/girlboss.jpeg")
        },
        {
          src: require("../assets/carousels/rest.jpeg")
        },
        {
          src: require("../assets/carousels/girlpower.jpeg")
        }
      ]
    };
  }
};
</script>

<style scoped>
.carousel {
  background-image: linear-gradient(
    rgba(13, 35, 25, 0.5),
    rgba(13, 35, 25, 0.5)
  );
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
</style>
