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

import { useDispatch } from "react-redux";

import { addProductToCart } from "../../../store/cart";

const Product = ({ imgUrl, title, price, id }) => {
  const [depth, setDepth] = useState(1);
  const pro = {
    id,
    title,
    image: imgUrl,
    price,
  };

  const dispatch = useDispatch();

  const newTitle = title.split(" ").slice(0, 4).join(" ");

  const depthInc = () => {
    setDepth(5);
  };
  const depthDec = () => {
    setDepth(1);
  };

  return (
    <Paper elevation={depth} onMouseEnter={depthInc} onMouseLeave={depthDec}>
        <Card sx={{ flex: 1, height: "320px", padding: "5px" }}>
        <Link to={`/${id}`} style={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            image={imgUrl}
            alt="Paella dish"
            sx={{ cursor: "pointer", height: "160px", objectFit: "contain" }}
          />

          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              {newTitle}
            </Typography>
            <Typography
              variant="body2"
              fontWeight="bold"
              textAlign="center"
              margin="5px 0 5px 0"
              color="black"
            >
              ${price}
            </Typography>
          </CardContent>
          </Link>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#010101" }}
              onClick={() =>
                dispatch(addProductToCart(pro))
              }
            >
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Paper>
    
  );
};

export default Product;
