import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Toolbar,
  Button,
  IconButton,
  CircularProgress,
} from "@mui/material";
import Products from "../components/Products/Products";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");

        const data = await response.json();
        setProducts(data);
        setFilter(data);

        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const filterProduct = (key) => {
    const updatedList = products.filter((item) => item.category === key);
    setFilter(updatedList);
  };

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#FFFFFF", height: "30vh", marginBottom: "10px" }}>
          <Typography
            sx={{ padding: "20px ", marginTop: "50px", textAlign: "center" }}
            variant="h3"
          >
            Seller
          </Typography>
          <Box sx={{ height: "54px", marginTop: "7vh" }}>
            <Toolbar sx={{ alignItems: "center", justifyContent: "center" }}>
              <Button
                sx={{ marginRight: "20px" }}
                color="inherit"
                variant="text"
                onClick={() => setFilter(products)}
              >
                All
              </Button>
              <Button
                sx={{ marginRight: "20px" }}
                color="inherit"
                variant="text"
                onClick={() => filterProduct("women's clothing")}
              >
                Women
              </Button>
              <Button
                sx={{ marginRight: "20px" }}
                color="inherit"
                variant="text"
                onClick={() => filterProduct("men's clothing")}
              >
                men
              </Button>
              <Button
                sx={{ marginRight: "20px" }}
                color="inherit"
                variant="text"
                onClick={() => filterProduct("electronics")}
              >
                electronics
              </Button>
              <Button
                sx={{ marginRight: "20px" }}
                color="inherit"
                variant="text"
                onClick={() => filterProduct("jewelery")}
              >
                Jewellery
              </Button>
              <IconButton component={Link} to="/cart">
                <ShoppingCartIcon sx={{ color: "black" }} />
              </IconButton>
            </Toolbar>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            height: "content" || "100vh",
            marginTop: "50px",
          }}
        >
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Products products={filter} />
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
