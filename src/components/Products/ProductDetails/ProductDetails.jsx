import { Grid, Container, Box, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
//   const productDis = DUMMYDATA.find((item) => item.id === productId);

  return (
    <Container maxWidth="ls">
      {/* <Box
        sx={{
          bgcolor: "#FFFFFF",
          height: "80vh",
          paddingTop: "70px"
        }}
      >
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
              src={productDis.image}
              width="220"
              alt={productDis.title}
              style={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid item xs={8}>
            <div style={{ display: "flex" , flexDirection:"column",alignItems: "center"}}>
            <Typography variant="h5" textAlign="center" marginBottom="30px">
              {productDis.title}
            </Typography>
            <Typography color="text.secondary" marginBottom="20px">
              {productDis.description}
            </Typography>
            <Typography fontWeight="bold" textAlign="center" marginBottom="40px">
              ${productDis.price}
            </Typography>
            <Typography marginBottom="40px">category: {productDis.category}</Typography>
          <Button variant="contained" >Add to Cart</Button>
          </div>
          </Grid>
        </Grid>
      </Box> */}
    </Container>
  );
};

export default ProductDetails;
