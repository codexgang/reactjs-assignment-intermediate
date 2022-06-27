import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CartTotal = () => {
  return (
    <Card sx={{ flex: 1, height: "265px", padding: "5px", marginBottom:"5px" }}>
      <CardContent>
      <Typography variant="h6"  textAlign="center">
        Cart Total
        </Typography>

        <Typography variant="body2" sx={{fontWeight:"bold", textAlign:"center", margin: "20px"}}>
        $66.66
        </Typography>
     
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button variant="contained" sx={{backgroundColor:"#010101"}}>
          Checkout
        </Button>
      </CardActions>

 
  </Card>
  )
}

export default CartTotal