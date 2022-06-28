import { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Box,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProduct();
  }, [productId]);

  return (
    <Container maxWidth="ls">
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          height: "80vh",
          paddingTop: "70px",
        }}
      >
        {isLoading ? (
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
          <Grid container spacing={2} sx={{ padding: "5px" }}>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={product.image}
                width="220"
                alt={product.title}
                style={{ objectFit: "contain" }}
              />
            </Grid>
            <Grid item xs={8}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h5" textAlign="center" marginBottom="30px">
                  {product.title}
                </Typography>
                <Typography color="text.secondary" marginBottom="20px">
                  {product.description}
                </Typography>
                <Typography
                  fontWeight="bold"
                  textAlign="center"
                  marginBottom="40px"
                >
                  ${product.price}
                </Typography>
                <Typography marginBottom="40px">
                  category: {product.category}
                </Typography>
                <Button variant="contained" sx={{ backgroundColor: "#010101" }}>
                  Add to Cart
                </Button>
              </div>
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default ProductDetails;
