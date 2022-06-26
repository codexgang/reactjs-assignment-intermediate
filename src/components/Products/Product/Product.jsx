import {
    Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const Product = ({ imgUrl, title,price }) => {

    const newTitle = title.split(" ").slice(0,4).join(" ")
    console.log(newTitle)
  return (
    <Card sx={{ flex: 1, height:"360px", padding:"5px"}}>
 
      <CardMedia
        component="img"
        image={imgUrl}
        alt="Paella dish"
        sx={{cursor:"pointer", height:"200px", objectFit:"contain"}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {newTitle}
        </Typography>
        <Typography variant="body2"  fontWeight="bold" textAlign="center" margin="5px 0 5px 0">
          ${price}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"center"}} >
        <Button variant="contained" sx={{ backgroundColor:"#010101"}}>Add To Cart</Button>
      </CardActions>
    </Card>
  );
};

export default Product;
