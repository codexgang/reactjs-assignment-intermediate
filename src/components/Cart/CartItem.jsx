import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";

const CartMain = () => {

  return (
    <Card sx={{ flex: 1, height: "165px", padding: "5px", marginBottom:"5px" }}>
      <Grid container >
        <Grid item xs={4}  sx={{padding: "5px",}}>
        <CardMedia
          component="img"
          image="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
          alt="Paella dish"
          sx={{ cursor: "pointer", height: "160px", objectFit: "contain" }}
        />
        </Grid>
        <Grid item xs={8}  sx={{ display:"flex", flexDirection:"column",justifyContent: "space-evenly", alignItems: "center"}} >
        <CardContent  >
          <Typography variant="body2" color="text.secondary" textAlign="center">
          Pierced Owl Rose Gold
          </Typography>
          <Typography variant="body2" sx={{fontWeight:"bold", textAlign:"center", margin: "10px"}}>
          $66.66
          </Typography>
       
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button variant="text" sx={{fontSize:26 , fontWeight:"bold"}} >
           -
          </Button>
          <Typography
            variant="body2"
            fontWeight="bold"
            textAlign="center"
            margin="5px"
          >
            1
          </Typography>
          <Button variant="text" sx={{fontSize:26 , fontWeight:"bold"}}>
            +
          </Button>
        </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CartMain;
