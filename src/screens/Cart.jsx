import { Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CartItem from "../components/Cart/CartItem";
import CartTotal from "../components/Cart/CartTotal";


const Cart = () => {

  const data = [0, 1, 2, 3];


  return (
    <Container maxWidth="ls">
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          height: "100vh",
        }}
      >
        <Grid container spacing={1} sx={{ padding: "5px" }}>
          <Grid item xs={8}>
            {data.map((item) => (
              <CartItem key={item} />
            ))}
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={2}>
              <CartTotal />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Cart;
