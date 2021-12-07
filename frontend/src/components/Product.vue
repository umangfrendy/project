<template v-slot:default>
  <div class="container">
    <h1>Product</h1>
    <v-simple-table class="table table-hover">
      <thead>
        <tr>
          <td>ID</td>
          <td>Product</td>
          <td>Price</td>
          <td>Stock</td>
          <td>Category</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id">
          <td>{{ product._id }}</td>
          <td>{{ product.productName }}</td>
          <td>{{ product.unitPrice }}</td>
          <td>{{ product.unitInStock }}</td>
          <td>{{ product.categoryId.categoryName }}</td>
          <td>
            <v-btn @click="edit(product._id)" icon>
              <span class="mdi mdi-grease-pencil"></span>
            </v-btn>
          </td>
          <td>
            <v-btn @click="del(product._id )" icon>
              <span class="mdi mdi-delete"></span>
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
      products: [],
    };
  },

  created: function () {
    this.fetchItems();
  },
  methods: {
    edit(id) {
      this.axios
        .patch("http://localhost:5000/product/update/"+id)
        .then((Response) => {
          this.products = Response.data.products;
          // console.log(Response)
          // console.log(Response.data.products[0].productName);
        })
    },
    del(id) {
     this.axios
        .delete("http://localhost:5000/product/delete/"+id)
        .then((Response) => {
          this.products = Response.data.products;
          // console.log(Response)
          // console.log(Response.data.products[0].productName);
        })
        location.reload(true);
    },
    fetchItems() {
      this.axios
        .get("http://localhost:5000/product/readall")
        .then((Response) => {
          this.products = Response.data.products;
          // console.log(Response)
          // console.log(Response.data.products[0].productName);
        });
    },
  },
};
</script>