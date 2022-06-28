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


const CartMain = ({id,image,title,price}) => {
  

  return (
    <Card sx={{ flex: 1, height: "165px", padding: "5px", marginBottom:"5px" }}>
      <Grid container >
        <Grid item xs={4}  sx={{padding: "5px",}}>
        <CardMedia
          component="img"
          image={image}
          alt="Paella dish"
          sx={{ cursor: "pointer", height: "160px", objectFit: "contain" }}
        />
        </Grid>
        <Grid item xs={8}  sx={{ display:"flex", flexDirection:"column",justifyContent: "space-evenly", alignItems: "center"}} >
        <CardContent  >
          <Typography variant="body2" color="text.secondary" textAlign="center">
          {title}
          </Typography>
          <Typography variant="body2" sx={{fontWeight:"bold", textAlign:"center", margin: "10px"}}>
          ${price}
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
