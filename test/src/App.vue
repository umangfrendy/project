<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Umang</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn flat>
          <router-link to="/">Home</router-link>
        </v-btn>
          <v-btn flat>
          <router-link to="/product">Product</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/cagegory">Category</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>