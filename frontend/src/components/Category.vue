<template>
  <div class="container">
    <h1>Category</h1>
    <v-simple-table class="table table-hover">
      <thead>
        <tr>
          <td>ID</td>
          <td>Category</td>
          <td>Edit</td>
       
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categorys" :key="category._id">
          <td>{{ category._id }}</td>
          <td>{{ category.categoryName }}</td>
          <td>
            <v-btn @click="edit()" icon>
              <span class="mdi mdi-grease-pencil"></span>
            </v-btn>
          </td>
         
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      categorys: [],
    };
  },

  created: function () {
    this.fetchItems();
  },

  methods: {
    edit() {
      alert("edit");
    },
    fetchItems() {
      this.axios
        .get("http://localhost:5000/category/readall")
        .then((Response) => {
          this.categorys = Response.data.category;
          // console.log( this.categorys[0].categoryName)
          // console.log(Response.data.category[0].categoryName);
        });
    },
  },
};
</script>