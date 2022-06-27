import React from "react";
import Product from "./Product/Product";
import { Grid } from "@mui/material";


const Products = ({products}) => {


  return (
    <Grid container spacing={2} sx={{ padding: "5px" }}>
        {products.map((product) => (
          <Grid item xs={3} key={product.id}>
            <Product
              id={product.id.toString()}
              imgUrl={product.image}
              title={product.title}
              price={product.price}
            />
          </Grid>
        ))}

    </Grid>
  )
};

export default Products;
