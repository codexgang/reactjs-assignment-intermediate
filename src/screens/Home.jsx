import React from "react";
import {
  Container,
  Box,
  Typography,
  Toolbar,
  Button,
} from "@mui/material";
import Products from "../components/Products/Products";

const Home = () => {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#FFFFFF", height: "30vh", marginBottom: "10px"}}>
          <Typography  sx={{ padding: "20px ", marginTop: "50px", textAlign:"center"}} variant="h3">Seller</Typography>
          <Box
            sx={{ height: "54px", marginTop:"7vh" }}
          >
            <Toolbar sx={{alignItems:"center", justifyContent: "center"}}>
            <Button
              sx={{ marginRight: "20px" }}
              color="inherit"
              variant="text"
            >
              T-shirts
            </Button>
            <Button
              sx={{ marginRight: "20px" }}
              color="inherit"
              variant="text"
   
            >
              Hoodies
            </Button>
            <Button
              sx={{ marginRight: "20px" }}
              color="inherit"
              variant="text"
     
            >
              Poster
            </Button>
            <Button
              sx={{ marginRight: "20px" }}
              color="inherit"
              variant="text"
     
            >
              Albums
            </Button>
            </Toolbar>
          </Box>
        </Box>
        <Box
          sx={{ bgcolor: "#FFFFFF", height: "100vh", marginTop: "20px" }}
        >
        <Products/>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
