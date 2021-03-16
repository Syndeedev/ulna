<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Welcome to Ulna</h1>
        <div><v-btn to="/register">Go to register page</v-btn></div>
        <div><v-btn class="mt-5" to="/login">Go to Login page</v-btn></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>
