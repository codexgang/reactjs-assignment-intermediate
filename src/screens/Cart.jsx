import { Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CartItem from "../components/Cart/CartItem";
import CartTotal from "../components/Cart/CartTotal";
import { useSelector} from "react-redux"



const Cart = () => {

  const cartItemData = useSelector(state => state.cart.cart)



  return (
    <Container maxWidth="ls">
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          height: "100vh",
          paddingTop: "10px"
        }}
      >
        <Grid container spacing={1} sx={{ padding: "5px" }}>
          <Grid item xs={8}>
            {cartItemData.map((item) => (
              <CartItem key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} quantity={item.quantity} totalAmount={item.totalPrice} />
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
