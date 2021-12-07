<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    name
    <v-text-field>name</v-text-field>
    Price
    <v-text-field>Price</v-text-field>
    Stock
    <v-text-field>Stock</v-text-field>
    Stock
    <v-text-field>Stock</v-text-field>
    Category
    <!-- <v-select label="Standard"></v-select> -->
    <v-btn color="dark" class="mr-4" @click="validate"> Validate </v-btn>
  </v-form>
</template>
// <script>
// export default {
//   data: () => ({
//     items: ["Foo", "Bar", "Fizz", "Buzz"],
//   }),
// };
//
</script>