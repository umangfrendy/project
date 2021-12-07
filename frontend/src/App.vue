<template>
 <!-- <HelloWorld/> -->
 <div>
 <Category/>
 <Product/>
 <EditProduct/>

 </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Category from "./components/Category";
import Product from "./components/Product";
import EditProduct from "./components/EditProduct";


export default {
  name: "App",
  components: {
    // HelloWorld,
    Category,
    Product,
    EditProduct

  },
  data() {
    return {
      //
    };
  }
};
</script>