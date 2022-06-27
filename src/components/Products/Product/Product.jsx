import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const Product = ({ imgUrl, title, price, id }) => {
  const [depth, setDepth] = useState(1);

  const newTitle = title.split(" ").slice(0, 4).join(" ");

  const depthInc = () => {
    setDepth(5);
  };
  const depthDec = () => {
    setDepth(1);
  };

  return (
    <Link to={`/${id}`} style={{ textDecoration: 'none' }} >
    <Paper
      elevation={depth}
      onMouseEnter={depthInc}
      onMouseLeave={depthDec}
    
    >
      
      <Card sx={{ flex: 1, height: "360px", padding: "5px" }}>
        <CardMedia
          component="img"
          image={imgUrl}
          alt="Paella dish"
          sx={{ cursor: "pointer", height: "200px", objectFit: "contain" }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" textAlign="center" >
            {newTitle}
          </Typography>
          <Typography
            variant="body2"
            fontWeight="bold"
            textAlign="center"
            margin="5px 0 5px 0"
         
          >
            ${price}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button variant="contained" sx={{ backgroundColor: "#010101"}}>
            Add To Cart
          </Button>
        </CardActions>
      </Card>

    </Paper>
    </Link>
  );
};

export default Product;
