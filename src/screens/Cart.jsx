import { Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CartMain from "../components/Cart/CartMain";

const Cart = () => {
  return (
    <Container maxWidth="ls">
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          height:  "100vh"
        }}
      >
        <Grid container spacing={1} sx={{ padding: "5px" }}>
            <Grid item  xs={8}>{[0,1,2,3,4].map(item=>(<Paper key={item} elevation={2}><CartMain/></Paper>))}</Grid>
            <Grid item xs={4}><Paper elevation={2}>sdgsd</Paper></Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Cart;
